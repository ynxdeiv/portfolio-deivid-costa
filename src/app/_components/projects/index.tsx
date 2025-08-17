'use client'
import React from 'react';
import Carousel from './slider';

export default function Projects() {



    return (
        <div className="container mx-auto flex flex-col justify-between py-12 px-4 md:py-24 md:px-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Projetos:
            </h2>
        <Carousel/>
        </div>

    );
}