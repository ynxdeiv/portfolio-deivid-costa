'use client'
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-12 px-4 md:py-24 md:px-6">
      <div className="md:w-1/2 w-full text-center md:text-left mb-8 md:mb-0">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 ">
          Construindo a experiência completa, do front ao full.
        </h2>
        <div className="flex justify-center md:justify-start">
          <nav>
            <ul className="flex flex-row gap-6 text-sm font-semibold /70">
              <li>
                <a href="#" className="hover:text-primary transition-colors duration-200">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors duration-200">
                  GitHub
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">

        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-lg">
          
        </div>
      </div>
    </div>
  );
}