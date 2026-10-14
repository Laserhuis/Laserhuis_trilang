import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { 
  FolderPlus, Folder, Upload, Download, ArrowLeft, ImageIcon, Loader2, Plus, 
  Lock, Unlock, ShieldAlert, Check, Trash2, Star, Eye, X, ChevronLeft, ChevronRight,
  Sparkles, SlidersHorizontal
} from "lucide-react";
import { IMG } from "@/data/images";
import { getAlbums, createAlbum, getAlbumImages, uploadImage, fileUrl } from "@/lib/api";
import { auth, googleProvider, signInWithPopup, signOut, onAuthStateChanged } from "@/lib/firebase";
import { useLanguage } from "@/context/LanguageContext";

const STORAGE_ALBUMS_KEY = "laserhuis_gallery_albums";
const STORAGE_ADMIN_KEY = "laserhuis_admin_logged";

// Default pre-populated showcase albums for visitors
const INITIAL_DEFAULT_ALBUMS = [
  {
    id: "alb-wood",
    name: "Wood & Bamboo Creations",
    description: "High-contrast photo engravings, 3D relief carvings, and laser-cut Baltic birch puzzles.",
    created_at: new Date(Date.now() - 86400000 * 10).toISOString(),
    cover: IMG.wood_action,
    images: [
      { id: "w1", url: IMG.wood_action, name: "Birch Photo Portrait.jpg", caption: "318 DPI Stucki dithering on 3mm birch", isCover: true },
      { id: "w2", url: IMG.wood_tech, name: "Bamboo Logo Coaster.png", caption: "254 DPI fill on natural bamboo blank", isCover: false },
      { id: "w3", url: IMG.wood_wall, name: "Laser Cut Wood Wall Art.svg", caption: "High-speed 1.5mm air assist vector cut", isCover: false },
      { id: "w4", url: IMG.carve, name: "3D Relief Dragon Relief.png", caption: "Multi-pass 3D grayscale on basswood", isCover: false },
      { id: "w5", url: IMG.wood_relief, name: "Intricate Mandala Cutout.svg", caption: "Zero-char cut edge with high pressure air", isCover: false },
    ]
  },
  {
    id: "alb-metal",
    name: "Metal & Fiber Engravings",
    description: "Fiber laser annealing on stainless steel, brass deep coin carving, and anodized aluminum.",
    created_at: new Date(Date.now() - 86400000 * 8).toISOString(),
    cover: IMG.metal_artisan,
    images: [
      { id: "m1", url: IMG.metal_artisan, name: "Stainless Steel Serial Mark.png", caption: "Dark chromium oxide annealing at 35 kHz", isCover: true },
      { id: "m2", url: IMG.machine_fiber, name: "Anodized Aluminum Card.png", caption: "Frost white galvo mark at 1500 mm/s", isCover: false },
      { id: "m3", url: IMG.metal_macro, name: "Titanium MOPA Color Grid.png", caption: "Oxide interference colors via MOPA pulse control", isCover: false },
    ]
  },
  {
    id: "alb-acrylic",
    name: "Acrylic & Edge-Lit Signs",
    description: "Mirror-engraved cast acrylic, LED edge-lit displays, and flame-polished vector cuts.",
    created_at: new Date(Date.now() - 86400000 * 5).toISOString(),
    cover: IMG.neon1,
    images: [
      { id: "a1", url: IMG.neon1, name: "Neon LED Edge-Lit Sign.jpg", caption: "Reverse engraved 4mm cast acrylic plate", isCover: true },
      { id: "a2", url: IMG.acrylic_blue, name: "Custom Acrylic Trophy.png", caption: "High-resolution vector edge cut with minimal air", isCover: false },
      { id: "a3", url: IMG.acrylic_glow, name: "RGB Desk Stand Display.jpg", caption: "Reverse line score with acrylic base", isCover: false },
    ]
  },
  {
    id: "alb-leather",
    name: "Leather & Custom Crafts",
    description: "Veg-tan leather wallets, patch hats, slate coasters, and custom branded accessories.",
    created_at: new Date(Date.now() - 86400000 * 3).toISOString(),
    cover: IMG.leather_engrave,
    images: [
      { id: "l1", url: IMG.leather_engrave, name: "Veg-Tan Leather Wallet.jpg", caption: "Dampened leather burnish with 10W diode", isCover: true },
      { id: "l2", url: IMG.slate_coaster, name: "Engraved Slate Drink Coaster.png", caption: "White contrast engrave on natural Welsh slate", isCover: false },
      { id: "l3", url: IMG.laser_badge, name: "Custom Patch Hat Badge.jpg", caption: "Vector cut & engraved leatherette patch", isCover: false },
    ]
  },
  {
    id: "alb-tumbler",
    name: "Rotary & Tumblers",
    description: "Powder-coated stainless steel drinkware wrapped with chuck and roller rotaries.",
    created_at: new Date(Date.now() - 86400000 * 1).toISOString(),
    cover: IMG.tumbler,
    images: [
      { id: "t1", url: IMG.tumbler, name: "32oz Powder Coated Tumbler.jpg", caption: "Galvo rotary wrap with 0.2mm split size", isCover: true },
      { id: "t2", url: IMG.machine_purple, name: "Custom Glassware Ring.png", caption: "Rotary glass marking with paper mask", isCover: false },
    ]
  }
];

