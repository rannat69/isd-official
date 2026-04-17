'use client';
import { Plus } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import Breadcrumb from '../../Breadcrumb';

interface CourseProps {
    title: string;
    children: React.ReactNode;
}

const CourseItem = ({ title, children }: CourseProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="">
            <h3>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex w-full items-center justify-between py-4 text-left font-semibold text-gray-900 bg-isd-primary-2 hover:bg-gray-50 transition-colors"
                    aria-expanded={isOpen}
                >
                    <span className="text-isd-primary">{title}</span>
                    <span
                        className={`text-xl transition-transform duration-200 ${isOpen ? 'rotate-45' : 'rotate-0'}`}
                    >
                        +
                    </span>
                </button>
            </h3>

            {/* Tailwind conditional rendering: 
        Using a simple JS conditional to show/hide content.
      */}
            {isOpen && (
                <div className="pb-6 text-gray-700 animate-fadeIn bg-isd-primary-2">
                    {children}
                </div>
            )}
        </div>
    );
};

export default function EntrepreneurshipBlock() {
    const [activeMenuId, setActiveMenuId] = useState('');
    const menu = [];

    useEffect(() => {}, []);

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
                                    'Entrepreneurship',
                                    'Entrepreneurship Minor',
                                ]}
                            />
                            <h1 className="text-h1 offset-text-background text-pretty ">
                                Entrepreneurship Minor
                            </h1>
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
                            <span className="text-isd-secondary font-[700]">
                                The Entrepreneurship (ENTR) curriculum at HKUST
                                supports a mindset–fundamentals–skillset
                                progression for students who want to discover
                                opportunities, build ventures, and engage with
                                entrepreneurial ecosystems.
                            </span>
                        </p>
                    </div>

                    <div className="flex flex-col gap-[24px]">
                        <h2 className="lg:text-[36px] text-h2 leading-[36px] text-isd-primary">
                            Entrepreneurship Minor Structure
                        </h2>
                        <div className="flex flex-col gap-[12px]">
                            <p>
                                The Minor in Entrepreneurship is open to
                                undergraduates meeting the CGA and minor
                                requirements.
                            </p>
                            <p>
                                Students complete at least 18 credits within a
                                three-layer scaffold: one required mindset
                                course, a set of fundamental electives, and
                                skill-set electives that build practical
                                entrepreneurial capabilities.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-[24px]">
                        <h2 className="lg:text-[36px] text-h2 leading-[36px] text-isd-primary">
                            How the Entrepreneurship Minor Fits Together
                        </h2>
                        <div className="flex flex-col gap-[12px]">
                            <p>
                                Every Entrepreneurship Minor student shares the
                                same starting point (ENTR 1001), then chooses
                                fundamentals and skill-set courses to create a
                                pathway that fits their interests.
                            </p>
                            <p>
                                Students complete at least 18 credits within a
                                three-layer scaffold: one required mindset
                                course, a set of fundamental electives, and
                                skill-set electives that build practical
                                entrepreneurial capabilities.
                            </p>
                        </div>

                        {/*} <div className="flex  gap-[12px]">
                            <span className=" inline-flex items-center gap-1">
                                <span className=" w-2.5 h-2.5 rounded-full inline-block bg-[#900000]"></span>
                                Mindset (Required)
                            </span>

                            <span className=" inline-flex items-center gap-1">
                                <span className=" w-2.5 h-2.5 rounded-full inline-block bg-[#006644]"></span>
                                Fundamental Electives
                            </span>

                            <span className=" inline-flex items-center gap-1">
                                <span className=" w-2.5 h-2.5 rounded-full inline-block bg-[#b35f00]"></span>
                                Skill-set Electives
                            </span>
                        </div>*/}

                        <div className="pathway-map flex flex-wrap items-stretch justify-center gap-4 my-2 bg-transparent">
                            <div className="pathway-column flex-[1_1_260px] max-w-[340px] bg-isd-primary-2 rounded-[6px] px-[0.9rem] py-[0.8rem]">
                                <div className="pathway-column-header mb-2">
                                    <div className="pathway-step-label text-[0.78rem] font-semibold uppercase text-isd-primary">
                                        Start Here
                                    </div>
                                    <h3 className="m-[0.1rem] text-[1rem] text-isd-primary font-bold">
                                        Mindset
                                    </h3>
                                    <div className="pathway-column-subtitle text-[0.8rem] text-isd-primary">
                                        Everyone takes this
                                    </div>
                                </div>

                                <div className="pathway-box pathway-box-core  bg-isd-secondary-1 rounded-[4px] px-[0.55rem] py-[0.45rem] mt-2 relative text-[0.88rem]">
                                    <a
                                        href="#entr-1001-detail"
                                        className="font-bold text-isd-secondary"
                                    >
                                        ENTR 1001
                                    </a>
                                    <br />
                                    Entrepreneurship 1001: Designing Your Future
                                    <div className="pathway-chip inline-block mt-1 mr-[0.2rem] px-[0.35rem] py-[0.05rem] rounded-full bg-[#f0f0f0] text-[0.75rem] text-[#555]">
                                        Explore entrepreneurship
                                    </div>
                                    <div className="pathway-chip inline-block mt-1 mr-[0.2rem] px-[0.35rem] py-[0.05rem] rounded-full bg-[#f0f0f0] text-[0.75rem] text-[#555]">
                                        Design your future
                                    </div>
                                </div>
                            </div>

                            <div className="pathway-arrow-large self-center text-[1.6rem] text-[#bbb]">
                                ⟶
                            </div>

                            <div className="pathway-column flex-[1_1_260px] max-w-[340px] bg-isd-primary-2 rounded-[6px] px-[0.9rem] py-[0.8rem]">
                                <div className="pathway-column-header mb-2">
                                    <div className="pathway-step-label text-[0.78rem] font-semibold uppercase text-isd-primary">
                                        Build Foundations
                                    </div>
                                    <h3 className="m-[0.1rem] text-[1rem] text-isd-primary font-bold">
                                        Fundamentals
                                    </h3>
                                    <div className="pathway-column-subtitle text-[0.8rem] text-isd-primary">
                                        Pick a few that fit you
                                    </div>
                                </div>

                                <div className="pathway-box pathway-box-fund bg-isd-secondary-1 rounded-[4px] px-[0.55rem] py-[0.45rem] mt-2 relative text-[0.88rem]">
                                    <strong className="text-isd-secondary">
                                        ISOM 1380
                                    </strong>
                                    <br />
                                    Technology and Innovation: Social and
                                    Business Perspectives
                                    <div className="pathway-chip inline-block mt-1 mr-[0.2rem] px-[0.35rem] py-[0.05rem] rounded-full bg-[#f0f0f0] text-[0.75rem] text-[#555]">
                                        Big picture of innovation
                                    </div>
                                </div>

                                <div className="pathway-box pathway-box-fund  bg-isd-secondary-1 rounded-[4px] px-[0.55rem] py-[0.45rem] mt-2 relative text-[0.88rem]">
                                    <strong className="text-isd-secondary">
                                        MGMT 2011
                                    </strong>
                                    <br />
                                    New Venture Creation
                                    <div className="pathway-chip inline-block mt-1 mr-[0.2rem] px-[0.35rem] py-[0.05rem] rounded-full bg-[#f0f0f0] text-[0.75rem] text-[#555]">
                                        Step‑by‑step venture process
                                    </div>
                                </div>

                                <div className="pathway-box pathway-box-fund  bg-isd-secondary-1 rounded-[4px] px-[0.55rem] py-[0.45rem] mt-2 relative text-[0.88rem]">
                                    <strong className="text-isd-secondary">
                                        ENTR 2010
                                    </strong>
                                    <br />
                                    Entrepreneurship Mentorship and Readings
                                    <div className="pathway-chip inline-block mt-1 mr-[0.2rem] px-[0.35rem] py-[0.05rem] rounded-full bg-[#f0f0f0] text-[0.75rem] text-[#555]">
                                        1‑credit mentoring &amp; reflection
                                    </div>
                                </div>

                                <div className="pathway-box pathway-box-fund  bg-isd-secondary-1 rounded-[4px] px-[0.55rem] py-[0.45rem] mt-2 relative text-[0.88rem]">
                                    <strong className="text-isd-secondary">
                                        ENTR 3030
                                    </strong>
                                    <br />
                                    Social Innovations and Entrepreneurship
                                    <div className="pathway-chip inline-block mt-1 mr-[0.2rem] px-[0.35rem] py-[0.05rem] rounded-full bg-[#f0f0f0] text-[0.75rem] text-[#555]">
                                        Social impact &amp; CSR
                                    </div>
                                </div>

                                <div className="pathway-box pathway-box-fund  bg-isd-secondary-1 rounded-[4px] px-[0.55rem] py-[0.45rem] mt-2 relative text-[0.88rem]">
                                    <strong className="text-isd-secondary">
                                        ENTR 3100
                                    </strong>
                                    <br />
                                    Industrial &amp; Deep Tech Landscape
                                    <div className="pathway-chip inline-block mt-1 mr-[0.2rem] px-[0.35rem] py-[0.05rem] rounded-full bg-[#f0f0f0] text-[0.75rem] text-[#555]">
                                        Understand industries &amp; deep tech
                                    </div>
                                </div>

                                <div className="pathway-box pathway-box-fund bg-isd-secondary-1  rounded-[4px] px-[0.55rem] py-[0.45rem] mt-2 relative text-[0.88rem]">
                                    <strong className="text-isd-secondary">
                                        ENTR 4901–4904
                                    </strong>
                                    <br />
                                    Student‑led Entrepreneurship Acceleration
                                    Project
                                    <div className="pathway-chip inline-block mt-1 mr-[0.2rem] px-[0.35rem] py-[0.05rem] rounded-full bg-[#f0f0f0] text-[0.75rem] text-[#555]">
                                        Turn ideas into real projects
                                    </div>
                                </div>

                                <p className="pathway-note mt-3 text-[0.78rem] ">
                                    Combine 2–4 fundamentals to reach the
                                    required credits. You can mix mentoring,
                                    social impact, industry, and project‑based
                                    courses.
                                </p>
                            </div>

                            <div className="pathway-arrow-large self-center text-[1.6rem] text-[#bbb]">
                                ⟶
                            </div>

                            <div className="pathway-column flex-[1_1_260px] max-w-[340px] bg-isd-primary-2 rounded-[6px]  px-[0.9rem] py-[0.8rem]">
                                <div className="pathway-column-header mb-2">
                                    <div className="pathway-step-label text-[0.78rem] font-semibold uppercase text-isd-primary">
                                        Develop Skills
                                    </div>
                                    <h3 className="m-[0.1rem] text-[1rem] text-isd-primary font-bold">
                                        Skill-Set
                                    </h3>
                                    <div className="pathway-column-subtitle text-[0.8rem] text-isd-primary">
                                        Choose what you want to get good at
                                    </div>
                                </div>

                                <div className="pathway-box pathway-box-skill  bg-isd-secondary-1 rounded-[4px] px-[0.55rem] py-[0.45rem] mt-2 relative text-[0.88rem]">
                                    <strong className="text-isd-secondary">
                                        ENTR 3012
                                    </strong>
                                    <br />
                                    Growth &amp; Innovation for Tech Startups
                                    <div className="pathway-chip inline-block mt-1 mr-[0.2rem] px-[0.35rem] py-[0.05rem] rounded-full bg-[#f0f0f0] text-[0.75rem] text-[#555]">
                                        Growth &amp; digital strategy
                                    </div>
                                </div>

                                <div className="pathway-box pathway-box-skill  bg-isd-secondary-1 rounded-[4px] px-[0.55rem] py-[0.45rem] mt-2 relative text-[0.88rem]">
                                    <strong className="text-isd-secondary">
                                        ENTR 3013
                                    </strong>
                                    <br />
                                    Prototyping Skills for Entrepreneurs
                                    <div className="pathway-chip inline-block mt-1 mr-[0.2rem] px-[0.35rem] py-[0.05rem] rounded-full bg-[#f0f0f0] text-[0.75rem] text-[#555]">
                                        Build &amp; test prototypes
                                    </div>
                                </div>

                                <div className="pathway-box pathway-box-skill  bg-isd-secondary-1 rounded-[4px] px-[0.55rem] py-[0.45rem] mt-2 relative text-[0.88rem]">
                                    <strong className="text-isd-secondary">
                                        ENTR 3350 / 3360
                                    </strong>
                                    <br />
                                    Global Product &amp; Tech Startups
                                    <div className="pathway-chip inline-block mt-1 mr-[0.2rem] px-[0.35rem] py-[0.05rem] rounded-full bg-[#f0f0f0] text-[0.75rem] text-[#555]">
                                        Product &amp; venture building
                                    </div>
                                </div>

                                <div className="pathway-box pathway-box-skill  bg-isd-secondary-1 rounded-[4px] px-[0.55rem] py-[0.45rem] mt-2 relative text-[0.88rem]">
                                    <strong className="text-isd-secondary">
                                        Other electives
                                    </strong>
                                    <br />
                                    BIBU / COMP / FINA / ISOM / LIFS / MARK /
                                    MGMT / OCES / SCIE
                                    <div className="pathway-chip inline-block mt-1 mr-[0.2rem] px-[0.35rem] py-[0.05rem] rounded-full bg-[#f0f0f0] text-[0.75rem] text-[#555]">
                                        Sector &amp; business skills
                                    </div>
                                </div>

                                <p className="pathway-note mt-3 text-[0.78rem] text-[#666]">
                                    Skill‑set courses help you deepen in areas
                                    like product, growth, finance, IP, biotech,
                                    IT, and sustainability.
                                </p>
                            </div>
                        </div>

                        <p className="font-bold text-primary">
                            Required Mindset Course
                        </p>

                        <table className="w-fit">
                            <tbody className="text-isd-font-1">
                                <tr className="bg-isd-primary-2 text-primary font-bold border-y-2 border-white">
                                    <td className="p-[12px] border-x-2 border-white ">
                                        Code
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        Title
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        Credits
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        Role in Minor
                                    </td>
                                </tr>
                                <tr className="bg-isd-primary-2 text-primary">
                                    <td className="p-[12px] border-x-2 border-white">
                                        ENTR 1001
                                        <br />
                                        <div className="bg-[#900000] rounded-lg text-white text-xs p-1">
                                            REQUIRED
                                        </div>
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        Entrepreneurship 1001: Designing Your
                                        Future
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        3
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        Signature foundation course for all
                                        Entrepreneurship Minor students; focuses
                                        on entrepreneurial mindset,
                                        self-discovery, basic opportunity
                                        recognition, and project-based
                                        experiential learning with entrepreneurs
                                        from diverse backgrounds.
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <p className="font-bold text-primary">
                            Fundamental Electives
                        </p>

                        <p>
                            Fundamental electives provide core exposure to
                            innovation, social and industrial perspectives,
                            mentoring, and early acceleration.
                        </p>

                        <table className="w-fit">
                            <tbody className="text-isd-font-1">
                                <tr className="bg-isd-primary-2 text-primary font-bold border-y-2 border-white">
                                    <td className="p-[12px] border-x-2 border-white ">
                                        Code
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        Title
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        Credits
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        Role
                                    </td>
                                </tr>
                                <tr className="bg-isd-secondary-1 text-secondary">
                                    <td className="p-[12px] border-x-2 border-white">
                                        ISOM 1380
                                        <br />
                                        <div className="bg-[#006644] rounded-lg text-white text-xs p-1">
                                            FUNDAMENTAL
                                        </div>
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        Technology and Innovation: Social and
                                        Business Perspectives{' '}
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        3
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        Introduces how technology and innovation
                                        interact with society and business,
                                        forming a broad conceptual base for
                                        entrepreneurial thinking.
                                    </td>
                                </tr>
                                <tr className="bg-isd-primary-2 text-primary">
                                    <td className="p-[12px] border-x-2 border-white">
                                        MGMT 2011
                                        <br />
                                        <div className="bg-[#006644] rounded-lg text-white text-xs p-1">
                                            FUNDAMENTAL
                                        </div>
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        New Venture Creation
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        3
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        Guides students step-by-step through the
                                        new venture creation process, from
                                        opportunity evaluation to basic venture
                                        planning.
                                    </td>
                                </tr>
                                <tr className="bg-isd-secondary-1 text-secondary">
                                    <td className="p-[12px] border-x-2 border-white">
                                        ENTR 2010
                                        <br />
                                        <div className="bg-[#006644] rounded-lg text-white text-xs p-1">
                                            FUNDAMENTAL
                                        </div>
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        Entrepreneurship Mentorship and Readings
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        1
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        Mentorship-based course where students
                                        explore entrepreneurship through
                                        readings, self-directed activities, and
                                        consolidation with a faculty mentor.
                                    </td>
                                </tr>
                                <tr className="bg-isd-primary-2 text-primary">
                                    <td className="p-[12px] border-x-2 border-white">
                                        ENTR 3030
                                        <br />
                                        <div className="bg-[#006644] rounded-lg text-white text-xs p-1">
                                            FUNDAMENTAL
                                        </div>
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        Social Innovations and Entrepreneurship
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        3
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        Introduces social enterprises, social
                                        innovation models, and corporate social
                                        responsibility, emphasizing delivery of
                                        social impact through effective
                                        operations.
                                    </td>
                                </tr>
                                <tr className="bg-isd-secondary-1 text-secondary">
                                    <td className="p-[12px] border-x-2 border-white">
                                        ENTR 3100
                                        <br />
                                        <div className="bg-[#006644] rounded-lg text-white text-xs p-1">
                                            FUNDAMENTAL
                                        </div>
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        Industrial Landscape: Understanding the
                                        Elements to Start a Business
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        3
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        Surveys industry structures and
                                        ecosystems across sectors; students
                                        analyze companies and identify
                                        opportunities and competitive dynamics.
                                    </td>
                                </tr>
                                <tr className="bg-isd-primary-2 text-primary">
                                    <td className="p-[12px] border-x-2 border-white">
                                        ENTR 4901–4904
                                        <br />
                                        <div className="bg-[#006644] rounded-lg text-white text-xs p-1">
                                            FUNDAMENTAL
                                        </div>
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        Student-led Entrepreneurship
                                        Acceleration Project
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        1-4
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        Team-based acceleration projects
                                        developing an idea from early stage
                                        towards market viability through
                                        ideation, prototyping, user feedback,
                                        and venture planning, with up to a
                                        defined credit cap counting toward
                                        fundamental electives.
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <p className="font-bold text-primary">
                            Example Pathway A: Build Your Own Tech Startup
                        </p>

                        <p>
                            For students who want to take an idea, prototype it,
                            grow it, and potentially accelerate it while at
                            HKUST.
                        </p>

                        <div className="pathway-flow rounded-[6px] bg-isd-primary-2 p-4 my-2">
                            <div className="flow-row flex flex-wrap items-stretch justify-center gap-[0.6rem] mb-[0.45rem]">
                                <div className="flow-step flow-step-core min-w-[190px] max-w-[250px] rounded-[4px] border border-[#900000]/50 bg-[#fff5f5] p-[0.55rem] px-[0.6rem] text-[0.84rem] relative">
                                    <div className="flow-badge absolute top-[-0.6rem] left-[0.4rem] bg-[#f0f0f0] px-[0.4rem] py-[0.04rem] rounded-full text-[0.7rem] uppercase text-[#555]">
                                        Start
                                    </div>

                                    <div className="flow-title font-semibold text-[0.86rem] mb-[0.15rem]">
                                        Discover &amp; Decide
                                    </div>

                                    <div className="flow-body text-[0.82rem]">
                                        <strong>ENTR 1001</strong>
                                        <br />
                                        Design your future, explore problems,
                                        and decide whether you want to pursue a
                                        startup.
                                    </div>
                                </div>

                                <div className="flow-arrow text-[1.2rem] text-[#999] self-center">
                                    ⟶
                                </div>

                                <div className="flow-step flow-step-fund min-w-[190px] max-w-[250px] rounded-[4px] border border-[#dddddd] bg-[#f5fff8] p-[0.55rem] px-[0.6rem] text-[0.84rem] relative border-[#006644]">
                                    <div className="flow-badge absolute top-[-0.6rem] left-[0.4rem] bg-[#f0f0f0] px-[0.4rem] py-[0.04rem] rounded-full text-[0.7rem] uppercase text-[#555]">
                                        Plan
                                    </div>

                                    <div className="flow-title font-semibold text-[0.86rem] mb-[0.15rem]">
                                        Venture Basics
                                    </div>

                                    <div className="flow-body text-[0.82rem]">
                                        <strong>MGMT 2011</strong>
                                        <br />
                                        Learn the full new venture process, from
                                        opportunity evaluation to basic business
                                        plan.
                                    </div>
                                </div>

                                <div className="flow-arrow text-[1.2rem] text-[#999] self-center">
                                    ⟶
                                </div>

                                <div className="flow-step flow-step-fund min-w-[190px] max-w-[250px] rounded-[4px] border border-[#dddddd] bg-[#f5fff8] p-[0.55rem] px-[0.6rem] text-[0.84rem] relative border-[#006644]">
                                    <div className="flow-badge absolute top-[-0.6rem] left-[0.4rem] bg-[#f0f0f0] px-[0.4rem] py-[0.04rem] rounded-full text-[0.7rem] uppercase text-[#555]">
                                        Understand
                                    </div>

                                    <div className="flow-title font-semibold text-[0.86rem] mb-[0.15rem]">
                                        Ecosystem &amp; Deep Tech
                                    </div>

                                    <div className="flow-body text-[0.82rem]">
                                        <strong>ENTR 3100</strong>
                                        <br />
                                        Map industries and deep‑tech landscapes;
                                        choose where your idea fits.
                                    </div>
                                </div>
                            </div>

                            <div className="flow-row flow-row-secondary flex flex-wrap items-stretch justify-center gap-[0.6rem] mb-[0.45rem]">
                                <div className="flow-arrow vertical text-[1rem] text-[#999] self-center">
                                    ⬇
                                </div>
                            </div>

                            <div className="flow-row flex flex-wrap items-stretch justify-center gap-[0.6rem] mb-[0.45rem]">
                                <div className="flow-step flow-step-skill min-w-[190px] max-w-[250px] rounded-[4px] border border-[#b35f00] bg-[#fff8f0] p-[0.55rem] px-[0.6rem] text-[0.84rem] relative">
                                    <div className="flow-badge absolute top-[-0.6rem] left-[0.4rem] bg-[#f0f0f0] px-[0.4rem] py-[0.04rem] rounded-full text-[0.7rem] uppercase text-[#555]">
                                        Build
                                    </div>

                                    <div className="flow-title font-semibold text-[0.86rem] mb-[0.15rem]">
                                        Prototype
                                    </div>

                                    <div className="flow-body text-[0.82rem]">
                                        <strong>ENTR 3013</strong>
                                        <br />
                                        Turn your idea into tangible prototypes
                                        (software, hardware, service mock‑ups).
                                    </div>
                                </div>

                                <div className="flow-arrow text-[1.2rem] text-[#999] self-center">
                                    ⟶
                                </div>

                                <div className="flow-step flow-step-skill min-w-[190px] max-w-[250px] rounded-[4px] border border-[#b35f00] bg-[#fff8f0] p-[0.55rem] px-[0.6rem] text-[0.84rem] relative">
                                    <div className="flow-badge absolute top-[-0.6rem] left-[0.4rem] bg-[#f0f0f0] px-[0.4rem] py-[0.04rem] rounded-full text-[0.7rem] uppercase text-[#555]">
                                        Grow
                                    </div>

                                    <div className="flow-title font-semibold text-[0.86rem] mb-[0.15rem]">
                                        Traction &amp; Growth
                                    </div>

                                    <div className="flow-body text-[0.82rem]">
                                        <strong>ENTR 3012</strong>
                                        <br />
                                        Design experiments, growth loops, and
                                        pitches to attract users and investors.
                                    </div>
                                </div>

                                <div className="flow-arrow text-[1.2rem] text-[#999] self-center">
                                    ⟶
                                </div>

                                <div className="flow-step flow-step-skill min-w-[190px] max-w-[250px] rounded-[4px] border border-[#b35f00] bg-[#fff8f0] p-[0.55rem] px-[0.6rem] text-[0.84rem] relative">
                                    <div className="flow-badge absolute top-[-0.6rem] left-[0.4rem] bg-[#f0f0f0] px-[0.4rem] py-[0.04rem] rounded-full text-[0.7rem] uppercase text-[#555]">
                                        Structure
                                    </div>

                                    <div className="flow-title font-semibold text-[0.86rem] mb-[0.15rem]">
                                        From Project to Startup
                                    </div>

                                    <div className="flow-body text-[0.82rem]">
                                        <strong>ENTR 3360</strong>
                                        <br />
                                        Shape your project into a real
                                        technology startup with supply chains,
                                        IP, and business model.
                                    </div>
                                </div>

                                <div className="flow-arrow text-[1.2rem] text-[#999] self-center">
                                    ⟶
                                </div>

                                <div className="flow-step flow-step-fund min-w-[190px] max-w-[250px] rounded-[4px] border border-[#006644] bg-[#f5fff8] p-[0.55rem] px-[0.6rem] text-[0.84rem] relative">
                                    <div className="flow-badge absolute top-[-0.6rem] left-[0.4rem] bg-[#f0f0f0] px-[0.4rem] py-[0.04rem] rounded-full text-[0.7rem] uppercase text-[#555]">
                                        Finish (and continue)
                                    </div>

                                    <div className="flow-title font-semibold text-[0.86rem] mb-[0.15rem]">
                                        Acceleration
                                    </div>

                                    <div className="flow-body text-[0.82rem]">
                                        <strong>ENTR 4901–4904</strong>
                                        <br />
                                        Use a project course to accelerate your
                                        startup idea, test in the market, and
                                        prepare for funding or incubation.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p>
                            Along this route, you can add finance and law
                            electives (e.g., FINA 2203/2303, ISOM 2030/4020) or
                            sector electives (e.g., COMP 4911 / ENTR 4911, BIBU
                            4820, LIFS 4820) to tailor your startup to IT,
                            biotech, or other domains.
                        </p>

                        <p className="font-bold text-primary">
                            Example Pathway B: Social Impact & Ecosystem
                            Explorer
                        </p>

                        <p>
                            For students who want to understand social
                            challenges, industry ecosystems, and deep‑tech
                            contexts before deciding whether to start something
                            or join existing ventures.
                        </p>

                        <div className=" rounded-lg bg-isd-primary-2 p-4 lg:p-6 ">
                            <div className="flex flex-wrap items-stretch gap-4 mb-4">
                                <div className="relative min-w-[200px] max-w-xs flex-1 border border-red-800 bg-red-50 rounded-md p-3 pt-4 text-sm">
                                    <span className="absolute -top-2 left-2 bg-gray-100 px-2 py-0.5 rounded-full text-[10px] uppercase font-bold text-gray-600 border border-gray-200">
                                        Start
                                    </span>
                                    <div className="font-bold text-gray-900 mb-1">
                                        Discover Yourself
                                    </div>
                                    <div className="text-gray-700 leading-relaxed">
                                        <strong className="text-red-900">
                                            ENTR 1001
                                        </strong>
                                        <br />
                                        Explore your interests and values, and
                                        learn how innovation can shape future
                                        careers.
                                    </div>
                                </div>

                                <div className="hidden lg:flex items-center text-gray-400 text-xl">
                                    ⟶
                                </div>

                                <div className="relative min-w-[200px] max-w-xs flex-1 border border-green-700 bg-green-50 rounded-md p-3 pt-4 text-sm">
                                    <span className="absolute -top-2 left-2 bg-gray-100 px-2 py-0.5 rounded-full text-[10px] uppercase font-bold text-gray-600 border border-gray-200">
                                        Focus
                                    </span>
                                    <div className="font-bold text-gray-900 mb-1">
                                        Social Innovation
                                    </div>
                                    <div className="text-gray-700 leading-relaxed">
                                        <strong className="text-green-900">
                                            ENTR 3030
                                        </strong>
                                        <br />
                                        Understand social enterprises, CSR, and
                                        how innovation can create social impact.
                                    </div>
                                </div>

                                <div className="hidden lg:flex items-center text-gray-400 text-xl">
                                    ⟶
                                </div>

                                <div className="relative min-w-[200px] max-w-xs flex-1 border border-green-700 bg-green-50 rounded-md p-3 pt-4 text-sm">
                                    <span className="absolute -top-2 left-2 bg-gray-100 px-2 py-0.5 rounded-full text-[10px] uppercase font-bold text-gray-600 border border-gray-200">
                                        Understand
                                    </span>
                                    <div className="font-bold text-gray-900 mb-1">
                                        Ecosystems &amp; Deep Tech
                                    </div>
                                    <div className="text-gray-700 leading-relaxed">
                                        <strong className="text-green-900">
                                            ENTR 3100
                                        </strong>
                                        <br />
                                        Learn how companies, technologies, and
                                        regulations interact in sectors such as
                                        AI, climate-tech, or biotech.
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-start lg:ml-32 my-2 text-gray-400 text-lg">
                                ⬇
                            </div>

                            <div className="flex flex-wrap items-stretch gap-4">
                                <div className="relative min-w-[200px] max-w-md flex-1 border border-blue-700 bg-white rounded-md p-3 pt-4 text-sm">
                                    <span className="absolute -top-2 left-2 bg-gray-100 px-2 py-0.5 rounded-full text-[10px] uppercase font-bold text-gray-600 border border-gray-200">
                                        Choose
                                    </span>
                                    <div className="font-bold text-gray-900 mb-1">
                                        Impact &amp; Sector Courses
                                    </div>
                                    <div className="text-gray-700">
                                        Deepen in a direction that fits you:
                                        <ul className="list-disc ml-5 mt-2 space-y-1 text-xs">
                                            <li>
                                                <strong>
                                                    BIBU 4820 / LIFS 4820
                                                </strong>{' '}
                                                – Biotech &amp; life sciences
                                            </li>
                                            <li>
                                                <strong>OCES 4301</strong> –
                                                Environment &amp; green ventures
                                            </li>
                                            <li>
                                                <strong>SCIE 4860</strong> –
                                                Applied science projects
                                            </li>
                                            <li>
                                                <strong>ISOM 4020</strong> –
                                                Innovation management
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="hidden lg:flex items-center text-gray-400 text-xl">
                                    ⟶
                                </div>

                                <div className="relative min-w-[200px] max-w-md flex-1 border border-blue-700 bg-white rounded-md p-3 pt-4 text-sm">
                                    <span className="absolute -top-2 left-2 bg-gray-100 px-2 py-0.5 rounded-full text-[10px] uppercase font-bold text-gray-600 border border-gray-200">
                                        Do
                                    </span>
                                    <div className="font-bold text-gray-900 mb-1">
                                        Projects &amp; Next Steps
                                    </div>
                                    <div className="text-gray-700">
                                        Turn your insights into action:
                                        <ul className="list-disc ml-5 mt-2 space-y-1 text-xs text-gray-600">
                                            <li>
                                                Lead or join a project in{' '}
                                                <strong>ENTR 4901–4904</strong>.
                                            </li>
                                            <li>
                                                Pick skill-set courses like{' '}
                                                <strong>ENTR 3013</strong> or{' '}
                                                <strong>3012</strong>.
                                            </li>
                                            <li>
                                                Join NGOs, social enterprises,
                                                or start your own impact
                                                venture.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="font-bold text-primary">
                            Skill-set Electives
                        </p>

                        <p>
                            Skill-set electives equip students with practical
                            tools in growth, prototyping, product development,
                            sector-specific entrepreneurship, finance, IP,
                            innovation management, marketing, negotiation, and
                            applied projects.
                        </p>

                        <table className="w-fit">
                            <tbody className="text-isd-font-1">
                                <tr className="bg-isd-primary-2 text-primary font-bold border-y-2 border-white">
                                    <td className="p-[12px] border-x-2 border-white ">
                                        Code
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        Title
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        Credits
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        Notes
                                    </td>
                                </tr>
                                <tr className="bg-isd-secondary-1 text-secondary">
                                    <td className="p-[12px] border-x-2 border-white">
                                        ENTR 3012
                                        <br />
                                        <div className="bg-[#b35f00] rounded-lg text-white text-xs p-1">
                                            SKILL-SET
                                        </div>
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        Tech Startup and Entrepreneurs
                                        Ecosystem: Growth and Innovation
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        3
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        New ENTR course focused on hands-on
                                        growth strategies for technology
                                        startups and innovative digital
                                        services, combining frameworks such as
                                        SAVE and Blue Ocean with investor
                                        pitching and digital analytics–based
                                        experimentation.
                                    </td>
                                </tr>
                                <tr className="bg-isd-primary-2 text-primary">
                                    <td className="p-[12px] border-x-2 border-white">
                                        ENTR 3013
                                        <br />
                                        <div className="bg-[#b35f00] rounded-lg text-white text-xs p-1">
                                            SKILL-SET
                                        </div>
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        Prototyping Skills for Entrepreneurs
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        3
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        New ENTR course providing practical
                                        skills to build software, hardware, and
                                        mechanical prototypes, integrate
                                        components, use rapid prototyping tools,
                                        and apply design for manufacturing
                                        principles.
                                    </td>
                                </tr>
                                <tr className="bg-isd-secondary-1 text-secondary">
                                    <td className="p-[12px] border-x-2 border-white">
                                        ENTR 3350 / ISDN 3350
                                        <br />
                                        <div className="bg-[#b35f00] rounded-lg text-white text-xs p-1">
                                            SKILL-SET
                                        </div>
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        Global Product Development{' '}
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        3
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        Joint project-based course where global,
                                        interdisciplinary teams identify
                                        user-centered problems and develop
                                        engineering design solutions and
                                        prototypes across multiple campuses.
                                    </td>
                                </tr>
                                <tr className="bg-isd-primary-2 text-primary">
                                    <td className="p-[12px] border-x-2 border-white">
                                        ENTR 3360 / ISDN 3360
                                        <br />
                                        <div className="bg-[#b35f00] rounded-lg text-white text-xs p-1">
                                            SKILL-SET
                                        </div>
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        From Product Innovations to Successful
                                        Technology Startups
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        3
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        Guides students from initial product
                                        concepts and prototypes toward
                                        technology startup formation, covering
                                        market research, supply chains, IP,
                                        funding, and business models.
                                    </td>
                                </tr>
                                <tr className="bg-isd-secondary-1 text-secondary">
                                    <td className="p-[12px] border-x-2 border-white">
                                        BIBU 4820
                                        <br />
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        Biotechnology Entrepreneurship and
                                        Business Operations
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        3
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        Sector-focused course on biotech venture
                                        operations and commercialization.
                                    </td>
                                </tr>
                                <tr className="bg-isd-primary-2 text-primary">
                                    <td className="p-[12px] border-x-2 border-white">
                                        COMP 4911 / ENTR 4911
                                        <br />
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        IT Entrepreneurship
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        3
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        Covers elements of starting and
                                        operating information technology
                                        ventures, including business planning,
                                        financing, legal aspects, and case
                                        studies.
                                    </td>
                                </tr>
                                <tr className="bg-isd-secondary-1 text-secondary">
                                    <td className="p-[12px] border-x-2 border-white">
                                        FINA 2203 / 2303
                                        <br />
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        Fundamentals of Business Finance /
                                        Financial Management
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        3
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        Provides finance foundations relevant
                                        for evaluating and managing startup
                                        financial decisions.
                                    </td>
                                </tr>
                                <tr className="bg-isd-primary-2 text-primary">
                                    <td className="p-[12px] border-x-2 border-white">
                                        IEDA 2150 / 2200
                                        <br />
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        Product Design / Engineering
                                        Management{' '}
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        3
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        Develops design and management skills
                                        that support technology and
                                        product-oriented ventures.
                                    </td>
                                </tr>
                                <tr className="bg-isd-secondary-1 text-secondary">
                                    <td className="p-[12px] border-x-2 border-white">
                                        ISOM 2030
                                        <br />
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        Business Protections for Innovations
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        3
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        Introduces IP and related protections
                                        for innovations in business and
                                        technology contexts.
                                    </td>
                                </tr>
                                <tr className="bg-isd-primary-2 text-primary">
                                    <td className="p-[12px] border-x-2 border-white">
                                        ISOM 4020
                                        <br />
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        Innovation Management and Technology
                                        Entrepreneurship{' '}
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        3
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        Addresses innovation processes,
                                        technology entrepreneurship, and
                                        corporate innovation practices.
                                    </td>
                                </tr>
                                <tr className="bg-isd-secondary-1 text-secondary">
                                    <td className="p-[12px] border-x-2 border-white">
                                        LIFS 4820
                                        <br />
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        Entrepreneurship in Biotechnology
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        3
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        Covers science-based innovation and
                                        venture topics in life sciences.
                                    </td>
                                </tr>
                                <tr className="bg-isd-primary-2 text-primary">
                                    <td className="p-[12px] border-x-2 border-white">
                                        MARK 2120
                                        <br />
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        Marketing Management
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        3
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        Provides core marketing concepts and
                                        tools that underpin startup customer and
                                        market strategies.
                                    </td>
                                </tr>
                                <tr className="bg-isd-secondary-1 text-secondary">
                                    <td className="p-[12px] border-x-2 border-white">
                                        MGMT 3140 / 4220
                                        <br />
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        Negotiation / Entrepreneurship and
                                        Innovation{' '}
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        4
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        Develops negotiation skills and advanced
                                        perspectives on entrepreneurship and
                                        innovation for would-be founders and
                                        leaders.
                                    </td>
                                </tr>
                                <tr className="bg-isd-primary-2 text-primary">
                                    <td className="p-[12px] border-x-2 border-white">
                                        OCES 4301
                                        <br />
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        Environmental Conservation
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        3
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        Provides context for environmental and
                                        green ventures with conservation and
                                        sustainability themes.
                                    </td>
                                </tr>
                                <tr className="bg-isd-secondary-1 text-secondary">
                                    <td className="p-[12px] border-x-2 border-white">
                                        SCIE 4860
                                        <br />
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        Young Entrepreneurial Syndicate in
                                        Applied Sciences Project
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        3
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        Applied science project course with
                                        entrepreneurial elements and team-based
                                        project work.
                                    </td>
                                </tr>
                                <tr className="bg-isd-primary-2 text-primary">
                                    <td className="p-[12px] border-x-2 border-white">
                                        IEDA 4170
                                        <br />
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        Product Design and Lifecycle
                                        Management{' '}
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        3
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white text-xs">
                                        Removed from the Entrepreneurship Minor
                                        elective list because it has not been
                                        offered in recent years and has been
                                        deleted from the catalog.
                                    </td>
                                </tr>
                                <tr className="bg-isd-secondary-1 text-secondary">
                                    <td className="p-[12px] border-x-2 border-white">
                                        ISOM 4820
                                        <br />
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        Revenue Management
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        3
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white text-xs">
                                        Removed from the Entrepreneurship Minor
                                        elective list because it has not been
                                        offered in recent years and has been
                                        deleted from the catalog.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            ),
        },

        {
            id: 'curriculum',
            subheading: (
                <span className="lg:inline hidden">
                    {' '}
                    Brief ENTR Course Descriptions
                </span>
            ),
            content: (
                <div className="flex flex-col gap-[24px]">
                    <div className="flex-1 flex flex-col gap-[12px]">
                        <CourseItem title="ENTR 1001 – Entrepreneurship 1001: Designing Your Future">
                            <p>
                                ENTR 1001 is a common core, experiential course
                                where students from any discipline work in teams
                                to design, launch, and grow a simple online
                                business while reflecting on their own future
                                paths as innovators and entrepreneurs.
                            </p>
                            <ul>
                                <li>
                                    The assessment structure walks students
                                    through the full entrepreneurial cycle, from
                                    team formation and customer understanding to
                                    building and testing offerings,
                                    communicating value, and consolidating
                                    personal learning.
                                </li>
                                <li>
                                    Key learning activities include customer and
                                    market research, running an online business
                                    with real or simulated shops, prototyping
                                    and testing, structured pitching, and
                                    reflective exercises that connect course
                                    experiences to personal strengths, values,
                                    and career design.
                                </li>
                            </ul>
                        </CourseItem>

                        <CourseItem title="ENTR 3013 – Prototyping Skills for Entrepreneurs">
                            <p>
                                ENTR 3013 is a hands-on, lab-based course that
                                teaches students how to turn entrepreneurial
                                ideas into tangible prototypes across physical
                                and embedded-system domains, emphasizing rapid,
                                iterative prototyping to explore concepts and
                                de-risk early venture ideas.
                            </p>
                            <ul>
                                <li>
                                    Students complete focused modules in
                                    physical and embedded-system prototyping,
                                    then apply these skills in a final project
                                    that demonstrates key features of an
                                    entrepreneurial concept using tools such as
                                    3D CAD, 3D printing, and embedded
                                    processors.
                                </li>
                                <li>
                                    By the end of the course, students can plan
                                    and execute iterative prototyping cycles,
                                    integrate basic electronics and IoT elements
                                    where relevant, and communicate a
                                    prototype’s value proposition effectively to
                                    potential users, partners, or investors.
                                </li>
                            </ul>
                        </CourseItem>
                        <CourseItem title="ENTR 3100 – Industrial &amp; Deep Tech Landscape: Understanding the Elements to Start a Business">
                            <p>
                                ENTR 3100 acquaints students with the landscapes
                                of selected industries by examining the elements
                                required to start a business and the structure
                                of key markets within those sectors.
                            </p>
                            <ul>
                                <li>
                                    Each offering focuses on one or two thematic
                                    sectors (for example, aging and the silver
                                    economy, AI-enabled services, robotics,
                                    climate-tech, or biotech), and students map
                                    how technologies, regulations, companies,
                                    and customers interact to create both
                                    constraints and openings for new ventures.
                                </li>
                                <li>
                                    Jointly run by the Schools of Engineering,
                                    Science, and Business &amp; Management with
                                    contributions from external partners, the
                                    course builds students’ ability to produce
                                    evidence-based sector venture briefs and
                                    pitches that can feed into prototyping,
                                    growth, and acceleration courses.
                                </li>
                            </ul>
                        </CourseItem>
                        <CourseItem title="ENTR 4911 – IT Entrepreneurship">
                            <p>
                                ENTR 4911 (alternate code COMP 4911) focuses on
                                the process of starting and growing information
                                technology ventures, from opportunity
                                recognition and building an “unfair” advantage
                                to planning funding and eventual exit.
                            </p>
                            <ul>
                                <li>
                                    Through lectures, case discussions, and a
                                    substantial team project, students explore
                                    what makes IT ventures distinct, design
                                    business models and plans for software and
                                    digital products, and navigate funding
                                    stages, intellectual property, and
                                    governance issues in local and global tech
                                    ecosystems.
                                </li>
                                <li>
                                    On completion, students can identify and
                                    evaluate IT startup opportunities,
                                    understand key concepts in IT
                                    entrepreneurship, develop business plans and
                                    pitches for IT ventures, and connect this
                                    work to prior entrepreneurship courses or
                                    technical majors as a capstone-style
                                    experience.
                                </li>
                            </ul>
                        </CourseItem>
                        <CourseItem title="ENTR 2010 – Entrepreneurship Mentorship and Readings">
                            <p>
                                ENTR 2010 combines mentorship and curated
                                readings to expose students to entrepreneurship
                                in a flexible, interest-driven way, graded on a
                                pass/fail basis.
                            </p>
                            <ul>
                                <li>
                                    Students engage with a mentor, choose focus
                                    areas to study, and participate in
                                    entrepreneurship activities; experiences are
                                    later consolidated with the instructor.
                                </li>
                                <li>
                                    Key outcomes include understanding success
                                    and failure factors of startups, common
                                    entrepreneurial terminology, risks and
                                    benefits of entrepreneurship, and fit with
                                    personal career goals.
                                </li>
                            </ul>
                        </CourseItem>
                        <CourseItem title="ENTR 3012 – Tech Startup and Entrepreneurs Ecosystem: Growth and Innovation">
                            <p>
                                ENTR 3012 provides hands-on experience in
                                developing and implementing growth strategies
                                for early-stage technology startups and digital
                                services, emphasizing startup ecosystems and
                                practitioner engagement.
                            </p>
                            <ul>
                                <li>
                                    Students apply tools and frameworks such as
                                    the SAVE model and Blue Ocean ideas to
                                    analyze markets, craft value propositions,
                                    design growth campaigns, and develop
                                    investor pitches.
                                </li>
                                <li>
                                    Assessment typically includes in-class and
                                    preparatory work, a major project, and
                                    attainment of digital analytics
                                    certifications that support data-driven
                                    experimentation.
                                </li>
                            </ul>
                        </CourseItem>
                        <CourseItem title="ENTR 3030 – Social Innovations and Entrepreneurship">
                            <p>
                                ENTR 3030 addresses how social enterprises and
                                commercial entities can deliver social impact
                                beyond what traditional government or charity
                                models can easily achieve.
                            </p>
                            <ul>
                                <li>
                                    Topics include social enterprise objectives
                                    and business models, CSR, sustainability,
                                    team building, case studies, and strategies
                                    for social innovation, often supported by
                                    site visits and projects.
                                </li>
                                <li>
                                    Students learn to identify social issues and
                                    explore models and operations that create
                                    measurable social value.
                                </li>
                            </ul>
                        </CourseItem>
                        <CourseItem title="ENTR 3350 – Global Product Development">
                            <p>
                                ENTR 3350 (also ISDN 3350) is a joint lecture
                                and project-based course in which global,
                                interdisciplinary teams identify problems,
                                design solutions, and build prototypes with
                                partner institutions in multiple cities.
                            </p>
                            <ul>
                                <li>
                                    Students perform market research, apply
                                    design tools and systems engineering, and
                                    collaborate internationally across online
                                    and face-to-face sessions.
                                </li>
                                <li>
                                    They learn to articulate customer needs,
                                    design global products, collaborate in
                                    diverse teams, and present outcomes in
                                    public exhibitions.
                                </li>
                            </ul>
                        </CourseItem>
                        <CourseItem title="ENTR 3360 – From Product Innovations to Successful Technology Startups">
                            <p>
                                ENTR 3360 (also ISDN 3360) targets students who
                                wish to seriously pursue technology startups,
                                building from existing project ideas and
                                prototypes toward more complete venture
                                concepts.
                            </p>
                            <ul>
                                <li>
                                    Lecture and mentoring topics span market
                                    research, industrial design, IP, supply
                                    chains, business models, and funding and
                                    incubation opportunities.
                                </li>
                                <li>
                                    Students analyze successful case studies,
                                    explore business opportunities from
                                    technology innovation, and connect with
                                    manufacturing and sales networks.
                                </li>
                            </ul>
                        </CourseItem>
                        <CourseItem title="ENTR 4000 – Special Topics in Entrepreneurship">
                            <p>
                                ENTR 4000 covers selected emerging or hot topics
                                in entrepreneurship that are not yet part of
                                regular ENTR offerings.
                            </p>
                            <ul>
                                <li>
                                    The course may be graded using different
                                    schemes, and students can repeat it for
                                    credit when topics differ.
                                </li>
                                <li>
                                    Across offerings, it aims to strengthen
                                    entrepreneurial mindsets and the ability to
                                    create or increase value in organizations.
                                </li>
                            </ul>
                        </CourseItem>
                        <CourseItem title="ENTR 4901–4904 – Student-led Entrepreneurship Acceleration Project">
                            <p>
                                ENTR 4901–4904 are project courses where small
                                student teams accelerate an entrepreneurial
                                endeavor with guidance from a faculty advisor.
                            </p>
                            <ul>
                                <li>
                                    Activities include ideation, prototyping,
                                    operations planning, experiments, market
                                    surveys, user feedback, business planning,
                                    soft-launches, and pivoting.
                                </li>
                                <li>
                                    Students synthesize technical, business, and
                                    user insights to evaluate venture
                                    survivability and societal impact, and build
                                    personal and professional networks.
                                    <br />
                                    <a
                                        href="/academics/entrepreneurship/entr-4901-4904"
                                        className="font-bold text-isd-primary"
                                    >
                                        More info here
                                    </a>
                                </li>
                            </ul>
                        </CourseItem>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <>
            <div className="lg:dot-pattern before:bottom-[-1110px] before:left-[-115px] [--dot-color:var(--isd-secondary-1)]" />

            <div className="container overflow-y-clip flex flex-col py-section-gap gap-component-gap">
                {contentMenu.map((section, index) => (
                    <div key={index}>{section.content}</div>
                ))}

                {content.map((section, index) => (
                    <div
                        key={index}
                        id={section.id}
                        className={`flex flex-col gap-[24px] `}
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
