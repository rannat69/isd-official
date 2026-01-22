import {
    LANGUAGE_CHINESE_SIMPLIFIED,
    LANGUAGE_CHINESE_TRADITIONAL,
    LANGUAGE_ENGLISH,
} from '@/app/constants';
import EduObj1En from '@/assets/academics/mphil-in-tie/edu-obj1.eng.png';
import EduObj1ZhSi from '@/assets/academics/mphil-in-tie/edu-obj1.zh.simp.png';
import Image from 'next/image';

const language = sessionStorage.getItem('language');

const objectives = [
    {
        title:
            language === LANGUAGE_ENGLISH || !language
                ? 'A research-driven entrepreneurship education'
                : language === LANGUAGE_CHINESE_SIMPLIFIED
                  ? '科研驱动的创业教育'
                  : language === LANGUAGE_CHINESE_TRADITIONAL
                    ? ''
                    : '',
        body:
            language === LANGUAGE_ENGLISH || !language
                ? 'This approach ensures graduates are well-equipped to be technical experts in specific areas and are able to originate solutions and overcome technical barriers of complex problems.'
                : language === LANGUAGE_CHINESE_SIMPLIFIED
                  ? '此教学路径确保毕业生不仅能成为特定领域的顶尖技术专家，更具备从源头构思解决方案、攻克复杂技术壁垒的卓越能力。'
                  : language === LANGUAGE_CHINESE_TRADITIONAL
                    ? ''
                    : '',
    },
    {
        title: 'A research-to-industry ecosystem',
        body: 'A synergistic ecosystem linking students with industry practitioners, investors, and other relevant stakeholders to offer practical experience in commercializing original research outcomes to resolve real-life challenges.',
    },
    {
        title: 'Collaborative learning and personalized research endeavours',
        body: 'TIE promotes teamwork and individual research contribution. Students will pursue individual thesis topics linked to a prototype/service developed by their team.',
    },
];

export default function EducationalObjectiveBlock() {
    return (
        <div className="flex flex-col gap-[24px]">
            <div
                className="dot-pattern before:bottom-[-200px] before:left-[-400px] [--dot-color:var(--isd-secondary-1)]"
                aria-hidden
            />
            <h2 className="lg:text-[36px] text-h2 leading-[36px] font-bold text-isd-primary">
                {(language === LANGUAGE_ENGLISH || !language) &&
                    'Educational Objectives'}
                {language === LANGUAGE_CHINESE_SIMPLIFIED && '教育目标'}
            </h2>

            <div className="flex flex-col gap-[12px]">
                <p>
                     
                    {(language === LANGUAGE_ENGLISH || !language) &&
                        'The TIE program encapsulates HKUST’s accumulated experience                    in fostering innovation and entrepreneurship and propels                    students to the forefront of technological advancement and                    enterprise creation. TIE has three key features:'}{' '}
                    {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                        'TIE 课程汇聚了香港科技大学（港科大）在创新创业领域深耕多年的宝贵经验，旨在助力学生跻身技术革新与企业创办的最前沿。该课程拥有三大核心支柱：'}
                </p>
                {(language === LANGUAGE_ENGLISH || !language) && (
                    <a href="https://prog-crs.hkust.edu.hk/pgprog/2026-27/mphil-tie ">
                        <Image src={EduObj1En} alt="Educational Objectives" />
                    </a>
                )}

                {language === LANGUAGE_CHINESE_SIMPLIFIED && (
                    <a href="https://prog-crs.hkust.edu.hk/pgprog/2026-27/mphil-tie ">
                        <Image src={EduObj1ZhSi} alt="Educational Objectives" />
                    </a>
                )}
                {objectives.map((objective) => (
                    <div key={objective.title} className="flex flex-col">
                        <h3 className="text-isd-secondary font-bold">
                            {objective.title}
                        </h3>
                        <p className="text-isd-font-3">{objective.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
