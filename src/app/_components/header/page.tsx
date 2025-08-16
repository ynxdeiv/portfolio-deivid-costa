"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";


export default function Header() {

  const { setTheme, theme } = useTheme();


  const handleToggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="">
      <div className="container mx-auto flex items-center  justify-between p-4">
        <div className="flex flex-col leading-tight">
          <h1 className="text-2xl font-bold tracking-wide">Deivid Costa</h1>
          <p className="text-sm">Desenvolvedor FullStack</p>
        </div>

        <nav className="flex items-center gap-6">
          <ul className="flex gap-6 text-sm font-medium">
            <li>
              <a href="#sobre">
                Sobre
              </a>
            </li>
            <li>
              <a href="#projetos">
                Projetos
              </a>
            </li>
            <li>
              <a href="#contato">
                Contato
              </a>
            </li>
          </ul>

          <button
            onClick={handleToggleTheme}
            className="ml-4 p-2 rounded hover:bg-gray-20"
          >
            {theme === "dark" ? <Sun /> : <Moon />}
          </button>
        </nav>
      </div>
    </header>
  );
}