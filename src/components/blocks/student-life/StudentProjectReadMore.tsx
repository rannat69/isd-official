import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { X } from 'lucide-react';
import { resolveProjPhoto } from './StudentProjectsBlock';
import Carousel from '@/components/Carousel';
import CarouselTriple from '@/components/CarouselTriple';
import CarouselStudProj from '@/components/CarouselStudProj';

interface StudentProject {
    name: string;
    shortDescription: string;
    description: string;
    members: string;
    youtube: string;
    picture: string[];
}

interface StudentProjectReadMoreProps {
    picture: string[];
    name: string;
    description: string;
    members: string;
    youtube: string;
    setDetailsOpen: (value: StudentProject | null) => void;
    detailsOpen: boolean;
}

export default function StudentProjectReadMore({
    picture,
    name,
    description,
    youtube,
    members,
    setDetailsOpen,
    detailsOpen,
}: StudentProjectReadMoreProps) {
    const resolvedPictures: StaticImageData[] = [];

    for (const pictureTemp of picture) {
        const resolvedPicture: StaticImageData = resolveProjPhoto(
            pictureTemp
        ) as StaticImageData;

        console.log('pictureTemp', pictureTemp);

        resolvedPictures.push(resolvedPicture);
    }

    console.log('resolvedPictures', resolvedPictures);

    return (
        <>
            {detailsOpen && (
                <div
                    className="fixed top-0 left-0 right-0 w-screen h-screen bg-[#1e1e1e]/50 flex flex-col items-center   z-50 overflow-auto"
                    onClick={() => setDetailsOpen(null)}
                >
                    <div
                        className="flex flex-col w-full max-w-[1044px] bg-white my-[220px] px-component-gap py-component-gap-sm gap-component-gap-sm items-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="self-end text-isd-primary cursor-pointer flex gap-footer-gap bg-isd-primary-2 w-section-gap h-component-gap-sm items-center justify-center"
                            onClick={() => setDetailsOpen(null)}
                        >
                            <X size={24} />
                            <span className="text-sm">Close</span>
                        </button>

                        <div className="z-51">
                            {picture.length === 1 ? (
                                <div className="flex justify-center relative overflow-hidden">
                                    <Image
                                        src={resolveProjPhoto(picture[0])}
                                        alt={`${name}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ) : (
                                <div className="flex justify-center w-1/2 h-[300px] overflow-hidden">
                                    <CarouselStudProj
                                        images={resolvedPictures}
                                    />
                                </div>
                            )}
                        </div>

                        <div className="flex flex-col gap-[24px] w-full ">
                            <div className="text-h2 font-bold text-primary border-b-1 border-isd-font-2 pb-[10px]">
                                {name}
                            </div>

                            <div className="flex flex-col gap-[12px]">
                                <div className="flex flex-col gap-footer-gap  whitespace-pre-line">
                                    <div>{description}</div>
                                </div>

                                <div className="flex flex-col gap-footer-gap  whitespace-pre-line">
                                    <div>
                                        <p className="font-bold text-primary">
                                            Members :
                                        </p>{' '}
                                        {members}
                                    </div>
                                </div>

                                {youtube != '' && (
                                    <Link
                                        className="text-md text-isd-secondary underline"
                                        href={youtube}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        More info
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
