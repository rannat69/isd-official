import TextCard from '@/components/TextCard';
export default function ProgramBlock() {
    const programsInfo = [
        {
            heading: 'Undergraduate',
            content: 'BSc in Innovation, Design and Technology (IDT)',
            link: '/academics/bsc-in-integrative-systems-and-design-isd',
        },
        {
            heading: 'Undergraduate',
            content: 'Design Minor',
            link: '/academics/design-minor',
        },
        {
            heading: 'Undergraduate',
            content: 'Entrepreneurship Minor',
            link: '/academics/entrepreneurship',
        },

        {
            heading: 'Research Postgraduate',
            content: 'MPhil in Technology Innovation and Entrepreneurship',
            link: '/academics/mphil-in-tie',
        },
        {
            heading: 'Research Postgraduate',
            content: 'MPhil & PhD Program',
            link: '/academics/rpg',
        },
        {
            heading: 'Research Postgraduate',
            content: 'Early Admissions Scheme (MPhil & PhD Program)',
            link: '/academics/early-admission',
        },
        {
            heading: 'Taught Postgraduate',
            content: 'MSc in Technology Leadership and Entrepreneurship (TLE)',
            link: '/academics/msc-tle',
        },

        {
            heading: 'Taught Postgraduate',
            content: 'MEng in Design Intelligence (DI)',
            link: '/academics/meng-in-design-intel',
        },
    ];

    return (
        <div className="dot-pattern before:top-[-95px] before:right-[10px] [--dot-color:var(--isd-secondary-1)]">
            <div className="container relative overflow-clip flex flex-col py-section-gap gap-section-title-gap">
                <h1 className="text-h1 offset-text-background uppercase">
                    Programs
                </h1>
                <div className="grid lg:grid-cols-3 justify-center items-center gap-[48px] lg:gap-section-title-gap">
                    {programsInfo.map((program, index) => (
                        <TextCard
                            key={index}
                            heading={program.heading}
                            content={program.content}
                            link={program.link}
                        />
                    ))}
                </div>
            </div>
            <div
                className="dot-pattern before:bottom-[25px] before:left-[-90px] [--dot-color:var(--isd-secondary-1)] "
                aria-hidden
            />
        </div>
    );
}
