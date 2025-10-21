import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import StudentCompTitle from '@/assets/studentlife/student-comp-title.jpg';
import StudentComp01 from '@/assets/studentlife/student-comp-1.jpg';
import StudentComp02 from '@/assets/studentlife/student-comp-2.jpg';
import StudentComp03 from '@/assets/studentlife/student-comp-3.jpg';
import StudentComp04 from '@/assets/studentlife/student-comp-4.jpg';
import StudentComp05 from '@/assets/studentlife/student-comp-5.jpg';
import StudentComp06 from '@/assets/studentlife/student-comp-6.jpg';
import StudentComp07 from '@/assets/studentlife/student-comp-7.jpg';
import StudentComp08 from '@/assets/studentlife/student-comp-8.jpg';
import StudentComp09 from '@/assets/studentlife/student-comp-9.jpg';
import StudentComp10 from '@/assets/studentlife/student-comp-10.jpg';
import StudentComp11 from '@/assets/studentlife/student-comp-11.jpg';
import StudentComp12 from '@/assets/studentlife/student-comp-12.jpg';
import StudentComp13 from '@/assets/studentlife/student-comp-13.jpg';
import StudentComp14 from '@/assets/studentlife/student-comp-14.jpg';
import StudentComp15 from '@/assets/studentlife/student-comp-15.jpg';
import StudentComp16 from '@/assets/studentlife/student-comp-16.jpg';
import StudentComp17 from '@/assets/studentlife/student-comp-17.jpg';
import StudentComp18 from '@/assets/studentlife/student-comp-18.jpg';
import StudentComp19 from '@/assets/studentlife/student-comp-19.jpg';
import StudentComp20 from '@/assets/studentlife/student-comp-20.jpg';
import StudentComp21 from '@/assets/studentlife/student-comp-21.jpg';
import StudentComp22 from '@/assets/studentlife/student-comp-22.jpg';

import noneImg from '@/assets/studentlife/noneImg.png';

type Img = StaticImageData | string;

export const compImages: Record<string, Img> = {
    'student-comp-1.jpg': StudentComp01,
    'student-comp-2.jpg': StudentComp02,
    'student-comp-3.jpg': StudentComp03,
    'student-comp-4.jpg': StudentComp04,
    'student-comp-5.jpg': StudentComp05,
    'student-comp-6.jpg': StudentComp06,
    'student-comp-7.jpg': StudentComp07,
    'student-comp-8.jpg': StudentComp08,
    'student-comp-9.jpg': StudentComp09,
    'student-comp-10.jpg': StudentComp10,
    'student-comp-11.jpg': StudentComp11,
    'student-comp-12.jpg': StudentComp12,
    'student-comp-13.jpg': StudentComp13,
    'student-comp-14.jpg': StudentComp14,
    'student-comp-15.jpg': StudentComp15,
    'student-comp-16.jpg': StudentComp16,
    'student-comp-17.jpg': StudentComp17,
    'student-comp-18.jpg': StudentComp18,
    'student-comp-19.jpg': StudentComp19,
    'student-comp-20.jpg': StudentComp20,
    'student-comp-21.jpg': StudentComp21,
    'student-comp-22.jpg': StudentComp22,
};

