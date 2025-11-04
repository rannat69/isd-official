export default function ResearchAreasBlock() {
    const areas = [
        {
            title: 'Sustainable-Tech',
            description:
                'Energy storage solutions, zero-carbon architecture, urban 3D reconstruction, and modular building design for sustainable cities and infrastructure.',
            link: '/research/#sustainable-tech',
        },
        {
            title: 'Marine-Tech',
            description:
                'Maritime communication systems, non-disturbing marine surveying, underwater manipulation, and bioinspired ocean technology solutions.',
            link: '/research/#marine-tech',
        },
        {
            title: 'Health-Tech',
            description:
                'Wearable biomarker sensing, food 3D printing, elderly-friendly smart homes, ubiquitous computing, and minimally invasive surgical tools.',
            link: '/research/#health-tech',
        },
        {
            title: 'Design-Tech',
            description:
                '3D asset generation, video creation, fashion design, robot-aware assembly, wearable robotics, and AR/VR creative experiences..',
            link: '/research/#design-tech',
        },
        {
            title: 'Emergent-Themes',
            description:
                'Low-altitude economy infrastructure, construction automation, 3D LLM agents, autonomous driving simulators, and socio-technical AI integration.',
            link: '/research/#emergent-themes',
        },
    ];

    return (
        <div className="flex flex-col gap-[24px]">
            <h2 className="lg:text-[36px] text-h2 leading-[36px] font-bold text-isd-primary">
                Research Areas
            </h2>

            <p>
                Through the program study, candidates will establish a robust
                foundation in the following areas, a profound sense of
                curiosity, and an aptitude for learning are ideal for this
                program.
            </p>

            <div className="flex flex-col gap-[12px]">
                {areas.map((area) => (
                    <div key={area.title}>
                        <h3 className="text-isd-secondary font-bold cursor:pointer hover:underline">
                            <a href={area.link}>{area.title}</a>
                        </h3>
                        <p className="text-md">{area.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
