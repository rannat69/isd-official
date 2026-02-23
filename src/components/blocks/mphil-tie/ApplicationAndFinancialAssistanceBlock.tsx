import { LANGUAGE_CHINESE_SIMPLIFIED, LANGUAGE_ENGLISH } from '@/app/constants';
import { useEffect, useState } from 'react';

export default function ApplicationAndFinancialAssistanceBlock() {
    const [language, setLanguage] = useState<string | null>(null);

    useEffect(() => {
        setLanguage(sessionStorage.getItem('language'));
    }, []);

    return language === LANGUAGE_ENGLISH || !language ? (
        <div className="flex flex-col items-start gap-[24px]">
            <h2 className="lg:text-[36px] text-h2 leading-[36px] font-bold text-isd-primary">
                Application and Financial Assistance
            </h2>
            <p>
                TIE requires a period of two years of study in full-time mode.
                For details on admission requirements and the application
                process, please visit the{' '}
                <a
                    href="https://prog-crs.hkust.edu.hk/pgprog/2026-27/mphil-tie"
                    className="font-bold text-isd-secondary underline"
                >
                    Program Catalog
                </a>
                .<br />
                <br />
                Typically, all qualified students accepted to HKUST MPhil
                programs will receive{' '}
                <a
                    href="https://fytgs.hkust.edu.hk/admissions/Admission-to-Hong-Kong-Campus/submitting-an-application/scholarships-and-fees"
                    className="font-bold text-isd-secondary underline"
                >
                    postgraduate studentship
                </a>{' '}
                (PGS) which carries financial assistance sufficient for an
                individual’s cost of living in Hong Kong. For detailed
                regulations, please visit the{' '}
                <a
                    href="https://fytgs.hkust.edu.hk/admissions/Admission-to-Hong-Kong-Campus/submitting-an-application/scholarships-and-fees"
                    className="font-bold text-black underline"
                >
                    FYTGS webpage
                </a>{' '}
                and{' '}
                <a
                    href="https://fytgs.hkust.edu.hk/academics/Academic-Regulations-and-Requirements/Handbook-for-Research-Postgraduate-Studies/preface"
                    className="font-bold text-black underline"
                >
                    Handbook for Research Postgraduate Studies
                </a>{' '}
                for details.
                <br />
                <br />
                Please apply through:
            </p>

            <a href=" https://fytgs.hkust.edu.hk/admissions/Admission-to-Hong-Kong-Campus/submitting-an-application/online-application ">
                <button className="cursor-pointer bg-isd-primary-2 text-md font-bold text-isd-primary px-[36px] py-[10px] text-center">
                    Online Application
                </button>
            </a>
        </div>
    ) : (
        language === LANGUAGE_CHINESE_SIMPLIFIED && (
            <div className="flex flex-col items-start gap-[24px]">
                <h2 className="lg:text-[36px] text-h2 leading-[36px] font-bold text-isd-primary">
                    申请须知与资助计划
                </h2>
                <p>
                    TIE
                    课程为两年全日制修业期。有关入学要求及申请流程的详细信息，请参阅{' '}
                    <a
                        href="https://prog-crs.hkust.edu.hk/pgprog/2026-27/mphil-tie"
                        className="font-bold text-isd-secondary underline"
                    >
                        Program Catalog课程目录。
                    </a>
                    <br />
                    <br />
                    通常情况下，所有获得香港科技大学（港科大）哲学硕士（MPhil）项目录取的合格学生，均可获得{' '}
                    <a
                        href="https://fytgs.hkust.edu.hk/admissions/Admission-to-Hong-Kong-Campus/submitting-an-application/scholarships-and-fees"
                        className="font-bold text-isd-secondary underline"
                    >
                        研究生奖助金
                    </a>{' '}
                    PGS）。该资助足以支付学生在香港的基本生活开支。欲了解相关详细规定，请访问{' '}
                    <a
                        href="https://fytgs.hkust.edu.hk/admissions/Admission-to-Hong-Kong-Campus/submitting-an-application/scholarships-and-fees"
                        className="font-bold text-black underline"
                    >
                        霍英东研究生院（FYTGS）
                    </a>{' '}
                    <a
                        href="https://fytgs.hkust.edu.hk/academics/Academic-Regulations-and-Requirements/Handbook-for-Research-Postgraduate-Studies/preface"
                        className="font-bold text-black underline"
                    >
                        网页及《研究型研究生手册》。
                    </a>{' '}
                    <br />
                    <br />
                    立即申请：
                </p>

                <a href=" https://fytgs.hkust.edu.hk/admissions/Admission-to-Hong-Kong-Campus/submitting-an-application/online-application ">
                    <button className="cursor-pointer bg-isd-primary-2 text-md font-bold text-isd-primary px-[36px] py-[10px] text-center">
                        线上申请
                    </button>
                </a>
            </div>
        )
    );
}
