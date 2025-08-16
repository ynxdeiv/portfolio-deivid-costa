'use client'
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

export default function Projects() {
    const projectData = [
        {
            "id": "1",
            "nome": "Fusa - Eventos",
            "tecnologias": "Next.js, Tailwind, Typescript, Prismic CMS, React Hook e Context",
            "repositorio": "github.com",
            "imagem": "/img/pepperoni_pizza.png"
        }
    ];

    const [emblaRef] = useEmblaCarousel(
        { loop: false },
        [Autoplay({ delay: 3000 })]
    );

    return (
        <div className="flex justify-center flex-col items-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
                Projetos
            </h2>
            <div className="embla" ref={emblaRef}>
                <div className="embla__container flex">
                    {projectData.map((project) => (
                        <div
                            className="
                    embla__slide 
                    flex-none 
                    basis-full 
                    md:basis-1/2 
                    lg:basis-1/3 
                    min-w-0
                "
                            key={project.id}
                        >
                            <h3>{project.nome}</h3>
                            <p>{project.tecnologias}</p>
                            {project.imagem && (
                                <Image
                                    src={project.imagem}
                                    alt={project.nome}
                                    width={300}
                                    height={200}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}