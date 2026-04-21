import FacAdv1 from '@/assets/academics/mphil-in-tie/fac-adv-up-eng.png';
import FacAdv1CnSimp from '@/assets/academics/mphil-in-tie/fac-adv-up-cn-simp.png';
import Image from 'next/image';
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
                    <Image src={FacAdv1} alt="Faculty and advisors" />
                )}

                {language === LANGUAGE_CHINESE_SIMPLIFIED && (
                    <Image src={FacAdv1CnSimp} alt="师资队伍与顾问委员会" />
                )}
            </div>
        </div>
    );
}
