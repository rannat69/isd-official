export default function CollabortorsBlock() {
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
        <div className="w-full dot-pattern before:top-[-120px] before:right-[10px] [--dot-color:var(--isd-primary-2)]">
            <div className="container overflow-y-clip flex flex-col py-section-gap gap-component-gap-sm text-md  text-isd-font-1">
                <div className="flex flex-col gap-component-gap">
                    <h1 className="text-h1 offset-text-background text-isd-font-1">
                        Academics and Industry Partners{' '}
                    </h1>

                    <p>
                        With the variety of project-based learning, industry
                        experience opportunities and experiential learning with
                        adaptable timetabling, the Division of Integrative
                        Systems and Design has built important partnerships with
                        both institutions and industries.
                    </p>
                </div>

                <div className="flex flex-col gap-component-gap">
                    {content.map((section, index) => (
                        <div key={index} className="flex flex-col gap-[24px]">
                            {section.subheading && (
                                <h3 className="text-[36px] leading-[36px] font-bold font-isd-font-1 text-isd-primary">
                                    {section.subheading}
                                </h3>
                            )}
                            {section.content}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
