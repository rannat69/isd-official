'use client';

import egjac from '@/assets/people/egjac.jpg';

import aloysius from '@/assets/news/2026InnovationSummerSchool/3.webp';
import image04 from '@/assets/news/2026InnovationSummerSchool/4.png';

import image05 from '@/assets/news/2026InnovationSummerSchool/5.webp';
import image07 from '@/assets/news/2026InnovationSummerSchool/7.webp';
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
            <h2 className="lg:text-[36px] text-lg leading-9 font-bold text-primary mt-8">
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
                            invites you to join us at one of Asia&apos;s leading
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

            {language === LANGUAGE_CHINESE_SIMPLIFIED && (
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
                            invites you to join us at one of Asia&apos;s leading
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

            <h2 className="lg:text-[36px] text-lg leading-9 font-bold text-primary mt-8">
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
                        Guided by HKUST&apos;s teaching team, students combine
                        AI tools, 3D modeling, hand sketching, and pitching
                        skills to turn creative ideas into physical prototypes.
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
                        Guided by HKUST&apos;s teaching team, students combine
                        AI tools, 3D modeling, hand sketching, and pitching
                        skills to turn creative ideas into physical prototypes.
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

            <h2 className="lg:text-[36px] text-lg leading-9 font-bold text-primary mt-8">
                {(language === LANGUAGE_ENGLISH || !language) &&
                    'Meet The Instructors'}

                {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                    'Meet The Instructors'}
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
                            Dr. Jac LEUNG
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
                        Executive Committee Member, Design thinking CoP, Hong
                        Kong Teaching Excellence Alliance (HKTEA)
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

            <h2 className="lg:text-[36px] text-lg leading-9 font-bold text-primary mt-8">
                {(language === LANGUAGE_ENGLISH || !language) &&
                    'Program Schedule'}

                {language === LANGUAGE_CHINESE_SIMPLIFIED && 'Program Schedule'}
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

                        {(language === LANGUAGE_ENGLISH || !language) && (
                            <td className=" p-4">
                                Full English instruction to enhance
                                students&apos; international competitiveness
                                (Chinese-speaking teaching assistants available
                                for support)
                            </td>
                        )}
                        {language === LANGUAGE_CHINESE_SIMPLIFIED && (
                            <td className=" p-4">
                                Full English instruction to enhance
                                students&apos; international competitiveness
                                (Chinese-speaking teaching assistants available
                                for support)
                            </td>
                        )}
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

            <h2 className="lg:text-[36px] text-lg leading-9 font-bold text-primary mt-8">
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
            {(language === LANGUAGE_ENGLISH || !language) && (
                <p>
                    This course develops students&apos; Future-Ready Skills,
                    building a strong foundation for university studies and
                    career growth:
                </p>
            )}

            {language === LANGUAGE_CHINESE_SIMPLIFIED && (
                <p>
                    This course develops students&apos; Future-Ready Skills,
                    building a strong foundation for university studies and
                    career growth:
                </p>
            )}

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

            <h2 className="lg:text-[36px] text-lg leading-9 font-bold text-primary mt-8">
                {(language === LANGUAGE_ENGLISH || !language) && 'About Us'}

                {language === LANGUAGE_CHINESE_SIMPLIFIED && 'About Us'}
            </h2>

            <div className="flex  gap-4">
                <Image src={image05} alt="About Us"></Image>
            </div>

            {(language === LANGUAGE_ENGLISH || !language) && (
                <h2 className="lg:text-lg text-md leading-9 font-bold text-primary border-l-[5px] border-isd-primary pl-6">
                    Institution Background
                </h2>
            )}

            {language === LANGUAGE_CHINESE_SIMPLIFIED && (
                <h2 className="lg:text-lg text-md leading-9 font-bold text-primary border-l-[5px] border-isd-primary pl-6">
                    Institution Background
                </h2>
            )}

            {(language === LANGUAGE_ENGLISH || !language) && (
                <h2 className="lg:text-lg text-md leading-9 font-bold text-primary ">
                    Hong Kong University of Science and Technology (HKUST){' '}
                </h2>
            )}

            {language === LANGUAGE_CHINESE_SIMPLIFIED && (
                <h2 className="lg:text-lg text-md leading-9 font-bold text-primary">
                    Hong Kong University of Science and Technology (HKUST){' '}
                </h2>
            )}

            <p>
                {(language === LANGUAGE_ENGLISH || !language) &&
                    ' HKUST is a world-class research university in Asia, consistently ranked among global leaders in data science, artificial intelligence, engineering, and innovation.'}
                {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                    ' HKUST is a world-class research university in Asia, consistently ranked among global leaders in data science, artificial intelligence, engineering, and innovation.'}
            </p>

            {(language === LANGUAGE_ENGLISH || !language) && (
                <ul className="list-disc ml-5 mt-2 space-y-4 ">
                    <li>
                        <i>QS Asia University Rankings 2026:</i>
                        <strong> 6th place </strong>
                    </li>
                    <li>
                        <i>
                            Times Higher Education Young University Rankings
                            2024:
                        </i>
                        <strong> 3rd place </strong>
                    </li>
                    <li>
                        <i>
                            Times Higher Education University Impact Rankings
                            2025:
                        </i>
                        <strong> 19th globally, 1st in Hong Kong </strong>
                    </li>
                    <li>
                        <i>QS World University Subject Rankings 2025,</i>{' '}
                        &quot;Data Science & Artificial Intelligence&quot;:
                        <strong> 17th globally, </strong>retaining the top
                        position among Hong Kong universities
                    </li>
                </ul>
            )}

            {language === LANGUAGE_CHINESE_SIMPLIFIED && (
                <ul className="list-disc ml-5 mt-2 space-y-4 ">
                    <li>
                        <i>QS Asia University Rankings 2026:</i>
                        <strong> 6th place </strong>
                    </li>
                    <li>
                        <i>
                            Times Higher Education Young University Rankings
                            2024:
                        </i>
                        <strong> 3rd place </strong>
                    </li>
                    <li>
                        <i>
                            Times Higher Education University Impact Rankings
                            2025:
                        </i>
                        <strong> 19th globally, 1st in Hong Kong </strong>
                    </li>
                    <li>
                        <i>QS World University Subject Rankings 2025,</i>{' '}
                        &quot;Data Science & Artificial Intelligence&quot;:
                        <strong> 17th globally, </strong>retaining the top
                        position among Hong Kong universities
                    </li>
                </ul>
            )}

            {(language === LANGUAGE_ENGLISH || !language) && (
                <h2 className="lg:text-lg text-md leading-9 font-bold text-primary ">
                    Division of Integrative Systems and Design (ISD)
                </h2>
            )}

            {language === LANGUAGE_CHINESE_SIMPLIFIED && (
                <h2 className="lg:text-lg text-md leading-9 font-bold text-primary">
                    Division of Integrative Systems and Design (ISD)
                </h2>
            )}

            {(language === LANGUAGE_ENGLISH || !language) && (
                <p>
                    Founded in 2017, ISD is dedicated to developing technology
                    talent with systems thinking and innovation capabilities
                    through interdisciplinary teaching and research. Programs
                    span undergraduate, master&apos;s, and doctoral levels,
                    providing a strong foundation for students to make a lasting
                    impact in research, industry, and the global innovation
                    ecosystem.
                </p>
            )}

            {language === LANGUAGE_CHINESE_SIMPLIFIED && (
                <p>
                    Founded in 2017, ISD is dedicated to developing technology
                    talent with systems thinking and innovation capabilities
                    through interdisciplinary teaching and research. Programs
                    span undergraduate, master&apos;s, and doctoral levels,
                    providing a strong foundation for students to make a lasting
                    impact in research, industry, and the global innovation
                    ecosystem.
                </p>
            )}

            <h2 className="lg:text-[36px] text-lg leading-9 font-bold text-primary mt-8">
                {(language === LANGUAGE_ENGLISH || !language) &&
                    'Registration Details'}

                {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                    'Registration Details'}
            </h2>

            {(language === LANGUAGE_ENGLISH || !language) && (
                <h2 className="lg:text-lg text-md leading-9 font-bold text-primary border-l-[5px] border-isd-primary pl-6">
                    How to Apply
                </h2>
            )}

            {language === LANGUAGE_CHINESE_SIMPLIFIED && (
                <h2 className="lg:text-lg text-md leading-9 font-bold text-primary border-l-[5px] border-isd-primary pl-6">
                    How to Apply
                </h2>
            )}

            <table className="w-full border-1 border-y-1 border-gray-200 ">
                <tbody className=" divide-y divide-gray-200">
                    <tr>
                        <td className="text-isd-primary font-bold bg-isd-primary-2 border-r border-gray-200 p-4">
                            {(language === LANGUAGE_ENGLISH || !language) &&
                                'Target Applicants'}
                            {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                                'Target Applicants'}
                        </td>
                        {(language === LANGUAGE_ENGLISH || !language) && (
                            <td className=" p-4">
                                Secondary school students aged 13–18 who aspire
                                to become{' '}
                                <strong>Innovators, Technologists,</strong> and{' '}
                                <strong>Entrepreneurs</strong>
                            </td>
                        )}

                        {language === LANGUAGE_CHINESE_SIMPLIFIED && (
                            <td className=" p-4">
                                Secondary school students aged 13–18 who aspire
                                to become{' '}
                                <strong>Innovators, Technologists,</strong> and{' '}
                                <strong>Entrepreneurs</strong>
                            </td>
                        )}
                    </tr>
                    <tr>
                        <td className="text-isd-primary font-bold bg-isd-primary-2 border-r border-gray-200 p-4">
                            {(language === LANGUAGE_ENGLISH || !language) &&
                                'Course Fee'}
                            {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                                'Course Fee'}
                        </td>
                        {(language === LANGUAGE_ENGLISH || !language) && (
                            <td className=" p-4">
                                <strong>HKD 12,000</strong>
                            </td>
                        )}

                        {language === LANGUAGE_CHINESE_SIMPLIFIED && (
                            <td className=" p-4">
                                <strong>HKD 12,000</strong>
                            </td>
                        )}
                    </tr>

                    <tr>
                        <td className="text-isd-primary font-bold bg-isd-primary-2 border-r border-gray-200 p-4">
                            {(language === LANGUAGE_ENGLISH || !language) &&
                                'Application Deadline'}
                            {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                                'Application Deadline'}
                        </td>
                        {(language === LANGUAGE_ENGLISH || !language) && (
                            <td className=" p-4">
                                <strong>June 12, 2026</strong>
                            </td>
                        )}

                        {language === LANGUAGE_CHINESE_SIMPLIFIED && (
                            <td className=" p-4">
                                <strong>June 12, 2026</strong>
                            </td>
                        )}
                    </tr>

                    <tr>
                        <td className="text-isd-primary font-bold bg-isd-primary-2 border-r border-gray-200 p-4">
                            {(language === LANGUAGE_ENGLISH || !language) &&
                                'How to Apply'}
                            {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                                'How to Apply'}
                        </td>
                        <td className=" p-4">
                            {' '}
                            <Image
                                src={image07}
                                alt="Apply"
                                width={128}
                                height={128}
                                sizes="128px"
                                className="w-[128px] h-[128px] object-cover"
                            />
                            <p className="cursor-pointer text-isd-primary underline">
                                <a href="https://ust.az1.qualtrics.com/jfe/form/SV_73qsUvFsXc9v5rM">
                                    https://ust.az1.qualtrics.com/jfe/form/SV_73qsUvFsXc9v5rM
                                </a>
                            </p>
                        </td>
                    </tr>

                    <tr>
                        <td className="text-isd-primary font-bold bg-isd-primary-2 border-r border-gray-200 p-4">
                            {(language === LANGUAGE_ENGLISH || !language) &&
                                'Organizer'}
                            {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                                'Organizer'}
                        </td>
                        <td className=" p-4">
                            {(language === LANGUAGE_ENGLISH || !language) &&
                                'HKUST Division of Integrative Systems and Design (ISD)'}

                            {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                                'HKUST Division of Integrative Systems and Design (ISD)'}
                        </td>
                    </tr>
                </tbody>
            </table>

            {(language === LANGUAGE_ENGLISH || !language) && (
                <div className="flex flex-col gap-[36px] border-[1px] rounded-md border-isd-secondary bg-isd-secondary-1 p-[36px] pl-[31px]">
                    <h2 className="lg:text-lg text-md leading-9 font-bold text-secondary">
                        Important Notes
                    </h2>

                    <ul className="list-disc ml-5 mt-2 space-y-4 ">
                        <li>
                            Upon completing the course, students will receive a
                            <strong className="text-secondary">
                                {' '}
                                Course Completion Certificate.
                            </strong>
                        </li>
                        <li>
                            You must confirm your availability to participate in
                            the{' '}
                            <strong className="text-secondary">
                                entire course period
                            </strong>{' '}
                            (from start to finish).
                        </li>
                        <li>
                            The course permits up to{' '}
                            <strong className="text-secondary">
                                20% absence
                            </strong>{' '}
                            due to emergency situations or sick leave, provided
                            a valid and legitimate reason is given along with an
                            official letterhead leave application document.
                        </li>
                        <li>
                            Students who do not achieve a{' '}
                            <strong className="text-secondary">
                                80% attendance rate
                            </strong>
                            , or who fail to submit a legitimate reason with
                            official documentation,{' '}
                            <strong className="text-secondary">
                                will not receive the Course Completion
                                Certificate.
                            </strong>
                        </li>
                        <li>
                            All classes and teaching/discussion sessions require
                            <strong className="text-secondary">
                                punctuality
                            </strong>
                            . Arriving late without valid reason may be recorded
                            as absence.
                        </li>
                    </ul>
                </div>
            )}

            {language === LANGUAGE_CHINESE_SIMPLIFIED && (
                <div className="flex flex-col gap-[36px] border-[1px] rounded-md border-isd-secondary bg-isd-secondary-1 p-[36px] pl-[31px]">
                    <h2 className="lg:text-lg text-md leading-9 font-bold text-secondary">
                        Important Notes
                    </h2>

                    <ul className="list-disc ml-5 mt-2 space-y-4 ">
                        <li>
                            Upon completing the course, students will receive a
                            <strong className="text-secondary">
                                {' '}
                                Course Completion Certificate.
                            </strong>
                        </li>
                        <li>
                            You must confirm your availability to participate in
                            the{' '}
                            <strong className="text-secondary">
                                entire course period
                            </strong>{' '}
                            (from start to finish).
                        </li>
                        <li>
                            The course permits up to{' '}
                            <strong className="text-secondary">
                                20% absence
                            </strong>{' '}
                            due to emergency situations or sick leave, provided
                            a valid and legitimate reason is given along with an
                            official letterhead leave application document.
                        </li>
                        <li>
                            Students who do not achieve a{' '}
                            <strong className="text-secondary">
                                80% attendance rate
                            </strong>
                            , or who fail to submit a legitimate reason with
                            official documentation,{' '}
                            <strong className="text-secondary">
                                will not receive the Course Completion
                                Certificate.
                            </strong>
                        </li>
                        <li>
                            All classes and teaching/discussion sessions require{' '}
                            <strong className="text-secondary">
                                punctuality
                            </strong>
                            . Arriving late without valid reason may be recorded
                            as absence.
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}
