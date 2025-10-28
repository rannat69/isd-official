import { ChevronUp } from 'lucide-react';

export default function Header() {
    return (
        <header className="bg-isd-primary text-white py-3 sticky top-0 z-50 w-full">
            <div className="px-[18px] xl:px-section-gap">
                <div className="flex justify-end gap-4 divide-x-1 divide-white items-center ">
                    <a
                        href="https://ais.hkust.edu.hk/"
                        className="text-white text-xs pr-4 hover:underline hidden xl:block"
                    >
                        Academy of Interdisciplinary Studies
                    </h1>
                    <ChevronUp className="xl:stroke-2.5 stroke-2" />
                </div>
            </div>
        </header>
    );
}
