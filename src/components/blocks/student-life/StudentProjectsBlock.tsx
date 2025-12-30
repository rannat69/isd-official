import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import TweetyKwan from '@/assets/studentlife/stud-proj/tweety-kwan.png';
import JasperWong01 from '@/assets/studentlife/stud-proj/jasper-wong-01.jpg';
import JasperWong02 from '@/assets/studentlife/stud-proj/jasper-wong-02.jpg';
import JasperWong03 from '@/assets/studentlife/stud-proj/jasper-wong-03.jpg';
import JasperWong04 from '@/assets/studentlife/stud-proj/jasper-wong-04.jpg';
import JasperWong05 from '@/assets/studentlife/stud-proj/jasper-wong-05.jpg';
import JasperWong06 from '@/assets/studentlife/stud-proj/jasper-wong-06.jpg';
import JasperWong07 from '@/assets/studentlife/stud-proj/jasper-wong-07.jpg';
import JasperWong08 from '@/assets/studentlife/stud-proj/jasper-wong-08.jpg';
import AdamWei01 from '@/assets/studentlife/stud-proj/adam-wei-01.jpg';
import RuoyunFang01 from '@/assets/studentlife/stud-proj/ruoyun-fang-01.jpg';
import RuoyunFang02 from '@/assets/studentlife/stud-proj/ruoyun-fang-02.jpg';
import RuoyunFang03 from '@/assets/studentlife/stud-proj/ruoyun-fang-03.jpg';
import RuoyunFang04 from '@/assets/studentlife/stud-proj/ruoyun-fang-04.jpg';
import RuoyunFang05 from '@/assets/studentlife/stud-proj/ruoyun-fang-05.jpg';
import RuoyunFang06 from '@/assets/studentlife/stud-proj/ruoyun-fang-06.jpg';

import noneImg from '@/assets/studentlife/noneImg.png';
import { Fragment, useState } from 'react';
import ImageCard from '@/components/ImageCard';
import StudentProjectReadMore from './StudentProjectReadMore';

export const projImages: Record<string, Img> = {
    'tweety-kwan.png': TweetyKwan,
    'jasper-wong-01.jpg': JasperWong01,
    'jasper-wong-02.jpg': JasperWong02,
    'jasper-wong-03.jpg': JasperWong03,
    'jasper-wong-04.jpg': JasperWong04,
    'jasper-wong-05.jpg': JasperWong05,
    'jasper-wong-06.jpg': JasperWong06,
    'jasper-wong-07.jpg': JasperWong07,
    'jasper-wong-08.jpg': JasperWong08,
    'adam-wei-01.jpg': AdamWei01,
    'ruoyun-fang-01.jpg': RuoyunFang01,
    'ruoyun-fang-02.jpg': RuoyunFang02,
    'ruoyun-fang-03.jpg': RuoyunFang03,
    'ruoyun-fang-04.jpg': RuoyunFang04,
    'ruoyun-fang-05.jpg': RuoyunFang05,
    'ruoyun-fang-06.jpg': RuoyunFang06,
};

type Img = StaticImageData | string;

