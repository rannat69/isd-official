'use client';
import { ArrowDown, ArrowUp, Plus } from 'lucide-react';
import React, { useEffect, useState } from 'react';

import Breadcrumb from '../Breadcrumb';
import Image from 'next/image';
import EduObj1 from '@/assets/academics/meng-design-intel/Picture1.png';

export default function MEngDesignIntelBlock() {
    const [activeMenuId, setActiveMenuId] = useState('');
    const menu = [
        {
            title: 'Educational Objectives',
            id: 'edu-obj',
        },
        { title: 'Curriculum', id: 'curriculum' },
        {
            title: 'Admission & Application',
            id: 'adm-app',
        },
    ];

    useEffect(() => {
        setActiveMenuId('edu-obj');
    }, []);

    const handleMenuClick = (id: string) => {
        setActiveMenuId(id);
    };

    const contentMenu = [
        {
            content: (
                <div className="flex flex-col gap-component-gap-sm">
                    <div className="flex flex-col">
                        <div className="gap-element-gap flex flex-col">
                            <Breadcrumb
                                titles={[
                                    'Academics',
                                    'Master of Engineering in Design Intelligence',
                                ]}
                            />
                            <h1 className="text-h1 offset-text-background text-pretty mb-component-gap-sm">
                                Master of Engineering in Design Intelligence
                            </h1>
                        </div>
                        <div className="w-auto overflow-clip">
                            <div className="lg:flex hidden w-full items-center gap-component-gap-sm text-isd-font-2">
                                {menu.map((link) => (
                                    <div
                                        key={link.id}
                                        onClick={() => handleMenuClick(link.id)}
                                        className={`text-h2 h-[60px] flex items-center box-border cursor-pointer ${
                                            activeMenuId === link.id
                                                ? 'text-isd-secondary border-b-3 border-isd-secondary'
                                                : 'text-isd-font-2'
                                        }`}
                                    >
                                        <span>{link.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
    ];

    const content = [
        {
            id: 'edu-obj',
            subheading: ``,
            content: (
                <div className="flex flex-col gap-component-gap">
                    <div className="flex flex-col gap-component-gap-sm">
                        <p className="text-isd-font-1">
                            The rapid integration of AI, advanced technology,
                            and human-centered design has created a soaring
                            market demand for interdisciplinary leaders who can
                            bridge the gap between engineering capabilities and
                            human needs—a role traditional, siloed education
                            programs fail to fill.
                        </p>
                        <p className="text-isd-font-1">
                            To address this gap, the Master of Engineering in
                            Design Intelligence is proposed to cultivate
                            &quot;Design Strategists&quot; and &quot;Creative
                            Technology Connectors.&quot; Recognizing that
                            creativity adds substantial intangible value and
                            competitiveness to products and services, the
                            program emphasizes innovation in both product and
                            service/process design. Its curriculum features four
                            integrated course clusters—iProduct, iService,
                            iConnect, and iMedia—each blending core and bridging
                            elective courses. A broad selection of electives is
                            also provided to help students customize their
                            learning and broaden their knowledge.
                        </p>
                        <p className="text-isd-font-1">
                            This program directly aligns with the Hong Kong SAR
                            government&apos;s strategic focus on the new
                            creative economy. By leveraging Hong Kong&apos;s
                            unique &quot;east-meets-west&quot; cultural
                            positioning and traditional economic strengths, the
                            initiative aims to produce tech-fluent creative
                            talents. These innovators will integrate AI into
                            their pipelines to design next-generation user
                            experiences across the region&apos;s core sectors,
                            including retail, finance, and professional
                            services.
                        </p>

                        <Image
                            src={EduObj1}
                            alt="Educational objectives"
                            className="w-full h-auto object-contain"
                        />

                        <div className="flex flex-col gap-[24px]">
                            <h2 className="lg:text-[36px] text-h2 leading-[36px] text-isd-primary">
                                Educational Objectives
                            </h2>
                            <div className="flex flex-col gap-[12px]">
                                <p>
                                    Master of Engineering in Design Intelligence
                                    (DI) program aims to impart students with a
                                    comprehensive and holistic understanding of
                                    emerging technologies, innovative design
                                    strategies, and new business models.
                                    Additionally, it seeks to equip students
                                    with advanced digital skills essential for
                                    product development, transmedia
                                    communication, and business growth,
                                    addressing the increasing demand for skilled
                                    professionals in these areas. Furthermore,
                                    the program is designed to attract
                                    high-caliber candidates to join the
                                    industry, fostering a talented and
                                    innovative workforce for the future.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[24px] border-l-5 bg-isd-primary-2 border-l-isd-primary text-isd-font-1 p-component-gap-sm">
                        <h2 className="lg:text-[36px] text-h2 leading-[36px] text-isd-primary">
                            Learning Outcomes
                        </h2>
                        <div className="gap-[12px] flex flex-col text-md">
                            <p>
                                Upon completion of the program, graduates will
                                be able to:
                            </p>
                            <ul>
                                <li className="flex before:text-center before:content-['•'] leading-[26px] before:w-component-gap-sm">
                                    Develop and enhance individual creativity
                                    and design skills within product, service,
                                    and process contexts, supported by relevant
                                    research methodologies to address industry
                                    challenges.
                                </li>
                                <li className="flex before:text-center before:content-['•'] leading-[26px] before:w-component-gap-sm">
                                    Gain a global perspective on design
                                    strategies and business issues, continuously
                                    updating knowledge of current and emerging
                                    technologies within an integrated design
                                    framework.
                                </li>
                                <li className="flex before:text-center before:content-['•'] leading-[26px] before:w-component-gap-sm">
                                    Communicate effectively and professionally
                                    across verbal, digital, and visual formats
                                    to support managerial decision-making in
                                    marketing and management.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[24px]">
                        <h2 className="lg:text-[36px] text-h2 leading-[36px] font-isd-font-1 text-isd-primary">
                            Program Characteristics
                        </h2>
                        <div className="flex-1 flex flex-col gap-[12px]">
                            <table>
                                <tbody className="leading-[16px] text-[12px]">
                                    <tr className="bg-isd-primary-2 text-isd-primary text-md text-left">
                                        <td className="p-[12px] border-x-2 border-x-white">
                                            Deep Integration of Design &
                                            Technology
                                        </td>
                                        <td className="p-[12px] border-x-2 border-x-white">
                                            The program is fundamentally
                                            design-led, with
                                            technology—especially AI—woven
                                            throughout as a central thread. It
                                            moves beyond tool-use to strategic
                                            application. It emphasizes on the
                                            understanding of the societal
                                            implications, limitations, and
                                            ethical responsibilities of
                                            designing with AI and future
                                            technologies.
                                        </td>
                                    </tr>
                                    <tr className="bg-isd-secondary-1 text-isd-secondary text-md">
                                        <td className="p-[12px] border-x-2 border-x-white">
                                            AI-Empowered Creativity & Strategy
                                        </td>
                                        <td className="p-[12px] border-x-2 border-x-white">
                                            A dedicated focus on using emerging
                                            technologies, including Generative
                                            AI, as creative partners for
                                            brainstorming, concept generation,
                                            iteration, and data-driven design
                                            decision-making.
                                        </td>
                                    </tr>
                                    <tr className="bg-isd-primary-2 text-isd-primary text-md">
                                        <td className="p-[12px] border-x-2 border-x-white">
                                            Integrated One-Year Internship
                                        </td>
                                        <td className="p-[12px] border-x-2 border-x-white">
                                            A key differentiator, the program
                                            includes a dedicated year of
                                            industry placement (ISDN6740) for
                                            full-time students. This allows
                                            students to gain real-world
                                            experience, build professional
                                            networks, and enhance their
                                            employability, creating a seamless
                                            transition from academia to
                                            industry.
                                        </td>
                                    </tr>
                                    <tr className="bg-isd-secondary-1 text-isd-secondary text-md">
                                        <td className="p-[12px] border-x-2 border-x-white">
                                            Project-Based Learning (PBL)
                                        </td>
                                        <td className="p-[12px] border-x-2 border-x-white">
                                            The key approach for program
                                            delivery is PBL, and the program is
                                            integrated with several industry
                                            collaboration projects (ISDN5701 and
                                            ISDN5702) as well as a capstone
                                            project (ISDN6730) that requires
                                            students to apply the learned skills
                                            to solve real business problems, and
                                            deliver design solutions in a
                                            practical, portfolio-ready manner.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            ),
        },

        {
            id: 'curriculum',
            subheading: <span className="">Curriculum</span>,
            content: (
                <div className="flex flex-col lg:gap-component-gap">
                    <div className="flex flex-col gap-component-gap-sm">
                        <p className="text-isd-font-1">
                            Students are required to complete a total of 36
                            credits. This includes 12 credits from core courses,
                            12 credits from elective courses-which include 6 - 9
                            credits in bridging elective courses and 3 - 6
                            credits in other elective courses in any of the 4i
                            areas-and 12 credits from a required Capstone
                            Project (6 credits) and a year-long Internship
                            Placement (6 credits). <br />
                            For details, please refer to the {' '}
                            <span className="text-isd-secondary font-[700] underline">
                                <a href="https://prog-crs.hkust.edu.hk/pgprog?token_post=58511409b721808ed781ce06aa81c6e1&is_s=Y&keyword=&school%5B%5D=SSCI&school%5B%5D=SENG&school%5B%5D=SBM&school%5B%5D=SHSS&school%5B%5D=IPO&area%5B%5D=1&area%5B%5D=7&area%5B%5D=11&area%5B%5D=12&area%5B%5D=3&area%5B%5D=13&area%5B%5D=14&area%5B%5D=16&area%5B%5D=8&area%5B%5D=9&area%5B%5D=10&check-all-degree-option=Y&check-allsub-degree-option1=Y&degree%5B%5D=MPHIL&degree%5B%5D=PHD&check-allsub-degree-option2=Y&degree%5B%5D=MENG&degree%5B%5D=DBA&degree%5B%5D=MBA&degree%5B%5D=MSC&degree%5B%5D=MA&degree%5B%5D=MPM&degree%5B%5D=MPP&degree%5B%5D=PGD&year=2026-27">
                                    Postgraduate Program
                                </a>
                            </span>
                            , 
                            <span className="text-isd-secondary font-[700] underline">
                                <a href="https://prog-crs.hkust.edu.hk/pgcourse">
                                    Course Catalog
                                </a>
                            </span>
                            {/* and 
                            <span className="text-isd-secondary font-[700] underline">
                                Program Brochure
                            </span>*/}
                            .
                        </p>
                        {/* TODO waiting for mobile layout */}
                        <CurriculumContent />
                    </div>
                    <div className="text-isd-font-3 text-sm">
                        Remarks: Classes are normally held on weekday evenings
                        from Monday to Friday; on Saturday mornings or
                        afternoons. Each course typically meets once a week for
                        approximately three hours. 
                    </div>
                </div>
            ),
        },
        {
            id: 'adm-app',
            subheading: <div className="">Admission & Application</div>,
            content: (
                <div className="flex flex-col gap-component-gap  items-start">
                    <div className="flex flex-col gap-[24]">
                        <div>
                            <p className="text-isd-font-1">
                                Applicants should have obtained a
                                bachelor&apos;s degree from a recognized
                                institution, or an approved equivalent
                                qualification. For English Proficiency
                                Requirements, please refer to {' '}
                                <span className="text-isd-secondary font-[700] underline">
                                    <a href="https://fytgs.hkust.edu.hk/admissions/Admission-to-Hong-Kong-Campus/submitting-an-application/admission-requirements">
                                        HKUST Fok Ying Tung Graduate School
                                    </a>
                                </span>
                                . All applicants are considered on a competitive
                                and rolling basis. Early online application is
                                strongly recommended.
                            </p>
                        </div>
                        <a
                            className="cursor-pointer"
                            href="https://fytgs.hkust.edu.hk/admissions/Admission-to-Hong-Kong-Campus/submitting-an-application/online-application"
                        >
                            <div className="cursor-pointer bg-isd-primary-2 text-md font-bold text-isd-primary px-[36px] py-[10px] text-center w-fit">
                                Apply Now
                            </div>
                        </a>
                    </div>
                    <div className="flex flex-col gap-[24]">
                        <h3 className="lg:text-[36px] text-h2 leading-[36px] font-bold font-isd-font-1 text-isd-primary">
                            Faculty Members
                        </h3>

                        <p className="text-isd-font-1">
                            This program is a gateway for students to learn from
                            our professors with diverse knowledge and research
                            experience in the field gained from some of the top
                            engineering institutions from around the world.
                        </p>

                        <a className="cursor-pointer" href="/people">
                            <div className="bg-isd-primary-2 text-md font-bold text-isd-primary px-[36px] py-[10px] text-center w-fit">
                                ISD Faculty List
                            </div>
                        </a>
                    </div>

                    <div className="flex flex-col gap-[24]">
                        <h3 className="lg:text-[36px] text-h2 leading-[36px] font-bold font-isd-font-1 text-isd-primary">
                            Contact Us{' '}
                        </h3>

                        <div className="flex-1 flex flex-col gap-[12px]">
                            <table>
                                <tbody className="leading-[16px] text-[12px]">
                                    <tr className="bg-isd-primary-2 text-isd-primary text-md text-left">
                                        <td className="p-[12px] border-x-2 border-x-white">
                                            Email
                                        </td>
                                        <td className="p-[12px] border-x-2 border-x-white">
                                            <a href="mailto:enquirydi@ust.hk">
                                                enquirydi@ust.hk
                                            </a>
                                        </td>
                                    </tr>
                                    <tr className="bg-isd-secondary-1 text-isd-secondary text-md">
                                        <td className="p-[12px] border-x-2 border-x-white">
                                            Tel
                                        </td>
                                        <td className="p-[12px] border-x-2 border-x-white">
                                            +852 3469 2957
                                        </td>
                                    </tr>
                                    <tr className="bg-isd-primary-2 text-isd-primary text-md">
                                        <td className="p-[12px] border-x-2 border-x-white">
                                            Address
                                        </td>
                                        <td className="p-[12px] border-x-2 border-x-white">
                                            Room 5591, Lift 29-30, The Hong Kong
                                            University of Science and
                                            Technology, Clear Water Bay, Hong
                                            Kong
                                        </td>
                                    </tr>
                                    <tr className="bg-isd-secondary-1 text-isd-secondary text-md">
                                        <td className="p-[12px] border-x-2 border-x-white">
                                            Linkedin
                                        </td>
                                        <td className="p-[12px] border-x-2 border-x-white">
                                            <a href="https://www.linkedin.com/school/hkust/">
                                                {' '}
                                                Click to view more
                                            </a>
                                        </td>
                                    </tr>
                                    <tr className="bg-isd-primary-2 text-isd-primary text-md">
                                        <td className="p-[12px] border-x-2 border-x-white">
                                            YouTube
                                        </td>
                                        <td className="p-[12px] border-x-2 border-x-white">
                                            <a href="https://www.youtube.com/user/hkust">
                                                Click to view more
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <div>
            <div className="block md:block lg:hidden">
                {activeMenuId === 'edu-obj' && (
                    <button
                        type="button"
                        onClick={() => {
                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth',
                            });

                            setTimeout(() => {
                                setActiveMenuId('curriculum');
                            }, 500);
                        }}
                        className="fixed bottom-6 right-6 z-50 flex h-12  w-48  items-center justify-center rounded-full bg-gray-100 shadow-lg border border-gray-200 cursor-pointer hover:bg-gray-200 transition-colors"
                        aria-label="Educational Objectives"
                    >
                        <div className="text-isd-secondary font-bold">Curriculum</div>
                    </button>
                )}

                {activeMenuId === 'curriculum' && (
                    <>
                        <button
                            type="button"
                            onClick={() => {
                                window.scrollTo({
                                    top: 0,
                                    behavior: 'smooth',
                                });

                                setTimeout(() => {
                                    setActiveMenuId('edu-obj');
                                }, 500);
                            }}
                            className="fixed bottom-50 right-6 z-50 flex h-12  w-48  items-center justify-center rounded-full bg-gray-100 shadow-lg border border-gray-200 cursor-pointer hover:bg-gray-200 transition-colors"
                            aria-label="Educational Objectives"
                        >
                            <div className="text-isd-secondary font-bold">
                                Educational Objectives
                            </div>
                        </button>

                        <button
                            type="button"
                            onClick={() => {
                                window.scrollTo({
                                    top: 0,
                                    behavior: 'smooth',
                                });

                                setTimeout(() => {
                                    setActiveMenuId('adm-app');
                                }, 500);
                            }}
                            className="fixed bottom-6 right-6 z-50 flex h-12  w-48  items-center justify-center rounded-full bg-gray-100 shadow-lg border border-gray-200 cursor-pointer hover:bg-gray-200 transition-colors"
                            aria-label="Educational Objectives"
                        >
                            <div className="text-isd-secondary font-bold">
                                Admission & Application
                            </div>
                        </button>
                    </>
                )}

                {activeMenuId === 'adm-app' && (
                    <button
                        type="button"
                        onClick={() => {
                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth',
                            });

                            setTimeout(() => {
                                setActiveMenuId('curriculum');
                            }, 500);
                        }}
                        className="fixed bottom-50 right-6 z-50 flex h-12 w-48 items-center justify-center rounded-full bg-gray-100 shadow-lg border border-gray-200 cursor-pointer hover:bg-gray-200 transition-colors"
                        aria-label="Educational Objectives"
                    >
                        <div className="text-isd-secondary font-bold">Curriculum </div>
                    </button>
                )}
            </div>

            {activeMenuId === 'edu-obj' && (
                <div className="lg:dot-pattern before:bottom-[-1110px] before:left-[-115px] [--dot-color:var(--isd-secondary-1)]" />
            )}
            <div className="container overflow-y-clip flex flex-col py-section-gap gap-component-gap">
                {contentMenu.map((section, index) => (
                    <div key={index}>{section.content}</div>
                ))}
                {/*}<Select
                    triggerClassName="text-lg text-center cursor-pointer pb-[6px] text-isd-secondary border-b-3 border-isd-secondary flex items-center gap-[10px]"
                    className="lg:hidden"
                    options={menu.map((link) => ({
                        label: link.title,
                        value: link.id,
                    }))}
                    value={activeMenuId}
                    onChange={(value) => handleMenuClick(value as string)}
                    itemClassName="px-[12px] py-[12px] text-xl text-isd-font-2"
                />*/}

                {content.map((section, index) => (
                    <div
                        key={index}
                        id={section.id}
                        className={`flex-col gap-[24px] lg:hidden ${
                            activeMenuId === section.id ? 'flex' : 'hidden'
                        }`}
                    >
                        {/*Mobile*/}
                        {/*activeMenuId === 'curriculum' && (
                            <div
                                onClick={() => setActiveMenuId('edu-obj')}
                                className="relative w-full cursor-pointer bg-white "
                            >
                                <div className="py-5 text-center font-semibold text-isd-secondary">
                                    <div>
                                        <ChevronUp className="inline-block ml-[6px]" />
                                    </div>
                                    <div>Educational Objectives</div>
                                </div>
                            </div>
                        )*/}
                        {/*activeMenuId === 'adm-app' && (
                            <div
                                onClick={() => setActiveMenuId('curriculum')}
                                className="relative w-full cursor-pointer bg-white "
                            >
                                <div className="py-5 text-center font-semibold text-isd-secondary">
                                    <div>
                                        <ChevronUp className="inline-block ml-[6px]" />
                                    </div>
                                    <div>Curriculum</div>
                                </div>
                            </div>
                        )*/}
                        {section.subheading && (
                            <h3 className="lg:text-[36px] text-h2 leading-[36px] text-isd-primary">
                                {section.subheading}
                            </h3>
                        )}
                        <div className="lg:text-md text-sm leading-[28px] text-isd-font-1">
                            {section.content}
                        </div>
                        {/*activeMenuId === 'edu-obj' && (
                            <div
                                onClick={() => {
                                    window.scrollTo({
                                        top: 0,
                                        behavior: 'smooth',
                                    });

                                    setTimeout(() => {
                                        setActiveMenuId('curriculum');
                                    }, 500);
                                }}
                            >
                                <div className="py-5 text-center font-semibold text-isd-secondary">
                                    <div>Curriculum</div>
                                    <div>
                                        <ChevronDown className="inline-block ml-[6px]" />
                                    </div>
                                </div>
                            </div>
                        )*/}
                        {/*activeMenuId === 'curriculum' && (
                            <div
                                onClick={() => {
                                    window.scrollTo({
                                        top: 0,
                                        behavior: 'smooth',
                                    });
                                    setTimeout(
                                        () => setActiveMenuId('adm-app'),
                                        500
                                    );
                                }}
                                className="relative w-full cursor-pointer bg-white "
                            >
                                <div className="py-5 text-center font-semibold text-isd-secondary">
                                    <div>Admission &amp; Application</div>
                                    <div>
                                        <ChevronDown className="inline-block ml-[6px]" />
                                    </div>
                                </div>
                            </div>
                        )*/}
                    </div>
                ))}

                {content.map((section, index) => (
                    <div
                        key={index}
                        id={section.id}
                        className={`hidden ${
                            activeMenuId === section.id
                                ? 'lg:flex lg:flex-col'
                                : ''
                        }`}
                    >
                        {/*Desktop*/}
                        {section.subheading && (
                            <h3 className="lg:text-[36px] text-h2 leading-[36px] text-isd-primary mb-[24px]">
                                {section.subheading}
                            </h3>
                        )}
                        <div className="lg:text-md text-sm leading-[28px] text-isd-font-1">
                            {section.content}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const CurriculumContent = () => (
    <div className="flex flex-col gap-element-gap">
        <div className="flex flex-col items-center">
            <p className="text-h2 leading-[32px] text-isd-primary text-center">
                36 Credits
            </p>
            <div className="w-full border-b-2 border-isd-primary mt-2 mb-4"></div>
        </div>

        <div className="flex items-center justify-center lg:justify-between w-full">
            <div className="flex flex-col gap-element-gap">
                <div className="text-h2 font-bold flex flex-col gap-element-gap lg:flex-row items-center lg:gap-[6px] text-center">
                    <div className="bg-isd-primary-2 text-isd-primary p-element-gap flex-1 w-full">
                        <div className="flex lg:flex-col flex-wrap text-center justify-center w-full">
                            <span>Core Courses</span>
                            <span className="ml-1"> (12 credits)</span>
                        </div>
                        <div className="lg:hidden">{coreCoursesContent}</div>
                    </div>

                    <div>
                        <Plus
                            className="mx-element-gap-sm text-isd-primary hidden lg:block"
                            size={24}
                        />
                    </div>
                    <div className="bg-isd-secondary-1 text-isd-secondary p-element-gap flex-1 w-full">
                        <div className="flex lg:flex-col flex-wrap text-center justify-center w-full">
                            <span>Elective Courses</span>
                            <span className="ml-1"> (12 credits)</span>
                        </div>
                        <div className="lg:hidden">
                            {electiveCoursesContent}
                        </div>
                    </div>
                    <div>
                        <Plus
                            className="mx-element-gap-sm text-isd-primary hidden lg:block"
                            size={24}
                        />
                    </div>
                    <div className="bg-isd-primary-2 text-isd-primary p-element-gap flex-1 w-full">
                        <div className="flex lg:flex-col flex-wrap text-center justify-center w-full">
                            <span>Capstone Project</span>
                            <span className="ml-1"> (6 credits)</span>
                            <div className="lg:hidden">{capstoneContent}</div>
                        </div>
                    </div>
                    <div>
                        <Plus
                            className="mx-element-gap-sm text-isd-primary hidden lg:block"
                            size={24}
                        />
                    </div>
                    <div className="bg-isd-secondary-1 text-isd-secondary p-element-gap flex-1 w-full">
                        <div className="flex lg:flex-col flex-wrap text-center justify-center w-full">
                            <span>Internship Placement</span>
                            <span className="ml-1"> (6 credits)</span>
                        </div>
                        <div className="lg:hidden">{internshipContent}</div>
                    </div>
                </div>
                <div className="text-sm flex gap-[6px] text-isd-font-3">
                    <div className="flex-1 bg-isd-primary-2 p-element-gap h-fit hidden lg:block">
                        {coreCoursesContent}
                    </div>
                    <div>
                        <div className="w-[24px]"></div>
                    </div>
                    <div className="flex-1 bg-isd-secondary-1 p-element-gap hidden lg:block">
                        {electiveCoursesContent}
                    </div>
                    <div className="hidden lg:block w-[24px]"></div>

                    <div className="flex-1 bg-isd-primary-2 p-element-gap hidden lg:block">
                        {capstoneContent}
                    </div>
                    <div className="hidden lg:block w-[24px]"></div>

                    <div className="flex-1 bg-isd-secondary-1 p-element-gap hidden lg:block">
                        {internshipContent}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const coreCoursesContent = (
    <div className="flex flex-col text-sm font-normal justify-start text-left text-isd-font-3 lg:mt-0 mt-3">
        <p>
            <span className=" text-[#36b1d3]">
                <span className="italic">i</span>Product
            </span>
            : Product Ideation and Development (ISDN5701)
        </p>
        <p>
            <span className=" text-[#98dd26]">
                <span className="italic">i</span>Service
            </span>
            : Design for Transformation (ISDN5702)
        </p>
        <p>
            <span className=" text-[#e77f24]">
                <span className="italic">i</span>Connect
            </span>
            : Emerging Technologies for Design Innovation (ISDN5703)
        </p>
        <p>
            <span className=" text-[#29cc59]">
                <span className="italic">i</span>Media
            </span>
            : Transmedia Design and Production (ISDN5704)
        </p>
    </div>
);

const electiveCoursesContent = (
    <div className="text-sm font-normal justify-start text-left text-isd-font-3 lg:mt-0 mt-3">
        Students are required to complete 6-9 credits of bridging elective
        courses, including{' '}
        <span className=" text-[#36b1d3]">
            <span className="italic">i</span>Product
        </span>
        /<span className=" text-[#98dd26]">iService</span>: Design Identity and
        Visual Communication (ISDN5711),{' '}
        <span className=" text-[#e77f24]">
            <span className="italic">i</span>
            Connect
        </span>
        : Human Factors and Artificial Intelligence (ISDN5712),{' '}
        <span className=" text-[#29cc59]">
            <span className="italic">i</span>Media
        </span>
        : Big Data and Design Strategies for Media Communication (ISDN5713),
        tailored to their academic backgrounds. Additionally, they can choose
        from a selection of 4i-related elective courses based on their career
        aspirations and personal interests.
    </div>
);

const capstoneContent = (
    <div className="text-sm font-normal justify-start text-left text-isd-font-3 lg:mt-0 mt-3">
        Students are required to complete a 6-credit capstone (
        <span className=" text-[#704f97]">
            <span className="italic">i</span>Project
        </span>
        : ISDN6730), choosing one of the three specialisms: Product-design
        focused, Service-design focused, or Research focused. Students will work
        individually or in group on the capstone project.
        <br />
        <br />
        Each capstone project will be supervised by at least one faculty member.
        Students are encouraged to associate their internship training with
        their capstone projects, and in such cases, the capstone project will be
        supervised or co-supervised by at least one faculty member and one
        industry expert.
    </div>
);

const internshipContent = (
    <div className="text-sm font-normal justify-start text-left text-isd-font-3 lg:mt-0 mt-3">
        Students are required to enroll in a year-long internship{' '}
        <span className="text-[#704f97]">
            (<span className="italic">i</span>Project
        </span>
        : ISDN6740) in Hong Kong, the Greater Bay Area or Shanghai, normally in
        the second year of study. Each internship will be co-supervised by one
        faculty member and one industry expert. Students are required to
        complete the capstone project while conducting the internship.
    </div>
);
