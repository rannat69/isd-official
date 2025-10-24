import Image from 'next/image';
import Qian from '@/assets/qian.jpg';

export default function HeadsMessageBlock() {
    const MessageContent = () => (
        <div className="flex flex-col gap-[36px] text-md text-isd-font-1 font-medium">
            <div className="flex flex-col gap-[12px]">
                <div className="flex gap-[22px]">
                    <p className="font-bold text-isd-secondary text-justify">
                        Welcome to the Division of Integrative Systems and
                        Design (ISD), the newest academic unit in the Academy of
                        Interdisciplinary Studies at the Hong Kong University of
                        Science and Technology.
                    </p>
                </div>
                <div className="flex flex-col text-justify gap-[12px]">
                    {/* Content paragraphs */}
                    <p>
                        In view of the ever-changing world and the rising
                        multi-faceted challenges, such as global warming, energy
                        crisis and the emergence of AI in human life, ISD was
                        founded in 2017, aiming at nurturing a new generation of
                        technology innovators with our new mode of education and
                        producing top-notch research outputs to solve these
                        problems. Under HKUST 3.0 Vision Plan, ISD will continue
                        advance our strengths and consolidate HKUST’s position
                        as a cross-disciplinary hub.
                    </p>
                    <p>
                        Transdisciplinary vision, human-centred mindset,
                        technical ability and design thinking skills are the
                        core dimensions of ISD’s unique pedagogy. Our BSc in
                        Integrative Systems and Design is the first experiential
                        learning undergraduate program in Hong Kong. Through
                        learner-centric approaches and project-based learning
                        experiences, graduates are expected to identify problems
                        and convert ideas to practical solutions and systems.
                        The MSc in Technology Leadership and Entrepreneurship is
                        offered to translate technological innovations to
                        business ventures. We also encourage students to unleash
                        their research potentials through our MPhil and PhD
                        programs.
                    </p>
                    <p>
                        Faculty and researchers of ISD are fully committed in
                        cutting-edge research with translational contributions.
                        The multi-disciplinary background of our research team
                        drives collaborations across academic fields and bridges
                        research outcomes with industry to create societal
                        impacts. In addition to current research foundation, ISD
                        aims to delve deeper into focused areas, such as Bio
                        Health, Marina Tech and AI Design. We believe that by
                        prioritizing technology innovation and entrepreneurship,
                        we can enhance our capabilities in addressing real-world
                        challenges and creating positive changes.
                    </p>
                    <p>
                        You are free to explore our website and get to grips
                        with our division. If you have any comment or
                        suggestion, please contact us.
                    </p>
                </div>
            </div>
            <div>
                <h2 className="text-h2 text-isd-primary">Prof. Qian ZHANG</h2>
                <p>Head of Division of Integrative Systems and Design</p>
            </div>
        </div>
    );

    return (
        <div
            className="container overflow-clip flex flex-col pt-component-gap lg:pt-section-gap gap-section-title-gap scroll-mt-[95px]"
            id="heads-message"
        >
            <h1 className="text-h2 lg:text-h1 offset-text-background uppercase">
                HEAD&apos;S MESSAGE
            </h1>

            <div className="flex lg:hidden flex-col items-center gap-component-gap">
                <div className="flex flex-col  border-isd-primary">
                    <div className="min-w-[180px] min-h-[234px]">
                        <Image
                            src={Qian}
                            alt="Qian's Profile Picture"
                            width={360}
                            height={468}
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="flex flex-col  py-element-gap px-element-gap lg:px-component-gap-sm gap-[12px]">
                        <h2 className="text-h2 text-center leading-[32px] text-isd-primary">
                            Prof Qian ZHANG
                        </h2>
                        <p className="text-md text-center text-isd-font-1">
                            Head/ Tencent Professor
                            <br />
                            of Engineering and Chair Professor
                        </p>
                    </div>
                </div>

                <MessageContent />
            </div>

            <div className="hidden lg:flex items-start gap-component-gap">
                <div className="flex flex-col border-r-3 border-isd-primary">
                    <div className="w-[360px] h-[468px]">
                        <Image
                            src={Qian}
                            alt="Qian's Profile Picture"
                            width={360}
                            height={468}
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="flex flex-col bg-isd-primary-2 py-element-gap px-component-gap-sm gap-[12px]">
                        <h2 className="text-h2 leading-[32px] text-isd-primary">
                            Prof Qian ZHANG
                        </h2>
                        <p className="text-md text-isd-font-1">
                            Head/ Tencent Professor
                            <br />
                            of Engineering and Chair Professor
                        </p>
                    </div>
                </div>

                <MessageContent />
            </div>
        </div>
    );
}
