import Logo1 from '@/assets/internship.logo.1.png';
import Logo2 from '@/assets/internship.logo.2.png';
import Logo3 from '@/assets/internship.logo.3.png';
import Logo4 from '@/assets/internship.logo.4.png';
import Logo5 from '@/assets/internship.logo.5.png';
import Image from 'next/image';
export default function InternshipBlock() {
    const content = [
        {
            subheading: 'Internship',
            content: (
                <div className="flex flex-col gap-[24px]">
                    <p>
                        ISD works with our industrial partners to provide
                        students with real-world perspective and design and
                        technical skills through projects, internship, and
                        mentorship. ISD students work on industry-related
                        problems and projects throughout the program and along
                        the way, have ample opportunities to meet and consult
                        with our industrial partners. In their final year, our
                        students work on company-sponsored Capstone projects
                        that utilize what they&apos;ve learned throughout the
                        program and challenge them to be innovators, designers
                        and/or entrepreneurs. Students and faculty advisors work
                        closely with the industrial partners having frequent
                        communication sessions, prototyping reviews, and
                        tracking of progress to ensure project success. Through
                        the interactions with the industrial partners, our
                        students gain valuable knowledge and real-world
                        experience. In turn, our industrial partners gain fresh
                        insights from our students and also project results that
                        can be used in their company. Our industrial partners
                        can also have opportunities to recruit excellent
                        students into their company.
                    </p>
                </div>
            ),
        },
        {
            subheading: 'Exchange',
            content: (
                <div className="flex flex-col gap-[24px]">
                    <p>
                        While all HKUST students are encouraged and supported
                        for outside exchange as part of Academy of
                        Interdisciplinary Studies&apos;coordinated exchange
                        program, the strong project-based focus of ISD
                        curriculum is also highly regarded in certain
                        international institutions; and careful study plan
                        mapping with partner institutions enriches the overall
                        exchange experience.
                        <br /> The following institutions&apos; curriculum and/
                        or available project-based learning opportunities are
                        considered strong complement to ISD students&apos; study
                        roadmap for an exchange semester.
                    </p>
                </div>
            ),
        },
    ];

    return (
        <div className="w-full dot-pattern before:top-[-120px] before:right-[10px] [--dot-color:var(--isd-primary-2)]">
            <div className="container overflow-y-clip flex flex-col py-section-gap gap-component-gap text-md  text-isd-font-1">
                <h1 className="text-h1 offset-text-background text-isd-font-1">
                    Internship & Exchange{' '}
                </h1>
                <div className="flex flex-col gap-component-gap-sm">
                    <div className="flex flex-col gap-component-gap">
                        {content.map((section, index) => (
                            <div
                                key={index}
                                className="flex flex-col lg:gap-[24px] gap-[12px]"
                            >
                                {section.subheading && (
                                    <h3 className="lg:text-[36px] text-h2 leading-[36px] font-bold font-isd-font-1 text-isd-primary">
                                        {section.subheading}
                                    </h3>
                                )}
                                <div className="text-sm">{section.content}</div>
                            </div>
                        ))}

                        <div className="flex lg:flex-1 flex-wrap items-center justify-center gap-component-gap-sm">
                            <Image
                                src={Logo1}
                                alt="logo1"
                                className="w-[60px] h-[88px]"
                            />
                            <Image
                                src={Logo2}
                                alt="logo2"
                                className="w-[176px] h-[54px] mx-6"
                            />
                            <Image
                                src={Logo3}
                                alt="logo3"
                                className="w-[207px] h-[88px]"
                            />
                            <Image
                                src={Logo4}
                                alt="logo4"
                                className="w-[266px] h-[88px] -mx-4"
                            />
                            <Image
                                src={Logo5}
                                alt="logo5"
                                className="w-[194px] h-[88px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
