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
          <h1 className="text-xl md:text-2xl font-bold tracking-wide">
            Deivid Costa
          </h1>
          <p className="text-xs md:text-sm">Desenvolvedor FullStack</p>
        </div>


        <nav className="flex items-center gap-4 md:gap-6">
          <ul className="hidden md:flex gap-4 md:gap-6 text-sm font-medium">
            <li>
              <a href="#sobre" >
                Sobre
              </a>
            </li>
            <li>
              <a href="#projetos" >
                Projetos
              </a>
            </li>
            <li>
              <a href="#contato" >
                Contato
              </a>
            </li>
          </ul>
          <button
            onClick={handleToggleTheme}
   
          >
            {theme === "dark" ? <Sun /> : <Moon />}
          </button>
        </nav>
      </div>
    </header>
  );
}