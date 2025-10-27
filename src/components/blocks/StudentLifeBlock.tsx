'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { JSX, useEffect, useState } from 'react';
import StudentCompetitionsBlock from './student-life/StudentCompetitionsBlock';
import ExtraActivitivesBlock from './student-life/ExtraActivitiesBlock';
import InternshipBlock from './student-life/InternshipBlock';
import ExchangeBlock from './student-life/ExchangeBlock';
import AlumniSharingBlock from './student-life/AlumniSharingBlock';
import UsefulLinksBlock from './student-life/UsefulLinksBlock';
import Select from '../Select';

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
        <div className="container py-section-gap flex lg:flex-row flex-col lg:gap-component-gap gap-component-gap-sm">
            <div className="lg:flex hidden flex-col text-lg">
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

            <h1 className="lg:hidden text-h1 offset-text-background ">
                Student Life
            </h1>
            <Select
                triggerClassName="text-lg text-center cursor-pointer pb-[6px] text-isd-secondary border-b-3 border-isd-secondary flex items-center gap-[10px]"
                className="lg:hidden"
                options={pages.map((p) => ({
                    label: p.name,
                    value: p.key,
                }))}
                value={pages.find((p) => p.key === page)?.key}
                onChange={(value) =>
                    handlePageChange(value as StudentLifePageKey)
                }
                itemClassName="px-[12px] py-[12px] text-xl text-isd-font-2"
            />
            <div className="flex flex-col gap-component-gap-sm text-sm leading-[28px] text-isd-font-1">
                {pages.find((p) => p.key === page)?.component}
            </div>
        </div>
    );
}
