import express from "express";
import path from "path";
import nodemailer from "nodemailer";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";

const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

// Hostinger SMTP settings helper
const HOSTINGER_SMTP_CONFIG = {
  host: process.env.SMTP_HOST || "smtp.hostinger.com",
  port: Number(process.env.SMTP_PORT || 465),
  secure: process.env.SMTP_SECURE !== "false", // default true for SSL port 465
};

// Map of configured accounts
const ACCOUNTS: Record<string, { email: string; userEnvKey: string; passEnvKey: string }> = {
  info: { email: "info@laserhuis.com", userEnvKey: "SMTP_USER_INFO", passEnvKey: "SMTP_PASS_INFO" },
  support: { email: "support@laserhuis.com", userEnvKey: "SMTP_USER_SUPPORT", passEnvKey: "SMTP_PASS_SUPPORT" },
  review: { email: "review@laserhuis.com", userEnvKey: "SMTP_USER_REVIEW", passEnvKey: "SMTP_PASS_REVIEW" },
  dpo: { email: "dpo@laserhuis.com", userEnvKey: "SMTP_USER_DPO", passEnvKey: "SMTP_PASS_DPO" },
  privacy: { email: "privacy@laserhuis.com", userEnvKey: "SMTP_USER_PRIVACY", passEnvKey: "SMTP_PASS_PRIVACY" },
};

function getTransporter(accountKey: string = "info") {
  const account = ACCOUNTS[accountKey] || ACCOUNTS.info;
  const user = process.env[account.userEnvKey] || process.env.SMTP_USER || account.email;
  const pass = process.env[account.passEnvKey] || process.env.SMTP_PASS || "";

  if (!pass) {
    return null; // SMTP credentials not set yet
  }

  return nodemailer.createTransport({
    ...HOSTINGER_SMTP_CONFIG,
    auth: {
      user,
      pass,
    },
  });
}

interface Album {
  id: string;
  name: string;
  description: string;
  created_at: string;
  imageCount: number;
  cover: string | null;
}

interface ImageDoc {
  id: string;
  album_id: string;
  url: string;
  original_filename: string;
  created_at: string;
}

const albums: Album[] = [];
const images: ImageDoc[] = [];
const brandInquiries: any[] = [];

let aiClient: GoogleGenAI | null = null;
function getAIClient(): GoogleGenAI | null {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (key) {
      aiClient = new GoogleGenAI({
        apiKey: key,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });
    }
  }
  return aiClient;
}

const app = express();
app.use(express.json({ limit: "10mb" }));

// API Routes
const apiRouter = express.Router();

apiRouter.get("/", (req, res) => {
  res.json({ message: "Laserhuis API online", advisor: Boolean(process.env.GEMINI_API_KEY) });
});

apiRouter.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// AI Advisor Endpoint
apiRouter.post("/advisor", async (req, res) => {
  const { prompt, machineWatt } = req.body || {};
  if (!prompt) {
    res.status(400).json({ error: "Prompt is required" });
    return;
  }

  const ai = getAIClient();
  if (!ai) {
    res.status(503).json({ error: "AI advisor not configured (GEMINI_API_KEY missing)" });
    return;
  }

  const systemInstruction =
    "You are a senior laser engraving technician advising hobbyists and small shops. " +
    "Given a free-text question about a material and laser (diode, CO2, fiber/galvo), " +
    "return SAFE, practical STARTING settings for LightBurn or EZCAD. " +
    "Respond with ONLY a JSON object (no markdown, no code fences) with EXACTLY these keys: " +
    "material, laserType (one of 'diode','co2','fiber'), machineClass, power (e.g. '35%'), " +
    "speed (with units), passes, frequencyOrInterval (kHz for fiber, mm interval for diode/CO2, or '—'), " +
    "airAssist, notes (1-2 sentences), safety (one sentence), answer (1-2 friendly sentences). " +
    "If the user names a machine wattage, tailor to it. " +
    "NEVER recommend cutting/engraving PVC, vinyl or chlorine plastics; if asked, set settings to '—' and warn, suggesting acrylic or wood.";

  const userText = prompt + (machineWatt ? `\n(Machine power: ${machineWatt})` : "");

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: userText,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
      },
    });

    const responseText = response.text || "";
    let parsed = {};
    try {
      parsed = JSON.parse(responseText);
    } catch (e) {
      parsed = {
        material: "",
        laserType: "",
        machineClass: "",
        power: "-",
        speed: "-",
        passes: "-",
        frequencyOrInterval: "-",
        airAssist: "-",
        notes: responseText.slice(0, 280),
        safety: "Always test on scrap first.",
        answer: responseText.slice(0, 280),
      };
    }

    res.json({
      ...parsed,
      source: "cloud:gemini-3.6-flash",
    });
  } catch (err: any) {
    console.error("AI advisor error:", err);
    res.status(502).json({ error: "AI advisor error", detail: String(err?.message || err) });
  }
});

// Albums & Gallery API
apiRouter.get("/albums", (req, res) => {
  res.json(albums);
});

