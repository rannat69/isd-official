'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { JSX, useEffect, useState } from 'react';
import StudentCompetitionsBlock from './student-life/StudentCompetitionsBlock';
import ExtraActivitivesBlock from './student-life/ExtraActivitiesBlock';
import InternshipBlock from './student-life/InternshipBlock';
import ExchangeBlock from './student-life/ExchangeBlock';
import AlumniSharingBlock from './student-life/AlumniSharingBlock';
import UsefulLinksBlock from './student-life/UsefulLinksBlock';

type StudentLifePageKey =
    | 'stud-comp'
    | 'extra-act'
    | 'intern'
    | 'exchange'
    | 'alumni'
    | 'links';

export default function StudentLifeBlock() {
    const pages: {
        key: StudentLifePageKey;
        name: string;
        component: JSX.Element;
    }[] = [
        {
            key: 'stud-comp',
            name: 'Student Competitions',
            component: <StudentCompetitionsBlock />,
        },
        {
            key: 'extra-act',
            name: 'Extracurricular Activities',
            component: <ExtraActivitivesBlock />,
        },
        { key: 'intern', name: 'Internships', component: <InternshipBlock /> },
        { key: 'exchange', name: 'Exchange', component: <ExchangeBlock /> },
        {
            key: 'alumni',
            name: 'Alumni Sharing',
            component: <AlumniSharingBlock />,
        },
        { key: 'links', name: 'Useful Links', component: <UsefulLinksBlock /> },
    ];

    const searchParams = useSearchParams();
    const router = useRouter();

    const [page, setPage] = useState<StudentLifePageKey>('stud-comp');

    const [activeMenuId, setActiveMenuId] = useState('stud-comp');
    const handleMenuClick = (id: string) => {
        setActiveMenuId(id);
    };

    useEffect(() => {
        const initialPage = searchParams.get('page') ?? 'stud-comp';
        setPage(initialPage as StudentLifePageKey);
    }, [searchParams]);

    const handlePageChange = (newPage: StudentLifePageKey) => {
        setPage(newPage);
        const params = new URLSearchParams(searchParams.toString());
        params.set('page', newPage);
        router.push(`?${params.toString()}`, { scroll: false });
    };

    return (
        <div className="container py-section-gap flex flex-col lg:flex-row gap-component-gap">
            <div className="hidden lg:flex flex-col text-lg min-w-[324px]">
                {pages.map((p) => (
                    <div
                        key={p.key}
                        className={
                            'flex items-center cursor-pointer w-full h-[54px] whitespace-nowrap px-element-gap py-[10px] ' +
                            (p.key === page && // SCREW CSS BORDER SIZING!
                                'font-bold text-isd-primary bg-isd-primary-2 border-l-3 pl-[calc(var(--element-gap)-3px)] border-isd-primary')
                        }
                        onClick={() => handlePageChange(p.key)}
                    >
                        {p.name}
                    </div>
                ))}
            </div>

            <div className="w-full  flex flex-wrap lg:hidden items-center justify-center gap-component-gap-sm divide-isd-font-2/30 text-isd-font-2">
                {pages.map((p) => (
                    <div
                        key={p.key}
                        id={p.key}
                        onClick={() => handlePageChange(p.key)}
                        className={`text-h2 text-center cursor-pointer pb-3 ${
                            page === p.key
                                ? 'text-isd-secondary border-b-3 border-isd-secondary'
                                : 'text-isd-font-2'
                        }`}
                    >
                        {p.name}
                    </div>
                ))}
            </div>

            <div className="flex flex-col gap-component-gap-sm text-md leading-[28px] text-isd-font-1">
                {pages.find((p) => p.key === page)?.component}
            </div>
        </div>
    );
}
