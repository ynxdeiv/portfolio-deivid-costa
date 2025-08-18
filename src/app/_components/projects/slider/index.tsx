"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "Fusa Eventos",
    description:
      "Uma plataforma de eventos. Com ela, é possível criar, gerenciar e participar de diversos eventos de forma simples e intuitiva.",
    tech: ["Next.js", "Tailwind", "Typescript", "React Hook", "Prismic CMS"],
    github: "https://github.com/ynxdeiv/Fusa-Eventos",
    demo: "https://fusaeventos.vercel.app/"
  },
  {
    id: 2,
    name: "PizzaPizza",
    description:
      "Este projeto é uma aplicação web de pizzaria. Habilidade em front-end e integração de dados, gerenciando o menu de forma dinâmica através de um CMS headless.",
    tech: ["Next.js", "Tailwind", "Typescript", "React Hook", "Prismic CMS"],
    github: "https://github.com/ynxdeiv/PizzaPizza",
    demo: "https://deivpizzapizza.vercel.app"
  },
  {
    id: 3,
    name: "Dashboard de Vendas",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    tech: ["React", "Chart.js", "CSS"],
    github: "#",
    demo: "#"
  },
  {
    id: 4,
    name: "Aplicativo de Lista de Tarefas",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    tech: ["Vue.js", "Firebase", "Sass"],
    github: "#",
    demo: "#"
  },
  {
    id: 5,
    name: "Site de Portfólio Pessoal",
    description:
      "Meu portfólio digital minimalista, criado para destacar meus projetos, habilidades e trajetória como desenvolvedor.",
    tech: ["Next.js", "Tailwind", "Typescript"],
    github: "https://github.com/ynxdeiv/portfolio-deivid-costa",
    demo: "https://deividts.vercel.app/"
  }
];

function CarouselComponent() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 4000,
          swipe: true,
          touchMove: true,
          centerMode: false,
          variableWidth: false,
          adaptiveHeight: false
        }
      }
    ]
  };

  return (
    <>
      <style jsx global>{`
        .slick-list {
          overflow: hidden;
        }

        .slick-track {
          display: flex !important;
        }

        .slick-slide {
          height: inherit !important;
          display: flex !important;
        }

        .slick-slide > div {
          width: 100%;
          height: 100%;
        }

        .slick-dots {
          bottom: -50px;
        }

        .slick-dots li button:before {
          font-size: 12px;
          opacity: 0.5;
          color: currentColor;
        }

        .slick-dots li.slick-active button:before {
          opacity: 1;
        }

        @media (max-width: 480px) {
          .slick-dots {
            bottom: -40px;
          }

          .slick-dots li {
            margin: 0 5px;
          }

          .slick-dots li button:before {
            font-size: 10px;
          }

          .slick-slide {
            padding: 0 !important;
            margin: 0 !important;
            width: 100% !important;
          }

          .slick-slide > div {
            width: 100% !important;
            box-sizing: border-box !important;
          }

          .slick-list {
            padding: 0 !important;
            margin: 0 !important;
            width: 100% !important;
          }

          .slick-track {
            padding: 0 !important;
            margin: 0 !important;
            width: 100% !important;
            display: flex !important;
          }
        }
      `}</style>

      <div className="mx-auto w-full max-w-7xl px-4 pb-16">
        {isMounted && (
          <Slider {...settings}>
            {projects.map((project) => (
              <div key={project.id} className="w-full">
                <div className="mx-2 h-full">
                  <div className="bg-foreground flex h-full min-h-[450px] w-full flex-col justify-between rounded-lg p-6">
                    <div>
                      <h3 className="text-background mb-2 text-lg font-semibold">
                        {project.name}
                      </h3>

                      <p className="text-background mb-4 text-sm leading-relaxed">
                        {project.description}
                      </p>

                      <div className="mb-4 flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-background text-foreground rounded px-2 py-1 text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto flex gap-2">
                      <a
                        href={project.github}
                        className="bg-background text-foreground hover:bg-foreground hover:text-background flex items-center gap-1 rounded border px-3 py-2 text-sm transition-all duration-300"
                      >
                        <Github className="h-4 w-4" />
                        GitHub
                      </a>

                      <a
                        href={project.demo}
                        className="bg-background text-foreground hover:bg-foreground hover:text-background flex items-center gap-1 rounded border px-3 py-2 text-sm transition-all duration-300"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </>
  );
}

export default CarouselComponent;
