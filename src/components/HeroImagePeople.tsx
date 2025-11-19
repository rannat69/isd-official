import Image, { StaticImageData } from 'next/image';

export default function HeroImage({ image }: { image: StaticImageData }) {
    return (
        <div className="w-full relative overflow-hidden aspect-[16/9] lg:aspect-[16/7]">
            <Image
                src={image}
                alt={`Hero Banner Image`}
                className="object-cover w-full h-full object-[25%_80%]"
                priority={true}
            />
        </div>
    );
}
