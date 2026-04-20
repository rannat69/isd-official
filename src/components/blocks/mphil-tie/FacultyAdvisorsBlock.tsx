import FacAdv1 from '@/assets/academics/mphil-in-tie/fac-adv.1.png';
import FacAdv1CnSimp from '@/assets/academics/mphil-in-tie/fac-adv.1.cn.simp.png';

import Changyingxiang from '@/assets/academics/mphil-in-tie/fac-adv/changyingxiang.svg';
import Jacleung from '@/assets/academics/mphil-in-tie/fac-adv/jacleung.svg';
import Qianzhang from '@/assets/academics/mphil-in-tie/fac-adv/qianzhang.svg';
import Qijiashao from '@/assets/academics/mphil-in-tie/fac-adv/qijiashao.svg';
import Robscharff from '@/assets/academics/mphil-in-tie/fac-adv/robscharff.svg';
import Saikityeung from '@/assets/academics/mphil-in-tie/fac-adv/saikityeung.svg';
import Winnieleung from '@/assets/academics/mphil-in-tie/fac-adv/winnieleung.svg';
import Zexiangli from '@/assets/academics/mphil-in-tie/fac-adv/zexiangli.svg';

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
                    <>
                        <Image src={FacAdv1} alt="Faculty and advisors" />
                        {/*     <div className="flex">
                            <Image src={Qianzhang} alt="Faculty and advisors" />
                            <Image src={Zexiangli} alt="Faculty and advisors" />
                        </div>
                        <div className="flex">
                            <Image
                                src={Saikityeung}
                                alt="Faculty and advisors"
                            />
                            <Image
                                src={Winnieleung}
                                alt="Faculty and advisors"
                            />
                            <Image
                                src={Changyingxiang}
                                alt="Faculty and advisors"
                            />
                            <Image src={Qijiashao} alt="Faculty and advisors" />
                            <Image
                                src={Robscharff}
                                alt="Faculty and advisors"
                            />

                            <Image src={Jacleung} alt="Faculty and advisors" />
                        </div>*/}
                    </>
                )}

                {language === LANGUAGE_CHINESE_SIMPLIFIED && (
                    <Image src={FacAdv1CnSimp} alt="师资队伍与顾问委员会" />
                )}
            </div>
        </div>
    );
}
