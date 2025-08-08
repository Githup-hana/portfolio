import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) return storedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-3 rounded-full bg-app-bg/20 dark:bg-darkbg/20 backdrop-blur-lg border border-sand/30 dark:border-app-text-dark/30 text-app-text dark:text-app-text-dark hover:bg-app-bg/40 dark:hover:bg-darkbg/40 hover:border-sand/50 dark:hover:border-app-text-dark/50 hover:scale-110 transition-all duration-300 shadow-lg dark:shadow-xl"
      aria-label="Toggle Dark Mode"
      title={theme === "dark" ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      <span className="text-xl filter drop-shadow-sm">
        {theme === "dark" ? "☀️" : "🌙"}
      </span>
    </button>
  );
};

export default ThemeToggle;