'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import StudentCompetitionsBlock from './student-life/StudentCompetitionsBlock';

export default function StudentLifeBlock() {
    const searchParams = useSearchParams();

    const router = useRouter();

    const initialPage = searchParams.get('page') ?? '';

    const [page, setPage] = useState<string>(initialPage);
    const content = [
        {
            subheading: 'Academic Partners',
            content: (
                <div className="flex flex-col gap-[12px]">
                    <p>
                        ISD&apos;s pedagogical innovation is a vision shared by
                        many other schools, departments and universities around
                        the world. From course collaboration, to co-supervision
                        of design projects, to tailored exchange semester
                        arrangements, our academic partners support ISD students
                        to enrich their learning opportunities and to extend
                        their horizons. In particular, two joint courses
                        illustrate some of the collaborative endeavors.
                    </p>
                    <div>
                        <div className="text-isd-secondary font-[700]">
                            ISDN4320 Design Thinking | HKUST ISD x China Academy
                            of Art
                        </div>
                        <div className="text-isd-secondary font-[700]">
                            ISDN3350 Global Product Development | HKUST ISD x
                            SNU IdeaFactory x BUAA IDE
                        </div>
                    </div>
                </div>
            ),
        },
        {
            subheading: 'Industrial Partnership',
            content: (
                <p>
                    ISD works with our industrial partners to provide students
                    with real-world perspective and design and technical skills
                    through projects, internship, and mentorship.  ISD students
                    work on industry-related problems and projects throughout
                    the program and along the way, have ample opportunities to
                    meet and consult with our industrial partners.  In their
                    final year, our students work on company-sponsored Capstone
                    projects that utilize what they&apos;ve learned throughout
                    the program and challenge them to be innovators, designers
                    and/or entrepreneurs.  Students and faculty advisors work
                    closely with the industrial partners having frequent
                    communication sessions, prototyping reviews, and tracking of
                    progress to ensure project success. Through the interactions
                    with the industrial partners, our students gain valuable
                    knowledge and real-world experience. In turn, our industrial
                    partners gain fresh insights from our students and also
                    project results that can be used in their company.  Our
                    industrial partners can also have opportunities to recruit
                    excellent students into their company. 
                </p>
            ),
        },
        {
            subheading: 'Project Mentors',
            content: (
                <p>
                    As part of the industry partnership program, two
                    representatives from each company are invited to serve as
                    industry mentors.   Within the theme-based cornerstone
                    projects, many design reviews and participation in
                    competitions will be required to bring together students
                    with mentors for understanding the real-world problem in the
                    design process.  Mentors are also invited regularly to give
                    share in lectures or seminars; allowing students to keep
                    up-to-date with the new landscape in design and engineering.
                    <br />
                    ISD hopes to foster closer mentorship between the project
                    mentors and students.  Students will communicate with their
                    mentors via email or over the phone for no more than two
                    hours per week. An in-person or online meeting will be
                    scheduled once per month.
                </p>
            ),
        },
    ];

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
