import { LANGUAGE_CHINESE_SIMPLIFIED, LANGUAGE_ENGLISH } from '@/app/constants';
import ResDesCnSimp from '@/assets/academics/mphil-in-tie/res.des.cn.simp.png';
import ResSusCnSimp from '@/assets/academics/mphil-in-tie/res.sus.cn.simp.png';
import ResHealthCnSimp from '@/assets/academics/mphil-in-tie/res.health.cn.simp.png';
import ResEmerCnSimp from '@/assets/academics/mphil-in-tie/res.emer.cn.simp.png';
import ResMarCnSimp from '@/assets/academics/mphil-in-tie/res.mar.cn.simp.png';

import ResDes from '@/assets/academics/mphil-in-tie/res.des.png';
import ResSus from '@/assets/academics/mphil-in-tie/res.sus.png';
import ResHealth from '@/assets/academics/mphil-in-tie/res.health.png';
import ResEmer from '@/assets/academics/mphil-in-tie/res.emer.png';
import ResMar from '@/assets/academics/mphil-in-tie/res.mar.png';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ResearchAreasBlock() {
    const [language, setLanguage] = useState<string | null>(null);

    useEffect(() => {
        setLanguage(sessionStorage.getItem('language'));
    }, []);

    const areas = [
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
    ];

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
                {(language === LANGUAGE_ENGLISH || !language) && (
                    <div className="flex gap-component-gap">
                        <div className="flex flex-col gap-section-gap">
                            <a href="/research/#design-tech">
                                <Image src={ResDes} alt="Design tech" />
                            </a>
                            <a href="/research/#marine-tech">
                                <Image src={ResMar} alt="Marine tech" />
                            </a>
                        </div>
                        <div className="flex flex-col justify-center">
                            <a href="/research/#sustainable-tech">
                                <Image src={ResSus} alt="Sustainable tech" />
                            </a>
                        </div>
                        <div className="flex flex-col gap-section-gap">
                            <a href="/research/#health-tech">
                                <Image src={ResHealth} alt="Health tech" />
                            </a>
                            <a href="/research/#emergent-themes">
                                <Image src={ResEmer} alt="Emergent themes" />
                            </a>
                        </div>
                    </div>
                )}

                {language === LANGUAGE_CHINESE_SIMPLIFIED && (
                    <div className="flex gap-component-gap">
                        <div className="flex flex-col gap-section-gap">
                            <a href="/research/#design-tech">
                                <Image src={ResDesCnSimp} alt="Design tech" />
                            </a>
                            <a href="/research/#marine-tech">
                                <Image src={ResMarCnSimp} alt="Marine tech" />
                            </a>
                        </div>
                        <div className="flex flex-col justify-center">
                            <a href="/research/#sustainable-tech">
                                <Image
                                    src={ResSusCnSimp}
                                    alt="Sustainable tech"
                                />
                            </a>
                        </div>
                        <div className="flex flex-col gap-section-gap">
                            <a href="/research/#health-tech">
                                <Image
                                    src={ResHealthCnSimp}
                                    alt="Health tech"
                                />
                            </a>
                            <a href="/research/#emergent-themes">
                                <Image
                                    src={ResEmerCnSimp}
                                    alt="Emergent themes"
                                />
                            </a>
                        </div>
                    </div>
                )}
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
