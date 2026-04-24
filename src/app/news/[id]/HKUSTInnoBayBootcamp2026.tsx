import qianzh from '@/assets/people/qianzh.jpg';
import changyingx from '@/assets/people/changyingx.jpg';
import mitchli from '@/assets/people/mitchli.jpg';
import image01 from '@/assets/news/HKUSTInnoBayBootcamp2026/01.jpg';
import image02 from '@/assets/news/HKUSTInnoBayBootcamp2026/02.jpg';
import image03 from '@/assets/news/HKUSTInnoBayBootcamp2026/03.jpg';
import Image from 'next/image';

export default function HKUSTInnoBayBootcamp2026() {
    return (
        <div className="flex flex-col lg:gap-[24px] gap-[12px] lg:text-md text-sm">
            <h2 className="lg:text-[36px] text-lg leading-9 font-bold text-primary">
                Embark on a Transformative Journey in Innovation and
                Entrepreneurship{' '}
            </h2>
            <p>
                Since its founding, the Hong Kong University of Science and
                Technology has been committed to nurturing innovative leaders
                across various industries.
            </p>
            <p>
                Over more than three decades, the Clear Water Bay campus has
                produced over 1,900 active startup companies, including 9
                unicorns and 11 publicly listed firms. These ventures have
                generated more than HKD 400 billion in economic value for
                society and cultivated tens of thousands of innovative talents
                embedded across different sectors.{' '}
            </p>
            <p>
                Today, Clear Water Bay has become a cradle of technological
                innovation, distinguished by strong resources and a vibrant
                entrepreneurial ecosystem.{' '}
            </p>
            <p>
                ISD is delighted to see our faculty’s interdisciplinary research
                and human-centered innovation philosophy recognized on such an
                influential global stage. Their award-winning inventions reflect
                ISD’s commitment to combining engineering, design, and
                entrepreneurship to address real-world challenges.
            </p>
            <div>
                <Image src={image01} alt="HKUST"></Image>
                <Image src={image02} alt="Innobay summer camp 2026"></Image>
            </div>
            <h2 className="lg:text-[36px] text-lg leading-9 font-bold text-primary">
                InnoBay Summer Camp 2026
            </h2>
            <p>This summer, ignite your innovation and technology dreams.</p>
            <p>
                In the height of July, the Hong Kong University of Science and
                Technology proudly launches InnoBay Summer Camp 2026, an
                immersive training camp designed specifically for future leaders
                in science and technology innovation.
            </p>
            <p>
                The InnoBay Summer Camp is designed to provide young people with
                a strong passion for technological innovation and application
                with systematic, practice-oriented professional guidance. With a
                global perspective, the program focuses on translating
                cutting-edge technologies into real-world industrial
                applications, cultivating interdisciplinary innovators with
                technical understanding, product thinking, and business
                awareness.
            </p>
            <p>
                This year’s camp is built upon the XbotPark innovation and
                entrepreneurship ecosystem established by Professor Li Zexiang
                and others. It is led by senior faculty from the Division of
                Integrative Systems and Design at the Hong Kong University of
                Science and Technology, along with experienced industry mentors.
                Participants will engage in structured learning and hands-on
                practice across key stages including user insight, competitive
                analysis, solution design, technical implementation, and
                validation. They will also complete a final demo presentation,
                experiencing the full innovation process from zero to one,
                transforming ideas into viable products or system solutions,
                while connecting deeply with the innovation and industrial
                ecosystem of the Guangdong Hong Kong Macao Greater Bay Area.
            </p>
            <p>
                Are you ready to take on the challenge, explore the
                possibilities at the intersection of sports and technology, and
                create solutions with real-world impact?
            </p>
            <div>
                <Image src={image03} alt="Are you ready ?"></Image>
            </div>
            <h2 className="lg:text-[36px] text-lg leading-9 font-bold text-primary">
                Camp Schedule
            </h2>
            <table className="w-full border-1 border-y-2 border-y-isd-primary ">
                <tbody className=" divide-y divide-gray-200">
                    <tr>
                        <td className="text-isd-primary font-bold bg-isd-primary-2 border-r border-gray-200 p-4">
                            Dates
                        </td>
                        <td className=" p-4">
                            2nd July 2026 to 11th July 2026
                        </td>
                    </tr>
                    <tr>
                        <td className="text-isd-primary  font-bold border-r border-gray-200 p-4">
                            Location
                        </td>
                        <td className=" p-4">
                            Hong Kong University of Science and Technology →
                            Guangdong–Hong Kong–Macao Greater Bay Area
                            (including the Dongguan region)
                        </td>
                    </tr>
                    <tr>
                        <td className="text-isd-primary  font-bold border-r border-gray-200 p-4">
                            Theme
                        </td>
                        <td className=" p-4">
                            <p>
                                <strong>Sports Technology</strong>
                            </p>
                            <p>
                                This year’s training camp will center on sports
                                technology, broadly exploring how innovation can
                                enhance athletic training, performance,
                                facilities, and the wider industry ecosystem.
                                Areas of exploration include, but are not
                                limited to:
                            </p>
                            <ul className="list-disc ml-5 mt-2 space-y-1 ">
                                <li>
                                    Using sensors, data analytics, and
                                    artificial intelligence to improve training
                                    efficiency and athletic performance
                                </li>
                                <li>
                                    Applying wearable devices and smart
                                    equipment to sports training and health
                                    monitoring
                                </li>
                                <li>
                                    Designing smarter sports venues, training
                                    facilities, and teaching systems
                                </li>
                                <li>
                                    Integrating engineering, computing, and
                                    sports science to address real-world
                                    challenges in athletic environments
                                </li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h2 className="lg:text-[36px] text-lg leading-9 font-bold text-primary">
                Programme Highlights{' '}
            </h2>
            <h2 className="lg:text-lg text-md leading-9 font-bold text-primary">
                HKUST Campus Experience{' '}
            </h2>
            <p>
                Participants will immerse themselves in design thinking, rapid
                prototyping, and commercialization strategies. Working in
                world-class laboratories and maker spaces, they will collaborate
                to understand the full journey of a sports technology product,
                from concept development to functional prototype.
            </p>
            <h2 className="lg:text-lg text-md leading-9 font-bold text-primary">
                Greater Bay Area Industry and Application Visits
            </h2>
            <p>
                Through site visits and expert-led sessions, participants will
                gain firsthand insight into how sports technology is applied in
                real training environments. This year’s program will feature
                visits to professional golf training facilities, where
                participants will explore how advanced technologies support
                athlete training, motion analysis, data feedback, and system
                design. These experiences are designed to inspire the practical
                application of engineering and technology in specific sports
                contexts.
            </p>
            <h2 className="lg:text-lg text-md leading-9 font-bold text-primary">
                Demo Day{' '}
            </h2>
            <p>
                During the final showcase, each team will present its sports
                technology project to a panel of judges, demonstrating
                innovation, technical understanding, and entrepreneurial
                potential while seeking professional recognition.
            </p>
            <h2 className="lg:text-[36px] text-lg leading-9 font-bold text-primary">
                What You Will Gain
            </h2>
            <ul className="list-disc ml-5 mt-2 space-y-1 ">
                <li>
                    Explore the integration of cutting-edge technologies across
                    diverse sports settings{' '}
                </li>
                <li>
                    Learn from HKUST professors and experts from the industry to
                    learn from real-world cases and methodologies{' '}
                </li>
                <li>
                    Gain practical experience in product definition, user
                    research, competitive analysis, solution design and
                    technical implementation{' '}
                </li>
                <li>
                    Collaborate in interdisciplinary teams and work with peers
                    from different professional backgrounds to break through
                    monodisciplinary perspectives and inspire innovative
                    thinking{' '}
                </li>{' '}
                <li>
                    Understand the relevant industrial resources, cross-border
                    cooperation opportunities and innovative policy support in
                    the Greater Bay Area, and lay the foundation for the
                    implementation of future projects
                </li>
            </ul>
            <p className="font-bold text-isd-secondary">
                Priority will be given to outstanding campers.
            </p>
            <p className="font-bold text-isd-secondary">
                Further understanding and recommendation opportunities for MPhil
                in Technology Innovation and Entrepreneurship and MSc in
                Technology Leadership and Entrepreneurship programs at the
                Division of Integrated Systems and Design at the Hong Kong
                University of Science and Technology.
            </p>
            <h2 className="lg:text-[36px] text-lg leading-9 font-bold text-primary">
                Faculty lineup{' '}
            </h2>
            <p>
                The faculty team of the innovation camp consists of experts in
                design thinking, product and brand design, marine technology,
                robotics, artificial intelligence, and sensor systems. They
                bring extensive experience in academic research and industry
                collaboration, with strong expertise in interdisciplinary
                research and team-based teaching.
            </p>
            <div>
                <Image
                    src={qianzh}
                    alt="Zhang Qian"
               
                    sizes="64px"
                ></Image>
            </div>
            <div className="flex flex-col gap-component-gap-sm">
                <h2 className="font-bold underline">
                    Gold Medal with Congratulations of the Jury
                </h2>

                <div className="flex gap-component-gap-sm">
                    <div className="w-48 h-48 relative">
                        <Image
                            src={qianzh}
                            alt="Zhang Qian"
                            fill
                            className="object-cover"
                            sizes="192px"
                        ></Image>
                    </div>
                    <div className="flex">
                        <div className="font-bold">• Prof. Zhang Qian —</div>
                        <div className="italic">
                            AI-Powered Home Healthcare Management System for
                            COPD Patients
                        </div>
                    </div>
                </div>
                <div className="flex gap-component-gap-sm">
                    <div className="flex">
                        <div className="font-bold">• Prof. Mo Li —</div>
                        <div className="italic">
                            Autonomous UAV First-Responder System
                        </div>
                    </div>{' '}
                </div>
                <h2 className="font-bold underline">Gold Medal</h2>
                <div className="flex gap-component-gap-sm">
                    <div className="w-48 h-48 relative">
                        <Image
                            src={changyingx}
                            alt="Changying Xiang"
                            fill
                            className="object-cover"
                            sizes="192px"
                        ></Image>
                    </div>

                    <div className="flex">
                        <div className="font-bold">
                            • Prof. Changying Xiang —
                        </div>
                        <div className="italic">
                            Modular General-purpose Aerial Work Robot
                        </div>
                    </div>
                </div>
                <div className="flex gap-component-gap-sm">
                    <div className="w-48 h-48 relative">
                        <Image
                            src={qianzh}
                            alt="Zhang Qian"
                            fill
                            className="object-cover"
                            sizes="192px"
                        ></Image>
                    </div>
                    <div className="flex">
                        <div className="font-bold">• Prof. Zhang Qian —</div>
                        <div className="italic">
                            ACLGuard: AI Knee Monitoring System for ACL Injury
                            Prevention
                        </div>
                    </div>
                </div>
                <h2 className="font-bold underline">Bronze Medal</h2>
                <div className="flex gap-component-gap-sm">
                    <div className="w-48 h-48 relative">
                        <Image
                            src={mitchli}
                            alt="Mitch Li"
                            fill
                            className="object-cover"
                            sizes="192px"
                        ></Image>
                    </div>

                    <div className="flex">
                        <div className="font-bold">• Prof. Mitch Li —</div>
                        <div className="italic">
                            Smart Autonomous Microheating Robot for
                            Chemical-free Pest Control
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="lg:text-[36px] text-lg leading-9 font-bold text-primary">
                Pushing Innovation Forward at ISD
            </h2>
            <p>
                The recognition received by ISD faculty members underscores the
                Division’s dedication to transformative research and impactful
                design. ISD will continue fostering a culture of innovation and
                collaboration, empowering faculty and students to shape future
                technologies and solutions for society.{' '}
            </p>
            <b>Congratulations to all award recipients!</b>{' '}
            <p>
                Click{' '}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline"
                    href="https://hkust.edu.hk/news/hkust-wins-record-breaking-accolades-51st-international-exhibition-inventions-geneva"
                >
                    here
                </a>{' '}
                to read the full press release on the HKUST website.{' '}
            </p>
        </div>
    );
}
