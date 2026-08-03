import Image, { StaticImageData } from 'next/image';

export default function HeroImageSmaller({
    image,
}: {
    image: StaticImageData;
}) {
    return (
        <div className="w-full relative overflow-hidden h-[150px] md:h-[320px] lg:h-[550px]">
            <Image
                src={image}
                alt={`Hero Banner Image`}
                className={`object-cover w-full h-full`}
                priority={true}
            />
        </div>
    );
}