export default function Gallery() {
  const { t } = useLanguage();
  const [albums, setAlbums] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_ALBUMS_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      /* fallback */
    }
    return INITIAL_DEFAULT_ALBUMS;
  });

  // Strictly default to false; authenticated via Firebase onAuthStateChanged only
  const [isAdmin, setIsAdmin] = useState(false);

  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  
  const [activeAlbum, setActiveAlbum] = useState(null);
  const [creatingFolder, setCreatingFolder] = useState(false);
  const [newFolderName, setNewFolderName] = useState("");
  const [newFolderDesc, setNewFolderDesc] = useState("");
  
  const [uploading, setUploading] = useState(false);
  const [lightboxImg, setLightboxImg] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const fileInputRef = useRef(null);

  // Auth state listener to securely sync login status and restrict to joeri.joos@gmail.com
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const email = user.email ? user.email.toLowerCase() : "";
        if (email === "joeri.joos@gmail.com") {
          setIsAdmin(true);
          localStorage.setItem(STORAGE_ADMIN_KEY, "true");
        } else {
          // Force sign out unauthorized users immediately
          await signOut(auth);
          setIsAdmin(false);
          localStorage.removeItem(STORAGE_ADMIN_KEY);
        }
      } else {
        setIsAdmin(false);
        localStorage.removeItem(STORAGE_ADMIN_KEY);
      }
    });
    return () => unsubscribe();
  }, []);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_ALBUMS_KEY, JSON.stringify(albums));
    } catch (e) {
      /* storage quota ignore */
    }
  }, [albums]);

  // Admin login handler (Firebase Google Auth)
  const handleAdminLogin = async () => {
    setIsAuthenticating(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const email = user.email ? user.email.toLowerCase() : "";
      
      if (email === "joeri.joos@gmail.com") {
        setIsAdmin(true);
        localStorage.setItem(STORAGE_ADMIN_KEY, "true");
        setShowAdminLogin(false);
        toast.success(`Welcome back, ${user.displayName || "Admin"}! Admin mode unlocked.`);
      } else {
        await signOut(auth);
        setIsAdmin(false);
        localStorage.removeItem(STORAGE_ADMIN_KEY);
        toast.error("Access Denied: Admin access is restricted to joeri.joos@gmail.com.");
      }
    } catch (error) {
      console.error("Authentication error:", error);
      toast.error("Failed to authenticate. Please try again.");
    } finally {
      setIsAuthenticating(false);
    }
  };

  const handleAdminLogout = async () => {
    try {
      await signOut(auth);
      setIsAdmin(false);
      localStorage.removeItem(STORAGE_ADMIN_KEY);
      toast.info("Logged out of Admin mode.");
    } catch (error) {
      console.error("Sign-out error:", error);
      toast.error("Error signing out. Please try again.");
    }
  };

  // Create folder
  const handleCreateFolder = (e) => {
    e.preventDefault();
    if (!newFolderName.trim()) return;
    
    const newAlbum = {
      id: "alb_" + Date.now(),
      name: newFolderName.trim(),
      description: newFolderDesc.trim() || "User created gallery album.",
      created_at: new Date().toISOString(),
      cover: null,
      images: []
    };

    setAlbums((prev) => [newAlbum, ...prev]);
    setNewFolderName("");
    setNewFolderDesc("");
    setCreatingFolder(false);
    toast.success(`Album folder '${newAlbum.name}' created!`);
  };

  // Upload image to active album
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length || !activeAlbum) return;

    setUploading(true);
    let count = 0;

    files.forEach((file: any) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const dataUrl = event.target.result;
        const newImg = {
          id: "img_" + Date.now() + "_" + Math.random().toString(36).substring(2, 6),
          url: dataUrl,
          name: file.name || "Uploaded Image",
          caption: `Uploaded on ${new Date().toLocaleDateString()}`,
          isCover: false
        };

        setAlbums((prev) =>
          prev.map((alb) => {
            if (alb.id === activeAlbum.id) {
              const updatedImages = [newImg, ...alb.images];
              const updatedCover = alb.cover || newImg.url;
              return { ...alb, images: updatedImages, cover: updatedCover };
            }
            return alb;
          })
        );

        // Also update local activeAlbum reference
        setActiveAlbum((prev) => {
          if (!prev) return null;
          const updatedImages = [newImg, ...prev.images];
          return { ...prev, images: updatedImages, cover: prev.cover || newImg.url };
        });

        count++;
        if (count === files.length) {
          setUploading(false);
          toast.success(`Successfully uploaded ${files.length} photo(s) to '${activeAlbum.name}'.`);
          if (fileInputRef.current) fileInputRef.current.value = "";
        }
      };
      reader.readAsDataURL(file);
    });
  };

  // Set as Cover
  const setAsCover = (e, img) => {
    e.stopPropagation();
    if (!activeAlbum) return;

    setAlbums((prev) =>
      prev.map((alb) => {
        if (alb.id === activeAlbum.id) {
          const updatedImages = alb.images.map((i) => ({ ...i, isCover: i.id === img.id }));
          return { ...alb, cover: img.url, images: updatedImages };
        }
        return alb;
      })
    );

    setActiveAlbum((prev) => (prev ? { ...prev, cover: img.url } : null));
    toast.success("Set as main preview image for this folder!");
  };

  // Delete image
  const deleteImage = (e, imgId) => {
    e.stopPropagation();
    if (!activeAlbum) return;

    setAlbums((prev) =>
      prev.map((alb) => {
        if (alb.id === activeAlbum.id) {
          const updatedImages = alb.images.filter((i) => i.id !== imgId);
          const newCover = updatedImages.length > 0 ? (updatedImages.find((i) => i.isCover)?.url || updatedImages[0].url) : null;
          return { ...alb, images: updatedImages, cover: newCover };
        }
        return alb;
      })
    );

    setActiveAlbum((prev) => {
      if (!prev) return null;
      const updatedImages = prev.images.filter((i) => i.id !== imgId);
      return { ...prev, images: updatedImages, cover: updatedImages[0]?.url || null };
    });

    toast.info("Image deleted from album.");
  };

  // Delete album
  const deleteAlbum = (e, albumId) => {
    e.stopPropagation();
    if (window.confirm("Are you sure you want to delete this folder and all its images?")) {
      setAlbums((prev) => prev.filter((a) => a.id !== albumId));
      if (activeAlbum?.id === albumId) setActiveAlbum(null);
      toast.info("Folder deleted.");
    }
  };

  // Download Image
  const downloadImage = (img) => {
    try {
      const a = document.createElement("a");
      a.href = img.url;
      a.download = img.name || "laserhuis-gallery-image";
      document.body.appendChild(a);
      a.click();
      a.remove();
      toast.success(`Downloading ${img.name || "image"}…`);
    } catch (e) {
      toast.error("Failed to download image.");
    }
  };

  // Lightbox controls
  const openLightbox = (img, index) => {
    setLightboxImg(img);
    setLightboxIndex(index);
  };

  const nextLightbox = () => {
    if (!activeAlbum || !activeAlbum.images.length) return;
    const nextIdx = (lightboxIndex + 1) % activeAlbum.images.length;
    setLightboxIndex(nextIdx);
    setLightboxImg(activeAlbum.images[nextIdx]);
  };

  const prevLightbox = () => {
    if (!activeAlbum || !activeAlbum.images.length) return;
    const prevIdx = (lightboxIndex - 1 + activeAlbum.images.length) % activeAlbum.images.length;
    setLightboxIndex(prevIdx);
    setLightboxImg(activeAlbum.images[prevIdx]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-12">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <p className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 mb-2">
            <ImageIcon className="w-3.5 h-3.5" /> {t("gallery.eyebrow", "Community Showcase")}
          </p>
          <h1 className="font-heading font-black text-4xl sm:text-5xl text-white tracking-tighter">
            {t("gallery.title", "Laser Inspiration Gallery")}
          </h1>
          <p className="mt-2 text-slate-400 max-w-2xl text-sm sm:text-base">
            {t("gallery.subtitle", "Browse high-definition finished projects from master makers. Discover new techniques, focal alignments, and substrate finishes.")}
          </p>
        </div>

        {/* Admin Switch Control */}
        <div className="flex items-center gap-3 shrink-0">
          {isAdmin ? (
            <div className="flex items-center gap-2 bg-emerald-950/80 border border-emerald-500/40 px-3.5 py-2 rounded-xl text-xs font-mono text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.2)]">
              <Unlock className="w-4 h-4 text-emerald-400" />
              <span>{t("gallery.admin_active", "Admin Active")}</span>
              <button
                onClick={handleAdminLogout}
                className="ml-2 text-slate-400 hover:text-white underline text-[11px]"
              >
                {t("gallery.log_out", "Log Out")}
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowAdminLogin(true)}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-xs font-mono text-slate-300 hover:text-cyan-300 transition-all"
            >
              <Lock className="w-3.5 h-3.5 text-slate-400" /> {t("gallery.owner_login", "Owner / Admin Login")}
            </button>
          )}
        </div>
      </div>

      {/* ADMIN LOGIN MODAL */}
      {showAdminLogin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 max-w-md w-full relative shadow-2xl">
            <button
              onClick={() => setShowAdminLogin(false)}
              className="absolute top-4 right-4 text-slate-500 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3 mb-6">
              <span className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                <ShieldAlert className="w-6 h-6" />
              </span>
              <div>
                <h3 className="font-heading font-bold text-lg text-white">Owner / Admin Login</h3>
                <p className="text-xs text-slate-400">Secure authorization via Firebase Google Sign-In.</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-xs text-slate-300 leading-relaxed">
                <span className="font-semibold text-rose-400 block mb-1">Strict Access Policy</span>
                Only authorized accounts with Gmail address <span className="font-mono text-cyan-400">joeri.joos@gmail.com</span> can log in to modify the gallery asset vault.
              </div>

              <div className="flex flex-col gap-3">
                <button
                  type="button"
                  onClick={handleAdminLogin}
                  disabled={isAuthenticating}
                  className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-white text-slate-900 hover:bg-slate-100 font-semibold text-sm transition-all shadow-[0_0_12px_rgba(255,255,255,0.15)] disabled:opacity-50"
                >
                  {isAuthenticating ? (
                    <Loader2 className="w-5 h-5 animate-spin text-slate-900" />
                  ) : (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                      <g transform="matrix(1, 0, 0, 1, 0, 0)">
                        <path d="M21.35,11.1H12v2.7h5.38c-0.24,1.28 -0.96,2.37 -2.04,3.1v2.56h3.3c1.93,-1.78 3.04,-4.4 3.04,-7.4C21.68,11.75 21.56,11.4 21.35,11.1z" fill="#4285F4" />
                        <path d="M12,20.68c2.43,0 4.47,-0.8 5.96,-2.2l-3.3,-2.56c-0.9,0.6 -2.07,0.98 -3.66,0.98c-2.82,0 -5.2,-1.9 -6.05,-4.46H1.54v2.64C3.02,17.38 7.15,20.68 12,20.68z" fill="#34A853" />
                        <path d="M5.95,12.44C5.7,11.72 5.57,10.95 5.57,10.16s0.13,-1.56 0.38,-2.28V5.24H1.54C0.7,6.92 0.22,8.48 0.22,10.16s0.48,3.24 1.32,4.92L5.95,12.44z" fill="#FBBC05" />
                        <path d="M12,5.2c1.47,0 2.78,0.5 3.82,1.5l2.86,-2.86C16.94,2.2 14.67,1.24 12,1.24c-4.85,0 -8.98,3.3 -10.46,7.56l4.41,3.64C6.8,7.1 9.18,5.2 12,5.2z" fill="#EA4335" />
                      </g>
                    </svg>
                  )}
                  <span>Sign in with Google</span>
                </button>

                <button
                  type="button"
                  onClick={() => setShowAdminLogin(false)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-850 hover:bg-slate-800 text-slate-400 hover:text-slate-300 text-xs font-semibold transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 1: ALBUM FOLDERS LIST */}
      {!activeAlbum ? (
        <>
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-heading font-bold text-xl text-white flex items-center gap-2">
              <Folder className="w-5 h-5 text-cyan-400" /> Photo Albums & Categories
            </h2>

            {isAdmin && (
              <button
                onClick={() => setCreatingFolder((v) => !v)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-semibold shadow-[0_0_12px_rgba(6,182,212,0.3)] transition-all"
              >
                <FolderPlus className="w-4 h-4" /> Create New Folder
              </button>
            )}
          </div>

          {/* New Folder Creation Form (Admin Only) */}
          {creatingFolder && isAdmin && (
            <form onSubmit={handleCreateFolder} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 mb-8 space-y-3 max-w-xl">
              <h3 className="text-sm font-heading font-bold text-cyan-300 uppercase tracking-wider">New Album Details</h3>
              <input
                autoFocus
                value={newFolderName}
                onChange={(e) => setNewFolderName(e.target.value)}
                placeholder="Folder Name (e.g. Slate & Marble Engravings)"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
              />
              <input
                value={newFolderDesc}
                onChange={(e) => setNewFolderDesc(e.target.value)}
                placeholder="Short Description / Material Tag (Optional)"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
              />
              <div className="flex gap-2 justify-end pt-1">
                <button
                  type="button"
                  onClick={() => setCreatingFolder(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-1 px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold"
                >
                  <Plus className="w-4 h-4" /> Save Folder
                </button>
              </div>
            </form>
          )}

          {albums.length === 0 ? (
            <div className="text-center py-20 bg-slate-900/60 border border-slate-800 rounded-2xl">
              <Folder className="w-12 h-12 text-slate-600 mx-auto mb-4" />
              <p className="text-slate-300 font-heading font-bold text-lg">No folders yet</p>
              <p className="text-slate-500 text-sm mt-1">Unlock Admin mode to create custom gallery folders.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {albums.map((alb) => (
                <div
                  key={alb.id}
                  onClick={() => setActiveAlbum(alb)}
                  className="group cursor-pointer bg-slate-900 border border-slate-800 hover:border-cyan-500/50 rounded-2xl overflow-hidden transition-all duration-300 shadow-xl hover:shadow-cyan-950/30 flex flex-col justify-between"
                >
                  <div className="relative h-48 bg-slate-950 overflow-hidden flex items-center justify-center">
                    {alb.cover ? (
                      <img
                        src={alb.cover}
                        alt={alb.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="flex flex-col items-center text-slate-700">
                        <Folder className="w-12 h-12 mb-2" />
                        <span className="text-xs font-mono">Empty Folder</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                    <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-700/80 text-[11px] font-mono text-cyan-300">
                      {alb.images.length} {alb.images.length === 1 ? "photo" : "photos"}
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-heading font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
                        {alb.name}
                      </h3>
                      {alb.description && (
                        <p className="text-xs text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
                          {alb.description}
                        </p>
                      )}
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500">
                      <span className="font-mono text-[11px]">Click to view images</span>
                      {isAdmin && (
                        <button
                          onClick={(e) => deleteAlbum(e, alb.id)}
                          title="Delete album"
                          className="text-slate-500 hover:text-rose-400 p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        /* VIEW 2: ALBUM DETAIL & IMAGES BROWSER */
        <div>
          {/* Breadcrumb & Album Action Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setActiveAlbum(null)}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-xs font-semibold text-slate-300 hover:text-cyan-300 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Back to All Folders
              </button>
              <div>
                <h2 className="font-heading font-bold text-2xl text-white">{activeAlbum.name}</h2>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  {activeAlbum.images.length} image{activeAlbum.images.length === 1 ? "" : "s"} in this album
                </p>
              </div>
            </div>

            {/* Upload Button (Admin Only) */}
            {isAdmin && (
              <div className="flex items-center gap-2">
                <label className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-semibold cursor-pointer shadow-[0_0_12px_rgba(6,182,212,0.35)] transition-all">
                  {uploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
                  <span>Upload Photos to Folder</span>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    multiple
                    hidden
                    onChange={handleImageUpload}
                  />
                </label>
              </div>
            )}
          </div>

          {activeAlbum.images.length === 0 ? (
            <div className="text-center py-20 bg-slate-900/60 border border-slate-800 rounded-2xl">
              <ImageIcon className="w-12 h-12 text-slate-600 mx-auto mb-4" />
              <p className="text-slate-300 font-heading font-bold text-lg">No images in this album yet</p>
              {isAdmin ? (
                <p className="text-slate-400 text-sm mt-1">Use the Upload button above to add high-res photos.</p>
              ) : (
                <p className="text-slate-500 text-sm mt-1">Check back soon for new photo additions!</p>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {activeAlbum.images.map((img, idx) => (
                <div
                  key={img.id}
                  onClick={() => openLightbox(img, idx)}
                  className="group relative rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500/60 bg-slate-950 cursor-pointer shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="relative aspect-square overflow-hidden bg-slate-950">
                    <img
                      src={img.url}
                      alt={img.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Cover badge */}
                    {img.isCover && (
                      <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-amber-500/90 text-slate-950 text-[10px] font-mono font-bold flex items-center gap-1 shadow">
                        <Star className="w-3 h-3 fill-slate-950" /> Folder Preview
                      </span>
                    )}

                    {/* Hover Overlay with Action Buttons */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-between">
                      <div className="flex justify-end gap-1.5">
                        {isAdmin && (
                          <>
                            <button
                              onClick={(e) => setAsCover(e, img)}
                              title="Set as Main Preview Image"
                              className={`p-1.5 rounded-lg border text-xs font-mono transition-colors ${
                                img.isCover
                                  ? "bg-amber-500/20 border-amber-500 text-amber-300"
                                  : "bg-slate-900/80 border-slate-700 text-slate-300 hover:text-amber-300"
                              }`}
                            >
                              <Star className="w-3.5 h-3.5" />
                            </button>

                            <button
                              onClick={(e) => deleteImage(e, img.id)}
                              title="Delete Photo"
                              className="p-1.5 rounded-lg bg-slate-900/80 border border-slate-700 text-slate-300 hover:text-rose-400 transition-colors"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </>
                        )}
                      </div>

                      <div className="flex items-center justify-between gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            openLightbox(img, idx);
                          }}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700 hover:border-cyan-400 text-xs font-semibold text-white transition-colors"
                        >
                          <Eye className="w-3.5 h-3.5 text-cyan-400" /> Inspect
                        </button>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            downloadImage(img);
                          }}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold transition-colors shadow"
                        >
                          <Download className="w-3.5 h-3.5" /> Download
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Caption */}
                  <div className="p-3 bg-slate-900 border-t border-slate-800">
                    <p className="text-xs font-semibold text-slate-200 truncate">{img.name}</p>
                    <p className="text-[11px] text-slate-500 truncate mt-0.5">{img.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* LIGHTBOX MODAL */}
      {lightboxImg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-xl">
          <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
            {/* Lightbox Header */}
            <div className="flex items-center justify-between p-4 px-6 border-b border-slate-800 bg-slate-950">
              <div>
                <p className="font-heading font-bold text-white text-base truncate max-w-md">
                  {lightboxImg.name}
                </p>
                <p className="text-xs text-slate-400 font-mono">
                  {activeAlbum?.name} ({lightboxIndex + 1} of {activeAlbum?.images.length})
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => downloadImage(lightboxImg)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold shadow transition-colors"
                >
                  <Download className="w-4 h-4" /> Download High-Res
                </button>
                <button
                  onClick={() => setLightboxImg(null)}
                  className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Lightbox Main Preview */}
            <div className="relative flex-1 bg-slate-950 flex items-center justify-center p-4 min-h-[300px] overflow-hidden">
              <img
                src={lightboxImg.url}
                alt={lightboxImg.name}
                className="max-h-[65vh] w-auto object-contain rounded-lg shadow-2xl"
              />

              {/* Prev / Next buttons */}
              {activeAlbum && activeAlbum.images.length > 1 && (
                <>
                  <button
                    onClick={prevLightbox}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 border border-slate-700/80 hover:bg-cyan-600 hover:text-white text-slate-300 transition-all shadow-lg"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextLightbox}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 border border-slate-700/80 hover:bg-cyan-600 hover:text-white text-slate-300 transition-all shadow-lg"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            {/* Lightbox Footer Note */}
            <div className="p-4 px-6 bg-slate-900 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
              <span>{lightboxImg.caption || "Original high-resolution preview"}</span>
              <span className="font-mono text-[11px] text-cyan-400">Laserhuis Asset Vault</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
