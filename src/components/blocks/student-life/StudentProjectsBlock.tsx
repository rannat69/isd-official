import { StaticImageData } from 'next/image';
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
import Twoo01 from '@/assets/studentlife/stud-proj/twoo-01.jpg';
import Twoo02 from '@/assets/studentlife/stud-proj/twoo-02.jpg';
import Twoo03 from '@/assets/studentlife/stud-proj/twoo-03.jpg';
import Twoo201 from '@/assets/studentlife/stud-proj/twoo2-01.jpg';
import Twoo202 from '@/assets/studentlife/stud-proj/twoo2-02.jpg';
import Twoo203 from '@/assets/studentlife/stud-proj/twoo2-03.jpg';
import Twoo204 from '@/assets/studentlife/stud-proj/twoo2-04.jpg';

import Floodu01 from '@/assets/studentlife/stud-proj/Year2/floodu/floodu01.png';
import Veeeee01 from '@/assets/studentlife/stud-proj/Year2/veeeee/veeeee01.png';
import DD01 from '@/assets/studentlife/stud-proj/Year2/dd/dd01.png';
import FiveFive01 from '@/assets/studentlife/stud-proj/Year2/fivefive/fivefive01.png';
import Lodge01 from '@/assets/studentlife/stud-proj/Year2/lodge/lodge01.png';
import Zeth01 from '@/assets/studentlife/stud-proj/Year2/zeth/zeth01.png';

import DigitalPaws01 from '@/assets/studentlife/stud-proj/Year3/digitalpaws/digitalpaws01.png';
import Fibe01 from '@/assets/studentlife/stud-proj/Year3/fibe/fibe01.png';
import Surfive01 from '@/assets/studentlife/stud-proj/Year3/surfive/surfive01.png';
import IndoorLighting01 from '@/assets/studentlife/stud-proj/Year3/indoorlighting/indoorlighting01.png';
import Biking01 from '@/assets/studentlife/stud-proj/Year3/biking/biking01.png';
import Sailing01 from '@/assets/studentlife/stud-proj/Year3/sailing/sailing01.png';

import TrackBot01 from '@/assets/studentlife/stud-proj/Year4/trackbot/trackbot01.png';
import Dash01 from '@/assets/studentlife/stud-proj/Year4/dash/dash01.png';
import MoneyLife01 from '@/assets/studentlife/stud-proj/Year4/moneylife/moneylife01.png';
import BIPV01 from '@/assets/studentlife/stud-proj/Year4/bipv/bipv01.png';
import Gulio01 from '@/assets/studentlife/stud-proj/Year4/gulio/gulio01.png';
import AnyWear01 from '@/assets/studentlife/stud-proj/Year4/anywear/anywear01.png';
import BrewSense01 from '@/assets/studentlife/stud-proj/Year4/brewsense/brewsense01.png';

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
    'twoo-01.jpg': Twoo01,
    'twoo-02.jpg': Twoo02,
    'twoo-03.jpg': Twoo03,
    'twoo2-01.jpg': Twoo201,
    'twoo2-02.jpg': Twoo202,
    'twoo2-03.jpg': Twoo203,
    'twoo2-04.jpg': Twoo204,
    'floodu01.png': Floodu01,
    'veeeee01.png': Veeeee01,

    'dd01.png': DD01,

    'fivefive01.png': FiveFive01,

    'lodge01.png': Lodge01,

    'zeth01.png': Zeth01,

    'digitalpaws01.png': DigitalPaws01,

    'fibe01.png': Fibe01,

    'surfive01.png': Surfive01,

    'indoorlighting01.png': IndoorLighting01,

    'biking01.png': Biking01,

    'sailing01.png': Sailing01,

    'trackbot01.png': TrackBot01,

    'dash01.png': Dash01,

    'moneylife01.png': MoneyLife01,

    'bipv01.png': BIPV01,

    'gulio01.png': Gulio01,

    'anywear01.png': AnyWear01,

    'brewsense01.png': BrewSense01,
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
    course: string;
    faculty: { name: string; link: string }[];
}

