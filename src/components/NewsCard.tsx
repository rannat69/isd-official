import Image, { StaticImageData } from 'next/image';

export default function NewsCard({
    href,
    category,
    title,
    excerpt,
    date,
    image,
}: {
    href: string;
    category: 'News' | 'Achievement';
    title: string;
    excerpt: string;
    date: string;
    image: StaticImageData;
}) {
    return (
        <a
            className="flex gap-component-gap h-[360px] items-center"
            href={href}
        >
            <div className="w-[396px] h-[240px] bg-isd-font-2/10">
                <Image
                    src={image}
                    alt={title}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />
            </div>
            <div className="flex-1 flex flex-col gap-[12px]">
                <p className="text-h2 text-secondary">{category}</p>
                <h2 className="text-h2 text-primary">{title}</h2>
                <p className="text-md text-isd-font-3 line-clamp-3">
                    {excerpt}
                </p>
                <span className="text-isd-font-2 text-md">{date}</span>
            </div>
        </a>
    );
}
