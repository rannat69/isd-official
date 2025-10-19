'use client';

import filterAndSortNews, { News } from '@/lib/newsFilter';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import newsEvents from '@/data/news_events.json';
import {
    MapPin,
    ArrowLeft,
    ChevronLeft,
    ChevronRight,
    Calendar,
    Clock,
} from 'lucide-react';
import { Fragment, useState } from 'react';
import { resolveNewsPhoto } from '@/lib/newsImages';

export default function NewsReadMoreBlock() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams?.toString() ?? '');

    const [currentIndex, setCurrentIndex] = useState(0);

    const type = 'all';
    const year = 'all';
    const id = Number(params.get('id'));
    // Prepare filtered lists per role context

    console.log(id);

    const newsList = filterAndSortNews(newsEvents as News[], {
        type,
        year,
        id,
    });

    const news = newsList[0];
    const pictures = news.pictures ?? [];
    console.log(pictures);

    function format(input: string) {
        const ESC = '\u0000_ESC_BOLD_\u0000';
        // protect escaped \** so they don't become bold markers
        const protectedText = input.replace(/\\\*\*/g, ESC);

        // split on whole **...** tokens (one capturing group only)
        const parts = protectedText.split(/(\*\*(?:[\s\S]+?)\*\*)/g);

        return parts.map((part, idx) => {
            const m = part.match(/^\*\*([\s\S]+?)\*\*$/);
            if (m) {
                return (
                    <strong className="text-isd-secondary" key={idx}>
                        {m[1]}
                    </strong>
                );
            }

            // check in part if http is found
            if (part.includes('http')) {
                // split on http and https
                const parts = part.split(/(http[s]?:\/\/[^\s]+)/g);
                return parts.map((part, idx) => {
                    if (part.includes('http')) {
                        return (
                            <a
                                href={part}
                                className="text-isd-primary"
                                key={idx}
                            >
                                {part}
                            </a>
                        );
                    }
                    return part;
                });
            }

            // Check if title is present
            if (part.includes('xTx') && part.includes('xETx')) {
                const result = [];

                // Use a regular expression to match text between xTx and xETx
                const regex = /xTx(.*?)xETx/g;
                let lastIndex = 0;
                let match;

                // Iterate over matches
                while ((match = regex.exec(part)) !== null) {
                    // Push text before the match
                    if (lastIndex < match.index) {
                        const beforeText = part
                            .slice(lastIndex, match.index)
                            .trim();
                        if (beforeText) {
                            result.push(
                                <span key={result.length}>{beforeText}</span>
                            );
                        }
                    }

                    // Push the modified text found between xTx and xETx
                    const modifiedText = match[1].trim();
                    if (modifiedText) {
                        result.push(
                            <div
                                className="text-isd-primary text-h1 leading-[36px] text-[36px] mt-component-gap mb-[24px]"
                                key={result.length}
                            >
                                {modifiedText}
                            </div>
                        );
                    }

                    lastIndex = regex.lastIndex; // Update last index
                }

                // Push any remaining text after the last match
                if (lastIndex < part.length) {
                    const afterText = part.slice(lastIndex).trim();
                    if (afterText) {
                        result.push(
                            <span key={result.length}>{afterText}</span>
                        );
                    }
                }

                return result;
            }

            // restore escaped ** placeholders
            const restored = part.replace(new RegExp(ESC, 'g'), '**');
            return <Fragment key={idx}>{restored}</Fragment>;
        });
    }

    return (
        <>
            <div className="container flex flex-col bg-white  mt-component-gap-sm mb-section-gap">
                <div className="flex flex-col gap-component-gap-sm">
                    {' '}
                    <button
                        className="text-isd-primary cursor-pointer flex"
                        onClick={() => router.back()}
                    >
                        <ArrowLeft size={24} />

                        <span className="text-sm">Back</span>
                    </button>
                    <div className="text-h2 text-isd-font-1 ">{news.title}</div>
                </div>

                <div className="flex flex-col mt-[48px] gap-[48px]">
                    <div className="relative w-full h-[617px] overflow-hidden">
                        {pictures?.map((image, index) => (
                            <Image
                                key={index}
                                src={resolveNewsPhoto(image)}
                                alt={`Carousel Image ${index + 1}`}
                                className={`absolute inset-0 w-full h-full object-cover transition-opacity linear ${
                                    index === currentIndex
                                        ? 'opacity-100'
                                        : 'opacity-0'
                                }`}
                            />
                        ))}

                        {/* Controls */}

                        {pictures.length > 1 && (
                            <>
                                <div className="absolute z-10 w-full h-full flex items-center justify-between px-4">
                                    <button
                                        className="  p-2 rounded-full cursor-pointer"
                                        onClick={() =>
                                            setCurrentIndex(
                                                (prevIndex) =>
                                                    (prevIndex -
                                                        1 +
                                                        (pictures.length ||
                                                            1)) %
                                                    (pictures.length || 1)
                                            )
                                        }
                                    >
                                        <ChevronLeft
                                            color="white"
                                            size={48}
                                            strokeWidth={1}
                                        />
                                    </button>
                                    <button
                                        className=" p-2 rounded-full cursor-pointer"
                                        onClick={() =>
                                            setCurrentIndex(
                                                (prevIndex) =>
                                                    (prevIndex + 1) %
                                                    (pictures.length || 1)
                                            )
                                        }
                                    >
                                        <ChevronRight
                                            color="white"
                                            size={48}
                                            strokeWidth={1}
                                        />
                                    </button>
                                </div>

                                {/* Indicator Dots */}
                                <div className="absolute z-10 w-full h-full flex items-end justify-center gap-2 px-12 pointer-events-none">
                                    {pictures?.map((_, index) => (
                                        <button
                                            key={index}
                                            className="pointer-events-auto cursor-pointer py-2"
                                            onClick={() =>
                                                setCurrentIndex(index)
                                            }
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
                        )}
                    </div>

                    {news.details && (
                        <div className="flex flex-col gap-0">
                            <div className="text-md text-isd-font-3 text-start">
                                <div className="whitespace-pre-wrap">
                                    <span>{format(news.details)}</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {news.type === 'Events' && (
                        <div className="flex flex-wrap gap-x-section-title-gap gap-y-[12px]">
                            {news.evt_date && (
                                <div className="flex gap-[12px] items-center">
                                    <div className="bg-isd-primary-2 p-[7px] rounded-[18px]">
                                        {' '}
                                        <Calendar
                                            size={22}
                                            className="text-isd-primary"
                                        />
                                    </div>
                                    <div className="leading-[26px]">
                                        {new Date(
                                            news.evt_date
                                        ).toLocaleDateString('en-GB', {
                                            day: '2-digit',
                                            month: 'long',
                                            year: 'numeric',
                                        })}
                                    </div>
                                </div>
                            )}

                            {news.evt_time && (
                                <div className="flex gap-[12px] items-center">
                                    <div className="bg-isd-primary-2 p-[7px] rounded-[18px]">
                                        <Clock
                                            size={22}
                                            className="text-isd-primary"
                                        />
                                    </div>
                                    <div className="leading-[26px]">
                                        {news.evt_time}
                                    </div>
                                </div>
                            )}
                            {news.evt_location && (
                                <div className="flex gap-[12px] items-center">
                                    <div className="bg-isd-primary-2 p-[7px] rounded-[18px]">
                                        <MapPin
                                            size={22}
                                            className="text-isd-primary"
                                        />
                                    </div>
                                    <div className="leading-[26px]">
                                        {news.evt_location}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
