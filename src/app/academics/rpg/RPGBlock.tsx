import FusionImg from '@/assets/fusion-ai-5g-iot.jpg';
import PerceptiveMobileImg from '@/assets/perceptive-mobile-network.jpg';
import SmartWearablesImg from '@/assets/smart-wearables-design.png';
import ArchitecturalDesignImg from '@/assets/architectural-design.jpg';
import ImageTitleCard from './ImageTitleCard';
export default function RPGBlock() {
    const ImageTitleCardContent = [
        {
            imageSrc: FusionImg,
            title: 'Fusion-of-AI-5G-and-IoT',
        },
        {
            imageSrc: PerceptiveMobileImg,
            title: 'Perceptive Mobile Network',
        },
        {
            imageSrc: SmartWearablesImg,
            title: 'Smart Wearables Design',
        },
        {
            imageSrc: ArchitecturalDesignImg,
            title: 'Architectural Design',
        },
    ];
    const TextContent = [
        {
            id: 'goals',
            title: 'Program Goals',
            paragraphs: [
                <>
                    The MPhil program aims to train students to conduct
                    world-class research on a cross-disciplinary topic,
                    particularly using principles of design in solving technical
                    problems with clear emphasis on human and societal benefits.
                    A successful MPhil candidate is also expected to demonstrate
                    sufficient knowledge about the state-of-the-art in the areas
                    related to the research problem and on the broader related
                    topics.
                </>,
                <>
                    The PhD program aims to train students with an ability to
                    independently conduct and lead world-class research on a
                    cross-disciplinary topic. They will learn to use and apply
                    principles of design in solving technical problems informed
                    by human and societal issues. Successful graduates will be
                    expected to lead their own research agenda, while
                    demonstrating sufficient knowledge about the
                    state-of-the-art in the areas related to the research
                    problem and on the broader related topics.
                </>,
                <>
                    Students admitted to either of these programs can work on a
                    variety of topics. Several topics on interest of our faculty
                    members range over areas such as Design and Design theory,
                    Embedded Systems, AI, Low energy systems design, Innovative
                    design, Product development, Human-centered design,
                    Architectural geometry, Computer-aided design and
                    manufacturing (CAD / CAM), Computer Vision, Computer
                    Graphics, Computational Design, Augmented Reality, Pervasive
                    and Cloud Computing, User-centered System Design, Advanced
                    manufacturing, Wearable healthcare devices,
                    Microelectronics, Edge AI, Beyond 5G, Bio-Inspired Design,
                    IoT, [Tele] Medical Design, Robotics dynamics and control
                    and Systems simulation and modeling. For more details on
                    these you are encouraged to visit the web pages of our
                    faculty members.
                </>,
            ],
        },
        {
            id: 'details',
            title: 'Details of the Program and Application Process',
            paragraphs: (
                <>
                    Typically, the MPhil program requires a period of two years
                    of study in Full-Time mode, and a subsequent PhD study
                    requires another three years. Exceptional students may apply
                    directly for a PhD after completion of their Bachelor&apos;s
                    study. For more details about the program requirements and
                    application process, please visit the{' '}
                    <a
                        className="text-secondary underline font-bold"
                        href="https://prog-crs.hkust.edu.hk/pgprog/2023-24/mphil-phd-isd"
                    >
                        program details page
                    </a>
                    .
                </>
            ),
        },
        {
            id: 'financial-assistance',
            title: 'Financial assistance',
            paragraphs: (
                <>
                    Typically, all qualified students accepted to the MPhil or
                    PhD programs will receive postgraduate studentship which
                    carries a financial assistance sufficient for an
                    individual&apos;s cost of living in Hong Kong (food, rent,
                    other living costs, tuition fees, and some personal travel
                    during their study). Recipients of postgraduate studentships
                    are required to carry out additional duties such as teaching
                    assistantship or research assistantship, which supplement
                    their formal degree programs. Recipients of these awards
                    should not engage in any paid employment with the University
                    or any other employer. Non-local students should note that
                    they are not allowed to work in Hong Kong part-time or
                    full-time.
                    <br />
                    Some highly qualified students may also apply for the
                    prestigious HK PhD Fellowship scheme. The scheme seeks to
                    attract excellent students from around the world to Hong
                    Kong. Fellowship awardees receive HK$ 337,200 stipend per
                    year and a conference travel allowance of HK$ 14,600 per
                    year for a maximum of four years. Applicants can apply to
                    become new full-time PhD students at any of Hong Kong&apos;s
                    eight University Grants Committee-funded institutions that
                    offer appropriate programs for their particular field of
                    studies, including the Division of Integrative Systems and
                    Design HKUST. More details of the HK PhD fellowship scheme
                    can be found at the{' '}
                    <a
                        className="text-secondary underline font-bold"
                        href="https://fytgs.hkust.edu.hk/scholarships/hong-kong-phd-fellowship-scheme"
                    >
                        Hong Kong PhD Fellowship Scheme&apos;s website
                    </a>
                    .
                </>
            ),
        },
        {
            id: 'contact',
            title: 'Program Contacts',
            paragraphs: (
                <>
                    For further inquiries, please contact our program
                    administration office{' '}
                    <a className="underline" href="mailto:isdpg@ust.hk">
                        (isdpg@ust.hk)
                    </a>
                    , or the PG Programs Coordinator, Prof. Sai Kit YEUNG{' '}
                    <a
                        className="text-secondary underline font-bold"
                        href="mailto:saikit@ust.hk"
                    >
                        saikit@ust.hk
                    </a>
                    .
                </>
            ),
        },
    ];

    return (
        <div className="container overflow-y-clip flex flex-col py-section-gap gap-component-gap text-md text-isd-font-1">
            <div className="flex flex-col gap-9">
                <h1 className="text-h1 offset-text-background text-isd-font-1">
                    MPhil & PhD Program
                </h1>
                <p className="text-sm">
                    The Division of ISD offers the opportunity for creative
                    students to engage in research on a wide variety of topics
                    towards either a Master&apos;s or a PhD degree.
                </p>

                <div className="flex flex-col lg:gap-18 gap-9">
                    {TextContent.map((section) => (
                        <div key={section.id}>
                            <h2 className="lg:text-[36px] text-h2 leading-[36px] font-bold capitalize text-primary mb-6">
                                {section.title}
                            </h2>
                            {Array.isArray(section.paragraphs) ? (
                                section.paragraphs.map((para, index) => (
                                    <div key={index}>
                                        <p className="mb-4 text-sm">{para}</p>
                                        {section.id === 'goals' &&
                                            index === 1 && (
                                                <div className="grid grid-cols-[repeat(auto-fill,minmax(360px,1fr))] gap-component-gap-sm my-6 items-center">
                                                    {ImageTitleCardContent.map(
                                                        (card, index) => (
                                                            <ImageTitleCard
                                                                key={index}
                                                                imageSrc={
                                                                    card.imageSrc
                                                                }
                                                                title={
                                                                    card.title
                                                                }
                                                            />
                                                        )
                                                    )}
                                                </div>
                                            )}
                                    </div>
                                ))
                            ) : (
                                <div className="text-sm">
                                    {section.paragraphs}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
