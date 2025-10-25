import marineTech from '@/assets/research/marine-tech.jpeg';
import ResearchInfoCard from '../ResearchInfoCard';
import SubHeading from '../SubHeading';
import Image from 'next/image';

export default function MarineTechBlockMobile() {
    return (
        <div className="w-full bg-isd-primary-2">
            <div className="container flex flex-col gap-component-gap-sm pb-component-gap max-w-full">
                <div className="flex flex-col items-center gap-component-gap">
                    {/* Left: Research Info */}
                    <div className="flex basis-1/2 flex-col gap-[12px] justify-center">
                        <SubHeading text="Marine-Tech" />

                        <div className="flex basis-1/2 justify-center">
                            <Image
                                src={marineTech}
                                alt="Marine Tech"
                                className="w-full h-auto rounded-lg aspect-[1.5] object-cover"
                            />
                        </div>

                        {marineTechTopics.map((topic) => (
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

const marineTechTopics = [
    {
        title: 'Maritime Communication',
        description:
            'Information theory, Integrated Sensing and Communication, Distributed Intelligence, Semantic Communications, and Machine Learning for Communications',
        supervisor: 'Shenghui SONG',
    },
    {
        title: 'Non-disturbing marine environment surveying',
        description:
            'Bioinspired robots for surveying marine environments for marine conservation purposes, such as the use of a soft robotic fish for non-disturbing seafloor surveying',
        supervisor: 'Rob SCHARFF, Sai Kit YUENG',
    },
    {
        title: 'Underwater manipulation',
        description:
            'Bioinspired actuators for underwater manipulation, such as suction cups with tactile perception inspired by the octopus, grippers inspired by the seahorse tail, and a soft robot arm inspired by the octopus arm. Passive grippers for AUVs.',
        supervisor: 'Rob SCHARFF',
    },
];
