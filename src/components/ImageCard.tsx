import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

export default function ImageCard({
    imageSrc,
    imageUrlSrc,
    title,
    link = '#',
    onClick,
    description,
    lineLimit,
}: {
    imageSrc: StaticImageData | string;
    imageUrlSrc: string;
    title: React.ReactNode;
    link?: string;
    onClick?: () => void;
    description: React.ReactNode;
    lineLimit?: number;
}) {
    // Tailwind is dumb.
    const lineClampClass: Record<number, string> = {
        1: 'line-clamp-1',
        2: 'line-clamp-2',
        3: 'line-clamp-3',
        4: 'line-clamp-4',
        5: 'line-clamp-5',
    };

    const imageStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover' as const,
    };

    const srcString = typeof imageSrc === 'string' ? imageSrc : imageSrc.src;
    const isNoneImg = srcString.includes('noneImg');

    const content = () => (
        <div className="flex flex-col rounded-xl border border-isd-primary-3 cursor-pointer h-full overflow-hidden">
            {!isNoneImg && imageUrlSrc.length > 0 && (
                <Image src={imageUrlSrc} alt={`${title}`} style={imageStyle} />
            )}

            {!isNoneImg && imageUrlSrc.length === 0 && (
                <Image
                    src={imageSrc} // Accepts either StaticImageData or string natively in Next.js
                    alt={`-${title}-`}
                    style={imageStyle}
                />
            )}

            {isNoneImg && (
                <img
                    src={imageUrlSrc}
                    alt={`--${title}--`}
                    style={imageStyle}
                />
            )}

            <div className="flex-1">
                <div className="py-element-gap px-[14px] flex flex-col gap-element-gap h-full">
                    <div className="flex flex-row text-primary items-center">
                        <h2 className="flex-1 text-h2 font-bold line-clamp-1">
                            {title}
                        </h2>
                        <ArrowRight size={20} strokeWidth={3} />
                    </div>

                    <p
                        className={
                            'text-sm leading-[24px] text-isd-font-3 whitespace-pre-wrap ' +
                            (lineLimit ? lineClampClass[lineLimit] : '')
                        }
                    >
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );

    return onClick ? (
        <button onClick={onClick} className="w-full text-left h-full">
            {content()}
        </button>
    ) : (
        <Link href={link} className="w-full text-left h-full">
            {content()}
        </Link>
    );
}
