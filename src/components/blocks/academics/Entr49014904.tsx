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

export default function Entr49014904Block() {
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
                                    'Academics',
                                    'Entrepreneurship Minor',
                                    'ENTR 4901–4904 – Student-Led Entrepreneurship Acceleration Project',
                                ]}
                            />
                            <h1 className="text-h1 offset-text-background text-pretty ">
                                ENTR 4901–4904 – Student-Led Entrepreneurship
                                Acceleration Project
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
                    <div className="flex flex-col gap-[24px]">
                        <h2 className="lg:text-[36px] text-h2 leading-[36px] text-isd-primary">
                            Course description
                        </h2>
                        <div className="flex flex-col gap-[12px]">
                            <p>
                                A credit-bearing, team-based, mentored
                                entrepreneurship practicum in which students
                                progress from original opportunity validation to
                                launch-ready venture through structured
                                milestones, formalized advisor input, and
                                real-world feedback.
                            </p>
                            <p>
                                Many successful startups begin in university
                                years. This project course is led by students to
                                accelerate their entrepreneurship endeavor under
                                the guidance of both faculty advisors and
                                industry experts. Students work in teams to
                                develop an idea from scratch to become viable in
                                market.
                            </p>
                            <p>
                                In the process, students work on ideation,
                                prototyping, making presentations, developing
                                operation strategies, conducting experimental
                                trials, designing market surveys, collecting
                                user feedback, writing business plans, and
                                soft-launching and pivoting the product or
                                services.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-[24px]">
                        <h2 className="lg:text-[36px] text-h2 leading-[36px] text-isd-primary">
                            Course Intended Learning Outcomes (CILOs)
                        </h2>
                        <div className="flex flex-col gap-[12px]">
                            <ul className="mx-5 list-disc list-inside">
                                <li>
                                    <strong>CILO-1:</strong> Select and compare
                                    a range of possible approaches for an
                                    entrepreneurship endeavor
                                </li>
                                <li>
                                    <strong>CILO-2:</strong> Summarize the
                                    findings, write reports or plans, and make
                                    presentations on a venture
                                </li>
                                <li>
                                    <strong>CILO-3:</strong> Integrate
                                    appropriate technical knowledge, business
                                    decision-making skills and user feedback to
                                    evaluate the survivability of an
                                    entrepreneurial pursuit and its impact to
                                    society
                                </li>
                                <li>
                                    <strong>CILO-4:</strong> Design, implement
                                    and evaluate an endeavor as a team to align
                                    with business operation strategies
                                </li>
                                <li>
                                    <strong>CILO-5:</strong> Recognize and act
                                    upon opportunities for building an
                                    enterprise and personal business network
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[24px]">
                        <h2 className="lg:text-[36px] text-h2 leading-[36px] text-isd-primary">
                            Prerequisites
                        </h2>
                        <div className="flex flex-col gap-[12px]">
                            <ul className="mx-5 list-disc list-inside">
                                <li>
                                    Instructor approval required for enrollment
                                </li>
                                <li>
                                    Must submit and receive approval for initial
                                    proposal before formal enrollment
                                </li>
                                <li>
                                    The same project should not be carried out
                                    in any other courses that students are
                                    enrolled in
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[24px]">
                        <h2 className="lg:text-[36px] text-h2 leading-[36px] text-isd-primary">
                            Advisor Model
                        </h2>
                        <div className="flex flex-col gap-[12px]">
                            <p className="font-bold text-primary">
                                Composition
                            </p>

                            <p>Each student team is assigned: </p>

                            <ul className="mx-5 list-disc list-inside">
                                <li>
                                    <strong>
                                        One Internal Advisor (Faculty):{' '}
                                    </strong>
                                    A faculty member with relevant academic or
                                    entrepreneurial experience
                                </li>
                                <li>
                                    <strong>
                                        One External Advisor (optional):{' '}
                                    </strong>
                                    An industry professional, alumnus, or
                                    entrepreneur with domain expertise
                                </li>
                            </ul>

                            <p className="font-bold text-primary">Roles</p>
                            <p className="font-bold text-primary">
                                Internal Advisors (Faculty)
                            </p>

                            <ul className="mx-5 list-disc list-inside">
                                <li>
                                    Ensure academic rigor and alignment with
                                    course milestones
                                </li>
                                <li>
                                    Guide teams on research, analysis, and
                                    theory-to-practice translation
                                </li>
                                <li>
                                    Jointly assess all milestone submissions and
                                    participate in Demo Day panel
                                </li>
                            </ul>

                            <p className="font-bold text-primary">
                                External Advisors (Industry/Alumni)
                            </p>
                            <ul className="mx-5 list-disc list-inside">
                                <li>
                                    Offer market, industry, and practitioner
                                    perspective
                                </li>
                                <li>
                                    Provide feedback on user/market fit,
                                    product, and go-to-market approach
                                </li>
                                <li>
                                    Participate actively in milestone assessment
                                    and Demo Day
                                </li>
                                <li>
                                    Facilitate access to networks, further
                                    mentorship, and possible funding
                                    introductions
                                </li>
                            </ul>
                            <p className="font-bold text-primary">
                                Engagement Frequency
                            </p>
                            <ul className="mx-5 list-disc list-inside">
                                <li>
                                    <strong>
                                        Mandatory Advisory Meetings:{' '}
                                    </strong>
                                    At least once every two weeks (biweekly).
                                    These can be joint or separate meetings and
                                    may be held in-person or virtually
                                </li>
                                <li>
                                    All key meetings are to be documented by the
                                    team in a running log, including agenda and
                                    action items
                                </li>
                                <li>
                                    <strong>Milestone Reviews: </strong>
                                    Advisors must formally review progress and
                                    participate in evaluations at each main
                                    milestone (Initial Proposal, Midterm Review,
                                    Final Pitch)
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[24px]">
                        <h2 className="lg:text-[36px] text-h2 leading-[36px] text-isd-primary">
                            Credit Allocation Mechanism
                        </h2>
                        <p>
                            Credit level must be proposed up front in the
                            team&apos;s Initial Proposal with justification and
                            agreement from both advisors. See the credit levels
                            table below for details.
                        </p>

                        <table className="w-fit">
                            <tbody className="text-isd-font-1">
                                <tr className="hidden md:table-row bg-isd-primary-2 text-primary font-bold border-y-2 border-white">
                                    <td className="p-[12px] border-x-2 border-white ">
                                        Credits
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        Scope
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        Required Commitment
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        Milestones/Deliverables
                                    </td>
                                </tr>
                                <tr className="flex flex-col md:table-row bg-isd-primary-2 text-primary">
                                    <td className="p-[12px] border-x-2 border-white">
                                        <span className="md:hidden font-bold block text-xs uppercase opacity-50">
                                            Code
                                        </span>
                                        1 Credit
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        <span className="md:hidden font-bold block text-xs uppercase opacity-50">
                                            Scope
                                        </span>
                                        Opportunity Validation Focus
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        <span className="md:hidden font-bold block text-xs uppercase opacity-50">
                                            Required Commitment
                                        </span>
                                        Early-stage inquiry: problem/opportunity
                                        ID and initial validation
                                        <ul className="mx-5 list-disc list-inside">
                                            <li>
                                                Rigorous literature/market
                                                review
                                            </li>
                                            <li>
                                                Customer discovery
                                                interviews/surveys
                                            </li>
                                        </ul>
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        <span className="md:hidden font-bold block text-xs uppercase opacity-50">
                                            Milestones/Deliverables{' '}
                                        </span>
                                        <ul className="mx-5 list-disc list-inside">
                                            <li>
                                                Initial proposal (problem,
                                                market, customer/user insights,
                                                mockup, timeline)
                                            </li>
                                            <li>
                                                Mini-presentation to
                                                advisors/ENTR
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr className="flex flex-col md:table-row bg-isd-secondary-1 text-secondary">
                                    <td className="p-[12px] border-x-2 border-white">
                                        <span className="md:hidden font-bold block text-xs uppercase opacity-50">
                                            Code
                                        </span>
                                        2 Credits
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        <span className="md:hidden font-bold block text-xs uppercase opacity-50">
                                            Scope
                                        </span>
                                        MVP Build & Initial Testing
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        <span className="md:hidden font-bold block text-xs uppercase opacity-50">
                                            Required Commitment
                                        </span>
                                        Early-stage inquiry: MVP/prototype &
                                        initial market/user testing
                                        <ul className="mx-5 list-disc list-inside">
                                            <li>All Level 1 deliverables</li>
                                            <li>
                                                Working MVP/prototype by midterm
                                            </li>
                                        </ul>
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        <span className="md:hidden font-bold block text-xs uppercase opacity-50">
                                            Milestones/Deliverables{' '}
                                        </span>
                                        <ul className="mx-5 list-disc list-inside">
                                            <li>
                                                Initial user/market test and
                                                feedback analysis
                                            </li>
                                            <li>Summary/iteration report</li>
                                            <li>
                                                Mini presentation: MVP/testing
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr className="flex flex-col md:table-row bg-isd-primary-2 text-primary">
                                    <td className="p-[12px] border-x-2 border-white">
                                        <span className="md:hidden font-bold block text-xs uppercase opacity-50">
                                            Code
                                        </span>
                                        3 Credits
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        <span className="md:hidden font-bold block text-xs uppercase opacity-50">
                                            Scope
                                        </span>
                                        Full Course Sequence
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        <span className="md:hidden font-bold block text-xs uppercase opacity-50">
                                            Required Commitment
                                        </span>
                                        Full sequence: Opportunity validation,
                                        MVP, comprehensive testing, final pitch
                                        <ul className="mx-5 list-disc list-inside">
                                            <li>All Level 2 deliverables</li>
                                            <li>
                                                Extensive user/market engagement
                                            </li>
                                            <li>
                                                Evidence of major
                                                iteration/pivot
                                            </li>
                                        </ul>
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        <span className="md:hidden font-bold block text-xs uppercase opacity-50">
                                            Milestones/Deliverables{' '}
                                        </span>
                                        <ul className="mx-5 list-disc list-inside">
                                            <li>Demo Day participation</li>
                                            <li>Business/impact plan</li>
                                            <li>
                                                Mini presentation, MVP/testing,
                                                Demo Day pitch/plan
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr className="flex flex-col md:table-row bg-isd-secondary-1 text-secondary">
                                    <td className="p-[12px] border-x-2 border-white">
                                        <span className="md:hidden font-bold block text-xs uppercase opacity-50">
                                            Code
                                        </span>
                                        4 Credits
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        <span className="md:hidden font-bold block text-xs uppercase opacity-50">
                                            Scope
                                        </span>
                                        Advanced Venture Execution{' '}
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        <span className="md:hidden font-bold block text-xs uppercase opacity-50">
                                            Required Commitment
                                        </span>
                                        Full sequence plus advanced commitment
                                        outcome
                                        <ul className="mx-5 list-disc list-inside">
                                            <li>All Level 3 deliverables</li>
                                            <li>
                                                Real
                                                launch/fundraising/competition/partnership
                                            </li>
                                        </ul>
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        <span className="md:hidden font-bold block text-xs uppercase opacity-50">
                                            Milestones/Deliverables{' '}
                                        </span>
                                        <ul className="mx-5 list-disc list-inside">
                                            <li>
                                                Initial user/market test and
                                                feedback analysis
                                            </li>
                                            <li>Summary/iteration report</li>
                                            <li>
                                                Mini presentation: MVP/testing
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="flex flex-col gap-[24px]">
                        <h2 className="lg:text-[36px] text-h2 leading-[36px] text-isd-primary">
                            Milestone Sequence, Deliverables & 3-Question
                            Evaluation Rubrics{' '}
                        </h2>
                        <p className="font-bold text-lg text-primary">
                            Initial Proposal (Before Enrolment)
                        </p>
                        <p className="font-bold text-primary">Deliverables:</p>
                        <ul className="mx-5 list-disc list-inside">
                            <li>
                                Problem/Opportunity Statement: Show the
                                significance and urgency of the identified need
                            </li>
                            <li>
                                Target Market Analysis: Who is the customer? How
                                large is the opportunity?
                            </li>
                            <li>
                                Customer Discovery Summary: Key learnings from
                                interviews, surveys, or desk research
                            </li>
                            <li>
                                Initial Solution Concept or Prototype Mockup:
                                Clear, practical vision or sketch of what you
                                will create
                            </li>
                            <li>
                                Proposed Course Timeline: A schedule outlining
                                major activities, milestones, and
                                responsibilities across the semester
                            </li>
                        </ul>
                        <p className="font-bold text-primary">
                            Rubric for Approval:
                        </p>
                        <ul className="mx-5 list-disc list-inside">
                            <li>
                                Is there a clearly defined and significant
                                problem/opportunity, supported by market/user
                                research?
                            </li>
                            <li>
                                Is the proposed solution logical, connected, and
                                potentially impactful?
                            </li>
                            <li>
                                Is the proposed timeline and credit selection
                                realistic and well justified?
                            </li>
                        </ul>
                        <p className="font-bold text-lg text-primary">
                            Market Testing & Iteration
                        </p>
                        <p className="font-bold  text-primary">Deliverables:</p>
                        <ul className="mx-5 list-disc list-inside">
                            <li>
                                Working MVP/prototype ready to show/test with
                                users
                            </li>
                            <li>
                                Market/User Test Results: Feedback and key
                                lessons learned from real user tests
                            </li>
                            <li>
                                Iteration Report: Description of how
                                feedback/advisor input led to changes or pivots
                            </li>
                        </ul>
                        <p className="font-bold  text-primary">
                            Rubric for Assessment:
                        </p>
                        <ul className="mx-5 list-disc list-inside">
                            <li>
                                Has the team tested the MVP/prototype with real
                                users and gathered actionable feedback?
                            </li>
                            <li>
                                Have they demonstrated meaningful iteration or
                                improvement?
                            </li>
                            <li>
                                Is there credible progress toward product-market
                                fit or a scalable solution?
                            </li>
                        </ul>
                        <p className="font-bold text-lg text-primary">
                            Final Pitch & Execution Plan (End of Course)
                        </p>
                        <p className="font-bold  text-primary">Deliverables:</p>
                        <ul className="mx-5 list-disc list-inside">
                            <li>
                                Public pitch with final product MVP, demo video,
                                or prototype
                            </li>
                            <li>
                                Comprehensive business or impact plan, with
                                go-to-market and financial/operational strategy
                            </li>
                            <li>
                                Reflection brief (each team member) on personal
                                learning and team dynamics
                            </li>
                        </ul>
                        <p className="font-bold  text-primary">
                            Rubric for Assessment:
                        </p>
                        <ul className="mx-5 list-disc list-inside">
                            <li>
                                Is the final pitch compelling, evidence-based,
                                and clear?
                            </li>
                            <li>
                                Does the business/impact model demonstrate
                                viability and scalability?
                            </li>
                            <li>
                                Has the team shown growth, learning, and
                                realistic execution plans?
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-[24px]">
                        <h2 className="lg:text-[36px] text-h2 leading-[36px] text-isd-primary">
                            Assessment & Grading Structure
                        </h2>

                        <ul className="mx-5 list-disc list-inside">
                            <li>
                                <strong>Entry:</strong> Pass/fail gateway based
                                on rubric{' '}
                            </li>
                            <li>
                                <strong>Midterm:</strong> 30%{' '}
                            </li>
                            <li>
                                <strong>Final:</strong> 50%{' '}
                            </li>
                            <li>
                                <strong>Reflection/Participation:</strong> 20%
                                (including log of advisory attendance and
                                engagement, peer/self-assessment){' '}
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-[24px]">
                        <h2 className="lg:text-[36px] text-h2 leading-[36px] text-isd-primary">
                            Policies & Expectations{' '}
                        </h2>

                        <ul className="mx-5 list-disc list-inside">
                            <li>
                                Teams must meet with each advisor at least once
                                every two weeks
                            </li>
                            <li>
                                All deliverables and milestones must be clearly
                                documented and shared with both advisors and the
                                ENTR team
                            </li>
                            <li>
                                Teams are required to decide and justify their
                                credit selection as part of their initial
                                proposal
                            </li>
                            <li>
                                Commitment to professional conduct, respect for
                                feedback, and evidence-based project work is
                                mandatory
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-[24px]">
                        <h2 className="lg:text-[36px] text-h2 leading-[36px] text-isd-primary">
                            Application Process{' '}
                        </h2>

                        <p className="font-bold text-lg text-primary">
                            Step-by-Step Application{' '}
                        </p>
                        <p className="font-bold  text-primary">
                            1. Form Your Team
                        </p>

                        <ul className="mx-5 list-disc list-inside">
                            <li>
                                Assemble a team of 2-5 members (preferably from
                                different departments){' '}
                            </li>
                            <li>Nominate a contact person for your group </li>
                        </ul>

                        <p className="font-bold  text-primary">
                            2. Identify Advisors
                        </p>

                        <ul className="mx-5 list-disc list-inside">
                            <li>
                                Find a faculty member willing to serve as your
                                internal advisor
                            </li>
                            <li>
                                Identify an external advisor from
                                industry/alumni/entrepreneurship community
                            </li>
                            <li>
                                Meet with both advisors to discuss your
                                proposal, including scope of work, approaches,
                                workload/credit load, and assessment methods
                            </li>
                        </ul>

                        <p className="font-bold  text-primary">
                            3. Develop Initial Proposal
                        </p>
                        <p>Use the proposal template below to prepare:</p>
                        <p className="font-bold  text-primary">
                            Project Details:
                        </p>
                        <ul className="mx-5 list-[lower-alpha] list-inside">
                            <li>Project Title </li>
                            <li>Project description and objectives</li>
                            <li>
                                Internal Advisor (Faculty member and Department)
                            </li>
                            <li>External Advisor and Affiliation</li>
                            <li>
                                Credit hours requested (1-4 credits) with
                                justification
                            </li>
                            <li>
                                Proposed timeline and milestones deliverables
                            </li>
                            <li>Assessment methods and deliverables</li>
                        </ul>

                        <p className="font-bold  text-primary">
                            Details of Team Members:
                        </p>

                        <table className="w-full">
                            <tbody className="text-isd-font-1">
                                <tr className="hidden md:table-row bg-isd-primary-2 text-primary font-bold border-y-2 border-white">
                                    <td className="p-[12px] border-x-2 border-white ">
                                        Student Name
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        Student ID
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        Program of Study (e.g., BEng COMP)
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        ITSC Account
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        Year of Study
                                    </td>
                                </tr>
                                <tr className="flex flex-col md:table-row bg-isd-primary-2 text-primary">
                                    <td className="p-[12px] border-x-2 border-white">
                                        1. Contact person
                                        <span className="md:hidden font-bold block text-xs uppercase opacity-50">
                                            Student Name
                                        </span>
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        {' '}
                                        <span className="md:hidden font-bold block text-xs uppercase opacity-50">
                                            Student ID
                                        </span>
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        {' '}
                                        <span className="md:hidden font-bold block text-xs uppercase opacity-50">
                                            Program of Study (e.g., BEng COMP)
                                        </span>
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        {' '}
                                        <span className="md:hidden font-bold block text-xs uppercase opacity-50">
                                            ITSC Account{' '}
                                        </span>
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        {' '}
                                        <span className="md:hidden font-bold block text-xs uppercase opacity-50">
                                            Year of Study
                                        </span>
                                    </td>
                                </tr>
                                <tr className="flex flex-col md:table-row bg-isd-secondary-1 text-secondary">
                                    <td className="p-[12px] border-x-2 border-white">
                                        2.
                                        <span className="md:hidden font-bold block text-xs uppercase opacity-50">
                                            Student Name
                                        </span>
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        {' '}
                                        <span className="md:hidden font-bold block text-xs uppercase opacity-50">
                                            Student ID
                                        </span>
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        {' '}
                                        <span className="md:hidden font-bold block text-xs uppercase opacity-50">
                                            Program of Study (e.g., BEng COMP)
                                        </span>
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        {' '}
                                        <span className="md:hidden font-bold block text-xs uppercase opacity-50">
                                            ITSC Account{' '}
                                        </span>
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        {' '}
                                        <span className="md:hidden font-bold block text-xs uppercase opacity-50">
                                            Year of Study
                                        </span>
                                    </td>
                                </tr>
                                <tr className="flex flex-col md:table-row bg-isd-primary-2 text-primary">
                                    <td className="p-[12px] border-x-2 border-white">
                                        3. (if any)
                                        <span className="md:hidden font-bold block text-xs uppercase opacity-50">
                                            Student Name
                                        </span>
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        {' '}
                                        <span className="md:hidden font-bold block text-xs uppercase opacity-50">
                                            Student ID
                                        </span>
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        {' '}
                                        <span className="md:hidden font-bold block text-xs uppercase opacity-50">
                                            Program of Study (e.g., BEng COMP)
                                        </span>
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        {' '}
                                        <span className="md:hidden font-bold block text-xs uppercase opacity-50">
                                            ITSC Account{' '}
                                        </span>
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        {' '}
                                        <span className="md:hidden font-bold block text-xs uppercase opacity-50">
                                            Year of Study
                                        </span>
                                    </td>
                                </tr>
                                <tr className="flex flex-col md:table-row bg-isd-secondary-1 text-secondary">
                                    <td className="p-[12px] border-x-2 border-white">
                                        4. (if any)
                                        <span className="md:hidden font-bold block text-xs uppercase opacity-50">
                                            Student Name
                                        </span>
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        {' '}
                                        <span className="md:hidden font-bold block text-xs uppercase opacity-50">
                                            Student ID
                                        </span>
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        {' '}
                                        <span className="md:hidden font-bold block text-xs uppercase opacity-50">
                                            Program of Study (e.g., BEng COMP)
                                        </span>
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        {' '}
                                        <span className="md:hidden font-bold block text-xs uppercase opacity-50">
                                            ITSC Account{' '}
                                        </span>
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        {' '}
                                        <span className="md:hidden font-bold block text-xs uppercase opacity-50">
                                            Year of Study
                                        </span>
                                    </td>
                                </tr>
                                <tr className="flex flex-col md:table-row bg-isd-primary-2 text-primary">
                                    <td className="p-[12px] border-x-2 border-white">
                                        5. (if any)
                                        <span className="md:hidden font-bold block text-xs uppercase opacity-50">
                                            Student Name
                                        </span>
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        {' '}
                                        <span className="md:hidden font-bold block text-xs uppercase opacity-50">
                                            Student ID
                                        </span>
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        {' '}
                                        <span className="md:hidden font-bold block text-xs uppercase opacity-50">
                                            Program of Study (e.g., BEng COMP)
                                        </span>
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        {' '}
                                        <span className="md:hidden font-bold block text-xs uppercase opacity-50">
                                            ITSC Account{' '}
                                        </span>
                                    </td>
                                    <td className="p-[12px] border-x-2 border-white">
                                        {' '}
                                        <span className="md:hidden font-bold block text-xs uppercase opacity-50">
                                            Year of Study
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <p className="font-bold  text-primary">
                            4. Submit for Approval
                        </p>
                        <p>
                            After receiving confirmation from both advisors, the
                            contact person should send the project proposal to:
                        </p>
                        <ul className="mx-5 list-disc list-inside">
                            <li>
                                Director of Entrepreneurship Education:{' '}
                                <a
                                    href="mailto:eetsui@ust.hk"
                                    className="font-bold text-isd-primary"
                                >
                                    eetsui@ust.hk
                                </a>
                            </li>
                            <li>
                                AND:
                                <ul className="mx-5 list-[circle] list-inside">
                                    <li>
                                        {' '}
                                        <a
                                            href="mailto:sscicourse@ust.hk"
                                            className="font-bold text-isd-primary"
                                        >
                                            sscicourse@ust.hk
                                        </a>{' '}
                                        for SSCI students
                                    </li>
                                    <li>
                                        {' '}
                                        <a
                                            href="mailto:sengug@ust.hk "
                                            className="font-bold text-isd-primary"
                                        >
                                            sengug@ust.hk
                                        </a>{' '}
                                        for SENG students
                                    </li>
                                    <li>
                                        {' '}
                                        <a
                                            href="mailto:bmminor@ust.hk"
                                            className="font-bold text-isd-primary"
                                        >
                                            bmminor@ust.hk
                                        </a>{' '}
                                        for SBM students
                                    </li>
                                    <li>
                                        {' '}
                                        <a
                                            href="mailto:ais@ust.hk "
                                            className="font-bold text-isd-primary"
                                        >
                                            ais@ust.hk
                                        </a>{' '}
                                        for AIS students
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Submit before 5pm on the last day of add/drop
                                period of each semester
                            </li>
                        </ul>
                        <p className="font-bold  text-primary">
                            5. Present to Approval Panel
                        </p>

                        <ul className="mx-5 list-disc list-inside">
                            <li>
                                Present your proposal to the internal advisor
                                and ENTR team
                            </li>

                            <li>Approval based on the 3-question rubric</li>
                        </ul>

                        <p className="font-bold  text-primary">
                            6. Formal Enrollment
                        </p>
                        <ul className="mx-5 list-disc list-inside">
                            <li>
                                Upon approval, the course administrator shall
                                approve your request via SIS system
                            </li>

                            <li>
                                You will then be formally enrolled in the course
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-[24px] bg-isd-primary-2 text-isd-primary p-4">
                        <p className="font-bold  text-primary">
                            Important Notes
                        </p>
                        <ul className="mx-5 list-disc list-inside">
                            <li>
                                This is a project-based course requiring
                                significant independent work and regular advisor
                                engagement
                            </li>
                            <li>
                                Teams are expected to demonstrate
                                entrepreneurial initiative, adaptability, and
                                professional conduct
                            </li>
                            <li>
                                The course can serve as a capstone experience or
                                as preparation for competitions, incubators, or
                                actual venture launch
                            </li>
                            <li>
                                Students completing this course may continue
                                their ventures through other programs such as
                                competitions, the HKUST Entrepreneurship Center,
                                or external accelerators
                            </li>
                        </ul>
                    </div>

                    <a
                        href="/academics/entrepreneurship "
                        className="font-bold text-isd-primary"
                    >
                        Back to ENTR Overview
                    </a>
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
