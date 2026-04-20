
import Changyingxiang from '@/assets/academics/mphil-in-tie/fac-adv/changyingxiang.svg';
import Jacleung from '@/assets/academics/mphil-in-tie/fac-adv/jacleung.svg';
import Qianzhang from '@/assets/academics/mphil-in-tie/fac-adv/qianzhang.svg';
import Qijiashao from '@/assets/academics/mphil-in-tie/fac-adv/qijiashao.svg';
import Robscharff from '@/assets/academics/mphil-in-tie/fac-adv/robscharff.svg';
import Saikityeung from '@/assets/academics/mphil-in-tie/fac-adv/saikityeung.svg';
import Winnieleung from '@/assets/academics/mphil-in-tie/fac-adv/winnieleung.svg';
import Zexiangli from '@/assets/academics/mphil-in-tie/fac-adv/zexiangli.svg';
import  Image from 'next/image';
import { LANGUAGE_CHINESE_SIMPLIFIED, LANGUAGE_ENGLISH } from '@/app/constants';
import { useEffect, useState } from 'react';

export default function FacultyAdvisorsBlock() {
    const [language, setLanguage] = useState<string | null>(null);

    useEffect(() => {
        setLanguage(sessionStorage.getItem('language'));
    }, []);

    return (
        <div className="flex flex-col gap-[24px]">
            <h2 className="lg:text-[36px] hidden lg:block text-h2 leading-[36px] font-bold text-isd-primary">
                {(language === LANGUAGE_ENGLISH || !language) &&
                    'Faculty & Advisors'}
                {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                    '师资队伍与顾问委员会'}
            </h2>

            <div className="flex flex-col gap-component-gap-sm">
                {(language === LANGUAGE_ENGLISH || !language) && (
                    <div className="flex flex-col  gap-4">
                        {/* <Image src={FacAdv1} alt="Faculty and advisors" />*/}
                          iv className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-4xl mx-auto px-4">
                            <div className="flex flex-col items-center text-center">
                                <Image
                                    src={Qianzhang}
                                    alt="Faculty and advisors"
                                    className=" object-cover h-[250px]"
                                />
                                <p className="text-isd-font-3 font-bold">
                                    Qian ZHANG
                                </p>
                                <p className="text-isd-font-3 font-bold">
                                    Head of ISD
                                </p>
                                <p className="text-isd-font-3 font-bold">
                                    Tencent Professor of Engineering and Chair
                                    Professor of CSE
                                </p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <Image
                                    src={Zexiangli}
                                    alt="Faculty and advisors"
                                    className=" object-cover h-[250px]"
                                />
                                <p className="text-isd-font-3 font-bold">
                                    Zexiang LI{' '}
                                </p>
                                <p className="text-isd-font-3 font-bold">
                                    &nbsp;
                                </p>
                                <p className="text-isd-font-3 font-bold">
                                    Professor, Division of Integrative Systems
                                    and Design{' '}
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 items-start">
                            <div className="flex flex-col items-center text-center">
                                <Image
                                    src={Saikityeung}
                                    alt="Faculty and advisors"
                                    className="md:w-full md:h-[220px] h-[200px] object-cover"
                                />
                                <p className="text-isd-font-3 font-bold">
                                    Sai Kit YEUNG
                                </p>
                                <p className="text-isd-font-3 font-bold">
                                    &nbsp;
                                </p>
                                <p className="text-isd-font-3 font-bold">
                                    Professor
                                </p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <Image
                                    src={Winnieleung}
                                    alt="Faculty and advisors"
                                    className="md:w-full h-[220px] object-cover"
                                />
                                <p className="text-isd-font-3 font-bold">
                                    Winnie LEUNG
                                </p>
                                <p className="text-isd-font-3 font-bold">
                                    &nbsp;
                                </p>
                                <p className="text-isd-font-3 font-bold">
                                    Associate Professor in Engineering Education
                                </p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <Image
                                    src={Changyingxiang}
                                    alt="Faculty and advisors"
                                    className="md:w-full h-[220px] object-cover"
                                />
                                <p className="text-isd-font-3 font-bold">
                                    Changying XIANG
                                </p>
                                <p className="text-isd-font-3 font-bold">
                                    &nbsp;
                                </p>
                                <p className="text-isd-font-3 font-bold">
                                    Assistant Professor
                                </p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <Image
                                    src={Qijiashao}
                                    alt="Faculty and advisors"
                                    className="md:w-full h-[220px] object-cover"
                                />
                                <p className="text-isd-font-3 font-bold">
                                    Qijia SHAO
                                </p>
                                <p className="text-isd-font-3 font-bold">
                                    &nbsp;
                                </p>
                                <p className="text-isd-font-3 font-bold">
                                    Assistant Professor
                                </p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <Image
                                    src={Robscharff}
                                    alt="Faculty and advisors"
                                    className="md:w-full h-[220px] object-cover"
                                />
                                <p className="text-isd-font-3 font-bold">
                                    Rob SCHARFF
                                </p>
                                <p className="text-isd-font-3 font-bold">
                                    &nbsp;
                                </p>
                                <p className="text-isd-font-3 font-bold">
                                    Assistant Professor
                                </p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <Image
                                    src={Jacleung}
                                    alt="Faculty and advisors"
                                    className="md:w-full h-[220px] object-cover"
                                />
                                <p className="text-isd-font-3 font-bold">
                                    Jac LEUNG
                                </p>
                                <p className="text-isd-font-3 font-bold">
                                    &nbsp;
                                </p>
                                <p className="text-isd-font-3 font-bold">
                                    Lecturer
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {language === LANGUAGE_CHINESE_SIMPLIFIED && (
                    <div className="flex flex-col  gap-4">
                        {/* <Image src={FacAdv1} alt="Faculty and advisors" />*/}
                          iv className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-4xl mx-auto px-4">
                            <div className="flex flex-col items-center text-center">
                                <Image
                                    src={Qianzhang}
                                    alt="Faculty and advisors"
                                    className=" object-cover h-[250px]"
                                />
                                <p className="text-isd-font-3 font-bold">
                                    张黔{' '}
                                </p>
                                <p className="text-isd-font-3 font-bold">
                                    综合系统与设计学部主任
                                </p>
                                <p className="text-isd-font-3 font-bold">
                                    腾讯工程学教授 及 计算机科学与工程系讲座教授
                                </p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <Image
                                    src={Zexiangli}
                                    alt="Faculty and advisors"
                                    className=" object-cover h-[250px]"
                                />
                                <p className="text-isd-font-3 font-bold">
                                    李泽湘
                                </p>
                                <p className="text-isd-font-3 font-bold">
                                    &nbsp;
                                </p>
                                <p className="text-isd-font-3 font-bold">
                                    综合系统与设计学部教授
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 items-start">
                            <div className="flex flex-col items-center text-center">
                                <Image
                                    src={Saikityeung}
                                    alt="Faculty and advisors"
                                    className="md:w-full h-[220px] object-cover"
                                />
                                <p className="text-isd-font-3 font-bold">
                                    杨世杰
                                </p>
                                <p className="text-isd-font-3 font-bold">
                                    &nbsp;
                                </p>
                                <p className="text-isd-font-3 font-bold">
                                    教授
                                </p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <Image
                                    src={Winnieleung}
                                    alt="Faculty and advisors"
                                    className="md:w-full h-[220px] object-cover"
                                />
                                <p className="text-isd-font-3 font-bold">
                                    梁淑慧
                                </p>
                                <p className="text-isd-font-3 font-bold">
                                    &nbsp;
                                </p>
                                <p className="text-isd-font-3 font-bold">
                                    工程教育副教授{' '}
                                </p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <Image
                                    src={Changyingxiang}
                                    alt="Faculty and advisors"
                                    className="md:w-full h-[220px] object-cover"
                                />
                                <p className="text-isd-font-3 font-bold">
                                    向畅颖
                                </p>
                                <p className="text-isd-font-3 font-bold">
                                    &nbsp;
                                </p>
                                <p className="text-isd-font-3 font-bold">
                                    助理教授
                                </p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <Image
                                    src={Qijiashao}
                                    alt="Faculty and advisors"
                                    className="md:w-full h-[220px] object-cover"
                                />
                                <p className="text-isd-font-3 font-bold">
                                    邵琪佳
                                </p>
                                <p className="text-isd-font-3 font-bold">
                                    &nbsp;
                                </p>
                                <p className="text-isd-font-3 font-bold">
                                    助理教授
                                </p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <Image
                                    src={Robscharff}
                                    alt="Faculty and advisors"
                                    className="md:w-full h-[220px] object-cover"
                                />
                                <p className="text-isd-font-3 font-bold">
                                    Rob SCHARFF
                                </p>
                                <p className="text-isd-font-3 font-bold">
                                    &nbsp;
                                </p>
                                <p className="text-isd-font-3 font-bold">
                                    助理教授
                                </p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <Image
                                    src={Jacleung}
                                    alt="Faculty and advisors"
                                    className="md:w-full h-[220px] object-cover"
                                />
                                <p className="text-isd-font-3 font-bold">
                                    梁嘉乐
                                </p>
                                <p className="text-isd-font-3 font-bold">
                                    &nbsp;
                                </p>
                                <p className="text-isd-font-3 font-bold">
                                    讲师
                                </p>
                            </div>
                        </div>
                    </div>
                )}
                         </p>
                                <p className="text-isd-font-3 font-bold">
                                    讲师
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
