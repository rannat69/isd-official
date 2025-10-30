export default function ScholarshipsBlock() {
    const content = [
        {
            subheading: 'Chinachem PrimeMovership',
            content: (
                <div className="flex flex-col gap-[24px] text-sm">
                    <p>
                        This scholarship aims to support ISD students with high
                        achievement in innovative technologies design and with
                        entrepreneurial potential. Up to 10 scholarships of
                        HK$20,000 will be given to students studying in or
                        joining the BSc program in Integrative Systems and
                        Design. Up to 10 scholarships of HK$35,000 will be given
                        to students studying in or joining the MSc program in
                        Technology Leadership and Entrepreneurship. Selection
                        criteria for recipients include:
                    </p>

                    <ul className="list-disc list-inside">
                        <li>
                            Assessment of the cornerstone project or TLE
                            entrepreneurial project based on individual
                            performance (overall contribution, quality of
                            prototype, personal advancement, etc.).
                        </li>
                        <li>
                            Degree of social impact and community engagement
                            delivered by students’ projects.
                        </li>
                        <li>
                            Demonstrated record of promoting design to the
                            greater community by initiating multidisciplinary
                            projects within HKUST or with other institutions,
                            participating in design competitions, supporting
                            outreach efforts, etc.
                        </li>
                        <li>
                            Other additional criteria maybe included per the
                            partnership’s evolving strategic plan.
                        </li>
                    </ul>
                </div>
            ),
        },
        {
            subheading: 'DJI RoboMaster Scholarship',
            content: (
                <div className="flex flex-col gap-[24px] text-sm">
                    <p>
                        These scholarships are for Year 1 Mainland students
                        admitted to the BSc program in Integrative Systems and
                        Design.
                    </p>
                    <div className="flex flex-col gap-[12px]">
                        <p className="font-bold text-isd-secondary">
                            (1) Two full-tuition one-off scholarships will be
                            awarded to students with
                        </p>
                        <ul className="list-disc list-inside text-isd-font-3">
                            <li>Outstanding JEE scores for admission; and</li>
                            <li>
                                Grade “A” in the RoboMaster assessment system
                                during the Robotics Camp organized by DJI
                                RoboMaster.
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-[12px]">
                        <p className="font-bold text-isd-secondary">
                            (2) One half-tuition one-off scholarship will be
                            awarded to a student with
                        </p>
                        <ul className="list-disc list-inside text-isd-font-3">
                            <li>Outstanding JEE scores for admission; and</li>
                            <li>
                                Grade “A” in the RoboMaster assessment system
                                during the Robotics Camp organized by DJI
                                RoboMaster.
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-[12px]">
                        <p className="font-bold text-isd-secondary">
                            (3) One half-tuition one-off scholarship will be
                            awarded to a student with
                        </p>
                        <ul className="list-disc list-inside text-isd-font-3">
                            <li>Outstanding JEE scores for admission; and</li>
                            <li>
                                A minimum of grade “B+” in the RoboMaster
                                assessment system during the Robotics Camp
                                organized by DJI RoboMaster; or
                            </li>
                            <li>Financial need.</li>
                        </ul>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <div className="w-full  dot-pattern before:top-[-120px] before:right-[10px] [--dot-color:var(--isd-primary-2)]">
            <div className="container overflow-y-clip flex flex-col py-section-gap gap-component-gap text-md  text-isd-font-1">
                <h1 className="text-h1 offset-text-background text-isd-font-1">
                    Scholarships
                </h1>
                <div className="flex flex-col gap-component-gap-sm">
                    <p>
                        Several dedicated partners shared our vision of creating
                        new modes of engineering education. As part of our part
                        partnership program, they provide valuable resources in
                        form of financial and in-kind support to the Division.
                        Currently two scholarships are available to our
                        students: 
                    </p>

                    <div className="flex flex-col gap-component-gap">
                        {content.map((section, index) => (
                            <div
                                key={index}
                                className="flex flex-col lg:gap-[24px] gap-[12px]"
                            >
                                {section.subheading && (
                                    <h3 className="lg:text-[36px] text-h2 leading-[36px] font-bold text-isd-primary">
                                        {section.subheading}
                                    </h3>
                                )}
                                {section.content}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
