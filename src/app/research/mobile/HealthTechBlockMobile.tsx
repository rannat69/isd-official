import HealthTech from '@/assets/research/health-tech.png';
import ResearchInfoCard from '../ResearchInfoCard';
import SubHeading from '../SubHeading';
import Image from 'next/image';

export default function HealthTechBlockMobile() {
    return (
        <div>
            <div className="container flex flex-col gap-component-gap-sm pb-component-gap max-w-full">
                <div className="flex flex-col items-center gap-component-gap">
                    {/* Middle: Vertical Divider (Large Screens Only) */}
                    <div className="hidden lg:block h-[288px] w-[5px] bg-primary rounded-full mx-auto"></div>

                    {/* Right: Research Info */}
                    <div className="flex basis-1/2 flex-col gap-[12px] justify-center">
                        <SubHeading text="health-Tech" />

                        {/* Top: Image */}
                        <div className="flex basis-1/2 justify-center">
                            <Image
                                src={HealthTech}
                                alt="health Tech"
                                className="w-full h-auto rounded-lg aspect-[1.5] object-cover"
                            />
                        </div>

                        {HealthTechTopics.map((topic) => (
                            <ResearchInfoCard
                                key={topic.title}
                                title={topic.title}
                                description={topic.description}
                                supervisor={topic.supervisor}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

const HealthTechTopics = [
    {
        title: 'Wearable biomarker sensing',
        description:
            'Laser manufacturing of sweat biomarker sensing devices towards evidence-based physiological monitoring.',
        supervisor: 'Mitch LI',
    },
    {
        title: 'Food 3D printing',
        description:
            'Soft food 3D printing for elderly with swallowing difficulties.',
        supervisor: 'Mitch LI',
    },
    {
        title: 'Elderly-friendly smart home system design',
        description:
            'AI-empowered home system design with care of elderlys, integrating smart lighting, colour, wearable facilities, interactive devices.',
        supervisor: 'Changying XIANG',
    },
    {
        title: 'Ubiquitous Computing',
        description:
            'Our research focuses on developing deployable healthcare systems and generalizable AI algorithms for collecting and analyzing human physical and physiological data. We aim to close the sensing-reasoning-intervention loop to address real-world challenges in areas such as autism support and elderly care.',
        supervisor: 'Qijia SHAO',
    },
    {
        title: 'Minimally invasive surgery',
        description:
            'Design novel surgical tools that can enter the body through a small opening and perform complex, accurate surgical procedures. ',
        supervisor: 'Richard GU',
    },
];