export function resolveProjPhoto(photo?: string): Img {
    if (!photo) return noneImg;
    // normalize: remove leading slashes and optional "src/" or "assets/" prefixes
    const cleaned = photo
        .replace(/^\/+/, '')
        .replace(/^src\//, '')
        .replace(/^assets\//, '');
    const name = cleaned.split('/').pop();
    console.log('Resolving photo:', photo, '->', cleaned, '->', name);
    if (!name) return noneImg;
    return projImages[name] ?? noneImg;
}

interface StudentProject {
    name: string;
    shortDescription: string;
    description: string;
    members: string;
    youtube: string;
    video: string;
    picture: string[];
}

const studentComps: StudentProject[] = [
    {
        name: 'Blox',
        shortDescription:
            'A disinfectant robot that protects hygiene in offices or public areas. ',
        description:
            'This is a disinfectant robot, which is inspired by the COVID-19 situation. The robot consists of 3 modules: a top layer that has a nozzle that sprays disinfectant in the air, a middle layer that allows users to place their items for sterilization, a bottom layer for maneuvering.',
        members: 'Tweety KWAN',
        youtube: 'https://www.youtube.com/watch?v=NVaVRk-n3Ro',
        picture: ['/assets/studentlife/stud-proj/tweety-kwan.png'],
        video: '',
    },
    {
        name: 'UnTaint',
        shortDescription:
            'UnTaint is a table cleaning robot conceived during the COVID-19 pandemic.',
        description: `UnTaint is a table cleaning robot conceived during the COVID-19 pandemic. Designed to work in restaurants and public areas, its autonomous cleaning and UV-C disinfection helps to reduce the restaurant staff's workload and improve public hygiene.`,
        members: 'Jasper WONG, Toby CHEUNG, Aidan YUAN',
        youtube: 'https://www.youtube.com/watch?v=efTgT3pP2c8',
        picture: [
            '/assets/studentlife/stud-proj/jasper-wong-01.jpg',
            '/assets/studentlife/stud-proj/jasper-wong-02.jpg',
            '/assets/studentlife/stud-proj/jasper-wong-03.jpg',
            '/assets/studentlife/stud-proj/jasper-wong-04.jpg',
            '/assets/studentlife/stud-proj/jasper-wong-05.jpg',
            '/assets/studentlife/stud-proj/jasper-wong-06.jpg',
            '/assets/studentlife/stud-proj/jasper-wong-07.jpg',
            '/assets/studentlife/stud-proj/jasper-wong-08.jpg',
        ],
        video: '/stud-proj-video/Disinfection Robot(3).mp4',
    },
    {
        name: 'AUTOMÁNICA',
        shortDescription: 'Automated guitar playing kit product concept.',
        description:
            'For those who are not satisfied with traditional speakers, This is an individual kit that can be mounted to your guitar, and play the music automatically for you, just like you are in the middle of the concert.',
        members: 'Adam WEI, Max YAU',
        youtube: 'https://www.youtube.com/watch?v=e-3FP-k59Oc ',
        picture: ['/assets/studentlife/stud-proj/adam-wei-01.jpg'],
        video: '',
    },
    {
        name: 'Year 2 Project Promo Video - Smart Shopping Cart: Lodge ',
        shortDescription:
            'This project features a 3D animated promotional video for a smart shopping cart concept originally developed as a Year 2 group project. The cart automatically follows users, supports flexible item selection, and uses RFID technology for real-time cost calculation and payment.',
        description:
            'mart Shopping Cart: Lodge is a smart retail concept originally developed as a Year 2 group project, designed to enhance the shopping experience through automation, flexibility, and personalization. The cart is capable of automatically following users, supports flexible item selection, and uses RFID technology to calculate the total cost in real time, enabling a smooth and efficient checkout experience.\n\n A key feature of the system is its automatic following function, which allows the cart to track and move with the user throughout the store. This is achieved through UWB-based positioning combined with LiDAR for obstacle detection and avoidance, ensuring safe and reliable navigation in a dynamic retail environment. The hands-free design reduces physical effort and improves overall shopping comfort.\n\n The shopping process is designed to remain flexible and transparent. Users can add or remove items at any point while browsing, with RFID technology automatically updating the shopping list and total amount. A built-in screen displays the checkout system and purchase information, allowing users to review items and complete payment at any time.\n\n In addition to its core functions, the smart shopping cart incorporates personalized and supportive features. The cart can adjust its height and visual appearance based on user preferences, and the interface provides in-store navigation to guide users to specific shops or products, improving efficiency and accessibility.\n\n For the ISDN4000U course, an individual 3D animated promotional video was independently created to showcase the concept, key functionalities, and user experience of the smart shopping cart, serving as a clear and engaging visual presentation of the project.',
        members:
            'Ruoyun FANG, Hualin LIU, Jusen XU, Yiu Tung CHAN, Kassie Ka Chai KUEK ',
        youtube: 'https://www.youtube.com/watch?v=yKe45I6asaU',
        picture: [
            '/assets/studentlife/stud-proj/ruoyun-fang-01.jpg',
            '/assets/studentlife/stud-proj/ruoyun-fang-02.jpg',
            '/assets/studentlife/stud-proj/ruoyun-fang-03.jpg',
            '/assets/studentlife/stud-proj/ruoyun-fang-04.jpg',
            '/assets/studentlife/stud-proj/ruoyun-fang-05.jpg',
            '/assets/studentlife/stud-proj/ruoyun-fang-06.jpg',
        ],
        video: '',
    },
];

export default function StudentProjectsBlock() {
    const [readMore, setReadMore] = useState<StudentProject | null>(null);

    return (
        <div className="overflow-clip flex flex-col gap-section-title-gap">
            <h1 className="lg:block hidden text-h1 offset-text-background">
                Student Projects
            </h1>

            <div className="flex flex-col gap-component-gap-sm">
                <div className="lg:grid flex flex-col grid-cols-[repeat(auto-fill,minmax(360px,1fr))] auto-cols-min gap-component-gap-sm">
                    {studentComps.map((comp, index) => (
                        <Fragment key={index}>
                            <ImageCard
                                key={index}
                                title={comp.name}
                                imageSrc={resolveProjPhoto(comp.picture[0])}
                                description={comp.shortDescription}
                                onClick={() => setReadMore(comp)}
                                lineLimit={2}
                            />
                            <StudentProjectReadMore
                                {...comp}
                                detailsOpen={readMore === comp}
                                setDetailsOpen={setReadMore}
                            />
                        </Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
}
