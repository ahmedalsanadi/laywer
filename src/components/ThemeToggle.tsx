
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // After mounting, we can safely show the toggle
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9"></div>; // Placeholder to avoid layout shift
  }

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative rounded-full p-2 overflow-hidden transition-colors hover:bg-secondary group"
      aria-label={theme === "light" ? "تفعيل الوضع الداكن" : "تفعيل الوضع الفاتح"}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-lawyer-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></div>
      <div className="relative z-10">
        {theme === "light" ? (
          <Moon className="h-5 w-5 transition-transform rotate-0 scale-100 group-hover:rotate-45" />
        ) : (
          <Sun className="h-5 w-5 transition-transform rotate-0 scale-100 group-hover:rotate-45" />
        )}
      </div>
      <span className="sr-only">
        {theme === "light" ? "تفعيل الوضع الداكن" : "تفعيل الوضع الفاتح"}
      </span>
    </button>
  );
}
