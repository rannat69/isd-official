'use client';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import ImageModal from './ImageModal';

export default function ImageTitleCard({
    imageSrc,
    title,
}: {
    imageSrc: StaticImageData;
    title: string;
}) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div
                className="w-full bg-white rounded-[10px] outline-1 outline-isd-primary-3 inline-flex flex-col justify-start items-start cursor-pointer"
                onClick={() => setIsModalOpen(true)}
            >
                <Image
                    src={imageSrc}
                    alt={title}
                    className="w-full h-72 rounded-t-[10px] object-cover"
                />
                <h2 className="self-stretch justify-start text-isd-secondary lg:text-2xl text-h2 font-bold font-['Mulish'] leading-7 py-[18px] px-6">
                    {title}
                </h2>
            </div>

            <ImageModal
                image={imageSrc}
                title={title}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}
