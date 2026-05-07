import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

type HeaderTitleProps = {
  eyebrow: string;
  title?: string;
  subtitle?: string; // optional
};

function HeaderTitle({
  eyebrow,
  title,
  subtitle
}: HeaderTitleProps) {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const savedTheme = localStorage.getItem("main-theme");
    return savedTheme === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("main-theme", theme);
  }, [theme]);

  return (
    <header className="mb-8 rounded-2xl border border-amber-200/60 bg-white/80 p-6 shadow-lg shadow-slate-300/30 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/80 dark:shadow-none">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-400">
            {eyebrow}
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-3 max-w-2xl text-sm text-slate-600 dark:text-slate-300 sm:text-base">
              {subtitle}
            </p>
          ) : null}
        </div>
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </div>
    </header>
  );
}

export default HeaderTitle;