import Image, { StaticImageData } from 'next/image';

export default function HeroImageSmaller({
    image,
}: {
    image: StaticImageData;
}) {
    return (
        <div className="w-full relative overflow-hidden h-[200px] md:h-[400px] lg:h-[612px]">
            <Image
                src={image}
                alt={`Hero Banner Image`}
                className={`object-cover w-full h-full`}
                priority={true}
            />
        </div>
    );
}
