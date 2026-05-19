'use client';

import Image, { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
    images: StaticImageData[];
}

export default function CarouselNews({ images }: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Fixed the dependency array to exclude currentIndex 
    // This prevents the interval from resetting aggressively on every manual slide click
    useEffect(() => {
        if (!images.length) return;
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
        /* FIX 1: Explicit relative height bounding container */
        <div className="relative w-full h-[400px] bg-black/5 rounded-xl overflow-hidden">
            
            {/* Image Layer */}
            {/* FIX 2: Made container full width/height relative to the wrapper */}
            <div className="absolute inset-0 z-0">
                {images.map((image, index) => (
                    <Image
                        key={index}
                        src={image}
                        alt={`Carousel Image ${index + 1}`}
                        fill /* FIX 3: Replaced raw h-[300px] with fill for responsive scaling */
                        sizes="(max-width: 1024px) 100vw, 1200px"
                        priority={index === 0}
                        /* FIX 4: Use object-contain to preserve the image ratio without cropping */
                        className={`object-contain w-full h-full absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                    />
                ))}
            </div>

            {/* Navigation Buttons */}
            {/* FIX 5: Centered overlays directly over the relative image canvas */}
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
            {/* FIX 6: Positioned at the bottom center of our container frame */}
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
                                    ? 'bg-foreground' // Active indicator matches your app theme line
                                    : 'bg-muted-foreground/40 hover:bg-muted-foreground/60'
                            }`}
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}