function resolveCompPhoto(photo?: string): Img {
    if (!photo) return noneImg;
    // normalize: remove leading slashes and optional "src/" or "assets/" prefixes
    const cleaned = photo
        .replace(/^\/+/, '')
        .replace(/^src\//, '')
        .replace(/^assets\//, '');
    const name = cleaned.split('/').pop();
    console.log('Resolving photo:', photo, '->', cleaned, '->', name);
    if (!name) return noneImg;
    return compImages[name] ?? noneImg;
}

const studentComps = [
    {
        name: 'Mashiat LAMISA',
        title: "Mashiat LAMISA [BSc in ISD] - HKUST President's Cup 2021",
        description: "Silver Award in HKUST President's Cup 2021",
        moreInfoLink: 'https://presidentscup.ust.hk/winning-projects?year=2021',
        picture: '/assets/studentlife/student-comp-1.jpg',
    },
    {
        name: 'Mashiat LAMISA',
        title: "Mashiat LAMISA [BSc in ISD] - HKUST President's Cup 2021",
        description: "Silver Award in HKUST President's Cup 2021",
        moreInfoLink: 'https://presidentscup.ust.hk/winning-projects?year=2021',
        picture: '/assets/studentlife/student-comp-2.jpg',
    },
    {
        name: 'Mashiat LAMISA',
        title: "Mashiat LAMISA [BSc in ISD] - HKUST President's Cup 2021",
        description: "Silver Award in HKUST President's Cup 2021",
        moreInfoLink: 'https://presidentscup.ust.hk/winning-projects?year=2021',
        picture: '/assets/studentlife/student-comp-3.jpg',
    },
    {
        name: 'Mashiat LAMISA',
        title: "Mashiat LAMISA [BSc in ISD] - HKUST President's Cup 2021",
        description: "Silver Award in HKUST President's Cup 2021",
        moreInfoLink: 'https://presidentscup.ust.hk/winning-projects?year=2021',
        picture: '/assets/studentlife/student-comp-4.jpg',
    },
    {
        name: 'Mashiat LAMISA',
        title: "Mashiat LAMISA [BSc in ISD] - HKUST President's Cup 2021",
        description: "Silver Award in HKUST President's Cup 2021",
        moreInfoLink: 'https://presidentscup.ust.hk/winning-projects?year=2021',
        picture: '/assets/studentlife/student-comp-5.jpg',
    },
    {
        name: 'Mashiat LAMISA',
        title: "Mashiat LAMISA [BSc in ISD] - HKUST President's Cup 2021",
        description: "Silver Award in HKUST President's Cup 2021",
        moreInfoLink: 'https://presidentscup.ust.hk/winning-projects?year=2021',
        picture: '/assets/studentlife/student-comp-6.jpg',
    },
    {
        name: 'Mashiat LAMISA',
        title: "Mashiat LAMISA [BSc in ISD] - HKUST President's Cup 2021",
        description: "Silver Award in HKUST President's Cup 2021",
        moreInfoLink: 'https://presidentscup.ust.hk/winning-projects?year=2021',
        picture: '/assets/studentlife/student-comp-7.jpg',
    },

    {
        name: 'Mashiat LAMISA',
        title: "Mashiat LAMISA [BSc in ISD] - HKUST President's Cup 2021",
        description: "Silver Award in HKUST President's Cup 2021",
        moreInfoLink: 'https://presidentscup.ust.hk/winning-projects?year=2021',
        picture: '/assets/studentlife/student-comp-8.jpg',
    },
    {
        name: 'Mashiat LAMISA',
        title: "Mashiat LAMISA [BSc in ISD] - HKUST President's Cup 2021",
        description: "Silver Award in HKUST President's Cup 2021",
        moreInfoLink: 'https://presidentscup.ust.hk/winning-projects?year=2021',
        picture: '/assets/studentlife/student-comp-9.jpg',
    },
    {
        name: 'Mashiat LAMISA',
        title: "Mashiat LAMISA [BSc in ISD] - HKUST President's Cup 2021",
        description: "Silver Award in HKUST President's Cup 2021",
        moreInfoLink: 'https://presidentscup.ust.hk/winning-projects?year=2021',
        picture: '/assets/studentlife/student-comp-10.jpg',
    },
    {
        name: 'Mashiat LAMISA',
        title: "Mashiat LAMISA [BSc in ISD] - HKUST President's Cup 2021",
        description: "Silver Award in HKUST President's Cup 2021",
        moreInfoLink: 'https://presidentscup.ust.hk/winning-projects?year=2021',
        picture: '/assets/studentlife/student-comp-11.jpg',
    },
    {
        name: 'Mashiat LAMISA',
        title: "Mashiat LAMISA [BSc in ISD] - HKUST President's Cup 2021",
        description: "Silver Award in HKUST President's Cup 2021",
        moreInfoLink: 'https://presidentscup.ust.hk/winning-projects?year=2021',
        picture: '/assets/studentlife/student-comp-12.jpg',
    },
    {
        name: 'Mashiat LAMISA',
        title: "Mashiat LAMISA [BSc in ISD] - HKUST President's Cup 2021",
        description: "Silver Award in HKUST President's Cup 2021",
        moreInfoLink: 'https://presidentscup.ust.hk/winning-projects?year=2021',
        picture: '/assets/studentlife/student-comp-13.jpg',
    },
    {
        name: 'Mashiat LAMISA',
        title: "Mashiat LAMISA [BSc in ISD] - HKUST President's Cup 2021",
        description: "Silver Award in HKUST President's Cup 2021",
        moreInfoLink: 'https://presidentscup.ust.hk/winning-projects?year=2021',
        picture: '/assets/studentlife/student-comp-14',
    },
    {
        name: 'Mashiat LAMISA',
        title: "Mashiat LAMISA [BSc in ISD] - HKUST President's Cup 2021",
        description: "Silver Award in HKUST President's Cup 2021",
        moreInfoLink: 'https://presidentscup.ust.hk/winning-projects?year=2021',
        picture: '/assets/studentlife/student-comp-15.jpg',
    },
    {
        name: 'Mashiat LAMISA',
        title: "Mashiat LAMISA [BSc in ISD] - HKUST President's Cup 2021",
        description: "Silver Award in HKUST President's Cup 2021",
        moreInfoLink: 'https://presidentscup.ust.hk/winning-projects?year=2021',
        picture: '/assets/studentlife/student-comp-16.jpg',
    },
    {
        name: 'Mashiat LAMISA',
        title: "Mashiat LAMISA [BSc in ISD] - HKUST President's Cup 2021",
        description: "Silver Award in HKUST President's Cup 2021",
        moreInfoLink: 'https://presidentscup.ust.hk/winning-projects?year=2021',
        picture: '/assets/studentlife/student-comp-17.jpg',
    },
    {
        name: 'Mashiat LAMISA',
        title: "Mashiat LAMISA [BSc in ISD] - HKUST President's Cup 2021",
        description: "Silver Award in HKUST President's Cup 2021",
        moreInfoLink: 'https://presidentscup.ust.hk/winning-projects?year=2021',
        picture: '/assets/studentlife/student-comp-18.jpg',
    },
    {
        name: 'Mashiat LAMISA',
        title: "Mashiat LAMISA [BSc in ISD] - HKUST President's Cup 2021",
        description: "Silver Award in HKUST President's Cup 2021",
        moreInfoLink: 'https://presidentscup.ust.hk/winning-projects?year=2021',
        picture: '/assets/studentlife/student-comp-19.jpg',
    },
    {
        name: 'Mashiat LAMISA',
        title: "Mashiat LAMISA [BSc in ISD] - HKUST President's Cup 2021",
        description: "Silver Award in HKUST President's Cup 2021",
        moreInfoLink: 'https://presidentscup.ust.hk/winning-projects?year=2021',
        picture: '/assets/studentlife/student-comp-20.jpg',
    },
    {
        name: 'Mashiat LAMISA',
        title: "Mashiat LAMISA [BSc in ISD] - HKUST President's Cup 2021",
        description: "Silver Award in HKUST President's Cup 2021",
        moreInfoLink: 'https://presidentscup.ust.hk/winning-projects?year=2021',
        picture: '/assets/studentlife/student-comp-21.jpg',
    },
    {
        name: 'Mashiat LAMISA',
        title: "Mashiat LAMISA [BSc in ISD] - HKUST President's Cup 2021",
        description: "Silver Award in HKUST President's Cup 2021",
        moreInfoLink: 'https://presidentscup.ust.hk/winning-projects?year=2021',
        picture: '/assets/studentlife/student-comp-22.jpg',
    },
];

export default function StudentCompetitionsBlock() {
    return (
        <div className=" overflow-clip flex flex-col  gap-section-title-gap ">
            <h1 className="text-h1 offset-text-background ">
                Student Competitions
            </h1>

            <div className="flex flex-col gap-component-gap-sm">
                <p className="text-md text-isd-font-1">
                    Healthy competitions are a great way to elevate
                    students&apos; learning experience. At ISD, we offer support
                    for student teams to attend a diverse range of competitions
                    throughout the year to test their knowledge and skills. From
                    design challenge, hackathon to entrepreneurship contests,
                    ISD students have shown their versatility and capabilities
                    while learning about and designing for real world needs.
                </p>

                <Image
                    src={StudentCompTitle}
                    alt="Student competition"
                    className="object-cover h-full"
                />

                <div className="flex flex-col gap-[12px]">
                    <p className="text-md text-isd-font-1">
                        Many ISD student projects have high potential to
                        competitions related to design and/or technology. Our
                        division encourages students to actively participate in
                        these events to gain various exposures: 
                    </p>

                    <ul className="list-disc list-outside pl-6 text-isd-font-3">
                        <li>Enhance communication and critical thinking</li>
                        <li>
                            Connect with other students, faculty and business
                            professionals
                        </li>
                        <li>Boost confidence and build resilience</li>
                        <li>Showcase talents and get inspiration</li>
                    </ul>

                    <div className="text-isd-secondary font-bold">
                        <Link
                            className="underline"
                            href={
                                'https://gohkust.sharepoint.com/:w:/s/ISD/ESdjiHThIMBNmSGIHH5Rr3EBJGDdb70LLkk2BIJagWi8Ew?e=YGDkbf'
                            }
                        >
                            List of Competitions
                        </Link>
                         (as of 31/08/2023)
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-x-[60px] gap-y-[41px]">
                    {studentComps.map((comp, index) => {
                        return (
                            <div key={index} className="border rounded-[10px]">
                                <div>
                                    {comp.picture.src}
                                    <Image
                                        src={resolveCompPhoto(comp.picture)}
                                        alt="Student competition"
                                        className=" h-full"
                                    />
                                </div>

                                <h2 className="text-4xl font-bold text-primary">
                                    {comp.name}
                                </h2>
                                <p className="text-md text-isd-font-1">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quisquam, quod.
                                </p>
                                <div className="flex items-center gap-[12px]">
                                    <Link
                                        href={'/student-life/'}
                                        className="text-isd-secondary font-bold underline"
                                    >
                                        Read more
                                    </Link>
                                    <ArrowRight className="text-isd-secondary" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
