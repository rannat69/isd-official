import Image, { StaticImageData } from 'next/image';

export default function ImageTitleCard({
    imageSrc,
    title,
}: {
    imageSrc: StaticImageData;
    title: string;
}) {
    return (
        <div className="w-96 bg-white rounded-[10px] outline-1 outline-isd-primary-3 inline-flex flex-col justify-start items-start">
            <Image
                src={imageSrc}
                alt={title}
                className="w-full h-72 rounded-t-[10px] object-cover"
            />
            <h2 className="self-stretch justify-start text-isd-secondary text-2xl font-bold font-['Mulish'] leading-7 py-[18px] px-6">
                {title}
            </h2>
        </div>
    );
}
