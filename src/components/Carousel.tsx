'use client';

import Image, { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
    images: StaticImageData[];
}

export default function Carousel({ images }: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length, currentIndex]);

    const handlePrevious = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <>
            {/* Image Layer */}
            <div className="absolute -z-1 w-full lg:h-full h-[260px]">
                {images.map((image, index) => (
                    <Image
                        key={index}
                        src={image}
                        alt={`Carousel Image ${index + 1}`}
                        className={`object-cover w-full h-full absolute transition-opacity linear duration-1000 ${
                            index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                    />
                ))}
            </div>

            {/* Navigation Buttons */}
            <div className="absolute z-0 w-full lg:h-full h-[260px] flex items-center justify-between lg:px-12 px-2 pointer-events-none">
                <button
                    className="pointer-events-auto cursor-pointer"
                    onClick={handlePrevious}
                >
                    <ChevronLeft color="white" size={48} strokeWidth={1} />
                </button>
                <button
                    className="pointer-events-auto cursor-pointer"
                    onClick={handleNext}
                >
                    <ChevronRight color="white" size={48} strokeWidth={1} />
                </button>
            </div>

            {/* Dot Indicators */}
            <div className="absolute z-0 w-full lg:h-full h-[260px] pb-3 flex items-end justify-center gap-2 px-12 pointer-events-none">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className="pointer-events-auto cursor-pointer py-2"
                        onClick={() => handleDotClick(index)}
                    >
                        <div
                            className={`h-0.5 w-8 ${
                                index === currentIndex
                                    ? 'bg-white'
                                    : 'bg-white/50'
                            }`}
                        />
                    </button>
                ))}
            </div>
        </>
    );
}
