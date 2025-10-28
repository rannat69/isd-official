'use client';

import { Link2, Mail, MapPin, Phone, X } from 'lucide-react';
import { StaticImageData } from 'next/image';
import Link from 'next/link';
import Image from 'next/image';
import { Fragment, useState } from 'react';

interface FacultyCardProps {
    name: string;
    role: string;
    keywords?: string[];
    photo: StaticImageData | string;
    email?: string;
    phone?: string;
    location?: string;
    link?: string;
    details?: string;
    primaryApt?: string;
}

export default function FacultyCard({
    name,
    role,
    keywords = [],
    photo,
    email,
    phone,
    location,
    link,
    details,
    primaryApt,
}: FacultyCardProps) {
    const [detailsOpen, setDetailsOpen] = useState(false);

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

            // restore escaped ** placeholders
            const restored = part.replace(new RegExp(ESC, 'g'), '**');
            return <Fragment key={idx}>{restored}</Fragment>;
        });
    }

    return (
        <>
            <div
                className="flex lg:gap-component-gap-sm gap-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200 p-2 -m-2 rounded-lg"
                onClick={() => setDetailsOpen(true)}
            >
                <div className="relative lg:w-[221px] lg:h-[288px] w-28 h-44 flex-shrink-0 overflow-hidden lg:border-l-3 border-isd-primary">
                    <Image
                        src={photo}
                        alt={`${name}'s photo`}
                        fill
                        className="object-cover"
                        sizes="221px"
                    />
                </div>
                <div className="flex flex-col justify-between flex-1 text-left">
                    <div className="flex flex-col gap-footer-gap">
                        <div className="lg:text-h2 text-lg font-bold text-isd-font-1">
                            {name}
                        </div>
                        <div className="lg:text-md text-sm text-isd-secondary">
                            {role}
                        </div>
                        <div className="text-md text-isd-font-3">
                            {primaryApt
                                ? `Primary appointment: ${primaryApt}`
                                : null}
                        </div>
                        <div className="hidden lg:block">
                            <span className="text-md text-isd-font-3 overflow-hidden break-words line-clamp-3">
                                {keywords.join(', ')}
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-[24px] before:content-[''] before:bg-isd-primary before:w-[111px] before:h-[3px]">
                        <div className="flex lg:gap-element-gap gap-3 ">
                            {email && (
                                <div
                                    className="lg:p-[9px] p-[5px] rounded-full w-fit h-fit bg-isd-primary-2"
                                    data-tooltip={email}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        window.location.href = `mailto:${email}`;
                                    }}
                                >
                                    <Mail className="text-isd-primary lg:size-[24px] size-[20px]" />
                                </div>
                            )}
                            {phone && (
                                <div
                                    className="lg:p-[9px] p-[5px] rounded-full w-fit h-fit bg-isd-primary-2"
                                    data-tooltip={phone}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        window.location.href = `tel:${phone}`;
                                    }}
                                >
                                    <Phone className="text-isd-primary lg:size-[24px] size-[20px]" />
                                </div>
                            )}
                            {location && (
                                <div
                                    className="lg:p-[9px] p-[5px] rounded-full w-fit h-fit bg-isd-primary-2"
                                    data-tooltip={location}
                                >
                                    <MapPin className="text-isd-primary lg:size-[24px] size-[20px]" />
                                </div>
                            )}
                            {link && (
                                <div
                                    className="lg:p-[9px] p-[5px] rounded-full w-fit h-fit bg-isd-primary-2"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        window.open(link, '_blank');
                                    }}
                                >
                                    <Link2 className="text-isd-primary lg:size-[24px] size-[20px]" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {detailsOpen && (
                <div
                    className="fixed top-0 left-0 right-0 w-screen h-screen bg-[#1e1e1e]/50 flex flex-col items-center z-50 overflow-x-auto"
                    onClick={() => setDetailsOpen(false)}
                >
                    <div
                        className="flex flex-col bg-white lg:m-[198px] p-component-gap gap-section-title-gap items-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="lg:hidden text-isd-primary cursor-pointer flex gap-footer-gap h-component-gap-sm items-center justify-end sticky bg-white w-full z-10 top-0 py-component-gap"
                            onClick={() => setDetailsOpen(false)}
                        >
                            <X size={24} />
                            <span className="text-sm">Close</span>
                        </button>
                        <div className="flex lg:flex-row flex-col items-center gap-component-gap-sm w-full text-wrap">
                            <div className="relative w-[221px] h-[288px] flex-shrink-0 overflow-hidden">
                                <Image
                                    src={photo}
                                    alt={`${name}'s photo`}
                                    fill
                                    sizes="221px"
                                    className="object-cover"
                                />
                            </div>

                            <div className="flex flex-col gap-[24px] w-full">
                                <div className="text-h2 text-isd-font-1">
                                    {name}
                                </div>

                                <div className="flex flex-col gap-footer-gap">
                                    <div className="lg:text-md text-sm text-isd-secondary">
                                        {role}
                                    </div>
                                    <div className="lg:text-md text-sm text-isd-font-3 text">
                                        {primaryApt
                                            ? `Primary appointment: ${primaryApt}`
                                            : null}
                                    </div>

                                    <div className="lg:text-md text-sm text-isd-font-3 text">
                                        {keywords?.join(', ')}
                                    </div>
                                </div>

                                <div className="flex flex-col lg:flex-wrap gap-x-section-title-gap gap-y-[12px] w-full text-wrap">
                                    {email && (
                                        <a
                                            href={`mailto:${email}`}
                                            className="flex gap-[12px] items-center"
                                        >
                                            <div className="p-[9px] rounded-full bg-isd-primary-2">
                                                <Mail
                                                    size={24}
                                                    className="text-isd-primary"
                                                />
                                            </div>
                                            <span className="text-isd-primary lg:text-md text-sm">
                                                {email}
                                            </span>
                                        </a>
                                    )}
                                    {phone && (
                                        <a
                                            href={`tel:${phone}`}
                                            className="flex gap-[12px] items-center"
                                        >
                                            <div className="p-[9px] rounded-full bg-isd-primary-2">
                                                <Phone
                                                    size={24}
                                                    className="text-isd-primary"
                                                />
                                            </div>
                                            <span className="text-isd-primary lg:text-md text-sm">
                                                {phone}
                                            </span>
                                        </a>
                                    )}
                                    {location && (
                                        <div className="flex gap-[12px] items-center">
                                            <div className="p-[9px] rounded-full bg-isd-primary-2">
                                                <MapPin
                                                    size={24}
                                                    className="text-isd-primary"
                                                />
                                            </div>
                                            <span className="text-isd-primary lg:text-md text-sm">
                                                {location}
                                            </span>
                                        </div>
                                    )}
                                    {link && (
                                        <Link
                                            href={link}
                                            className="flex gap-[12px] items-center w-full "
                                        >
                                            <div className="p-[9px] rounded-full bg-isd-primary-2 flex gap-[12px]">
                                                <Link2
                                                    size={24}
                                                    className="text-isd-primary"
                                                />
                                            </div>
                                            <span className="text-isd-primary lg:text-md text-sm lg:w-full w-60 text-wrap break-words">
                                                {link}
                                            </span>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>

                        {details && (
                            <div className="flex flex-col gap-[24px]">
                                <div className="flex items-center h-[48px] border-b border-b-isd-font-2">
                                    <h2 className="text-h2 text-isd-primary">
                                        Details
                                    </h2>
                                </div>

                                <div className="lg:text-md text-sm text-isd-font-3 text-start">
                                    <div className="whitespace-pre-wrap">
                                        <span>{format(details)}</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        <button
                            className="hidden lg:flex text-isd-primary cursor-pointer gap-footer-gap bg-isd-primary-2 w-section-gap h-component-gap-sm items-center justify-center"
                            onClick={() => setDetailsOpen(false)}
                        >
                            <X size={24} />
                            <span className="text-sm">Close</span>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
