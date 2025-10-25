import { ChevronUp } from 'lucide-react';

export default function Header() {
    return (
        <header className="bg-isd-primary text-white py-3 sticky top-0 z-50 w-full">
            <div className="px-[18px] md:px-section-gap">
                <div className="flex justify-end gap-4 divide-x-1 divide-white items-center ">
                    <h1 className="text-white text-xs pr-4 hidden md:block">
                        Academy of Interdisciplinary Studies
                    </h1>
                    <ChevronUp className="lg:stroke-2.5 stroke-2" />
                </div>
            </div>
        </header>
    );
}
