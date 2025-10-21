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
import StudentCompetitionReadMore from './StudentCompetitionReadMore';
import { useState } from 'react';

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

export function resolveCompPhoto(photo?: string): Img {
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

interface StudentCompetition {
    name: string;
    title: string;
    description: string;
    moreInfoLink: string;
    picture: string;
}

const studentComps: StudentCompetition[] = [
    {
        name: 'Mashiat LAMISA',
        title: "Mashiat LAMISA [BSc in ISD] - HKUST President's Cup 2021",
        description: "Silver Award in HKUST President's Cup 2021",
        moreInfoLink: '',
        picture: '/assets/studentlife/student-comp-1.jpg',
    },
    {
        name: 'Mashiat LAMISA',
        title: 'Mashiat LAMISA [BSc in ISD] - Virtual HealthHACK 2020',
        description: 'Winner of Virtual HealthHACK 2020 - Social Category',
        moreInfoLink: 'https://hkinnovationnode.mit.edu/programs/healthhack/',
        picture: '/assets/studentlife/student-comp-2.jpg',
    },
    {
        name: 'HUI Tsun Kit',
        title: ' HUI Tsun Kit, Davon [MPhil TLE] - Smart Washroom AIoT Solution',
        moreInfoLink: 'https://www.hkictawards.hk/award.php?year=2020&aid=4',
        picture: '/assets/studentlife/student-comp-3.jpg',
        description:
            'Winner of 2020 Award of the Year and ICT Startup Grand Award',
    },
    {
        name: 'Fung Kwong Chiu',
        title: 'Fung Kwong Chiu, Michael [MPhil TLE]',

        description:
            "Top 10 of the entrepreneurship competition in AUA Entrepreneurship Initiative Online Program\n\nFinalist for Hong Kong leg of the 6th China International College Students' 'Internet Plus' Innovation and Entrepreneurship Competition\n\nAwardee of the HKUST Entrepreneurship Acceleration Fund, 2019-2020 Spring\n\nThe Best Performance Teams MentorHUB , 2020",

        moreInfoLink: '',
        picture: '/assets/studentlife/student-comp-4.jpg',
    },
    {
        name: 'LAM Wing Tung',
        title: 'LAM Wing Tung, Winnie [MPhil TLE]',
        description:
            'LAM Wing Tung, Winnie;  TSANG Ka Wing, Taylor [MPhil TLE] - Silver Award at the 6th China International College Students’ “Internet+” Innovation and Entrepreneurship Competition\n\n LAM Wing Tung, Winnie;  TSANG Ka Wing, Taylor; YU Shing Chun[MPhil TLE]  - 第12屆”挑戰杯”中國大學生創業計劃競賽銀奬\n\nLAM Wing Tung, Winnie with her team - The 6th Hong Kong University Student Innovation and Entrepreneurship Competition First prize of Social Enterprise / Culture & Creative Services ',
        moreInfoLink: 'http://www.tiaozhanbei.net/',
        picture: '/assets/studentlife/student-comp-5.jpg',
    },
    {
        name: 'CHEUNG, Ngai, John',
        title: 'CHEUNG, Ngai, John [MPhil TLE]  - 五軸全自動3D打印技術',
        description:
            'Silver Award in Student Innovation Award, Hong Kong ICT Awards 2020',
        moreInfoLink: 'https://icta.hkace.org.hk/',
        picture: '/assets/studentlife/student-comp-6.jpg',
    },
    {
        name: 'FUNG, Ka Yan, Gabrielle and FUNG, Kwong Chiu, Michael',
        title: 'FUNG, Ka Yan, Gabrielle and FUNG, Kwong Chiu, Michael [MPhil TLE]  - Deep-Learning-Based Technology for Dyslexia Pre-screening',
        description:
            'Bronze Award in Student Innovation Award, Hong Kong ICT Awards 2020',
        moreInfoLink: 'https://icta.hkace.org.hk/',
        picture: '/assets/studentlife/student-comp-7.jpg',
    },

    {
        name: 'SO, Chak Hei Aaron',
        title: 'SO, Chak Hei Aaron [MPhil TLE] - Cura Health Limited',
        description: 'YDC Best Business Plan Award 2019 ',
        moreInfoLink:
            'https://daretochange.ydc.org.hk/tc/showcase-curabox.aspx',
        picture: '/assets/studentlife/student-comp-8.jpg',
    },
    {
        name: 'Mashiat LAMISA',
        title: 'Mashiat LAMISA [BSc in ISD] with two UBC team members',
        description:
            'Empower Women Through Technology Prize at Vancouver’s all-female “cmd-f” 24-hour hackathon, while on exchange at the University of British Columbia (UBC)',
        moreInfoLink:
            'https://seng.ust.hk/news/20200330/undergraduate-students-app-promote-womens-rights-won-all-female-hackathon',
        picture: '/assets/studentlife/student-comp-9.jpg',
    },
    {
        name: 'MOLIN, Oscar and WU Jiajie',
        title: 'MOLIN, Oscar and WU Jiajie [MPhil TLE] with their team - PhoMedics Limited',
        description:
            'Gold Award in HKUST-Sino One Million Dollar Entrepreneurship Competition 2020 ',
        moreInfoLink: 'https://onemilliondollar.ust.hk/awards_announcement',
        picture: '/assets/studentlife/student-comp-10.jpg',
    },
    {
        name: 'OKTAVIUS, Andreas Kenny',
        title: 'OKTAVIUS, Andreas Kenny [MPhil TLE] with his team - Point Fit Technology Limited',
        description:
            'Student Team Award and Best Video Award in Sino One Million Dollar Entrepreneurship Competition 2020\n\nFirst Prize in the CEIBS INNOVATIE China 2020- Connective for the Future Competition',
        moreInfoLink:
            'https://www.linkedin.com/posts/hkust-mba_musthavemba-mba-casecompetitions-activity-6664020016083677184-kszW',
        picture: '/assets/studentlife/student-comp-11.jpg',
    },
    {
        name: 'WONG, Ka Chin',
        title: 'WONG, Ka Chin [ MPhil TLE] with his team- SPES Tech',
        description:
            'President Award and GF Innovation Award in HKUST-Sino One Million Dollar Entrepreneurship Competition 2020\n\nFirst Prize of "Challenge Cup" National Undergraduate Curricular Academic Science and Technology Works\nThird Prize of Beijing Hong Kong Youth Entrepreneurship competition\nTechnology Start-up Support Scheme for University\nHKSTP IncuBio Programme',
        moreInfoLink: 'https://onemilliondollar.ust.hk/awards_announcement',
        picture: '/assets/studentlife/student-comp-12.jpg',
    },
    {
        name: 'SO, Chak Hei Aaron',
        title: 'SO, Chak Hei Aaron [MPhil TLE] - Marketemy Limited',
        description:
            'Entrepreneur Organisation Global Student Entrepreneur Awards Hong Kong 2018',
        moreInfoLink: '',
        picture: '/assets/studentlife/student-comp-13.jpg',
    },
    {
        name: 'Ali SHAMAZ',
        title: 'Ali SHAMAZ  [BSc in ISD] with his team - The Mills Fabrica Techstyle & Design',
        description:
            'Focus Area Awards in One Million Dollar Entrepreneurship Competition 2019',
        moreInfoLink:
            'https://onemilliondollar.ust.hk/2019/awards_announcement',
        picture: '/assets/studentlife/student-comp-14.jpg',
    },
    {
        name: 'CHAN Kai Chi, Eagle',
        title: 'CHAN Kai Chi, Eagle [MPhil TLE] with his team',
        description: 'Champion in Value Creation for Technology Award',
        moreInfoLink:
            'http://exh.hktdc.com/2019/efairdaily/efse_ict/issue_4.html',
        picture: '/assets/studentlife/student-comp-15.jpg',
    },
    {
        name: 'CHAN, Sau Kin, Samuel',
        title: 'CHAN, Sau Kin, Samuel [MPhil TLE] with his team – ClickerMaker',
        description:
            'Focus Area Awards-- Social Services & Enterprise Prize in One Million Dollar Entrepreneurship Competition 2019',
        moreInfoLink:
            'https://onemilliondollar.ust.hk/2019/awards_announcement',
        picture: '/assets/studentlife/student-comp-16.jpg',
    },
    {
        name: 'LAM Wing Tung, Winnie; TSANG Ka Wing, Taylor',
        title: 'LAM Wing Tung, Winnie; TSANG Ka Wing, Taylor [MPhil TLE] with their team - FLY healthtech',
        description:
            'Student Team Award in One Million Dollar Entrepreneurship Competition 2019',
        moreInfoLink:
            'https://onemilliondollar.ust.hk/2019/awards_announcement',
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
    const [readMore, setReadMore] = useState<StudentCompetition | null>(null);

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
                            <div
                                key={index}
                                className="border rounded-[10px] cursor-pointer"
                                onClick={() => {
                                    if (readMore === comp) {
                                        setReadMore(null);
                                    } else {
                                        setReadMore(comp);
                                    }
                                }}
                            >
                                <div>
                                    <Image
                                        src={resolveCompPhoto(comp.picture)}
                                        alt="Student competition"
                                        className="w-[432px] h-[288px] object-cover" // Ajoutez ces classes
                                        width={432}
                                        height={288}
                                    />
                                </div>

                                <div className="flex flex-col px-element-gap py-[24px] gap-element-gap">
                                    <h2 className="text-h2 font-bold text-primary ">
                                        <div className="flex justify-between items-center">
                                            {comp.name}
                                            <ArrowRight className="text-primary" />
                                        </div>
                                    </h2>
                                    <p className="text-sm text-isd-font-3">
                                        {comp.description}
                                    </p>
                                </div>

                                <StudentCompetitionReadMore
                                    {...comp}
                                    setDetailsOpen={setReadMore}
                                    detailsOpen={readMore === comp}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
