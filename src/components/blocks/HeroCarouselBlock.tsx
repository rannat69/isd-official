'use client';

import DotPattern from '@/assets/hero-dot-pattern.svg';
import Carousel1 from '@/assets/carousel-1.jpg';
import Carousel2 from '@/assets/carousel-2.jpg';
import Carousel3 from '@/assets/carousel-3.jpg';
import Carousel4 from '@/assets/carousel-4.jpg';
import Image from 'next/image';
import Carousel from '@/components/Carousel';

export default function HeroCarouselBlock() {
    const images = [Carousel1, Carousel2, Carousel3, Carousel4];

    return (
        <div className="w-full relative overflow-hidden">
            <Carousel images={images} />
            <div className="absolute -z-1 w-full h-full bg-gradient-to-b via-transparent to-black"></div>
            <div className="container z-1 text-white flex flex-col justify-end py-[64px] h-[612px]">
                <div className="flex justify-between items-center gap-20 text-pretty">
                    <div className="flex flex-col lg:gap-0 gap-[6px]">
                        <h1 className="lg:text-h1 lg:text-[36px] text-lg">
                            Welcome to
                        </h1>
                        <h1 className="text-h1">
                            Division of Integrative Systems and Design
                        </h1>
                    </div>
                    <Image
                        src={DotPattern}
                        alt="Dot Pattern"
                        className="pointer-events-none select-none lg:block hidden"
                    />
                </div>
            </div>
        </div>
    );
}
