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
                                <a href="https://www.linkedin.com/in/deivcst/">
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/ynxdeiv">
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a href="http://wa.me/5571987866101">
                                    Whastapp
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
                <div className="w-full md:w-1/2 flex justify-center">

                    <div className="w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-2xl border-0 shadow-lg relative">
                        <Image
                            src="https://media.licdn.com/dms/image/v2/D4D03AQHelXkktnkXQg/profile-displayphoto-crop_800_800/B4DZiwgUasG8AM-/0/1755307919700?e=1758153600&v=beta&t=3G9q2EtAwcBfBj1VNbp5nUiBCiLZxKQ1fc5-iNwmOiQ"
                            alt="Foto de perfil de Deivid"
                            className="object-cover"
                            fill
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}