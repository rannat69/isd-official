import Changyingxiang from '@/assets/academics/mphil-in-tie/fac-adv/changyingxiang.svg';
import Jacleung from '@/assets/academics/mphil-in-tie/fac-adv/jacleung.svg';
import Qianzhang from '@/assets/academics/mphil-in-tie/fac-adv/qianzhang.svg';
import Qijiashao from '@/assets/academics/mphil-in-tie/fac-adv/qijiashao.svg';
import Robscharff from '@/assets/academics/mphil-in-tie/fac-adv/robscharff.svg';
import Saikityeung from '@/assets/academics/mphil-in-tie/fac-adv/saikityeung.svg';
import Winnieleung from '@/assets/academics/mphil-in-tie/fac-adv/winnieleung.svg';
import Zexiangli from '@/assets/academics/mphil-in-tie/fac-adv/zexiangli.svg';

import Image, { StaticImageData } from 'next/image';
import { LANGUAGE_CHINESE_SIMPLIFIED } from '@/app/constants';
import { useEffect, useState } from 'react';

type FacultyMember = { src: StaticImageData; name: string; role: string; title: string };

const facultyData: Record<'en' | 'zh', { featured: FacultyMember[]; rest: FacultyMember[] }> = {
    en: {
        featured: [
            { src: Qianzhang, name: 'Qian ZHANG', role: 'Head of ISD', title: 'Tencent Professor of Engineering and Chair Professor of CSE' },
            { src: Zexiangli, name: 'Zexiang LI', role: '\u00a0', title: 'Professor, Division of Integrative Systems and Design' },
        ],
        rest: [
            { src: Saikityeung, name: 'Sai Kit YEUNG', role: '\u00a0', title: 'Professor' },
            { src: Winnieleung, name: 'Winnie LEUNG', role: '\u00a0', title: 'Associate Professor in Engineering Education' },
            { src: Changyingxiang, name: 'Changying XIANG', role: '\u00a0', title: 'Assistant Professor' },
            { src: Qijiashao, name: 'Qijia SHAO', role: '\u00a0', title: 'Assistant Professor' },
            { src: Robscharff, name: 'Rob SCHARFF', role: '\u00a0', title: 'Assistant Professor' },
            { src: Jacleung, name: 'Jac LEUNG', role: '\u00a0', title: 'Lecturer' },
        ],
    },
    zh: {
        featured: [
            { src: Qianzhang, name: '张黔', role: '综合系统与设计学部主任', title: '腾讯工程学教授 及 计算机科学与工程系讲座教授' },
            { src: Zexiangli, name: '李泽湘', role: '\u00a0', title: '综合系统与设计学部教授' },
        ],
        rest: [
            { src: Saikityeung, name: '杨世杰', role: '\u00a0', title: '教授' },
            { src: Winnieleung, name: '梁淑慧', role: '\u00a0', title: '工程教育副教授' },
            { src: Changyingxiang, name: '向畅颖', role: '\u00a0', title: '助理教授' },
            { src: Qijiashao, name: '邵琪佳', role: '\u00a0', title: '助理教授' },
            { src: Robscharff, name: 'Rob SCHARFF', role: '\u00a0', title: '助理教授' },
            { src: Jacleung, name: '梁嘉乐', role: '\u00a0', title: '讲师' },
        ],
    },
};

function FacultyCard({ member, imgClass }: { member: FacultyMember; imgClass: string }) {
    return (
        <div className="flex flex-col items-center text-center">
            <Image src={member.src} alt="Faculty and advisors" className={imgClass} />
            <p className="text-isd-font-3 font-bold">{member.name}</p>
            <p className="text-isd-font-3 font-bold">{member.role}</p>
            <p className="text-isd-font-3 font-bold">{member.title}</p>
        </div>
    );
}

export default function FacultyAdvisorsBlock() {
    const [language, setLanguage] = useState<string | null>(null);

    useEffect(() => {
        setLanguage(sessionStorage.getItem('language'));
    }, []);

    const lang = language === LANGUAGE_CHINESE_SIMPLIFIED ? 'zh' : 'en';
    const { featured, rest } = facultyData[lang];

    return (
        <div className="flex flex-col gap-[24px]">
            <h2 className="lg:text-[36px] hidden lg:block text-h2 leading-[36px] font-bold text-isd-primary">
                {lang === 'zh' ? '师资队伍与顾问委员会' : 'Faculty & Advisors'}
            </h2>

            <div className="flex flex-col gap-component-gap-sm">
                <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-4xl mx-auto px-4">
                        {featured.map((m) => (
                            <FacultyCard key={m.name} member={m} imgClass="object-cover h-[250px]" />
                        ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 items-start">
                        {rest.map((m) => (
                            <FacultyCard key={m.name} member={m} imgClass="md:w-full h-[220px] object-cover" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
