import Curriculum1 from '@/assets/academics/mphil-in-tie/curiculum.1.1.png';
import Curriculum2 from '@/assets/academics/mphil-in-tie/curiculum.1.2.png';
import Curriculum3 from '@/assets/academics/mphil-in-tie/curiculum.1.3.png';
import Image from 'next/image';
import Link from 'next/link';

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
                <Image src={Curriculum1} alt="Curriculum" />
                <Image src={Curriculum2} alt="Curriculum Timeline" />
                <Image src={Curriculum3} alt="Curriculum Roadmap" />
                <p>
                    Students are equipped for real-world challenges: from market
                    discovery, team formation, MVP development, testing,
                    pitching, regulatory navigation,
                </p>
                <p>
                    fundraising, scaling, and (ideally) launch—culminating in
                    both team demonstration and an individual thesis tied to
                    their group’s innovation.
                </p>

                <p>
                    To graduate from the TIE programme at HKUST, students must
                    complete :
                </p>
                <ul>
                    <li className="flex before:text-center before:content-['•'] leading-[26px] before:min-w-component-gap-sm">
                        <b>12 credits of specialized coursework</b> designed to
                        build core competencies in technology innovation and
                        entrepreneurship.
                    </li>

                    <li className=" flex before:text-center before:content-['•'] leading-[26px] before:min-w-component-gap-sm">
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
