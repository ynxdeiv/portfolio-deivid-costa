import React from "react";
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
  }
];

function CarouselComponent() {
  const settings = {
    slidesToShow: 3,
    arrows: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
          centerMode: false,

        },
      },
    ],
  };

  return (
<div className="w-full overflow-x-hidden px-0 sm:px-4">
      <Slider {...settings}>
        {projects.map((project) => (
<div key={project.id} className="px-0 sm:px-2">
            <div className="bg-foreground rounded-lg p-6 w-full">
              <h3 className="text-lg font-semibold mb-2 text-background">
                {project.name}
              </h3>

              <p className="text-background text-sm mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-background text-foreground text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
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
        ))}
      </Slider>
    </div>
  );
}

export default CarouselComponent;
