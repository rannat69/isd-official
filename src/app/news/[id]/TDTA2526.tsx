import TDTA02 from '@/assets/news/ThetosDistinguishedTeaching Awards25-26/TDTA02.png';
import TDTA03 from '@/assets/news/ThetosDistinguishedTeaching Awards25-26/TDTA03.png';

import Image from 'next/image';

export default function TDTA2526() {
    return (
        <div className="flex flex-col lg:gap-[24px] gap-[12px] lg:text-md text-sm">
            <p>
                The <strong>Thetos Distinguished Teaching Awards</strong>{' '}
                recognise teaching excellence at HKUST – and this year, two ISD
                faculty members are in the spotlight.
            </p>
            <p>
                <strong>Dr. Jac Leung</strong> was named the recipient of The
                Thetos Early Career Distinguished Teaching Award, while{' '}
                <strong>Prof. Winnie Leung</strong> received The Thetos Teaching
                Award Honorable Mention.
            </p>
            <div>
                <Image src={TDTA02} alt="TDTA02"></Image>
            </div>
            <p>
                Dr. Jac Leung has built a reputation for teaching that puts
                students first. His approach combines design thinking, systems
                thinking, and AI literacy, all delivered through project-based
                learning. Since joining ISD as a Lecturer in 2022, he has
                covered a wide range of undergraduate courses, taken the lead on
                curriculum design and enhancement, and guided student teams to
                award-winning outcomes. His work, however, does not stop at the
                classroom door—he is also a regular presence in co-curricular
                activities and student engagement efforts.
            </p>
            <div>
                <Image src={TDTA03} alt="TDTA03"></Image>
            </div>
            <p>
                Prof. Winnie Leung specialises in helping students navigate the
                space where technical knowledge meets business strategy. An
                Associate Professor of Engineering Education, she draws on a
                career shaped by both engineering and entrepreneurship, bringing
                a rich and varied perspective to her teaching whether she is
                leading a class in engineering or entrepreneurship. Her
                sustained contributions to teaching and longstanding commitment
                to excellence in education have earned her this recognition.
            </p>

            <p>
                The award was launched in 2024 by Thetos Foundation Hong Kong.
                It marks a first for HKUST: an honour created specifically for
                teaching-track faculty, designed both to celebrate their
                teaching accomplishments and to provide funding for their
                professional growth and teaching-related projects.
            </p>

            <p>
                A heartfelt congratulations to Dr. Jac Leung and Prof. Winnie
                Leung on this well-deserved honour.
            </p>
        </div>
    );
}
