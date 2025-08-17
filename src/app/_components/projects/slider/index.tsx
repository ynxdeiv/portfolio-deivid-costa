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
    description: "Uma plataforma de eventos. Com ela, é possível criar, gerenciar e participar de diversos eventos de forma simples e intuitiva.",
    tech: ["Next.js", "Tailwind", "Typescript", "React Hook", "Prismic CMS"],
    github: "https://github.com/ynxdeiv/Fusa-Eventos",
    demo: "https://fusaeventos.vercel.app/",
  },
  {
    id: 2,
    name: "PizzaPizza",
    description: "Este projeto é uma aplicação web de pizzaria. Habilidade em front-end e integração de dados, gerenciando o menu de forma dinâmica através de um CMS headless.",
    tech: ["Next.js", "Tailwind", "Typescript", "React Hook", "Prismic CMS"],
    github: "https://github.com/ynxdeiv/PizzaPizza",
    demo: "#",
  },
  {
    id: 3,
    name: "Dashboard de Vendas",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    tech: ["React", "Chart.js", "CSS"],
    github: "#",
    demo: "#",
  },
  {
    id: 4,
    name: "Aplicativo de Lista de Tarefas",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    tech: ["Vue.js", "Firebase", "Sass"],
    github: "#",
    demo: "#",
  },
  {
    id: 5,
    name: "Site de Portfólio Pessoal",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    tech: ["Gatsby", "GraphQL", "Tailwind"],
    github: "#",
    demo: "#",
  },
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
    variableWidth: false,
    centerPadding: '0px',
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: '0px',
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
          variableWidth: false,
          centerMode: false,
          centerPadding: '0px',
          adaptiveHeight: false,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  return (
    <>
      <style jsx global>{`
        .slick-list {
          overflow: hidden;
          margin: 0;
        }
        
        .slick-track {
          display: flex !important;
          align-items: stretch;
        }
        
        .slick-slide {
          height: auto !important;
          display: flex !important;
        }
        
        .slick-slide > div {
          width: 100% !important;
          height: 100% !important;
        }
        
        @media (max-width: 480px) {
          .slick-slide {
            width: 100% !important;
            max-width: 100% !important;
          }
          
          .slick-track {
            transform: none !important;
            width: 100% !important;
          }
          
          .slick-list {
            padding: 0 !important;
          }
        }
      `}</style>
      
      <div className="w-full max-w-7xl mx-auto px-4">
        {isMounted && (
          <Slider {...settings}>
            {projects.map((project, index) => (
              <div key={project.id} className="h-full">
                <div className="mx-2 h-full">
                  <div className="bg-foreground rounded-lg p-6 w-full h-full flex flex-col justify-between min-h-[450px]">
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-background">
                        {project.name}
                      </h3>

                      <p className="text-background text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-background text-foreground text-xs rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2 mt-auto">
                      <a
                        href={project.github}
                        className="flex items-center gap-1 px-3 py-2 bg-background text-foreground text-sm rounded transition-all duration-300 border hover:bg-foreground hover:text-background"
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </a>

                      <a
                        href={project.demo}
                        className="flex items-center gap-1 px-3 py-2 bg-background text-foreground text-sm rounded transition-all duration-300 border hover:bg-foreground hover:text-background"
                      >
                        <ExternalLink className="w-4 h-4" />
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