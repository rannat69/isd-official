'use client';

import egjac from '@/assets/people/egjac.jpg';

import aloysius from '@/assets/news/2026InnovationSummerSchool/3.webp';
import image04 from '@/assets/news/2026InnovationSummerSchool/4.png';

import image05 from '@/assets/news/2026InnovationSummerSchool/5.webp';
import image06 from '@/assets/news/2026InnovationSummerSchool/6.webp';
import Image from 'next/image';

import {
    LANGUAGE_CHINESE_SIMPLIFIED,
    LANGUAGE_CHINESE_TRADITIONAL,
    LANGUAGE_ENGLISH,
} from '@/app/constants';
import { useEffect, useState } from 'react';

export default function InnovationSummerSchool2026() {
    const [language, setLanguage] = useState<string | null>(null);

    useEffect(() => {
        setLanguage(sessionStorage.getItem('language'));
    }, []);

    return (
        <div className="flex flex-col lg:gap-[24px] gap-[12px] lg:text-md text-sm">
            <div className="flex relative pb-2 text-nav divide-x-2">
                <p
                    className={`px-2 relative z-50 text-nav hover:underline hover:underline-offset-10 hover:decoration-isd-primary hover:decoration-4 ${
                        !language || language?.includes(LANGUAGE_ENGLISH)
                            ? 'text-isd-primary underline underline-offset-10 decoration-isd-primary decoration-4'
                            : 'text-isd-font-3'
                    }`}
                    onClick={() => {
                        sessionStorage.setItem('language', LANGUAGE_ENGLISH);
                        window.location.reload();
                    }}
                >
                    ENG
                </p>
                <p
                    className={`px-2 relative z-50 text-nav hover:underline hover:underline-offset-10 hover:decoration-isd-primary hover:decoration-4 ${
                        language?.includes(LANGUAGE_CHINESE_SIMPLIFIED)
                            ? 'text-isd-primary underline underline-offset-10 decoration-isd-primary decoration-4'
                            : 'text-isd-font-3'
                    }`}
                    onClick={() => {
                        sessionStorage.setItem(
                            'language',
                            LANGUAGE_CHINESE_SIMPLIFIED
                        );
                        window.location.reload();
                    }}
                >
                    简
                </p>
                {/* <p
                            className={`px-2 relative z-50 text-nav hover:underline hover:underline-offset-10 hover:decoration-isd-primary hover:decoration-4 ${
                                pathname.includes('xxx')
                                    ? 'text-isd-primary underline underline-offset-10 decoration-isd-primary decoration-4'
                                    : 'text-isd-font-3'
                            }`}
                            onClick={() => {
                                 sessionStorage.setItem(
                                    'language',
                                    LANGUAGE_CHINESE_TRADITIONAL
                                );
                                //window.location.reload();
                                alert('Coming soon');
                            }}
                        >
                            繁
                        </p>*/}
            </div>
            <h2 className="lg:text-[36px] text-lg leading-9 font-bold text-primary">
                {(language === LANGUAGE_ENGLISH || !language) &&
                    ' HKUST Division of Integrative Systems and Design (ISD)'}

                {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                    ' HKUST Division of Integrative Systems and Design (ISD)'}
            </h2>

            {(language === LANGUAGE_ENGLISH || !language) && (
                <div className="flex flex-col gap-[36px] border-l-[5px] border-isd-primary bg-isd-primary-2 p-[36px] pl-[31px]">
                    <ul className="pl-6 space-y-8">
                        <li>
                            Are you ready to become an innovator who leads
                            change in the age of AI?
                        </li>
                        <li>
                            This summer, the{' '}
                            <strong>
                                Division of Integrative Systems and Design (ISD)
                            </strong>{' '}
                            at{' '}
                            <strong>
                                Hong Kong University of Science and Technology
                                (HKUST)
                            </strong>{' '}
                            invites you to join us at one of Asia's leading
                            research universities and take on a fast-paced
                            innovation challenge that blends{' '}
                            <strong>Design Thinking</strong> with{' '}
                            <strong>Hands-on Prototyping</strong>.
                        </li>
                        <li>
                            <strong>
                                This is not just another summer program. It is
                                the starting point on your path to becoming a
                                future innovation leader.
                            </strong>
                        </li>
                    </ul>
                </div>
            )}

            {(language === LANGUAGE_CHINESE_SIMPLIFIED || !language) && (
                <div className="flex flex-col gap-[36px] border-l-[5px] border-isd-primary bg-isd-primary-2 p-[36px] pl-[31px]">
                    <ul className="pl-6 space-y-8">
                        <li>
                            Are you ready to become an innovator who leads
                            change in the age of AI?
                        </li>
                        <li>
                            This summer, the{' '}
                            <strong>
                                Division of Integrative Systems and Design (ISD)
                            </strong>{' '}
                            at{' '}
                            <strong>
                                Hong Kong University of Science and Technology
                                (HKUST)
                            </strong>{' '}
                            invites you to join us at one of Asia's leading
                            research universities and take on a fast-paced
                            innovation challenge that blends{' '}
                            <strong>Design Thinking</strong> with{' '}
                            <strong>Hands-on Prototyping</strong>.
                        </li>
                        <li>
                            <strong>
                                This is not just another summer program. It is
                                the starting point on your path to becoming a
                                future innovation leader.
                            </strong>
                        </li>
                    </ul>
                </div>
            )}

            <h2 className="lg:text-[36px] text-lg leading-9 font-bold text-primary ">
                {(language === LANGUAGE_ENGLISH || !language) &&
                    ' Program Highlights'}

                {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                    ' Program Highlights'}
            </h2>

            {(language === LANGUAGE_ENGLISH || !language) && (
                <>
                    <h2 className="lg:text-lg text-md leading-9 font-bold text-primary border-l-[5px] border-isd-primary pl-6">
                        Course Features
                    </h2>

                    <h2 className="lg:text-lg text-md leading-9 font-bold text-primary ">
                        Project-Based Learning
                    </h2>

                    <p>
                        There are no passive lectures here. Students tackle
                        real-world problems through team collaboration from day
                        one. From observing their environment and defining
                        problems, to building prototypes and running user tests,
                        students develop a full toolkit of innovation skills and
                        experience the complete Design Thinking process.
                    </p>

                    <h2 className="lg:text-lg text-md leading-9 font-bold text-primary ">
                        Interdisciplinary Workshops
                    </h2>

                    <p>
                        Guided by HKUST's teaching team, students combine AI
                        tools, 3D modeling, hand sketching, and pitching skills
                        to turn creative ideas into physical prototypes.
                    </p>

                    <h2 className="lg:text-lg text-md leading-9 font-bold text-primary ">
                        Small-Class Instruction
                    </h2>

                    <p>
                        Every student receives in-depth guidance and feedback
                        from professors and teaching assistants.
                    </p>
                </>
            )}

            {language === LANGUAGE_CHINESE_SIMPLIFIED && (
                <>
                    <h2 className="lg:text-lg text-md leading-9 font-bold text-primary border-l-[5px] border-isd-primary pl-6">
                        Course Features
                    </h2>

                    <h2 className="lg:text-lg text-md leading-9 font-bold text-primary ">
                        Project-Based Learning
                    </h2>

                    <p>
                        There are no passive lectures here. Students tackle
                        real-world problems through team collaboration from day
                        one. From observing their environment and defining
                        problems, to building prototypes and running user tests,
                        students develop a full toolkit of innovation skills and
                        experience the complete Design Thinking process.
                    </p>

                    <h2 className="lg:text-lg text-md leading-9 font-bold text-primary ">
                        Interdisciplinary Workshops
                    </h2>

                    <p>
                        Guided by HKUST's teaching team, students combine AI
                        tools, 3D modeling, hand sketching, and pitching skills
                        to turn creative ideas into physical prototypes.
                    </p>

                    <h2 className="lg:text-lg text-md leading-9 font-bold text-primary ">
                        Small-Class Instruction
                    </h2>

                    <p>
                        Every student receives in-depth guidance and feedback
                        from professors and teaching assistants.
                    </p>
                </>
            )}

            {(language === LANGUAGE_ENGLISH || !language) && (
                <>
                    <h2 className="lg:text-lg text-md leading-9 font-bold text-primary border-l-[5px] border-isd-primary pl-6">
                        Course Focus
                    </h2>

                    <p>
                        The course is built around core competency modules
                        highly valued by international universities and
                        industries:
                    </p>

                    <ul className="list-disc ml-5 mt-2 space-y-2 ">
                        <li>
                            <strong>
                                Design Thinking for Technological
                                Innovations:{' '}
                            </strong>
                            applying design thinking in real technology
                            innovation contexts
                        </li>
                        <li>
                            <strong>Problem Finding with Empathy: </strong>{' '}
                            uncovering real problems by deeply understanding
                            users
                        </li>
                        <li>
                            <strong>
                                Creativity and Innovation in the Age of AI:{' '}
                            </strong>
                            developing creative thinking skills for an AI-driven
                            world
                        </li>
                        <li>
                            <strong>
                                From Lab-to-Market Entrepreneurship:{' '}
                            </strong>{' '}
                            turning research ideas into market-ready ventures
                        </li>
                    </ul>

                    <p>
                        The course centers on a human-centered design approach
                        combined with generative AI, applied to real problems
                        and contexts. Participants build an innovation skill set
                        that is transferable and practically valuable.
                    </p>
                </>
            )}

            {language === LANGUAGE_CHINESE_SIMPLIFIED && (
                <>
                    <h2 className="lg:text-lg text-md leading-9 font-bold text-primary border-l-[5px] border-isd-primary pl-6">
                        Course Focus
                    </h2>

                    <p>
                        The course is built around core competency modules
                        highly valued by international universities and
                        industries:
                    </p>

                    <ul className="list-disc ml-5 mt-2 space-y-2 ">
                        <li>
                            <strong>
                                Design Thinking for Technological
                                Innovations:{' '}
                            </strong>
                            applying design thinking in real technology
                            innovation contexts
                        </li>
                        <li>
                            <strong>Problem Finding with Empathy: </strong>{' '}
                            uncovering real problems by deeply understanding
                            users
                        </li>
                        <li>
                            <strong>
                                Creativity and Innovation in the Age of AI:{' '}
                            </strong>
                            developing creative thinking skills for an AI-driven
                            world
                        </li>
                        <li>
                            <strong>
                                From Lab-to-Market Entrepreneurship:{' '}
                            </strong>{' '}
                            turning research ideas into market-ready ventures
                        </li>
                    </ul>

                    <p>
                        The course centers on a human-centered design approach
                        combined with generative AI, applied to real problems
                        and contexts. Participants build an innovation skill set
                        that is transferable and practically valuable.
                    </p>
                </>
            )}

            <h2 className="lg:text-[36px] text-lg leading-9 font-bold text-primary ">
                {(language === LANGUAGE_ENGLISH || !language) &&
                    ' MEET THE INSTRUCTORS'}

                {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                    ' MEET THE INSTRUCTORS'}
            </h2>

            {(language === LANGUAGE_ENGLISH || !language) && (
                <h2 className="lg:text-lg text-md leading-9 font-bold text-primary border-l-[5px] border-isd-primary pl-6">
                    Faculty
                </h2>
            )}

            {language === LANGUAGE_CHINESE_SIMPLIFIED && (
                <h2 className="lg:text-lg text-md leading-9 font-bold text-primary border-l-[5px] border-isd-primary pl-6">
                    Faculty
                </h2>
            )}

            <div className="flex flex-col gap-[36px]   bg-isd-primary-2 p-[36px] pl-[31px]">
                <div className="flex w-full justify-center">
                    <div className="flex flex-col items-center gap-4">
                        <div className="rounded-full border-4 border-isd-primary overflow-hidden w-[128px] h-[128px]">
                            <Image
                                src={egjac}
                                alt="Dr. Jac LEUNG"
                                width={128}
                                height={128}
                                sizes="128px"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h2 className="lg:text-lg text-md leading-9 font-bold text-primary ">
                            Dr. Jack LEUNG
                        </h2>
                    </div>
                </div>

                <ul className="pl-6 space-y-8 list-disc">
                    <li>
                        Lecturer, Division of Integrative Systems and Design,
                        HKUST
                    </li>
                    <li>
                        Associate Director, MSc in Technology Leadership and
                        Entrepreneurship
                    </li>
                    <li>Director, AI Literacy Development Center</li>
                    <li>
                        QS Reimagine Education Awards 2024 (Finalist, Project
                        Director)
                    </li>
                    <li>Co-author of AI Literacy in K-16 Classrooms</li>
                    <li>
                        Led and participated in multiple generative AI and
                        educational technology research projects
                    </li>
                </ul>
            </div>

            <div className="flex flex-col gap-[36px]   bg-isd-primary-2 p-[36px] pl-[31px]">
                <div className="flex w-full justify-center">
                    <div className="flex flex-col items-center gap-4">
                        <div className="rounded-full border-4 border-isd-primary overflow-hidden w-[128px] h-[128px]">
                            <Image
                                src={aloysius}
                                alt="Dr. Jac LEUNG"
                                width={128}
                                height={128}
                                sizes="128px"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h2 className="lg:text-lg text-md leading-9 font-bold text-primary ">
                            Dr. Aloysius Wilfred Raj AROKIARAJ
                        </h2>
                    </div>
                </div>

                <ul className="pl-6 space-y-8 list-disc">
                    <li>
                        Executive Committee Member, Community of Practice in
                        Design Thinking, The Education University of Hong Kong
                    </li>
                    <li>
                        2022 University Grants Committee (UGC) Teaching Award
                        Finalist
                    </li>
                    <li>
                        Excellence in Teaching Award, Lingnan University
                        (2021/2022), Collaborative Team
                    </li>
                </ul>
            </div>

            <h2 className="lg:text-[36px] text-lg leading-9 font-bold text-primary">
                {(language === LANGUAGE_ENGLISH || !language) &&
                    'Programme Schedule'}

                {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                    'Programme Schedule'}
            </h2>

            <div className="flex flex-col gap-[36px]    p-[36px] pl-[31px]">
                <div className="flex w-full justify-center">
                    <div className="flex flex-col items-center gap-4">
                        <div className="rounded-full  overflow-hidden w-[150px] h-[150px]">
                            <Image
                                src={image04}
                                alt="Dr. Jac LEUNG"
                                width={150}
                                height={150}
                                sizes="150px"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {(language === LANGUAGE_ENGLISH || !language) && (
                <h2 className="lg:text-lg text-md leading-9 font-bold text-primary border-l-[5px] border-isd-primary pl-6">
                    Course Schedule
                </h2>
            )}

            {language === LANGUAGE_CHINESE_SIMPLIFIED && (
                <h2 className="lg:text-lg text-md leading-9 font-bold text-primary border-l-[5px] border-isd-primary pl-6">
                    Course Schedule
                </h2>
            )}

            <table className="w-full border-1 border-y-1 border-gray-200 ">
                <tbody className=" divide-y divide-gray-200">
                    <tr>
                        <td className="text-isd-primary font-bold bg-isd-primary-2 border-r border-gray-200 p-4">
                            {(language === LANGUAGE_ENGLISH || !language) &&
                                'Training Location'}
                            {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                                'Training Location'}
                        </td>
                        <td className=" p-4">
                            {(language === LANGUAGE_ENGLISH || !language) &&
                                'Hong Kong University of Science and Technology (Clear Water Bay Campus) + Shenzhen (laboratory visit)'}

                            {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                                'Hong Kong University of Science and Technology (Clear Water Bay Campus) + Shenzhen (laboratory visit)'}
                        </td>
                    </tr>
                    <tr>
                        <td className="text-isd-primary font-bold bg-isd-primary-2 border-r border-gray-200 p-4">
                            {(language === LANGUAGE_ENGLISH || !language) &&
                                'Training Dates'}
                            {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                                'Training Dates'}
                        </td>
                        <td className=" p-4">
                            {(language === LANGUAGE_ENGLISH || !language) &&
                                'July 13 (Monday) – July 17 (Friday), 2026  |  5 days  |  9:00 AM – 5:00 PM daily'}

                            {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                                'July 13 (Monday) – July 17 (Friday), 2026  |  5 days  |  9:00 AM – 5:00 PM daily'}
                        </td>
                    </tr>

                    <tr>
                        <td className="text-isd-primary font-bold bg-isd-primary-2 border-r border-gray-200 p-4">
                            {(language === LANGUAGE_ENGLISH || !language) &&
                                'Language of Instruction'}
                            {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                                'Language of Instruction'}
                        </td>
                        <td className=" p-4">
                            {(language === LANGUAGE_ENGLISH || !language) &&
                                'Full English instruction to enhance students&apos; international competitiveness (Chinese-speaking teaching assistants available for support)'}

                            {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                                'Full English instruction to enhance students&apos; international competitiveness (Chinese-speaking teaching assistants available for support)'}
                        </td>
                    </tr>

                    <tr>
                        <td className="text-isd-primary font-bold bg-isd-primary-2 border-r border-gray-200 p-4">
                            {(language === LANGUAGE_ENGLISH || !language) &&
                                'Learning Mode'}
                            {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                                'Learning Mode'}
                        </td>
                        <td className=" p-4">
                            {(language === LANGUAGE_ENGLISH || !language) &&
                                'Experiential learning, workshops, field visits, team collaboration, and prototype testing'}

                            {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                                'Experiential learning, workshops, field visits, team collaboration, and prototype testing'}
                        </td>
                    </tr>

                    <tr>
                        <td className="text-isd-primary font-bold bg-isd-primary-2 border-r border-gray-200 p-4">
                            {(language === LANGUAGE_ENGLISH || !language) &&
                                'Daily Schedule'}
                            {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                                'Daily Schedule'}
                        </td>
                        <td className=" p-4">
                            {(language === LANGUAGE_ENGLISH || !language) &&
                                ' 7–8 hours of classes per day. Five-day itinerary overview: '}

                            {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                                ' 7–8 hours of classes per day. Five-day itinerary overview: '}

                            {(language === LANGUAGE_ENGLISH || !language) && (
                                <ul className="list-disc ml-5 mt-2 space-y-1 ">
                                    <li>
                                        <strong>
                                            Day 1: Observation & Discovery:{' '}
                                        </strong>
                                        Use observation and systems thinking to
                                        identify problems.
                                    </li>
                                    <li>
                                        <strong>
                                            Day 2: Deep Exploration:{' '}
                                        </strong>
                                        Conduct user and market research and
                                        define the core problem.
                                    </li>
                                    <li>
                                        <strong>
                                            Day 3: Creativity & Making:{' '}
                                        </strong>
                                        AI tools and 3D modeling workshops;
                                        begin hands-on prototyping.
                                    </li>
                                    <li>
                                        <strong>
                                            Day 4: Testing & Optimization:{' '}
                                        </strong>
                                        Collect user feedback and rapidly
                                        iterate on prototypes.
                                    </li>
                                    <li>
                                        <strong>Day 5: Showcase: </strong>Build
                                        a Pitch Deck and present projects to
                                        professors and users.
                                    </li>
                                </ul>
                            )}
                            {language === LANGUAGE_CHINESE_SIMPLIFIED && (
                                <ul className="list-disc ml-5 mt-2 space-y-1 ">
                                    <li>
                                        <strong>
                                            Day 1: Observation & Discovery:{' '}
                                        </strong>
                                        Use observation and systems thinking to
                                        identify problems.
                                    </li>
                                    <li>
                                        <strong>
                                            Day 2: Deep Exploration:{' '}
                                        </strong>
                                        Conduct user and market research and
                                        define the core problem.
                                    </li>
                                    <li>
                                        <strong>
                                            Day 3: Creativity & Making:{' '}
                                        </strong>
                                        AI tools and 3D modeling workshops;
                                        begin hands-on prototyping.
                                    </li>
                                    <li>
                                        <strong>
                                            Day 4: Testing & Optimization:{' '}
                                        </strong>
                                        Collect user feedback and rapidly
                                        iterate on prototypes.
                                    </li>
                                    <li>
                                        <strong>Day 5: Showcase: </strong>Build
                                        a Pitch Deck and present projects to
                                        professors and users.
                                    </li>
                                </ul>
                            )}
                        </td>
                    </tr>
                </tbody>
            </table>

            <h2 className="lg:text-[36px] text-lg leading-9 font-bold text-primary">
                {(language === LANGUAGE_ENGLISH || !language) &&
                    'What You Will Gain'}

                {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                    'What You Will Gain'}
            </h2>

            {(language === LANGUAGE_ENGLISH || !language) && (
                <h2 className="lg:text-lg text-md leading-9 font-bold text-primary border-l-[5px] border-isd-primary pl-6">
                    Learning Outcomes
                </h2>
            )}

            {language === LANGUAGE_CHINESE_SIMPLIFIED && (
                <h2 className="lg:text-lg text-md leading-9 font-bold text-primary border-l-[5px] border-isd-primary pl-6">
                    Learning Outcomes
                </h2>
            )}

            <p>
                {(language === LANGUAGE_ENGLISH || !language) &&
                    'This course develops students&apos; Future-Ready Skills, building a strong foundation for university studies and career growth:'}
                {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                    'This course develops students&apos; Future-Ready Skills, building a strong foundation for university studies and career growth:'}
            </p>

            {(language === LANGUAGE_ENGLISH || !language) && (
                <ul className="list-disc ml-5 mt-2 space-y-1 ">
                    <li>
                        <strong>Innovation & Entrepreneurship: </strong>
                        Develop sharp market insight and a strong
                        problem-solving mindset, along with an entrepreneurial
                        spirit
                    </li>
                    <li>
                        <strong>Creative Thinking & Empathy: </strong>
                        Observe user needs closely and define core problems with
                        precision
                    </li>
                    <li>
                        <strong>Prototyping Skills: </strong>
                        Master AI tools, 3D modeling, hand sketching, and other
                        prototyping techniques
                    </li>
                    <li>
                        <strong>
                            Professional Presentation & Persuasion:{' '}
                        </strong>
                        Present project proposals (Pitch Deck) to professors and
                        target users and receive direct feedback
                    </li>
                </ul>
            )}

            {language === LANGUAGE_CHINESE_SIMPLIFIED && (
                <ul className="list-disc ml-5 mt-2 space-y-1 ">
                    <li>
                        <strong>Innovation & Entrepreneurship: </strong>
                        Develop sharp market insight and a strong
                        problem-solving mindset, along with an entrepreneurial
                        spirit
                    </li>
                    <li>
                        <strong>Creative Thinking & Empathy: </strong>
                        Observe user needs closely and define core problems with
                        precision
                    </li>
                    <li>
                        <strong>Prototyping Skills: </strong>
                        Master AI tools, 3D modeling, hand sketching, and other
                        prototyping techniques
                    </li>
                    <li>
                        <strong>
                            Professional Presentation & Persuasion:{' '}
                        </strong>
                        Present project proposals (Pitch Deck) to professors and
                        target users and receive direct feedback
                    </li>
                </ul>
            )}

            <h2 className="lg:text-[36px] text-lg leading-9 font-bold text-primary">
                {(language === LANGUAGE_ENGLISH || !language) && 'About Us'}

                {language === LANGUAGE_CHINESE_SIMPLIFIED && 'About Us'}
            </h2>

            <div className="flex  gap-4">
                <Image src={image05} alt="Highlight"></Image>
            </div>

            <p>
                {(language === LANGUAGE_ENGLISH || !language) &&
                    'For more information about ISD professors, please visit the official website:'}
                {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                    '更多综合系统与设计学部(ISD)教授资讯，详见官网:'}
            </p>
            <p className="cursor-pointer text-isd-primary underline">
                <a href="https://isd.hkust.edu.hk/people#isd-faculty">
                    https://isd.hkust.edu.hk/people#isd-faculty
                </a>
            </p>
            <h2 className="lg:text-[36px] text-lg leading-9 font-bold text-primary">
                {(language === LANGUAGE_ENGLISH || !language) &&
                    'Highlights of previous summer camps'}
                {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                    '往届夏令营精彩集锦'}
            </h2>
            <div className="flex flex-col gap-4">
                <Image src={image04} alt="Highlight"></Image>
                <Image src={image05} alt="Highlight"></Image>
                <Image src={image06} alt="Highlight"></Image>
            </div>
            <h2 className="lg:text-[36px] text-lg leading-9 font-bold text-primary">
                {(language === LANGUAGE_ENGLISH || !language) &&
                    'Enrollment target'}
                {language === LANGUAGE_CHINESE_SIMPLIFIED && '招生对象'}
            </h2>
            <p>
                {(language === LANGUAGE_ENGLISH || !language) &&
                    'We welcome undergraduate or graduate students from any region, especially those from mechanical, electronic, computer science, data science, design, biomechanics, medical engineering, smart hardware, and related interdisciplinary backgrounds.'}
                {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                    '我们欢迎来自任何地区的大三（即学制倒数第二学年）本科生或研究生，特别是机械、电子、计算机科学、数据科学、设计、生物力学、医学工程、智能硬件及相关交叉学科背景的学生。'}
            </p>
            <p>
                {(language === LANGUAGE_ENGLISH || !language) &&
                    'Applicants with laboratory experience, project experience, or entrepreneurial background will be preferred. Applicants with other grades or backgrounds will be evaluated comprehensively on a case-by-case basis.'}
                {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                    '具备实验室经验、项目经验或创业背景的申请者将优先考虑。其他年级或背景的申请者将根据个案情况进行综合评估。'}
            </p>
            <h2 className="lg:text-[36px] text-lg leading-9 font-bold text-primary">
                {(language === LANGUAGE_ENGLISH || !language) &&
                    'Registration time'}
                {language === LANGUAGE_CHINESE_SIMPLIFIED && '报名时间'}
            </h2>
            <p>
                {(language === LANGUAGE_ENGLISH || !language) &&
                    'From now until the end of April 2026.'}
                {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                    '即日起至 2026 年4月底。'}
            </p>
            <h2 className="lg:text-[36px] text-lg leading-9 font-bold text-primary">
                {(language === LANGUAGE_ENGLISH || !language) && 'How to apply'}
                {language === LANGUAGE_CHINESE_SIMPLIFIED && '如何申请'}
            </h2>
            <p className="font-bold text-isd-primary">
                {(language === LANGUAGE_ENGLISH || !language) &&
                    'Method 1: Recommended quota'}
                {language === LANGUAGE_CHINESE_SIMPLIFIED && '方式一：推荐名额'}
            </p>
            <p>
                {(language === LANGUAGE_ENGLISH || !language) &&
                    'Each university can refer up to 10 students to participate in the InnoBay Summer Camp. The project team will conduct further interviews and make selective selections. Please email'}
                {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                    '每所大学可推荐最多10名学生参与InnoBay Summer Camp。项目组将进一步面试并择优录取。请发送邮件至'}
                <a
                    className="cursor-pointer text-isd-primary underline"
                    href="mailto:innobay@ust.hk"
                >
                    innobay@ust.hk
                </a>{' '}
                {(language === LANGUAGE_ENGLISH || !language) && (
                    <>
                        and cc{' '}
                        <a
                            className="cursor-pointer text-isd-primary underline"
                            href="mailto:isdtie@ust.hk"
                        >
                            isdtie@ust.hk
                        </a>{' '}
                        for recommendations.
                    </>
                )}
                {language === LANGUAGE_CHINESE_SIMPLIFIED && <>进行推荐。</>}
            </p>
            <p className="font-bold text-isd-primary">
                {(language === LANGUAGE_ENGLISH || !language) &&
                    'Method 2: Open recruitment'}
                {language === LANGUAGE_CHINESE_SIMPLIFIED && '方式二：公开招募'}
            </p>
            <p>
                {(language === LANGUAGE_ENGLISH || !language) &&
                    'Fill out the online application form at this link '}
                {language === LANGUAGE_CHINESE_SIMPLIFIED && '于此链接 '}
                <a
                    className="cursor-pointer text-isd-primary underline"
                    href="https://forms.office.com/r/ULu1g3HQhm"
                >
                    https://forms.office.com/r/ULu1g3HQhm
                </a>

                {(language === LANGUAGE_ENGLISH || !language) &&
                    '. Successful candidates will be notified of the follow-up interview via email'}
                {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                    '填写线上申请表。提交后，入选者将通过电邮收到后续面试通知。'}
            </p>
            <h2 className="lg:text-[36px] text-lg leading-9 font-bold text-primary">
                {(language === LANGUAGE_ENGLISH || !language) &&
                    'Contact information'}
                {language === LANGUAGE_CHINESE_SIMPLIFIED && '联系方式'}
            </h2>
            <p>
                {(language === LANGUAGE_ENGLISH || !language) &&
                    'For more information, please email: '}
                {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                    '如需更多资讯，请电邮联系：'}
                <a
                    className="cursor-pointer text-isd-primary underline"
                    href="mailto:innobay@ust.hk"
                >
                    innobay@ust.hk.
                </a>
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="flex flex-col items-center gap-4">
                    <p className="text-isd-secondary font-bold">
                        {(language === LANGUAGE_ENGLISH || !language) &&
                            "This summer, let's"}
                        {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                            '这个夏天，让我们'}
                    </p>
                    <p className="text-isd-secondary font-bold">
                        {(language === LANGUAGE_ENGLISH || !language) &&
                            'Meet at Clear Water Bay to empower sports with technology and connect future innovation.'}
                        {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                            '相约清水湾，以科技赋能体育，连接未来创新。'}
                    </p>
                </div>
            </div>
        </div>
    );
}
