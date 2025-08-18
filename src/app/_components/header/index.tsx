"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function Header() {
  const { setTheme, theme } = useTheme();

  const handleToggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="py-4 md:py-6">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex flex-col leading-tight">
          <h1 className="text-xl font-bold tracking-wide md:text-2xl">
            Deivid Costa
          </h1>
          <p className="text-xs md:text-sm">Desenvolvedor Node</p>
        </div>

        <nav className="flex items-center gap-4 md:gap-6">
          <ul className="hidden gap-4 text-sm font-medium md:flex md:gap-6">
            <li>
              <a href="#sobre">Sobre</a>
            </li>
            <li>
              <a href="#projetos">Projetos</a>
            </li>
          </ul>
          <button onClick={handleToggleTheme}>
            {theme === "dark" ? <Sun /> : <Moon />}
          </button>
        </nav>
      </div>
    </header>
  );
}