let studentProjs: StudentProject[] = [
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
        course: 'ISDN2400',
        faculty: [
            {
                name: 'Mitch LI',
                link: 'https://isd.hkust.edu.hk/people/?role=faculty&area=all&tag=regular&keyword=mitch+li',
            },
        ],
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
        course: 'ISDN2400',
        faculty: [
            {
                name: 'Mitch LI',
                link: 'https://isd.hkust.edu.hk/people/?role=faculty&area=all&tag=regular&keyword=mitch+li',
            },
        ],
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
        course: 'ISDN4000U',
        faculty: [
            {
                name: 'Mitch LI',
                link: 'https://isd.hkust.edu.hk/people/?role=faculty&area=all&tag=regular&keyword=mitch+li',
            },
            {
                name: 'Larry KOO',
                link: 'https://isd.hkust.edu.hk/people/?role=faculty&area=all&tag=&keyword=larry+koo',
            },
        ],
    },
    {
        name: 'Smart Shopping Cart: Lodge',
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
        course: 'ISDN4000U',
        faculty: [
            {
                name: 'Mitch LI',
                link: 'https://isd.hkust.edu.hk/people/?role=faculty&area=all&tag=regular&keyword=mitch+li',
            },
            {
                name: 'Larry KOO',
                link: 'https://isd.hkust.edu.hk/people/?role=faculty&area=all&tag=&keyword=larry+koo',
            },
        ],
    },
    {
        name: 'Stridecool',
        shortDescription:
            'Modular Smart Shoes: breathable, waterproof uppers with a refillable cooling gel pad and an anti slip outsole. A LEGO inspired TPU clutch seals a replaceable hydrogel cooling insert while SBR rubber provides durable traction. ',
        description:
            'Smart Shoes integrate breathable, waterproof materials with a removable phase change hydrogel cooling pad and a sealed modular design for easy refill and maintenance. A TPU interlocking "LEGO style" stud/tube clutch creates a watertight mechanical seal between insole and outsole while neoprene and nonwoven polypropylene let moisture vapor escape but block liquid water. The sock area receives a localized nanoparticle waterproof coating that repels droplets without markedly reducing elasticity, and the hydrogel with PCM microcapsules provides 3–4°C of passive cooling and is removable for replacement. Structural TPU elements and a vulcanized SBR tread deliver load bearing support, abrasion resistance, and grip. Design tradeoffs prioritize physical hydrogel cooling over transient sensory methods, localized nano coating to preserve stretch, tunable TPU printing and clutch force for reliable sealing and serviceability, and material protections (additives or maintenance) to mitigate PP UV degradation and coating wear.',
        members: 'Twoo, Anson LEUNG',
        youtube: 'https://www.youtube.com/watch?v=QuSynWcBP6o ',
        picture: [
            '/assets/studentlife/stud-proj/twoo-01.jpg',
            '/assets/studentlife/stud-proj/twoo-02.jpg',
            '/assets/studentlife/stud-proj/twoo-03.jpg',
        ],
        video: '',
        course: 'ISDN2603',
        faculty: [
            {
                name: 'Mitch LI',
                link: 'https://isd.hkust.edu.hk/people/?role=faculty&area=all&tag=regular&keyword=mitch+li',
            },
        ],
    },
    {
        name: 'FlameCoz',
        shortDescription:
            '볼멍 (bol-meong) is a Korean sensibility: the quiet, restorative calm that washes over someone who zones out watching a fire. As urbanization and technology bring human from forests into a concrete jungle, that simple, primordial soothing—rooted in smell, sight, and sound—has been severed. This lamp is an attempt to translates the campfire’s essential stimuli—the scent of burning wood, the flicker of flame, the low hush of embers—into a deliberately designed, urban-appropriate ritual object ,introducing that elemental pause into contemporary life: a crafted object that reconstructs the psychological and sensory architecture of a campfire for the modern home.',
        description:
            'This piece asks: how do we reforge the broken tie between human and nature in a city of glass and asphalt? The lamp’s design treats smell, sight, and sound as equal partners in producing a calming state. Slow burning incense delivering  the aroma of burning wood that arrives as a gentle invitation. The artificial flame “breathes” with naturally irregular cadences which tied to the audio played. While getting emotional in late night, immersing into the state of flow of self reflection with scented smoke of a breathing flame. While as a social hearth it sits at the center of a small group, orienting conversation as an ambient companion. The piece also provokes questions about authenticity—if this is a product available in the market, can it substitute for the original?—and whether engineered calm risks commodifying stillness.',
        members: 'Twoo, Zane CHENG',
        youtube: 'https://www.youtube.com/watch?v=-H_z7ScNaIw',
        picture: [
            '/assets/studentlife/stud-proj/twoo2-01.jpg',
            '/assets/studentlife/stud-proj/twoo2-02.jpg',
            '/assets/studentlife/stud-proj/twoo2-03.jpg',
            '/assets/studentlife/stud-proj/twoo2-04.jpg',
        ],
        video: '',
        course: 'ISDN4000U',
        faculty: [
            {
                name: 'Mitch LI',
                link: 'https://isd.hkust.edu.hk/people/?role=faculty&area=all&tag=regular&keyword=mitch+li',
            },
            {
                name: 'Larry KOO',
                link: 'https://isd.hkust.edu.hk/people/?role=faculty&area=all&tag=&keyword=larry+koo',
            },
        ],
    },
    {
        name: 'FloodU',
        shortDescription:
            'A remote rescue platform to deliver life necessities and first-aid medications to the victims stuck in the floods via drone, as well as improve the safety and efficiency of the rescue procedure.',
        description:
            'A remote rescue platform to deliver life necessities and first-aid medications to the victims stuck in the floods via drone, as well as improve the safety and efficiency of the rescue procedure.',
        members:
            'CHENG Ziheng, HUI Kan Lap, LEUNG King Wah, LEUNG Wai Yan, WOO Hiu Lam',
        youtube: '',
        picture: ['/assets/studentlife/stud-proj/year2/floodu/floodu01.png'],
        video: '',
        course: '',
        faculty: [],
    },
    {
        name: 'VEEEEE!',
        shortDescription:
            'A system combined hardware and software to carry bikes to and from a remote parking facility without walking. Therefore, to enhance the cycling experience from end to end.',
        description:
            'A system combined hardware and software to carry bikes to and from a remote parking facility without walking. Therefore, to enhance the cycling experience from end to end.',
        members:
            'CHAN Kei Ching, CHAN King Chung Bryce, PAK Wing Hin, SHUM Yu Hin, YU Hiu Lam',
        youtube: '',
        picture: ['/assets/studentlife/stud-proj/year2/veeeee/veeeee01.png'],
        video: '',
        course: '',
        faculty: [],
    },
    {
        name: 'DD',
        shortDescription:
            "An IoT System that displays real-time queuing of the mini-bus station and available seat information on the incoming mini-bus, as well as forecasting the waiting time for passengers' better route planning of Mini-bus selection.",
        description:
            "An IoT System that displays real-time queuing of the mini-bus station and available seat information on the incoming mini-bus, as well as forecasting the waiting time for passengers' better route planning of Mini-bus selection.",
        members:
            'CHEN Daniel Dao Cheng, HUNG Ka Hin, LO Tsz Chung, TAM Ho Wang, TAM Kwan Yiu, XU Ziyi',
        youtube: '',
        picture: ['/assets/studentlife/stud-proj/year2/dd/dd01.png'],
        video: '',
        course: '',
        faculty: [],
    },
    {
        name: 'FiveFive',
        shortDescription:
            'A system with crowd control strategies by computer vision/ multiple sensing to optimize the crowd flow at specific MTR stations to increase the comfort of passengers traversing through the station, with comfort being minimized congestion and faster movement.',
        description:
            'A system with crowd control strategies by computer vision/ multiple sensing to optimize the crowd flow at specific MTR stations to increase the comfort of passengers traversing through the station, with comfort being minimized congestion and faster movement.',
        members:
            'KATYAYAN Saanvi Ravi, SHEN Yuming, WEI Yang, WU Ziyao, YAU Hei Chung',
        youtube: '',
        picture: [
            '/assets/studentlife/stud-proj/year2/fivefive/fivefive01.png',
        ],
        video: '',
        course: '',
        faculty: [],
    },
    {
        name: 'Lodge',
        shortDescription:
            'A smart shopping cart with self-check and auto-tracking functions to increase efficiency and satisfaction for customers in the high-end mall shopping experience.A smart shopping cart with self-check and auto-tracking functions to increase efficiency and satisfaction for customers in the high-end mall shopping experience.',
        description:
            'A smart shopping cart with self-check and auto-tracking functions to increase efficiency and satisfaction for customers in the high-end mall shopping experience.A smart shopping cart with self-check and auto-tracking functions to increase efficiency and satisfaction for customers in the high-end mall shopping experience.',
        members:
            'CHAN Ying Tung, FANG Ruoyun, KUEK Kassie Ka Chai, LIU Hualin, XU Jusen',
        youtube: '',
        picture: ['/assets/studentlife/stud-proj/year2/lodge/lodge01.png'],
        video: '',
        course: '',
        faculty: [],
    },
    {
        name: 'Zeth',
        shortDescription:
            'A versatile and supportive carry-on luggage system for young adults to enjoy a more convenient, secure, and independent travel jouney.',
        description:
            'A versatile and supportive carry-on luggage system for young adults to enjoy a more convenient, secure, and independent travel jouney.',
        members: 'AU Tsz Ching, KANDASAMY Shalini, LI Jiayun, PARK Seojin',
        youtube: '',
        picture: ['/assets/studentlife/stud-proj/year2/zeth/zeth01.png'],
        video: '',
        course: '',
        faculty: [],
    },
    {
        name: 'Digital Paws',
        shortDescription:
            'Digital Paws addresses the challenges faced in locating lost dogs in Hong Kong, primarily arising from the absence of proper identification through pet microchipping. Our project aims to develop a comprehensive dog tracking system that fosters a robust community of dog owners, while also serving as a reliable master identification tool for keeping track of their beloved pets.',
        description:
            'Digital Paws addresses the challenges faced in locating lost dogs in Hong Kong, primarily arising from the absence of proper identification through pet microchipping. Our project aims to develop a comprehensive dog tracking system that fosters a robust community of dog owners, while also serving as a reliable master identification tool for keeping track of their beloved pets.',
        members: 'LAU Ho Fung, TSE Ka Ming, WAN Yan Ki WU, Chun Ming',
        youtube: '',
        picture: [
            '/assets/studentlife/stud-proj/year3/digitalpaws/digitalpaws01.png',
        ],
        video: '',
        course: '',
        faculty: [],
    },
    {
        name: 'F.I.B.E.',
        shortDescription:
            'F.I.B.E. is a smart snooker table with a score display and sensory feedback of light and sound capabilities. It aims to bring attention to billiard sports through an interactive product. Using computer vision technology, it detects and reacts to the situation on the table in real-time, providing players with information and sensory feedback if conditions are met.',
        description:
            'F.I.B.E. is a smart snooker table with a score display and sensory feedback of light and sound capabilities. It aims to bring attention to billiard sports through an interactive product. Using computer vision technology, it detects and reacts to the situation on the table in real-time, providing players with information and sensory feedback if conditions are met.',
        members: 'JI Yu, LAM Chun Yin, YUAN Qiaoyaxiao, HO Wing Tung',
        youtube: '',
        picture: ['/assets/studentlife/stud-proj/year3/fibe/fibe01.png'],
        video: '',
        course: '',
        faculty: [],
    },
    {
        name: 'Surfive',
        shortDescription:
            'Surfive is a groundbreaking water transportation service that aims to enhance and elevate the experience of being on the water. Our cutting-edge solution revolves around an electric buoyant, specially designed for individual riders, resembling a watertaxi. Equipped with a powerful motor, it ensures a smooth and enjoyable ride.\n\n To prioritize safety and convenience, we offer a wearable beacon that incorporates GPS functionality and a magnetic switch. In the event that users feel tired or require assistance, they can activate the magnetic switch, prompting the buoyant to autonomously navigate towards their location. Once connected, users have the flexibility to manually control their journey, whether they choose to return to their starting point or explore new destinations effortlessly.',
        description:
            'Surfive is a groundbreaking water transportation service that aims to enhance and elevate the experience of being on the water. Our cutting-edge solution revolves around an electric buoyant, specially designed for individual riders, resembling a watertaxi. Equipped with a powerful motor, it ensures a smooth and enjoyable ride.\n\n To prioritize safety and convenience, we offer a wearable beacon that incorporates GPS functionality and a magnetic switch. In the event that users feel tired or require assistance, they can activate the magnetic switch, prompting the buoyant to autonomously navigate towards their location. Once connected, users have the flexibility to manually control their journey, whether they choose to return to their starting point or explore new destinations effortlessly.',
        members: 'CHAN Ho, FISILO William Arvin, LEE Ho Yin, WANG Chaoyu',
        youtube: '',
        picture: ['/assets/studentlife/stud-proj/year3/surfive/surfive01.png'],
        video: '',
        course: '',
        faculty: [],
    },
    {
        name: 'Indoor Lighting',
        shortDescription:
            'Introducing a new lighting system for buildings that utilizes sunlight. A collector on the rooftop or wall captures and guides sunlight indoors via fibers. LED lights supplement when sunlight is insufficient. This sustainable solution reduces energy usage and provides consistent lighting conditions.',
        description:
            'Introducing a new lighting system for buildings that utilizes sunlight. A collector on the rooftop or wall captures and guides sunlight indoors via fibers. LED lights supplement when sunlight is insufficient. This sustainable solution reduces energy usage and provides consistent lighting conditions.',
        members: 'HOU Liangheng, LI Zerui',
        youtube: '',
        picture: [
            '/assets/studentlife/stud-proj/year3/indoorlighting/indoorlighting01.png',
        ],
        video: '',
        course: '',
        faculty: [],
    },
    {
        name: 'Biking',
        shortDescription:
            'The team proposed several subsystems for the biking safety enhancement.\n Subsystem 1: Augmented Awareness Enhancement System (AAES) dedicated to enhancing cyclist safety by addressing the challenge of limited awareness and difficulty in monitoring blindspots for hazards. \n Subsystem 2: Low Distractive Information System (LDIS) to provide an abundance of information to cyclists, such as safety warnings, riding details, and communication, without the risk of distracting them during their ride and compromising their safety. \n Subsystem 3: A multi-sensing helmet to enhance the safety of e-bikers and motobikers.',
        description:
            'The team proposed several subsystems for the biking safety enhancement.\n Subsystem 1: Augmented Awareness Enhancement System (AAES) dedicated to enhancing cyclist safety by addressing the challenge of limited awareness and difficulty in monitoring blindspots for hazards. \n Subsystem 2: Low Distractive Information System (LDIS) to provide an abundance of information to cyclists, such as safety warnings, riding details, and communication, without the risk of distracting them during their ride and compromising their safety. \n Subsystem 3: A multi-sensing helmet to enhance the safety of e-bikers and motobikers.',

        members:
            'CHANDRA Feren Aurelia Dyka, FAN Tsz Ho, KWAN Cheuk Yiu Tweety, LEE Wing Hong, WONG Lai Yin Garmisch',
        youtube: '',
        picture: ['/assets/studentlife/stud-proj/year3/biking/biking01.png'],
        video: '',
        course: '',
        faculty: [],
    },
    {
        name: 'Sailing',
        shortDescription:
            'The team proposed an IoT system to: \n Target 1: Simultaneously collect time-series data, including quantitative sailboat and sailor dynamic states in Optimist and Laser classes while providing a way to represent their corresponding quantitative performance.​\nTarget 2: Guarantee the safety of sailors during training and racing in open water environments, particularly when the coach is overseeing multiple sailors who might be out of sight.​',
        description:
            'The team proposed an IoT system to: \n Target 1: Simultaneously collect time-series data, including quantitative sailboat and sailor dynamic states in Optimist and Laser classes while providing a way to represent their corresponding quantitative performance.​\nTarget 2: Guarantee the safety of sailors during training and racing in open water environments, particularly when the coach is overseeing multiple sailors who might be out of sight.​',

        members:
            'CHEN Jiayu, CHEUNG Chun To, WONG King Sang, WONG Pak Long, ZHANG Yuming',
        youtube: '',
        picture: ['/assets/studentlife/stud-proj/year3/sailing/sailing01.png'],
        video: '',
        course: '',
        faculty: [],
    },
    {
        name: 'TrackBot',
        shortDescription:
            'An AI running companion in field tracks that provides new runners the assistance, motivation and guidance to start learning to run.​',
        description:
            'An AI running companion in field tracks that provides new runners the assistance, motivation and guidance to start learning to run.​',

        members: 'CHAN Ho Ching, LI Andrew King Lun, WANG Chaoyu',
        youtube: '',
        picture: [
            '/assets/studentlife/stud-proj/year4/trackbot/trackbot01.png',
        ],
        video: '',
        course: '',
        faculty: [],
    },
    {
        name: 'Dash',
        shortDescription:
            'Dynamic Adaptive Study Hub, DASH, is an AI-infused online learning platform for university students to enhance the efficiency and effectiveness of learning with existing lecture recordings.​',
        description:
            'Dynamic Adaptive Study Hub, DASH, is an AI-infused online learning platform for university students to enhance the efficiency and effectiveness of learning with existing lecture recordings.​',

        members: 'CHANG Tianxing, CHOI Lok Man, GUO Qixuan',
        youtube: '',
        picture: ['/assets/studentlife/stud-proj/year4/dash/dash01.png'],
        video: '',
        course: '',
        faculty: [],
    },
    {
        name: 'Money Life',
        shortDescription:
            'A mobile educational app that uses a gamification approach to raise financial literacy for 9-12 years old students.​',
        description:
            'A mobile educational app that uses a gamification approach to raise financial literacy for 9-12 years old students​.',

        members: 'FUNG Chak Sang, YU Kin Wai, CHOI Yiu Hei',
        youtube: '',
        picture: [
            '/assets/studentlife/stud-proj/year4/moneylife/moneylife01.png',
        ],
        video: '',
        course: '',
        faculty: [],
    },
    {
        name: 'BIPV Mounting Robot',
        shortDescription:
            'A construction robot that reduces the labor cost and alleviates occupational injury while installing BIPV panels on building facades.​',
        description:
            'A construction robot that reduces the labor cost and alleviates occupational injury while installing BIPV panels on building facades​.',
        members: 'LUK Wang Lok, TSE Yui Kai, WANG Shijie, YU Mukai, SONG Chen',
        youtube: '',
        picture: ['/assets/studentlife/stud-proj/year4/bipv/bipv01.png'],
        video: '',
        course: '',
        faculty: [],
    },
    {
        name: 'Gulio',
        shortDescription:
            'A robot playmate, Gulio, that tells, acts and creates stories by Generative AI, offering an alternative to children screentime.',
        description:
            'A robot playmate, Gulio, that tells, acts and creates stories by Generative AI, offering an alternative to children screentime.',
        members: 'KWAN Cheuk Kit, WONG Tsz Chun, ZHAO Zihan, WAN Ho Yan',
        youtube: '',
        picture: ['/assets/studentlife/stud-proj/year4/gulio/gulio01.png'],
        video: '',
        course: '',
        faculty: [],
    },
    {
        name: 'AnyWear',
        shortDescription:
            'A wearable device that monitor, signal and mitigate heat stroke for people performing outdoor activities (e.g., hikers, mountain bikers).',
        description:
            'A wearable device that monitor, signal and mitigate heat stroke for people performing outdoor activities (e.g., hikers, mountain bikers).',
        members: 'LAI Kam Wai, LAI Yue Hin Alexander, ZHONG Haosong',
        youtube: '',
        picture: ['/assets/studentlife/stud-proj/year4/anywear/anywear01.png'],
        video: '',
        course: '',
        faculty: [],
    },
    {
        name: 'BrewSense',
        shortDescription:
            'A device that provides coffee brewers a real-time visualization of the correlation between the brewing process and the properties that affects the taste of the coffee.',
        description:
            'A device that provides coffee brewers a real-time visualization of the correlation between the brewing process and the properties that affects the taste of the coffee.',
        members: 'CHAN Ming Chun, GONG Chuyue, HO Wing Tung, LEUNG Wai Man',
        youtube: '',
        picture: [
            '/assets/studentlife/stud-proj/year4/brewsense/brewsense01.png',
        ],
        video: '',
        course: '',
        faculty: [],
    },
];

studentProjs = studentProjs.sort((a, b) => a.name.localeCompare(b.name));

export default function StudentProjectsBlock() {
    const [readMore, setReadMore] = useState<StudentProject | null>(null);

    return (
        <div className="overflow-clip flex flex-col gap-section-title-gap">
            <h1 className="lg:block hidden text-h1 offset-text-background">
                Student Projects
            </h1>

            <div className="flex flex-col gap-component-gap-sm">
                <div className="lg:grid flex flex-col grid-cols-[repeat(auto-fill,minmax(360px,1fr))] auto-cols-min gap-component-gap-sm">
                    {studentProjs.map((comp, index) => (
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
