import { useEffect } from "react";
import { X } from "lucide-react";

export const Modal = ({ children, onClose, testId = "modal" }) => {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto p-4 sm:p-8"
      data-testid={testId}
    >
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm"
        onClick={onClose}
        data-testid={`${testId}-backdrop`}
      />
      <div className="relative z-10 w-full max-w-3xl my-4 ph-fade-up">
        <button
          onClick={onClose}
          data-testid={`${testId}-close`}
          className="absolute -top-2 -right-2 z-20 flex items-center justify-center w-9 h-9 rounded-full bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:border-cyan-500 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl shadow-black/60">
          {children}
        </div>
      </div>
    </div>
  );
};
