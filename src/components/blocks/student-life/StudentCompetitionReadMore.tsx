import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import { X } from 'lucide-react';
import { resolveCompPhoto } from './StudentCompetitionsBlock';

interface StudentCompetition {
    name: string;
    title: string;
    description: string;
    moreInfoLink: string;
    picture: string;
}

interface StudentCompetitionReadMoreProps {
    picture: string;
    name: string;
    title: string;
    description: string;
    moreInfoLink: string;
    setDetailsOpen: (value: StudentCompetition | null) => void;
    detailsOpen: boolean;
}

export default function StudentCompetitionReadMore({
    picture,
    name,
    title,
    description,
    moreInfoLink,
    setDetailsOpen,
    detailsOpen,
}: StudentCompetitionReadMoreProps) {
    return (
        <>
            {detailsOpen && (
                <div
                    className="fixed  top-0 left-0 right-0 w-screen h-screen bg-[#1e1e1e]/50 flex flex-col items-center   z-50 overflow-auto"
                    onClick={() => setDetailsOpen(null)}
                >
                    <div
                        className="flex flex-col container bg-white my-[5%] px-component-gap py-component-gap-sm gap-component-gap-sm items-end  "
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="text-isd-primary cursor-pointer flex gap-footer-gap bg-isd-primary-2 w-section-gap h-component-gap-sm items-center justify-center"
                            onClick={() => setDetailsOpen(null)}
                        >
                            <X size={24} />
                            <span className="text-sm">Close</span>
                        </button>

                        <div className="flex justify-center relative w-full h-[506px] flex-shrink-0 overflow-hidden">
                            <Image
                                src={resolveCompPhoto(picture)}
                                alt={`${name}`}
                                className="object-cover"
                                width={900}
                                height={506}
                            />
                        </div>

                        <div className="flex flex-col gap-[24px] w-full ">
                            <div className="text-h2 font-bold text-primary border-b-1 border-isd-font-2 pb-[10px]">
                                {title}
                            </div>

                            <div className="flex flex-col gap-[12px]">
                                <div className="flex flex-col gap-footer-gap  whitespace-pre-line">
                                    <div>{description}</div>
                                </div>

                                {moreInfoLink != '' && (
                                    <Link
                                        className="text-md text-isd-secondary underline"
                                        href={moreInfoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        More info
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
