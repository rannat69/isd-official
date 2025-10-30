import Image, { StaticImageData } from 'next/image';
import { X } from 'lucide-react';

interface Internship {
    name: string;
    program: string;
    company: string;
    period: string;
    description: string;
    moreInfo: string;
    pictures: StaticImageData[];
}

interface InternshipReadMoreProps {
    name: string;
    program: string;
    company: string;
    period: string;
    description: string;
    moreInfo: string;
    pictures: StaticImageData[];
    setDetailsOpen: (value: Internship | null) => void;
    detailsOpen: boolean;
}

export default function InternshipReadMore({
    name,
    program,
    company,
    period,
    description,
    moreInfo,
    pictures,
    setDetailsOpen,
    detailsOpen,
}: InternshipReadMoreProps) {
    return (
        <>
            {detailsOpen && (
                <div
                    className="fixed top-0 left-0 right-0 w-screen h-screen bg-[#1e1e1e]/50 flex flex-col items-center   z-50 overflow-auto"
                    onClick={() => setDetailsOpen(null)}
                >
                    <div
                        className="flex flex-col w-full max-w-[1044px] bg-white my-[220px] px-component-gap pb-component-gap pt-component-gap-sm gap-component-gap-sm items-end"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="text-isd-primary cursor-pointer flex gap-footer-gap bg-isd-primary-2 w-section-gap h-component-gap-sm items-center justify-center"
                            onClick={() => setDetailsOpen(null)}
                        >
                            <X size={24} />
                            <span className="text-sm">Close</span>
                        </button>

                        {pictures.length > 1 ? (
                            <div className="flex lg:flex-row flex-col w-full gap-component-gap-sm">
                                {pictures.map((pic, index) => (
                                    <div
                                        key={index}
                                        className="block h-full self-center"
                                    >
                                        <Image
                                            key={index}
                                            src={pic}
                                            alt={`${name} - ${company} - ${index + 1}`}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <Image
                                src={pictures[0]}
                                alt={`${name} - ${company}`}
                                className="object-cover w-full h-full"
                            />
                        )}

                        <div className="flex flex-col gap-[24px] w-full ">
                            <div className="text-h2 font-bold text-primary border-b-1 border-isd-font-2 pb-[10px]">
                                {program} ({name})
                            </div>

                            <div className="flex flex-col gap-[12px]">
                                <p className="text-md text-isd-secondary">
                                    Internship company: {company}
                                    <br />
                                    Internship period: {period}
                                </p>

                                <div className="flex flex-col gap-footer-gap  whitespace-pre-line">
                                    <div>{description}</div>
                                </div>

                                {moreInfo != '' && (
                                    <div className="flex flex-col gap-footer-gap  whitespace-pre-line">
                                        <div>{moreInfo}</div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
