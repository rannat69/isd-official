import { StaticImageData } from 'next/image';
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
import InternshipReadMore from './InternshipReadMore';
import { Fragment, useState } from 'react';
import ImageCard from '@/components/ImageCard';

type Img = StaticImageData | string;

export const internImages: Record<string, Img> = {
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

export function resolveInternPhoto(photo?: string): Img {
    if (!photo) return noneImg;
    // normalize: remove leading slashes and optional "src/" or "assets/" prefixes
    const cleaned = photo
        .replace(/^\/+/, '')
        .replace(/^src\//, '')
        .replace(/^assets\//, '');
    const name = cleaned.split('/').pop();
    console.log('Resolving photo:', photo, '->', cleaned, '->', name);
    if (!name) return noneImg;
    return internImages[name] ?? noneImg;
}

interface Internship {
    name: string;
    title: string;
    description: string;
    moreInfoLink: string;
    picture: string;
}

const internships: Internship[] = [
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
        moreInfoLink: '',
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
        moreInfoLink: '',
        picture: '/assets/studentlife/student-comp-9.jpg',
    },
    {
        name: 'MOLIN, Oscar and WU Jiajie',
        title: 'MOLIN, Oscar and WU Jiajie [MPhil TLE] with their team - PhoMedics Limited',
        description:
            'Gold Award in HKUST-Sino One Million Dollar Entrepreneurship Competition 2020 ',
        moreInfoLink: '',
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
        moreInfoLink: '',
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
        moreInfoLink: '',
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
        moreInfoLink: '',
        picture: '/assets/studentlife/student-comp-16.jpg',
    },
    {
        name: 'LAM Wing Tung, Winnie; TSANG Ka Wing, Taylor',
        title: 'LAM Wing Tung, Winnie; TSANG Ka Wing, Taylor [MPhil TLE] with their team - FLY healthtech',
        description:
            'Student Team Award in One Million Dollar Entrepreneurship Competition 2019',
        moreInfoLink: '',
        picture: '/assets/studentlife/student-comp-17.jpg',
    },
    {
        name: 'Mashiat LAMISA and Xuelai WEI',
        title: 'Mashiat LAMISA and Xuelai WEI [BSc in ISD] with their team',
        description: 'Champion in MedTech Hackathon HK 2019',
        moreInfoLink: '',
        picture: '/assets/studentlife/student-comp-18.jpg',
    },
    {
        name: 'SHU Yiwei, Ervin',
        title: 'SHU Yiwei, Ervin [MPhil TLE] with his team - Horizon Biochip',
        description:
            'President Award and Focus Area Awards- Healthcare Prize  in One Million Dollar Entrepreneurship Competition 2019',
        moreInfoLink: '',
        picture: '/assets/studentlife/student-comp-19.jpg',
    },

    {
        name: 'Tat Hang WONG, Yukai ZHANG and Jin TANG',
        title: 'Tat Hang WONG, Yukai ZHANG and Jin TANG [BSc in ISD] with their team',
        description: '1st winner in APDEC x IDEA Design Challenge',
        moreInfoLink: '',
        picture: '/assets/studentlife/student-comp-20.jpg',
    },
    {
        name: 'WONG Ka Chin, Leo',
        title: 'WONG Ka Chin, Leo [MPhil TLE] with his team – SPES Tech',
        description:
            'Gold Prize in The 5th Hong Kong University Student Innovation and Entrepreneurship Competition\n\nGold Prize of The 5th China College Students "Internet Plus" Innovation and Entrepreneurship Competition\n\nU*STAR Award of the Startup Acceleration Program HKUST TTC\n\nThe Proof-of-Concept Fund of HKUST TTC\n\nFirst Runner Up of HKUST MBA Internal Business Plan Competition\n\nTechnology Start-up Support Scheme for University\n\nMerck China Acceleration Programme\n\nTop 3 Award o FYP+ Scheme of Hong Kong X Foundation',
        moreInfoLink:
            'https://idendron.hku.hk/the-5th-hong-kong-university-student-innovation-and-entrepreneurship-competition/',
        picture: '/assets/studentlife/student-comp-21.jpg',
    },
    {
        name: 'Zhengyu FU',
        title: 'Zhengyu FU [BSc in ISD] with his team',
        description:
            'Champion in Cybersecurity Competition co-hosted by SBM and China Everbright Bank',
        moreInfoLink: '',
        picture: '/assets/studentlife/student-comp-22.jpg',
    },
];

export default function InternshipBlock() {
    const [readMore, setReadMore] = useState<Internship | null>(null);

    return (
        <div className=" overflow-clip flex flex-col  gap-section-title-gap ">
            <h1 className="text-h1 offset-text-background ">Internships</h1>

            <div className="flex flex-col gap-component-gap-sm">
                <p className="text-md text-isd-font-1">
                    Students are encouraged to undertake internships during your
                    university study. Internships could provide you experience
                    in a real-world perspective, understanding the job setting
                    in the industry, exchanging knowledge with industry
                    professionals, keeping in touch with the latest trend in the
                    market, and etc.
                </p>

                <div className="grid grid-cols-[repeat(auto-fill,minmax(360px,1fr))] auto-cols-min gap-component-gap-sm">
                    {internships.map((intern, index) => (
                        <Fragment key={index}>
                            <ImageCard
                                key={index}
                                title={intern.title}
                                imageSrc={resolveInternPhoto(intern.picture)}
                                description={intern.description}
                                onClick={() => setReadMore(intern)}
                                lineLimit={2}
                            />
                            <InternshipReadMore
                                {...intern}
                                detailsOpen={readMore === intern}
                                setDetailsOpen={setReadMore}
                            />
                        </Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
}
