'use client';

import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface CarouselProps {
    images: StaticImageData[];
}

export default function CarouselTriple({ images }: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const imagesPerSlide = 3;
    const totalSlides = Math.ceil(images.length / imagesPerSlide);
    const handlePrevious = () => {
        if (currentIndex === 0) {
            return;
        }
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    const handleNext = () => {
        if (currentIndex === totalSlides - 1) {
            return;
        }
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative w-full h-full overflow-hidden">
            {/* Image Slides */}
            <div className="flex transition-transform duration-1000 ease-in-out">
                <div
                    className="flex transition-transform duration-1000 ease-in-out"
                    style={{
                        width: `${totalSlides * 100}%`,
                        transform: `translateX(-${currentIndex * (400 / totalSlides)}%)`,
                    }}
                >
                    {/* Map over the slides, not individual images */}
                    {Array.from({ length: totalSlides }).map(
                        (_, slideIndex) => {
                            const slideImages = images.slice(
                                slideIndex * imagesPerSlide,
                                slideIndex * imagesPerSlide + imagesPerSlide
                            );
                            return (
                                <div
                                    key={slideIndex}
                                    className="flex-shrink-0 w-full grid grid-cols-3 gap-4 pb-[24px]"
                                >
                                    {slideImages.map((image, imageIndex) => (
                                        <div
                                            key={imageIndex}
                                            className="relative w-full h-64"
                                        >
                                            <Image
                                                src={image}
                                                alt={`Carousel Image ${slideIndex * imagesPerSlide + imageIndex + 1}`}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                            );
                        }
                    )}
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-end gap-[12px]">
                <button
                    className={`pointer-events-auto cursor-pointer ${currentIndex === 0 ? 'text-isd-secondary-1' : 'text-isd-secondary'} border-2 rounded-full`}
                    onClick={handlePrevious}
                >
                    <ArrowLeft size={28} strokeWidth={2} />
                </button>

                <button
                    className={`pointer-events-auto cursor-pointer ${currentIndex === totalSlides - 1 ? 'text-isd-secondary-1' : 'text-isd-secondary'} border-2 rounded-full`}
                    onClick={handleNext}
                >
                    <ArrowRight size={28} strokeWidth={2} />
                </button>
            </div>

            {/* Dot Indicators */}
            <div className="absolute z-0 w-full h-full pb-3 flex items-end justify-center gap-2 px-12 pointer-events-none">
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
        </div>
    );
}
