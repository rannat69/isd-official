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
            className={`w-full relative overflow-hidden ${people ? 'h-[684px]' : 'h-[612px]'}`}
        >
            <Image
                src={image}
                alt={`Hero Banner Image`}
                className={`object-cover w-full h-full ${people ? 'object-[center]' : 'object-[center]'}`}
            />
        </div>
    );
}