apiRouter.post("/albums", (req, res) => {
  const { name, description } = req.body || {};
  if (!name || typeof name !== "string") {
    res.status(400).json({ error: "Name is required" });
    return;
  }
  const newAlbum: Album = {
    id: "album_" + Date.now() + "_" + Math.random().toString(36).slice(2, 7),
    name: name.trim(),
    description: (description || "").trim(),
    created_at: new Date().toISOString(),
    imageCount: 0,
    cover: null,
  };
  albums.unshift(newAlbum);
  res.json(newAlbum);
});

apiRouter.get("/albums/:id/images", (req, res) => {
  const albumImages = images.filter((img) => img.album_id === req.params.id);
  res.json(albumImages);
});

const newsletterSubscribers: string[] = [];

apiRouter.post("/brand-inquiry", async (req, res) => {
  const { name, company, email, machineType, message } = req.body || {};
  const doc = {
    id: "inquiry_" + Date.now(),
    name,
    company,
    email,
    machineType,
    message,
    created_at: new Date().toISOString(),
  };
  brandInquiries.push(doc);

  // Attempt sending email via review@laserhuis.com (Hostinger SMTP)
  const transporter = getTransporter("review");
  if (transporter) {
    try {
      await transporter.sendMail({
        from: `"Laserhuis Brand Inquiry" <review@laserhuis.com>`,
        to: "review@laserhuis.com",
        replyTo: email,
        subject: `New Brand Partnership Inquiry: ${company || name}`,
        text: `Brand Inquiry Details:\n\nName: ${name}\nCompany: ${company}\nEmail: ${email}\nMachine Type: ${machineType}\n\nMessage:\n${message || "(No message)"}`,
        html: `
          <div style="font-family: sans-serif; line-height: 1.6; color: #1e293b;">
            <h2 style="color: #ea580c;">New Brand Partnership Inquiry</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Machine Type:</strong> ${machineType}</p>
            <p><strong>Message:</strong></p>
            <blockquote style="background: #f8fafc; border-left: 4px solid #ea580c; padding: 10px 14px; margin: 0;">${message || "(No message provided)"}</blockquote>
          </div>
        `,
      });
      console.log(`[Email] Brand inquiry sent via review@laserhuis.com for ${company || name}`);
    } catch (err: any) {
      console.error("[Email Error] Failed sending brand inquiry email via SMTP:", err.message);
    }
  } else {
    console.log("[Email Notice] SMTP_PASS_REVIEW or SMTP_PASS not set. Brand inquiry stored in memory/database.");
  }

  res.json({ ok: true, message: "Thank you! Your brand inquiry has been submitted directly to review@laserhuis.com." });
});

apiRouter.post("/newsletter", async (req, res) => {
  const { email } = req.body || {};
  if (!email || typeof email !== "string" || !email.includes("@")) {
    res.status(400).json({ error: "Valid email address is required" });
    return;
  }
  const cleanEmail = email.trim().toLowerCase();
  if (!newsletterSubscribers.includes(cleanEmail)) {
    newsletterSubscribers.push(cleanEmail);
  }

  let mailerliteStatus = "not_configured";

  // MailerLite API Integration
  if (process.env.MAILERLITE_API_KEY) {
    try {
      const payload: any = {
        email: cleanEmail,
        status: "active",
      };
      if (process.env.MAILERLITE_GROUP_ID) {
        payload.groups = [process.env.MAILERLITE_GROUP_ID];
      }

      const mlRes = await fetch("https://connect.mailerlite.com/api/subscribers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `Bearer ${process.env.MAILERLITE_API_KEY}`,
        },
        body: JSON.stringify(payload),
      });

      if (mlRes.ok) {
        console.log(`[MailerLite] Subscriber ${cleanEmail} synced successfully to MailerLite!`);
        mailerliteStatus = "synced";
      } else {
        const mlData = await mlRes.json().catch(() => ({}));
        console.error(`[MailerLite Error] Status ${mlRes.status}:`, mlData);
        mailerliteStatus = "error";
      }
    } catch (err: any) {
      console.error("[MailerLite Exception]", err.message);
      mailerliteStatus = "exception";
    }
  }

  // Send notification email to support@laserhuis.com & welcome email to user via Hostinger SMTP
  const transporter = getTransporter("support");
  if (transporter) {
    try {
      await transporter.sendMail({
        from: `"Laserhuis Newsletter" <support@laserhuis.com>`,
        to: "support@laserhuis.com",
        subject: `New Newsletter Subscriber: ${cleanEmail}`,
        text: `New user subscribed to Laserhuis newsletter: ${cleanEmail}\nMailerLite status: ${mailerliteStatus}`,
      });
      // Send welcome message to subscriber
      await transporter.sendMail({
        from: `"Laserhuis" <support@laserhuis.com>`,
        to: cleanEmail,
        subject: "Welcome to the Laserhuis Newsletter!",
        text: "Thanks for joining the Laserhuis newsletter! You'll receive technical guides, machine settings updates, and maker drops directly in your inbox.",
      });
      console.log(`[Email] Newsletter subscription email sent for ${cleanEmail}`);
    } catch (err: any) {
      console.error("[Email Error] Newsletter SMTP error:", err.message);
    }
  } else {
    console.log("[Email Notice] SMTP credentials not set for support@laserhuis.com. Subscriber recorded.");
  }

  res.json({
    ok: true,
    message: "Welcome to the list! You are subscribed.",
    mailerliteStatus,
  });
});

