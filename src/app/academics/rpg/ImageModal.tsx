import Image, { StaticImageData } from 'next/image';
import { X } from 'lucide-react';

interface ImageModalProps {
    image: StaticImageData;
    title: string;
    isOpen: boolean;
    onClose: () => void;
}

export default function ImageModal({
    image,
    title,
    isOpen,
    onClose,
}: ImageModalProps) {
    if (!isOpen) return null;

    return (
        <div
            className="fixed top-0 left-0 right-0 bottom-0 w-screen h-screen bg-[#1e1e1e]/50 flex items-center justify-center z-50"
            onClick={onClose}
        >
            <div
                className="flex flex-col w-full max-w-[1044px] max-h-[90vh] bg-white mx-4 px-component-gap pb-component-gap pt-component-gap-sm gap-component-gap-sm"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-end w-full">
                    <button
                        className="text-isd-primary cursor-pointer flex gap-footer-gap bg-isd-primary-2 w-section-gap h-component-gap-sm items-center justify-center"
                        onClick={onClose}
                    >
                        <X size={24} />
                        <span className="text-sm">Close</span>
                    </button>
                </div>

                <div className="flex-1 overflow-hidden flex items-center justify-center">
                    <Image
                        src={image}
                        alt={title}
                        className="object-contain max-h-[60vh] w-auto"
                    />
                </div>

                <div className="flex flex-col gap-[24px] w-full mt-4">
                    <div className="text-h2 font-bold text-primary border-b-1 border-isd-font-2 pb-[10px]">
                        {title}
                    </div>
                </div>
            </div>
        </div>
    );
}
