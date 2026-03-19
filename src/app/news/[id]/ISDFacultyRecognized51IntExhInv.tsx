import qianzh from '@/assets/people/qianzh.jpg';
import changyingx from '@/assets/people/changyingx.jpg';
import mitchli from '@/assets/people/mitchli.jpg';
import lim from '@/assets/people/lim.jpg';
import Image from 'next/image';

export default function ISDFacultyRecognized51IntExhInv() {
    return (
        <div className="flex flex-col lg:gap-[24px] gap-[12px] lg:text-md text-sm">
            <p>
                The Division of Integrative Systems and Design (ISD) is proud to
                announce that four ISD faculty members—Professor Zhang Qian,
                Professor Mo Li, Professor Changying Xiang, and Professor Mitch
                Li—have received international recognition for their outstanding
                innovations showcased at the 51st International Exhibition of
                Inventions Geneva, held from 11 to 15 March 2026 at Palexpo,
                Geneva. This event is one of the world’s largest and most
                prestigious annual showcases dedicated exclusively to
                inventions, featuring over 1,000 innovations from more than 35
                countries and regions.
            </p>
            <h2 className="lg:text-[36px] text-lg leading-9 font-bold text-primary">
                Celebrating ISD’s Innovation Excellence
            </h2>
            <p>
                ISD is delighted to see our faculty’s interdisciplinary research
                and human-centered innovation philosophy recognized on such an
                influential global stage. Their award-winning inventions reflect
                ISD’s commitment to combining engineering, design, and
                entrepreneurship to address real-world challenges.
            </p>
            <div className="flex flex-col gap-component-gap-sm">
                <h2 className="font-bold underline">
                    Gold Medal with Congratulations of the Jury
                </h2>

                <div className="flex gap-component-gap-sm">
                    <Image src={qianzh} width={200} alt="Zhang Qian"></Image>
                    <div className="flex">
                        <div className="font-bold">• Prof. Zhang Qian —</div>
                        <div className="italic">
                            AI-Powered Home Healthcare Management System for
                            COPD Patients
                        </div>
                    </div>
                </div>
                <div className="flex gap-component-gap-sm">
                    <Image src={lim} width={200} alt="Mo Li"></Image>
                    <div className="flex">
                        <div className="font-bold">• Prof. Mo Li —</div>
                        <div className="italic">
                            Autonomous UAV First-Responder System
                        </div>
                    </div>{' '}
                </div>
                <h2 className="font-bold underline">Gold Medal</h2>
                <div className="flex gap-component-gap-sm">
                    <Image
                        src={changyingx}
                        width={200}
                        alt="Changying Xiang"
                    ></Image>
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
                    <Image src={qianzh} width={200} alt="Zhang Qian"></Image>
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
                    <Image src={mitchli} width={200} alt="Mitch Li"></Image>
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
