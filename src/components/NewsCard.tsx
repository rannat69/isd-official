import Image, { StaticImageData } from 'next/image';
import ImageCard from './ImageCard';
import { useEffect, useState } from 'react';
import path from 'path';

export default function NewsCard({
    href,
    category,
    title,
    excerpt,
    date,
    image,
    imageAlt,
}: {
    href: string;
    category: 'News' | 'Achievement';
    title: string;
    excerpt: string;
    date: string;
    image: StaticImageData;
    imageAlt: string;
}) {
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        const fetchPicture = async () => {
            const type = 'news'; // Adjust this
            const filename = path.basename(imageAlt);

            console.log('imageAlt', imageAlt);
            const res = await fetch(
                `/api/getPicture?type=${type}&filename=${imageAlt}`
            );
            if (res.ok) {
                const blob = await res.blob();

                // Convert blob to Base64
                const reader = new FileReader();
                reader.onloadend = () => {
                    const base64data = reader.result;

                    console.log('base64data', base64data);

                    setImageUrl(
                        typeof base64data === 'string' ? base64data : ''
                    );
                };

                reader.readAsDataURL(blob); // Convert the blob to Base64
            } else {
                console.error('Error fetching the image:', await res.json());
            }
        };

        fetchPicture();
    }, []);

    return (
        <>
            <a
                href={href}
                className="hidden lg:flex gap-component-gap h-[360px] items-center"
            >
                <div className="w-[396px] h-[240px] bg-isd-font-2/10">
                    {!image.src.includes('noneImg') && imageUrl.length > 0 && (
                        <Image
                            src={imageUrl}
                            alt={title}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                    )}

                    {!image.src.includes('noneImg') &&
                        imageUrl.length === 0 && (
                            <Image
                                src={image}
                                alt={'-' + title + '-'}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                }}
                            />
                        )}

                    {image.src.includes('noneImg') && (
                        <img
                            src={imageUrl}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                            alt={'--' + title + '--'}
                        />
                    )}
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

            <div className="lg:hidden flex flex-col gap-component-gap h-auto">
                <ImageCard
                    link={href}
                    title={
                        <span className="text-md overflow-hidden break-words line-clamp-2 pr-[12px]">
                            {title}
                        </span>
                    }
                    description={
                        <>
                            <span className="font-bold text-isd-secondary">
                                {category}
                            </span>
                            <br />
                            {date}
                        </>
                    }
                    imageSrc={image}
                />
            </div>
        </>
    );
}
