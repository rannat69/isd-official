import Partner1 from '@/assets/academics/mphil-in-tie/partner1.png';
import Partner2 from '@/assets/academics/mphil-in-tie/partner2.png';
import Partner3 from '@/assets/academics/mphil-in-tie/partner3.png';
import Partner4 from '@/assets/academics/mphil-in-tie/partner4.png';
import Partner5 from '@/assets/academics/mphil-in-tie/partner5.png';
import Partner6 from '@/assets/academics/mphil-in-tie/partner6.png';
import Partner7 from '@/assets/academics/mphil-in-tie/partner7.png';
import Partner8 from '@/assets/academics/mphil-in-tie/partner8.png';
import Partner9 from '@/assets/academics/mphil-in-tie/partner9.png';
import Partner10 from '@/assets/academics/mphil-in-tie/partner10.png';
import Partner11 from '@/assets/academics/mphil-in-tie/partner11.png';
import Partner12 from '@/assets/academics/mphil-in-tie/partner12.png';
import Partner13 from '@/assets/academics/mphil-in-tie/partner13.png';
import Image from 'next/image';
import { LANGUAGE_CHINESE_SIMPLIFIED, LANGUAGE_ENGLISH } from '@/app/constants';
import { useEffect, useState } from 'react';

export default function AcademicAndIndustrialPartnersBlock() {
    const [language, setLanguage] = useState<string | null>(null);

    useEffect(() => {
        setLanguage(sessionStorage.getItem('language'));
    }, []);

    return (
        <div className="flex flex-col gap-[24px]">
            <h2 className="lg:text-[36px] text-h2 leading-[36px] font-bold text-isd-primary">
                {(language === LANGUAGE_ENGLISH || !language) &&
                    'Academic and Industrial Partners'}
                {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                    '学术及业界合作伙伴'}
            </h2>

            <p>
                {(language === LANGUAGE_ENGLISH || !language) &&
                    'The TIE MPhil program is designed to bridge the gap between                academic research and real-world application. Our program                collaborates with a diverse range of academic institutions and                industrial partners to provide students with a comprehensive                learning experience.'}

                {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                    'TIE 哲学硕士（MPhil）项目旨在弥合学术研究与现实应用之间的鸿沟。通过与多元化的学术机构及业界伙伴开展广泛合作，我们致力于为学生提供全方位的学习体验。'}
            </p>

            <div className="flex flex-col">
                <h3 className="text-isd-secondary font-bold mb-[24px]">
                    {(language === LANGUAGE_ENGLISH || !language) &&
                        'Academic Incubators'}
                    {language === LANGUAGE_CHINESE_SIMPLIFIED && '学术孵化'}
                </h3>
                <div className="flex gap-[50px] items-center mb-[24px]">
                    <div>
                        <a href="https://www.olin.edu/">
                            <Image
                                className="h-12 w-full object-contain"
                                src={Partner1}
                                alt="Olin College of Engineering"
                            />
                        </a>
                    </div>
                    <div>
                        <a href="https://www.polimi.it/">
                            <Image
                                className="h-12"
                                src={Partner2}
                                alt="Politecnico"
                            />
                        </a>
                    </div>
                    <div>
                        <a href="https://www.cas.cn/">
                            <Image
                                className="h-12 w-full object-contain"
                                src={Partner3}
                                alt="Chinese Academy of Sciences"
                            />
                        </a>
                    </div>
                    <div>
                        <a href="https://www.fujita-hu.ac.jp/en/">
                            <Image
                                className="h-12 w-full object-contain"
                                src={Partner4}
                                alt="Fujita Health University"
                            />
                        </a>
                    </div>
                </div>
                <h3 className="text-isd-secondary font-bold mb-[24px]">
                    {(language === LANGUAGE_ENGLISH || !language) &&
                        'Partner Incubators'}
                    {language === LANGUAGE_CHINESE_SIMPLIFIED && '协调孵化'}
                </h3>
                <div className="flex gap-[70px] items-center mb-[24px]">
                    <div>
                        <a href="https://en.innoxsz.com/">
                            <Image
                                className="h-12 w-full object-contain"
                                src={Partner5}
                                alt="Innoxsz"
                            />
                        </a>
                    </div>
                    <div>
                        <a href="https://www.xbotpark.com/en/portfolio/">
                            <Image
                                className="h-6 w-full object-contain"
                                src={Partner6}
                                alt="BotPark"
                            />
                        </a>
                    </div>
                    <div>
                        <a href="https://sxic.cqu.edu.cn/mingyue">
                            <Image
                                className="h-12 w-full object-contain"
                                src={Partner7}
                                alt="sxic"
                            />
                        </a>
                    </div>
                    <div>
                        <a href="https://nbtechx.com/?about-us/">
                            <Image
                                className="h-12 w-full object-contain"
                                src={Partner8}
                                alt="BotPark"
                            />
                        </a>
                    </div>
                </div>
                <h3 className="text-isd-secondary font-bold mb-[24px]">
                    {(language === LANGUAGE_ENGLISH || !language) &&
                        '                    Industrial Partners'}
                    {language === LANGUAGE_CHINESE_SIMPLIFIED && '业界合作伙伴'}
                </h3>
                <div className="flex gap-[50px] items-center">
                    <div>
                        <a href="https://www.hkstp.org/">
                            <Image
                                className="h-12 w-full object-contain"
                                src={Partner9}
                                alt="HKSTP"
                            />
                        </a>
                    </div>
                    <div>
                        <a href="https://www.hkcrc.hk/hong-kong-center-construction-robotics-hkcrc">
                            <Image
                                className="h-12"
                                src={Partner10}
                                alt="Politecnico"
                            />
                        </a>
                    </div>
                    <div>
                        <a href="https://www.dji.com/cn">
                            <Image
                                className="h-12 w-full object-contain"
                                src={Partner11}
                                alt="DJI"
                            />
                        </a>
                    </div>
                    <div>
                        <a href="https://www.epropulsion.com/">
                            <Image
                                className="h-12 w-full object-contain"
                                src={Partner12}
                                alt="EPropulsion"
                            />
                        </a>
                    </div>
                    <div>
                        <a href="https://www.taikang.com/">
                            <Image
                                className="h-12 w-full object-contain"
                                src={Partner13}
                                alt="Taikang"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
