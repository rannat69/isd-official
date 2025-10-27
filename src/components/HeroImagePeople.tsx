import Image, { StaticImageData } from 'next/image';

export default function HeroImage({
    image,
    people = false,
}: {
    image: StaticImageData;
    people?: boolean;
}) {
    return (
        <div
            className={`w-full relative overflow-hidden ${people ? 'lg:h-[684px]' : 'lg:h-[612px]'}`}
        >
            <Image
                src={image}
                alt={`Hero Banner Image`}
                className={`object-cover w-full h-full ${people ? 'object-[25%_80%]' : 'object-[center]'}`}
            />
        </div>
    );
}
