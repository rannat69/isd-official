'use client';

import { StaticImageData } from 'next/image';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowRight, Mail, Phone, MapPin, Link2, X } from 'lucide-react';

import { resolveNewsPhoto } from '@/lib/newsImages';

interface NewsCardProps {
    title: string;
    type: string;
    pictures: string[];
    evt_date?: string;
    evt_time?: string;
    evt_location?: string;
    date: string;
    details?: string;
    id?: number;
}

export default function NewsCard({
    title,
    type,
    pictures = [],
    evt_date,
    evt_time,
    evt_location,
    date,
    details,
    id,
}: NewsCardProps) {
    const router = useRouter();

    return (
        <div
            className="flex h-[360px] py-component-gap-sm gap-component-gap-sm "
            onClick={() =>
                router.push(`/news/read-more${id ? `?id=${id}` : ''}`)
            }
        >
            <div className="relative w-[600px] h-[288px] flex-shrink-0 overflow-hidden ">
                {/* NOTE - photo always available either a valid image or a placeholder */}
                <Image
                    src={resolveNewsPhoto(pictures[0])}
                    alt={`${title}`}
                    fill
                    className="object-cover"
                    sizes="600px"
                />
            </div>
            <div className="flex flex-col flex-1 text-justify gap-[12px]">
                <div className="text-md text-isd-secondary">{type}</div>
                <div className="text-h2 text-isd-font-1">{title}</div>

                {type != 'Events' && details && (
                    <div className="text-md text-isd-font-3">
                        {details
                            .slice(0, 300)
                            .replaceAll('xTx', '')
                            .replaceAll('xETx', '')}
                        ...{' '}
                    </div>
                )}

                {type === 'Event' && (
                    <div>
                        <div>{evt_date}</div>
                        <div>{evt_time}</div>
                        <div>{evt_location}</div>
                    </div>
                )}

                <div className="text-md text-isd-font-2">
                    {type != 'Event' &&
                        new Date(date).toLocaleDateString('en-UK', {
                            day: '2-digit',
                            month: 'long',
                            year: 'numeric',
                        })}
                </div>
            </div>
        </div>
    );
}