apiRouter.post("/contact", async (req, res) => {
  const { name, email, department, subject, message } = req.body || {};
  if (!email || !message) {
    res.status(400).json({ error: "Email and message are required" });
    return;
  }

  const deptKeyMap: Record<string, string> = {
    dpo: "dpo",
    privacy: "privacy",
    support: "support",
    review: "review",
    info: "info",
  };
  const deptKey = deptKeyMap[department] || "support";
  const targetAccount = ACCOUNTS[deptKey] || ACCOUNTS.support;

  const transporter = getTransporter(deptKey);
  if (transporter) {
    try {
      await transporter.sendMail({
        from: `"Laserhuis ${deptKey.toUpperCase()}" <${targetAccount.email}>`,
        to: targetAccount.email,
        replyTo: email,
        subject: `[${deptKey.toUpperCase()}] ${subject || "Contact Form Submission"}`,
        text: `From: ${name || "Anonymous"} <${email}>\nDepartment: ${targetAccount.email}\n\nMessage:\n${message}`,
      });
      console.log(`[Email] Contact form sent to ${targetAccount.email}`);
    } catch (err: any) {
      console.error(`[Email Error] Contact form sending error for ${targetAccount.email}:`, err.message);
    }
  }

  res.json({ ok: true, message: `Your message has been dispatched to ${targetAccount.email}.` });
});

apiRouter.post("/test-emails", async (req, res) => {
  const { password, recipientEmail } = req.body || {};
  const targetRecipient = recipientEmail || "support@laserhuis.com";
  const results: Record<string, { status: string; detail?: string }> = {};

  const accountKeys = Object.keys(ACCOUNTS);

  for (const key of accountKeys) {
    const acc = ACCOUNTS[key];
    const user = process.env[acc.userEnvKey] || process.env.SMTP_USER || acc.email;
    const pass = password || process.env[acc.passEnvKey] || process.env.SMTP_PASS || "";

    if (!pass) {
      results[acc.email] = {
        status: "skipped",
        detail: `No password configured for ${acc.email}. Set ${acc.passEnvKey} or SMTP_PASS in environment or pass 'password' in request body.`,
      };
      continue;
    }

    try {
      const transporter = nodemailer.createTransport({
        ...HOSTINGER_SMTP_CONFIG,
        auth: { user, pass },
      });

      // Verify connection
      await transporter.verify();

      // Send test email
      await transporter.sendMail({
        from: `"${acc.email}" <${acc.email}>`,
        to: targetRecipient,
        subject: `[Laserhuis Test] Connection check for ${acc.email}`,
        text: `Hello! This is an automated test email sent from ${acc.email} via Hostinger SMTP (smtp.hostinger.com:465) to confirm that outgoing email functionality is working properly.\n\nTime: ${new Date().toISOString()}`,
        html: `<div style="font-family:sans-serif;padding:16px;border:1px solid #ea580c;border-radius:8px;">
          <h3 style="color:#ea580c;margin-top:0;">Laserhuis SMTP Test - ${acc.email}</h3>
          <p>This automated test mail verifies that outgoing emails sent from <strong>${acc.email}</strong> via Hostinger SMTP are working correctly.</p>
          <p><strong>Server:</strong> smtp.hostinger.com:465 (SSL)</p>
          <p><strong>Sent at:</strong> ${new Date().toLocaleString()}</p>
        </div>`,
      });

      results[acc.email] = {
        status: "success",
        detail: `Successfully verified SMTP connection and sent test email to ${targetRecipient}`,
      };
    } catch (err: any) {
      results[acc.email] = {
        status: "failed",
        detail: err.message || String(err),
      };
    }
  }

  res.json({
    ok: true,
    server: HOSTINGER_SMTP_CONFIG,
    accountsTested: Object.keys(results).length,
    results,
  });
});


app.use("/api", apiRouter);

// Vite development middleware or production static serving
if (process.env.NODE_ENV !== "production") {
  createViteServer({
    server: { middlewareMode: true },
    appType: "spa",
  }).then((vite) => {
    app.use(vite.middlewares);
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running in development on http://0.0.0.0:${PORT}`);
    });
  }).catch((err) => {
    console.error("Failed to initialize Vite development server:", err);
  });
} else {
  const distPath = path.join(process.cwd(), "dist");
  app.use(express.static(distPath));
  app.get("*", (req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });

  if (!process.env.VERCEL) {
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running in production on http://0.0.0.0:${PORT}`);
    });
  }
}

export default app;
