'use client';

import { useState } from 'react';
import { ChevronUp } from 'lucide-react';

export default function Header() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const links = [
        {
            href: 'https://www.ust.hk/news',
            label: 'University News',
        },
        {
            href: 'https://www.ust.hk/academics/list',
            label: 'Academic Departments A-Z',
        },
        {
            href: 'https://www.ust.hk/lifehkust',
            label: 'Life@HKUST',
        },
        {
            href: 'http://library.ust.hk/',
            label: 'Library',
        },
        {
            href: 'https://www.ust.hk/map-directions',
            label: 'Map & Directions',
        },
        {
            href: 'https://hkustcareers.ust.hk',
            label: 'Careers at HKUST',
        },
        {
            href: 'https://facultyprofiles.ust.hk/',
            label: 'Faculty Profiles',
        },
        {
            href: 'https://www.ust.hk/about',
            label: 'About HKUST',
        },
    ];

    return (
        <header className="bg-isd-primary text-white sticky top-0 z-50 w-full">
            <div
                className={`bg-white text-isd-primary overflow-hidden transition-[height] duration-500 linear ${
                    isDrawerOpen ? 'ust:h-[186px] h-[134px]' : 'h-0'
                }`}
            >
                <div className="max-w-[1000] mx-auto ust:px-section-ga ust:pt-[28px] ust:pb-[36px] py-[17px]">
                    <div className="flex flex-col items-center uppercase">
                        <div className="text-lg font-bold ust:text-[16px] ust:h-auto ust:leading-[34px] text-[11px] leading-[14px] h-[20px] tracking-[0.6px]">
                            More about HKUST
                        </div>
                        <div className="grid ust:grid-cols-4 grid-cols-2 text-center text-[#161616] ust:text-[16px] ust:leading-[20px] text-[11px] leading-[14px] w-full">
                            {links.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="hover:underline ust:py-[12px] py-[3px]"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-[18px] xl:px-section-gap py-3">
                <div className="flex justify-end gap-4 divide-x-1 divide-white items-center ">
                    <a
                        href="https://ais.hkust.edu.hk/"
                        className="text-white text-xs pr-4 hover:underline hidden xl:block"
                    >
                        Academy of Interdisciplinary Studies
                    </a>
                    <ChevronUp
                        className={`xl:stroke-2.5 stroke-2 cursor-pointer transition-transform duration-300 ${
                            isDrawerOpen ? 'rotate-180' : ''
                        }`}
                        onClick={toggleDrawer}
                    />
                </div>
            </div>
        </header>
    );
}
