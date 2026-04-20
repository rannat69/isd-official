import { LANGUAGE_CHINESE_SIMPLIFIED, LANGUAGE_ENGLISH } from '@/app/constants';

import Res1 from '@/assets/academics/mphil-in-tie/res-area/1.svg';
import Res1En from '@/assets/academics/mphil-in-tie/res-area/1.en.svg';
import Res1Cn from '@/assets/academics/mphil-in-tie/res-area/1.cn.svg';

import Res2 from '@/assets/academics/mphil-in-tie/res-area/2.svg';
import Res2En from '@/assets/academics/mphil-in-tie/res-area/2.en.svg';
import Res2Cn from '@/assets/academics/mphil-in-tie/res-area/2.cn.svg';

import Res3 from '@/assets/academics/mphil-in-tie/res-area/3.svg';
import Res3En from '@/assets/academics/mphil-in-tie/res-area/3.en.svg';
import Res3Cn from '@/assets/academics/mphil-in-tie/res-area/3.cn.svg';

import Res4 from '@/assets/academics/mphil-in-tie/res-area/4.svg';
import Res4En from '@/assets/academics/mphil-in-tie/res-area/4.en.svg';
import Res4Cn from '@/assets/academics/mphil-in-tie/res-area/4.cn.svg';

import Res5 from '@/assets/academics/mphil-in-tie/res-area/5.svg';
import Res5En from '@/assets/academics/mphil-in-tie/res-area/5.en.svg';
import Res5Cn from '@/assets/academics/mphil-in-tie/res-area/5.cn.svg';

import Image, { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';

export default function ResearchAreasBlock() {
    const [language, setLanguage] = useState<string | null>(null);

    useEffect(() => {
        setLanguage(sessionStorage.getItem('language'));
    }, []);

    /*const areas = [
        {
            title: 'Sustainable-Tech',
            description:
                'Energy storage solutions, zero-carbon architecture, urban 3D reconstruction, and modular building design for sustainable cities and infrastructure.',
            link: '/research/#sustainable-tech',
        },
        {
            title: 'Marine-Tech',
            description:
                'Maritime communication systems, non-disturbing marine surveying, underwater manipulation, and bioinspired ocean technology solutions.',
            link: '/research/#marine-tech',
        },
        {
            title: 'Health-Tech',
            description:
                'Wearable biomarker sensing, food 3D printing, elderly-friendly smart homes, ubiquitous computing, and minimally invasive surgical tools.',
            link: '/research/#health-tech',
        },
        {
            title: 'Design-Tech',
            description:
                '3D asset generation, video creation, fashion design, robot-aware assembly, wearable robotics, and AR/VR creative experiences.',
            link: '/research/#design-tech',
        },
        {
            title: 'Emergent-Themes',
            description:
                'Low-altitude economy infrastructure, construction automation, 3D LLM agents, autonomous driving simulators, and socio-technical AI integration.',
            link: '/research/#emergent-themes',
        },
    ];*/

    return (
        <div className="flex flex-col gap-[14px]">
            <h2 className="lg:text-[36px] text-h2 leading-[36px] font-bold text-isd-primary">
                {(language === LANGUAGE_ENGLISH || !language) &&
                    'Research Areas'}
                {language === LANGUAGE_CHINESE_SIMPLIFIED && '研究领域'}
            </h2>

            <p>
                {(language === LANGUAGE_ENGLISH || !language) &&
                    '     Through the program study, candidates will establish a robust                foundation in the following areas, a profound sense of                curiosity, and an aptitude for learning are ideal for this                program.'}
                {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                    '通过本项目的淬炼，学生将不仅在以下领域构筑坚实的知识堡垒，更将培养出敏锐的好奇心与卓越的学习韧性。如果您渴望探索、乐于求知，这里将是您的理想舞台。'}
            </p>

            <div className="flex flex-col gap-component-gap-sm">
                {(() => {
                    const isCn = language === LANGUAGE_CHINESE_SIMPLIFIED;
                    const textImgs = isCn
                        ? [Res1Cn, Res4Cn, Res3Cn, Res2Cn, Res5Cn]
                        : [Res1En, Res4En, Res3En, Res2En, Res5En];

                    const ResLink = ({
                        img,
                        textImg,
                        alt,
                        href,
                    }: {
                        img: StaticImageData;
                        textImg: StaticImageData;
                        alt: string;
                        href: string;
                    }) => (
                        <a href={href}>
                            <Image src={img} alt={alt} className="mx-auto" />
                            <Image
                                src={textImg}
                                alt={alt}
                                className="mt-[20px] mx-auto"
                            />
                        </a>
                    );

                    return (
                        <div className="flex flex-col md:flex-row gap-component-gap">
                            <div className="flex flex-col gap-section-gap">
                                <ResLink
                                    img={Res1}
                                    textImg={textImgs[0]}
                                    alt="Design tech"
                                    href="/research/#design-tech"
                                />
                                <ResLink
                                    img={Res4}
                                    textImg={textImgs[1]}
                                    alt="Marine tech"
                                    href="/research/#marine-tech"
                                />
                            </div>
                            <div className="flex flex-col justify-center">
                                <ResLink
                                    img={Res3}
                                    textImg={textImgs[2]}
                                    alt="Sustainable tech"
                                    href="/research/#sustainable-tech"
                                />
                            </div>
                            <div className="flex flex-col gap-section-gap">
                                <ResLink
                                    img={Res2}
                                    textImg={textImgs[3]}
                                    alt="Health tech"
                                    href="/research/#health-tech"
                                />
                                <ResLink
                                    img={Res5}
                                    textImg={textImgs[4]}
                                    alt="Emergent themes"
                                    href="/research/#emergent-themes"
                                />
                            </div>
                        </div>
                    );
                })()}
            </div>

            {/* <div className="flex flex-col gap-[14px]">
                {areas.map((area) => (
                    <div key={area.title} className="flex flex-col gap-[14px]">
                        <h3 className="text-isd-secondary font-bold cursor:pointer hover:underline">
                            <a href={area.link}>{area.title}</a>
                        </h3>
                        <p className="text-md">{area.description}</p>
                    </div>
                ))}
            </div>*/}
        </div>
    );
}
