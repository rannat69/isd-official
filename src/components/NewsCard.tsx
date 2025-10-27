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
            className="flex flex-col xl:flex-row gap-component-gap xl:h-[360px] items-center pb-[24px] xl:pb-[0px]"
            href={href}
        >
            <div className="hidden xl:block w-[396px] h-[240px] bg-isd-font-2/10">
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
            <div className="hidden xl:flex flex-1 flex-col gap-[12px]">
                <p className="text-h2 text-secondary">{category}</p>
                <h2 className="text-h2 text-primary">{title}</h2>
                <p className="text-md text-isd-font-3 line-clamp-3">
                    {excerpt}
                </p>
                <span className="text-isd-font-2 text-md">{date}</span>
            </div>

            <div className="flex xl:hidden flex-1 flex-col gap-[12px]">
                <p className="text-h2 text-[22px] leading-[28px] text-secondary">
                    {category}
                </p>
                <h2 className="text-h2 text-[22px] leading-[28px] text-primary">
                    {title}
                </h2>

                <div className="block xl:hidden w-[198px] h-[120px] bg-isd-font-2/10">
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

                <p className="text-md leading-[22px] xl:leading-[26px] text-isd-font-3 line-clamp-3">
                    {excerpt}
                </p>
                <span className="text-isd-font-2 text-md leading-[22px] xl:leading-[26px]">
                    {date}
                </span>
            </div>
        </a>
    );
}
