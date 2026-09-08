import { useState } from "react";
import { Terminal, Send, Sparkles, Loader2, AlertTriangle, ArrowRight } from "lucide-react";
import { generateAISettings, EXAMPLE_PROMPTS } from "@/lib/aiAssistant";
import { useLanguage } from "@/context/LanguageContext";

export const AiAssistant = () => {
  const { t } = useLanguage();
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const run = async (text) => {
    const q = (text ?? prompt).trim();
    if (!q) return;
    setPrompt(q);
    setLoading(true);
    setResult(null);
    const res = await generateAISettings(q);
    setResult(res);
    setLoading(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    run();
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden" data-testid="ai-assistant">
      <div className="flex items-center gap-2 px-5 py-4 border-b border-slate-800 bg-slate-950/60">
        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-500/40">
          <Sparkles className="w-4 h-4 text-cyan-400" />
        </span>
        <div>
          <h3 className="font-heading font-bold text-white leading-tight">
            {t("ai.title", "AI Laser Assistant")}
          </h3>
          <p className="text-[11px] text-slate-500 font-mono">
            {t("ai.badge", "Gemini AI · Ollama-ready")}
          </p>
        </div>
      </div>

      <div className="p-5">
        <form onSubmit={onSubmit} className="flex gap-2">
          <input
            data-testid="ai-assistant-input"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder={t("ai.input_placeholder", 'e.g. "Settings for 3mm dark walnut on a 20W diode?"')}
            className="flex-1 bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
          />
          <button
            data-testid="ai-assistant-submit"
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-semibold shadow-[0_0_12px_rgba(6,182,212,0.35)] transition-colors disabled:opacity-60"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
            {t("ai.ask_btn", "Ask")}
          </button>
        </form>

        <div className="flex flex-wrap gap-2 mt-3">
          {EXAMPLE_PROMPTS.map((p) => (
            <button
              key={p}
              data-testid={`ai-example-${p.slice(0, 12).toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              onClick={() => run(p)}
              className="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-full border border-slate-800 text-slate-400 hover:border-cyan-500/50 hover:text-cyan-300 transition-colors"
            >
              <ArrowRight className="w-3 h-3" /> {p}
            </button>
          ))}
        </div>

        <div className="mt-5 bg-[#020617] border border-slate-800 rounded-xl p-4 font-mono text-sm min-h-[120px]">
          {!result && !loading && (
            <p className="text-slate-600">
              <span className="text-cyan-500">$</span> {t("ai.awaiting_query", "awaiting query — describe your material and laser…")}
            </p>
          )}
          {loading && (
            <p className="text-cyan-400 flex items-center gap-2">
              <Terminal className="w-4 h-4" /> {t("ai.consulting", "consulting AI advisor")}<span className="animate-pulse">▍</span>
            </p>
          )}
          {result && !loading && <AiResult result={result} />}
        </div>
      </div>
    </div>
  );
};

const AiResult = ({ result }) => (
  <div data-testid="ai-assistant-result" className="space-y-4">
    <p className="text-slate-300 leading-relaxed">
      <span className="text-cyan-500">➜ </span>
      {result.answer}
    </p>

    {result.settings && (
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[10px] uppercase tracking-wider text-slate-500">recommended.json</span>
          {result.source && result.source.startsWith("cloud") && (
            <span className="text-[10px] px-1.5 py-0.5 rounded text-cyan-300 bg-cyan-500/10 border border-cyan-500/30">
              AI · Gemini
            </span>
          )}
          {result.source && result.source.startsWith("ollama") && (
            <span className="text-[10px] px-1.5 py-0.5 rounded text-fuchsia-300 bg-fuchsia-500/10">
              Local · Qwen2.5
            </span>
          )}
          {result.confidence && result.confidence !== "ai" && (
            <span className={`text-[10px] px-1.5 py-0.5 rounded ${
              result.confidence === "high" ? "text-emerald-400 bg-emerald-500/10"
              : result.confidence === "medium" ? "text-cyan-400 bg-cyan-500/10"
              : "text-orange-400 bg-orange-500/10"
            }`}>
              {result.confidence} match
            </span>
          )}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2">
          <Field label="power" value={result.settings.power} />
          <Field label="speed" value={result.settings.speed} />
          <Field label="passes" value={result.settings.passes} />
          <Field label="freq/interval" value={result.settings.frequencyOrInterval} />
          <Field label="air assist" value={result.settings.airAssist} />
          <Field label="laser" value={result.settings.laserType} />
        </div>
      </div>
    )}

    {result.alternatives && result.alternatives.length > 0 && !result.settings && (
      <div className="text-xs text-slate-500">
        <p className="mb-1">Did you mean:</p>
        <ul className="space-y-1">
          {result.alternatives.map((a) => (
            <li key={a.id} className="text-slate-400">• {a.material}</li>
          ))}
        </ul>
      </div>
    )}

    {result.safety && (
      <div className="flex items-start gap-2 rounded-lg border border-orange-500/40 bg-orange-500/10 p-2.5">
        <AlertTriangle className="w-3.5 h-3.5 text-orange-400 shrink-0 mt-0.5" />
        <p className="text-xs text-orange-200/90 leading-relaxed">{result.safety}</p>
      </div>
    )}
  </div>
);

const Field = ({ label, value }) => (
  <div>
    <span className="text-slate-500 text-[10px] uppercase tracking-wider block">{label}</span>
    <span className="text-cyan-300 break-words">{value}</span>
  </div>
);
