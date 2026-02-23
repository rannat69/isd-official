import { LANGUAGE_CHINESE_SIMPLIFIED, LANGUAGE_ENGLISH } from '@/app/constants';
import { useEffect, useState } from 'react';

export default function ProgramContactBlock() {
      const [language, setLanguage] = useState<string | null>(null);
  
      useEffect(() => {
          setLanguage(sessionStorage.getItem('language'));
      }, []);

    return (
        <div className="flex flex-col items-start gap-[24px]">
            <h2 className="lg:text-[36px] text-h2 leading-[36px] font-bold text-isd-primary">
                {(language === LANGUAGE_ENGLISH || !language) &&
                    'Program Contact'}

                {language === LANGUAGE_CHINESE_SIMPLIFIED && '联系我们'}
            </h2>
            <p>
                {language === LANGUAGE_ENGLISH ||
                    (!language &&
                        'For inquiries, please contact the Program Office')}
                {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                    '如有查询，请联系项目办公室：'}
                <a
                    href="mailto:isdtie@ust.hk"
                    className="font-bold text-isd-secondary underline"
                >
                    isdtie@ust.hk
                </a>
                .
            </p>
        </div>
    );
}
