'use client';

import Image, { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
    images: StaticImageData[];
    imagesAlt: string[];
}

export default function CarouselObjCover({ images, imagesAlt }: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (images.length === 0 || images[0].src.includes('noneImg')) {
            images = images.splice(0, images.length);
            return;
        }

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length, currentIndex]);

    useEffect(() => {
        if (imagesAlt.length === 0) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesAlt.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [imagesAlt.length, currentIndex]);

    const handlePrevious = () => {
        if (images.length > 0) {
            setCurrentIndex(
                (prevIndex) => (prevIndex - 1 + images.length) % images.length
            );
        }

        if (imagesAlt.length > 0) {
            setCurrentIndex(
                (prevIndex) =>
                    (prevIndex - 1 + imagesAlt.length) % imagesAlt.length
            );
        }
    };

    const handleNext = () => {
        if (images.length > 0) {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }

        if (imagesAlt.length > 0) {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesAlt.length);
        }
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

                {imagesAlt.map((image, index) => (
                    <>
                        <img
                            src={image}
                            key={index}
                            alt={`Carousel Image ${index + 1}`}
                            className={`object-cover w-full h-full absolute transition-opacity linear duration-1000 ${
                                index === currentIndex
                                    ? 'opacity-100'
                                    : 'opacity-0'
                            }`}
                        />
                    </>
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
