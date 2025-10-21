'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import StudentCompetitionsBlock from './student-life/StudentCompetitionsBlock';
import UsefulLinksBlock from './student-life/UsefulLinksBlock';

export default function StudentLifeBlock() {
    const searchParams = useSearchParams();

    const router = useRouter();

    const initialPage = searchParams.get('page') ?? '';

    const [page, setPage] = useState<string>(initialPage);

    return (
        <div className="container py-section-gap flex gap-component-gap">
            <div className="flex flex-col text-lg cursor-pointer">
                <div
                    className={` h-[54px] whitespace-nowrap px-element-gap py-[10px] ${page === 'stud-comp' ? 'bg-isd-primary-2 border-l-3 border-isd-primary' : ''}`}
                    onClick={() => setPage('stud-comp')}
                >
                    Student Competitions
                </div>
                <div
                    className={`h-[54px] whitespace-nowrap px-element-gap py-[10px] ${page === 'extra-act' ? 'bg-isd-primary-2 border-l-3 border-isd-primary' : ''}`}
                    onClick={() => setPage('extra-act')}
                >
                    Extracurricular activities
                </div>
                <div
                    className={`h-[54px] whitespace-nowrap px-element-gap py-[10px] ${page === 'intern' ? 'bg-isd-primary-2 border-l-3 border-isd-primary' : ''}`}
                    onClick={() => setPage('intern')}
                >
                    Internships
                </div>
                <div
                    className={`h-[54px] whitespace-nowrap px-element-gap py-[10px] ${page === 'exchange' ? 'bg-isd-primary-2 border-l-3 border-isd-primary' : ''}`}
                    onClick={() => setPage('exchange')}
                >
                    Exchange
                </div>
                <div
                    className={`h-[54px] whitespace-nowrap px-element-gap py-[10px] ${page === 'alumni' ? 'bg-isd-primary-2 border-l-3 border-isd-primary' : ''}`}
                    onClick={() => setPage('alumni')}
                >
                    Alumni Sharing
                </div>
                <div
                    className={`h-[54px] whitespace-nowrap px-element-gap py-[10px] ${page === 'links' ? 'bg-isd-primary-2 border-l-3 border-isd-primary' : ''}`}
                    onClick={() => setPage('links')}
                >
                    Useful Links
                </div>
            </div>
            <div className=" overflow-y-clip flex flex-col  gap-component-gap-sm text-md leading-[28px] text-isd-font-1">
                {page === 'stud-comp' && <StudentCompetitionsBlock />}
                {page === 'extra-act' && <ExtraActivitivesBlock />}
                {page === 'intern' && <IntershipsBlock />}
                {page === 'exchange' && <ExchangeBlock />}
                {page === 'alumni' && <AlumniSharingBlock />}
                {page === 'links' && <UsefulLinksBlock />}
            </div>
        </div>
    );
}
