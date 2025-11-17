import Curriculum from '@/assets/academics/mphil-in-tie/TIE.website.png';
import CurriculumRoadmap from '@/assets/academics/mphil-in-tie/TIE.website.roadmap.png';
import Image from 'next/image';

export default function CurriculumBlock() {
    return (
        <div className="flex flex-col gap-[24px]">
            <h2 className="lg:text-[36px] hidden lg:block text-h2 leading-[36px] font-bold text-isd-primary">
                Curriculum
            </h2>

            <div className="flex flex-col gap-component-gap-sm">
                <p>
                    <h3 className="text-isd-secondary font-bold">
                        Program Structure
                    </h3>
                    The TIE program is a full-time, 2-year journey
                    emphasizing&nbsp;
                    <b>
                        team-based product/service prototyping, industry
                        engagement, and individual thesis research.
                    </b>
                </p>

                <Image src={Curriculum} alt="Curriculum Timeline" />
                <Image src={CurriculumRoadmap} alt="Curriculum Roadmap" />
                <ul>
                    <li className="flex before:text-center before:content-['•'] leading-[26px] before:min-w-component-gap-sm">
                        Students form diverse teams and iterate their prototypes
                        with guidance from prime and supporting supervisors
                        drawn from faculty and industry They will receive
                        personalized feedback and resources to enhance their
                        projects at every stage. Each team demonstrates its
                        prototype or service and receives opportunities for
                        commercialization and networking with industrial
                        partners, ensuring they have the support needed to bring
                        their innovative ideas to life.
                    </li>

                    <li className=" flex before:text-center before:content-['•'] leading-[26px] before:min-w-component-gap-sm">
                        <div>
                            The first year is funded by a{' '}
                            <b>guaranteed HKUST postgraduate studentship;</b>{' '}
                            after the first year, students are expected to seek
                            external investment through organized pitch days and
                            investor engagement sessions. Funding for the second
                            year will be based on securing external support;
                            students who are unable to obtain this may continue
                            their studies as part of a standard research MPhil
                            program.
                        </div>
                    </li>

                    <li className=" flex before:text-center before:content-['•'] leading-[26px] before:min-w-component-gap-sm">
                        <div>
                            {' '}
                            The curriculum integrates core modules on Design
                            Thinking and Entrepreneurial Literacy, broad
                            elective options (including marine tech, AIoT for
                            healthcare, and systems design), professional
                            development, and language courses for holistic
                            growth. Significant emphasis is placed on industry
                            workshops, field trips, and seminars for exposure
                            and skill-building.
                        </div>
                    </li>
                </ul>

                <p>
                    Students are equipped for real-world challenges: from market
                    discovery, team formation, MVP development, testing,
                    pitching, regulatory navigation, fundraising, scaling, and
                    (ideally) launch—culminating in both team demonstration and
                    an individual thesis tied to their group’s innovation.
                </p>

                <p>
                    To graduate from the TIE programme at HKUST, students must
                    complete:
                </p>

                <ul>
                    <li className="flex before:text-center before:content-['•'] leading-[26px] before:min-w-component-gap-sm">
                        <b>12 credits of specialized coursework</b> designed to
                        build core competencies in technology innovation and
                        entrepreneurship.
                    </li>

                    <li className="flex before:text-center before:content-['•'] leading-[26px] before:min-w-component-gap-sm">
                        <b>An independent thesis research project</b>
                         demonstrating deep technical and entrepreneurial
                        expertise and original problem-solving.
                    </li>
                </ul>

                <p>
                    For details about the curriculum and specific course
                    offerings, please visit the&nbsp;
                    <a
                        href="https://prog-crs.hkust.edu.hk/pgprog/2026-27/mphil-tie"
                        className="font-bold text-isd-secondary underline"
                    >
                        Program Catalog.
                    </a>
                </p>
            </div>
        </div>
    );
}
