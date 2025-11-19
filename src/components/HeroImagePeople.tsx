import Image, { StaticImageData } from 'next/image';

export default function HeroImage({ image }: { image: string }) {
    return (
        <div className="w-full relative overflow-hidden aspect-[16/9] lg:aspect-[16/7]">
            <img
                src={image}
                alt={`Hero Banner Image`}
                className="object-cover w-full h-full object-[25%_80%]"
            />
        </div>
    );
}
