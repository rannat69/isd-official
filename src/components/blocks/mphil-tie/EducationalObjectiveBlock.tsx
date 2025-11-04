const objectives = [
    {
        title: 'Tackle Deep-Tech and Societal Challenges',
        body: 'Develop rigorous technical knowledge and apply it to complex, real-world problems, particularly in emerging sectors like health-tech, marine-tech, sustainable-tech, and design-tech.',
    },
    {
        title: 'Drive Multidisciplinary Innovation',
        body: 'Integrate insights across disciplines and collaborate in diverse, cross-functional teams to build, iterate, and implement impactful technological solutions.',
    },
    {
        title: 'Lead and Launch Market-Ready Ventures',
        body: 'Acquire entrepreneurial skills—market discovery, design thinking, minimum viable product (MVP) development, fundraising, regulatory navigation, and scaling—to move innovations from concept to commercialization.',
    },
    {
        title: 'Engage Industry and Global Ecosystems',
        body: 'Form strong connections with academic, business, and industrial partners to gain up-to-date exposure, mentorship, and hands-on experience in technology transfer and startup creation.',
    },
    {
        title: 'Demonstrate Ethical Leadership and Professional Excellence',
        body: 'Exhibit outstanding communication abilities, team leadership, ethical awareness, and adaptability in fast-changing technological and business environments.',
    },
    {
        title: 'Achieve Both Individual and Team Milestones',
        body: 'Fulfill a rigorous individual thesis and collaborative team project, demonstrating the ability to contribute at both a personal and organizational level within the innovation space.',
    },
];

export default function EducationalObjectiveBlock() {
    return (
        <div className="flex flex-col gap-[24px]">
            <h2 className="lg:text-[36px] text-h2 leading-[36px] font-bold text-isd-primary">
                Educational Objectives
            </h2>

            <div className="flex flex-col gap-[12px]">
                <p>
                    The MPhil in Technology Innovation and Entrepreneurship
                    programme at HKUST aims to nurture visionary leaders who can
                    bridge the worlds of cutting-edge research and
                    entrepreneurial impact. Our educational objectives are to
                    ensure every graduate is equipped to:
                </p>

                {objectives.map((objective) => (
                    <div key={objective.title} className="flex flex-col">
                        <h3 className="text-isd-secondary font-bold">
                            {objective.title}
                        </h3>
                        <p className="text-isd-font-3">{objective.body}</p>
                    </div>
                ))}

                <p>
                    This dual focus on research mastery and real-world
                    application prepares TIE graduates for successful careers as
                    technology entrepreneurs and innovators in
                    industry—empowering them to make a lasting impact in the
                    global innovation ecosystem.
                </p>
            </div>
        </div>
    );
}
