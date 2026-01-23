import { LANGUAGE_CHINESE_SIMPLIFIED, LANGUAGE_ENGLISH } from '@/app/constants';
import Curriculum1 from '@/assets/academics/mphil-in-tie/curiculum.1.1.svg';
import Curriculum2 from '@/assets/academics/mphil-in-tie/curiculum.1.2.svg';
import Curriculum3 from '@/assets/academics/mphil-in-tie/curiculum.1.3.svg';
import Curriculum1CnSimp from '@/assets/academics/mphil-in-tie/curiculum.1.1.cn.simp.svg';
import Curriculum2CnSimp from '@/assets/academics/mphil-in-tie/curiculum.1.2.cn.simp.svg';
import Curriculum3CnSimp from '@/assets/academics/mphil-in-tie/curiculum.1.3.cn.simp.svg';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function CurriculumBlock() {
    const [language, setLanguage] = useState<string | null>(null);

    useEffect(() => {
        setLanguage(sessionStorage.getItem('language'));
    }, []);

    return (
        <div className="flex flex-col gap-[24px]">
            <h2 className="lg:text-[36px] hidden lg:block text-h2 leading-[36px] font-bold text-isd-primary">
                {(language === LANGUAGE_ENGLISH || !language) && 'Curriculum'}
                {language === LANGUAGE_CHINESE_SIMPLIFIED && '课程设置'}
            </h2>

            <div className="flex flex-col gap-component-gap-sm">
                <p>
                    <h3 className="text-isd-secondary font-bold">
                        {(language === LANGUAGE_ENGLISH || !language) &&
                            'Program Structure'}
                        {language === LANGUAGE_CHINESE_SIMPLIFIED && '课程结构'}
                    </h3>
                    {(language === LANGUAGE_ENGLISH || !language) && (
                        <>
                            The TIE program is a full-time, 2-year journey
                            emphasizing&nbsp;
                            <b>
                                team-based product/service prototyping, industry
                                engagement, and individual thesis research.
                            </b>
                        </>
                    )}

                    {language === LANGUAGE_CHINESE_SIMPLIFIED && (
                        <>
                            TIE
                            课程是一项为期两年的全日制培养计划，核心聚焦于&nbsp;
                            <b>
                                基于团队的产品/服务原型开发、行业深度参与以及个人学位论文研究。
                            </b>
                        </>
                    )}
                </p>
                {(language === LANGUAGE_ENGLISH || !language) && (
                    <>
                        <Image src={Curriculum1} alt="Curriculum" />
                        <Image src={Curriculum2} alt="Curriculum Timeline" />
                        <Image src={Curriculum3} alt="Curriculum Roadmap" />
                    </>
                )}
                {language === LANGUAGE_CHINESE_SIMPLIFIED && (
                    <>
                        <Image src={Curriculum1CnSimp} alt="Curriculum" />
                        <Image
                            src={Curriculum2CnSimp}
                            alt="Curriculum Timeline"
                        />
                        <Image
                            src={Curriculum3CnSimp}
                            alt="Curriculum Roadmap"
                        />
                    </>
                )}
                {(language === LANGUAGE_ENGLISH || !language) && (
                    <>
                        <p>
                            Students are equipped for real-world challenges:
                            from market discovery, team formation, MVP
                            development, testing, pitching, regulatory
                            navigation,
                        </p>
                        <p>
                            fundraising, scaling, and (ideally)
                            launch—culminating in both team demonstration and an
                            individual thesis tied to their group’s innovation.
                        </p>

                        <p>
                            To graduate from the TIE programme at HKUST,
                            students must complete :
                        </p>
                        <ul>
                            <li className="flex before:text-center before:content-['•'] leading-[26px] before:min-w-component-gap-sm">
                                <b>12 credits of specialized coursework</b>
                                 designed to build core competencies in
                                technology innovation and entrepreneurship.
                            </li>

                            <li className=" flex before:text-center before:content-['•'] leading-[26px] before:min-w-component-gap-sm">
                                <b>An independent thesis research project</b>
                                 demonstrating deep technical and
                                entrepreneurial expertise and original
                                problem-solving.
                            </li>
                        </ul>

                        <p>
                            For details about the curriculum and specific course
                            offerings, please visit the&nbsp;
                            <a
                                href="https://prog-crs.hkust.edu.hk/pgprog/2026-27/mphil-tie"
                                className="font-bold text-isd-secondary underline"
                            >
                                Program Catalog.
                            </a>
                        </p>

                        <p>
                            For details about the University&apos;s policy on
                            Intellectual Property, please visit&nbsp;
                            <a
                                href="https://okt.hkust.edu.hk"
                                className="font-bold text-isd-secondary underline"
                            >
                                Office of Knowledge Transfer.
                            </a>
                        </p>
                    </>
                )}

                {language === LANGUAGE_CHINESE_SIMPLIFIED && (
                    <>
                        <p>
                            学生将全面赋能以应对现实挑战：
                            涵盖从市场洞察、团队组建、最小可行性产品（MVP）开发、测试、商业路演、法规应对、资金募集、规模化扩张，直至（理想情况下的）产品发布。学习成果最终凝结为团队项目演示以及一份与团队创新成果紧密关联的个人学位论文。
                        </p>

                        <p>
                            欲取得香港科技大学科技创新与创业（TIE）硕士学位，学生须修满并完成：
                        </p>
                        <ul>
                            <li className="flex before:text-center before:content-['•'] leading-[26px] before:min-w-component-gap-sm">
                                <b>12个学分的专业课程：</b>
                                旨在构建科技创新与创业领域的核心竞争力。
                            </li>

                            <li className=" flex before:text-center before:content-['•'] leading-[26px] before:min-w-component-gap-sm">
                                <b>独立学位论文研究项目：</b>
                                需体现深厚的技术造诣、创业专业能力及原创性的问题解决能力。
                            </li>
                        </ul>

                        <p>
                            欲了解课程大纲及具体科目详情，请参阅&nbsp;
                            <a
                                href="https://prog-crs.hkust.edu.hk/pgprog/2026-27/mphil-tie"
                                className="font-bold text-isd-secondary underline"
                            >
                                课程目录。
                            </a>
                        </p>

                        <p>
                            有关大学知识产权政策的详情，请访问t&nbsp;
                            <a
                                href="https://okt.hkust.edu.hk"
                                className="font-bold text-isd-secondary underline"
                            >
                                知识转移办公室网站。
                            </a>
                        </p>
                    </>
                )}
            </div>
        </div>
    );
}
