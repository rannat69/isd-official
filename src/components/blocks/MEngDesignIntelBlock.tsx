'use client';
import { Plus } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import Select from '@/components/Select';
import Breadcrumb from '../Breadcrumb';

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
            subheading: '',
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
                            Design Intelligence is proposed to cultivate "Design
                            Strategists" and "Creative Technology Connectors."
                            Recognizing that creativity adds substantial
                            intangible value and competitiveness to products and
                            services, the program emphasizes innovation in both
                            product and service/process design. Its curriculum
                            features four integrated course clusters—iProduct,
                            iService, iConnect, and iMedia—each blending core
                            and bridging elective courses. A broad selection of
                            electives is also provided to help students
                            customize their learning and broaden their
                            knowledge.
                        </p>
                        <p className="text-isd-font-1">
                            This program directly aligns with the Hong Kong SAR
                            government's strategic focus on the new creative
                            economy. By leveraging Hong Kong's unique
                            "east-meets-west" cultural positioning and
                            traditional economic strengths, the initiative aims
                            to produce tech-fluent creative talents. These
                            innovators will integrate AI into their pipelines to
                            design next-generation user experiences across the
                            region's core sectors, including retail, finance,
                            and professional services.
                        </p>
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
                            Program characteristics
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
                                            industry placement for full-time
                                            students. This allows students to
                                            gain real-world experience, build
                                            professional networks, and enhance
                                            their employability, creating a
                                            seamless transition from academia to
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
                                            collaboration projects (ISDN5701
                                            Product Ideation and Development and
                                            ISDN5702 Design for Transformation)
                                            as well as a capstone project that
                                            requires students to apply the
                                            learned skills to solve real
                                            business problems, and deliver
                                            design solutions in a practical,
                                            portfolio-ready manner.
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
            subheading: <span className="lg:inline hidden">Curriculum</span>,
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
                                <a href="https://prog-crs.hkust.edu.hk/pgprog/2024-25/msc-tle">
                                    Postgraduate Program
                                </a>
                            </span>
                            , 
                            <span className="text-isd-secondary font-[700] underline">
                                <a href="https://prog-crs.hkust.edu.hk/pgcourse/2022-23/MTLE">
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
                        *Classes are normally held on weekday evenings from
                        Monday to Friday; on Saturday mornings or afternoons.
                        Each course typically meets once a week for
                        approximately three hours. 
                    </div>
                </div>
            ),
        },
        {
            id: 'adm-app',
            subheading: (
                <div className="hidden lg:block">Admission & Application</div>
            ),
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
        <>
            {' '}
            {activeMenuId === 'edu-obj' && (
                <div className="lg:dot-pattern before:bottom-[-1110px] before:left-[-115px] [--dot-color:var(--isd-secondary-1)]" />
            )}
            <div className="container overflow-y-clip flex flex-col py-section-gap gap-component-gap">
                {contentMenu.map((section, index) => (
                    <div key={index}>{section.content}</div>
                ))}
                <Select
                    triggerClassName="text-lg text-center cursor-pointer pb-[6px] text-isd-secondary border-b-3 border-isd-secondary flex items-center gap-[10px]"
                    className="lg:hidden"
                    options={menu.map((link) => ({
                        label: link.title,
                        value: link.id,
                    }))}
                    value={activeMenuId}
                    onChange={(value) => handleMenuClick(value as string)}
                    itemClassName="px-[12px] py-[12px] text-xl text-isd-font-2"
                />

                {content.map((section, index) => (
                    <div
                        key={index}
                        id={section.id}
                        className={`flex flex-col gap-[24px] ${
                            activeMenuId === section.id ? '' : 'hidden'
                        }`}
                    >
                        {section.subheading && (
                            <h3 className="lg:text-[36px] text-h2 leading-[36px] text-isd-primary">
                                {section.subheading}
                            </h3>
                        )}
                        <div className="lg:text-md text-sm leading-[28px] text-isd-font-1">
                            {section.content}
                        </div>
                    </div>
                ))}
            </div>
        </>
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
                        </div>
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
                </div>
            </div>
        </div>
    </div>
);

const coreCoursesContent = (
    <div className="flex flex-col text-sm font-normal justify-start text-left text-isd-font-3 lg:mt-0 mt-3">
        <p>Product Ideation and Development</p>
        <p>Design for Transformation</p>
        <p>Emerging Technologies for Design Innovation</p>
        <p>Transmedia Design and Production</p>
    </div>
);

const electiveCoursesContent = (
    <div className="text-sm font-normal justify-start text-left text-isd-font-3 lg:mt-0 mt-3">
        Students are required to complete 6-9 credits of bridging elective
        courses within the 4i cluster areas, tailored to their academic
        backgrounds. Additionnally, they can choose from a selection of
        4i-related elective courses based on their career aspirations and
        personal interests.{' '}
    </div>
);

const capstoneContent = (
    <div className="text-sm font-normal justify-start text-left text-isd-font-3 lg:mt-0 mt-3">
        Students are required to complete a 6-credit capstone project, choosing
        one of the three specialisms: Product-design focused, Service-design
        focused, or Research focused. Students will work individually or in
        group on the capstone project.
        <br />
        <br />
        Each capstone project will be supervised by at least one faculty member.
        Students are encouraged to associate their internship training with
        their capstone projects, and in such cases, the capstone project will be
        supervised or co-supervised by at least one faculty member and one
        indsutry expert.
    </div>
);
