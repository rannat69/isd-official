'use client';

import Image, { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
    // FIX 1: Allow both local static imports and external URL strings
    images: (StaticImageData | string)[];
    // FIX 2: Make imagesAlt optional to prevent crashes if it's missing
    imagesAlt?: string[];
}

export default function CarouselNews({
    images,
    imagesAlt = [],
}: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!images || images.length === 0) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

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

    if (!images || images.length === 0) return null;

    return (
        <div className="relative w-full h-[400px] bg-black/5 rounded-xl overflow-hidden">
            {/* Image Layer */}
            <div className="absolute inset-0 z-0">
                {images.map((image, index) => (
                    <Image
                        key={index}
                        src={image}
                        // FIX 3: Use the provided alt text if available, fallback to index
                        alt={imagesAlt[index] || `Carousel Image ${index + 1}`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 1200px"
                        priority={index === 0}
                        className={`object-contain w-full h-full absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                            index === currentIndex
                                ? 'opacity-100 z-10'
                                : 'opacity-0 z-0'
                        }`}
                    />
                ))}
            </div>

            {/* Navigation Buttons */}
            <div className="absolute inset-0 z-20 flex items-center justify-between lg:px-6 px-2 pointer-events-none">
                <button
                    className="pointer-events-auto cursor-pointer p-2 rounded-full bg-black/10 hover:bg-black/20 text-white transition-colors backdrop-blur-sm"
                    onClick={handlePrevious}
                    aria-label="Previous image"
                >
                    <ChevronLeft size={32} strokeWidth={2} />
                </button>
                <button
                    className="pointer-events-auto cursor-pointer p-2 rounded-full bg-black/10 hover:bg-black/20 text-white transition-colors backdrop-blur-sm"
                    onClick={handleNext}
                    aria-label="Next image"
                >
                    <ChevronRight size={32} strokeWidth={2} />
                </button>
            </div>

            {/* Dot Indicators */}
            <div className="absolute bottom-4 left-0 right-0 z-20 flex items-center justify-center gap-2 pointer-events-none">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className="pointer-events-auto cursor-pointer py-2"
                        onClick={() => handleDotClick(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    >
                        <div
                            className={`h-1 w-8 rounded-full transition-colors duration-300 ${
                                index === currentIndex
                                    ? 'bg-foreground'
                                    : 'bg-muted-foreground/40 hover:bg-muted-foreground/60'
                            }`}
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}
