import F01 from '@/assets/academics/facilities/fac.01.jpg';
import F02 from '@/assets/academics/facilities/fac.02.jpg';
import F03 from '@/assets/academics/facilities/fac.03.jpg';
import F04 from '@/assets/academics/facilities/fac.04.jpg';
import F05 from '@/assets/academics/facilities/fac.05.jpg';
import F06 from '@/assets/academics/facilities/fac.06.jpg';
import F07 from '@/assets/academics/facilities/fac.07.jpg';
import F08 from '@/assets/academics/facilities/fac.08.jpg';
import F09 from '@/assets/academics/facilities/fac.09.jpg';
import F10 from '@/assets/academics/facilities/fac.10.jpg';
import F11 from '@/assets/academics/facilities/fac.11.jpg';
import CarouselTriple from '@/components/CarouselTriple';

const images = [F01, F02, F03, F04, F05, F06, F07, F08, F09, F10, F11];

export default function FacilitiesBlock() {
    const content = [
        {
            subheading: 'Design Studio',
            content: (
                <div className="flex flex-col gap-[24px]">
                    <p>
                        The Design Studio is an open-plan space to hold most
                        first-year design classes, additionally, facilitated
                        with small 3D printing units and hand tools to nurture
                        creativity of students to explore unlimited ideas.
                        <br />
                        The Design studio is characterised by its transparency,
                        purity and brightness.  One design feature of the studio
                        is a huge glass wall printed with drawing dots. This
                        encourages students to sketch on a full wall size to
                        regain their natural curiosity to investigate new ideas.
                        Another feature is the bespoke mobile high work bench.
                        Breaking from sitting still to listen, this high work
                        bench design eases and encourages students to move to
                        explore ideas and engage in different learning
                        activities. Moreover, the studio is facilitated with
                        small 3D printing units and hand tools, this builds a
                        scientific spirit that is – exploratory, experimental
                        and evidence-based.  
                    </p>
                </div>
            ),
        },
        {
            subheading: 'ISDworks!',
            content: (
                <div className="flex flex-col gap-[24px]">
                    <p>
                        Our makerspace, ISDworks!, is equipped with many
                        state-of-the-art prototyping equipment. A core part of
                        the integrative systems design process involves
                        prototyping and therefore our students are encouraged to
                        gain hands-on practice in prototyping throughout the
                        program. The makerspace also serves as a project space
                        for inspiration, collaboration and project showcases.
                        <br />
                        This is the heart and soul of ISD where students make
                        their dreams a reality. ISDworks! encourages
                        learning-by-doing and cultivates teamwork by providing
                        an exciting and collaborative setting.  The 500 sqm.
                        contains equipment and a large collaborative space, as
                        well as a lecture theatre for in-class activities and
                        project development work. The equipment within the
                        makerspace includes 3D scanners, 3D printers, laser
                        cutters, arc welder, CNC, and many others.
                        <br /> Once prototypes are designed and fabricated, the
                        space also has equipment for ergonomic testing. This
                        includes eye gaze trackers, motion analysis equipment,
                        and numerous other sensors to monitor forces and
                        posture.
                    </p>
                </div>
            ),
        },
    ];

    return (
        <div className="w-full dot-pattern before:top-[-120px] before:right-[10px] [--dot-color:var(--isd-primary-2)]">
            <div className="container overflow-y-clip flex flex-col py-section-gap gap-component-gap text-md  text-isd-font-1">
                <h1 className="text-h1 offset-text-background text-isd-font-1">
                    Facilities
                </h1>

                <div className="flex flex-col gap-component-gap">
                    <div className="flex flex-col gap-[12px]">
                        {content.map((section, index) => (
                            <div
                                key={index}
                                className="flex flex-col gap-[24px]"
                            >
                                {section.subheading && (
                                    <h3 className="text-[36px] leading-[36px] font-bold font-isd-font-1 text-isd-primary">
                                        {section.subheading}
                                    </h3>
                                )}
                                {section.content}
                            </div>
                        ))}
                        <iframe
                            className=" aspect-[408/191]"
                            src="https://www.youtube.com/embed/mzY63FfSwVc?si=smIVr0juADYSOqGu"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="flex flex-col gap-[24px]">
                        <h3 className="text-[36px] leading-[36px] font-bold font-isd-font-1 text-isd-primary">
                            Equipment Gallery
                        </h3>
                        <div className="w-full  relative">
                            <div>
                                <CarouselTriple images={images} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
