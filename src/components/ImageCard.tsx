import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

export default function ImageCard({
    imageSrc,
    title,
    link = '#',
    onClick,
    description,
    lineLimit,
}: {
    imageSrc: StaticImageData | string;
    title: string;
    link?: string;
    onClick?: () => void;
    description: string;
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

    const content = () => (
        <div className="flex flex-col rounded-xl border border-isd-primary-3 cursor-pointer h-full overflow-hidden">
            <Image
                src={imageSrc}
                alt={title}
                className="h-[15.75rem] w-full object-cover rounded-t-lg"
                width={500}
                height={300}
            />
            <div className="flex-1">
                <div className="py-element-gap px-[14px] flex flex-col gap-element-gap h-full">
                    <div className="flex flex-row text-primary items-center">
                        <h2 className="flex-1 md:text-h2 text-md font-bold line-clamp-1">
                            {title}
                        </h2>
                        <ArrowRight size={20} strokeWidth={3} />
                    </div>

                    <p
                        className={
                            'md:text-sm text-xs text-isd-font-3 whitespace-pre-wrap ' +
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
