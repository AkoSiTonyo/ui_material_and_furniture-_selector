import type { Dispatch, SetStateAction } from "react";

type ThemeToggleProps = {
  theme: "light" | "dark";
  setTheme: Dispatch<SetStateAction<"light" | "dark">>;
};

function ThemeToggle({ theme, setTheme }: ThemeToggleProps) {
  return (
    <button
      type="button"
      onClick={() => setTheme((prev) => (prev === "light" ? "dark" : "light"))}
      className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:hover:border-slate-500"
    >
      {theme === "light" ? "Switch to Dark" : "Switch to Light"}
    </button>
  );
}

export default ThemeToggle;
