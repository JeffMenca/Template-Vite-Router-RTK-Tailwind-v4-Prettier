import { useTheme } from "@/app/ThemeProvider";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="border-b bg-white/70 backdrop-blur dark:border-white/10 dark:bg-black/30">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <span className="font-semibold">Template</span>
        <div className="flex items-center gap-4">
          <nav className="text-sm opacity-80">Router + RTK + Tailwind v4</nav>
          <button
            onClick={toggleTheme}
            className="rounded-lg border px-3 py-1.5 text-sm hover:bg-gray-50 dark:hover:bg-gray-900"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </div>
      </div>
    </header>
  );
}
