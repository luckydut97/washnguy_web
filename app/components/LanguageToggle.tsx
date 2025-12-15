'use client';

import { useState } from "react";

export default function LanguageToggle() {
  const [lang, setLang] = useState<"KR" | "EN">("KR");

  const toggleLang = () => {
    setLang((prev) => (prev === "KR" ? "EN" : "KR"));
  };

  return (
    <button
      type="button"
      onClick={toggleLang}
      className="flex items-center gap-1.7 rounded-full border border-slate-300/80 bg-white px-5 py-1.5 text-sm font-semibold text-slate-700 transition hover:border-blue-400 hover:text-blue-600"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-5 w-5 text-slate-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 12h18M12 3c2.652 0 5.061 1.337 6.49 3.585A8.963 8.963 0 0 1 21 12a8.963 8.963 0 0 1-2.51 6.415C17.061 20.663 14.652 22 12 22s-5.061-1.337-6.49-3.585A8.963 8.963 0 0 1 3 12a8.963 8.963 0 0 1 2.51-6.415C6.939 4.337 9.348 3 12 3Zm0 0c2.23 2.767 3.5 5.676 3.5 9s-1.27 6.233-3.5 9c-2.23-2.767-3.5-5.676-3.5-9s1.27-6.233 3.5-9Z"
        />
      </svg>
      <span className="w-8 text-center">{lang}</span>
    </button>
  );
}
