import Image from 'next/image';
import PedagogyImage from '@/assets/pedagogy-image.png';

export default function UniquePedagogy() {
    const items = [
        {
            title: 'Project-Based Learning',
            description:
                'Several dedicated partners share our vision of creating new modes of engineering education. As part of our partnership program, they provide valuable resources in forms of financial and in-kind support to the Division.',
        },
        {
            title: 'Multidisciplinary Projects',
            description:
                'Students apply their design skills and knowledge to identify user needs, define problems and generate different design ideas. In addition, they use their technical skills and knowhow to create realizable solutions, design and implement the solution through prototyping, test and refine their ideas, and finally put their solution into practice. A purpose-based learning approach prepares students to work on the year-long projects. Due to the multi-disciplinary nature of the projects, the teams comprise students with different expertise.',
        },
        {
            title: 'Learner-Centric Pedagogy',
            description:
                'Each student has a different role in the team. Depending on his or her role and interest, an individual learning pathway is designed for each student to acquire the skills and knowledge required to complete the project. Each course in the program contributes to the completion of the project.',
        },
        {
            title: 'Individualized Pathway',
            description:
                'Active learning and team-based experience are also important components of the ISD program.',
        },
    ];

    return (
        <div className="w-full bg-isd-primary-2">
            <div className="container flex flex-col lg:py-section-gap py-component-gap-sm gap-section-title-gap">
                <h1 className="text-h1 uppercase">UNIQUE PEDAGOGY</h1>
                <div className="flex items-stretch flex-col lg:flex-row lg:gap-component-gap-sm gap-component-gap">
                    <div className="flex-shrink-0 overflow-hidden lg:w-[384px] lg:max-h-none sm:max-h-[346px] w-auto max-h-[236px]">
                        <Image
                            src={PedagogyImage}
                            alt="Pedagogy Image"
                            className="object-cover lg:w-auto lg:h-full w-full h-auto"
                        />
                    </div>
                    <div className="flex flex-col lg:gap-section-title-gap gap-component-gap">
                        {items.map((item, i) => (
                            <div
                                key={item.title}
                                className={
                                    'pl-[13px] border-l-[5px] box-border flex flex-col gap-[6px] ' +
                                    (i % 2
                                        ? 'border-l-isd-secondary'
                                        : 'border-l-isd-primary')
                                }
                            >
                                <h2 className="text-h2 text-isd-font-1">
                                    {item.title}
                                </h2>
                                <p className="text-md text-isd-font-3">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
