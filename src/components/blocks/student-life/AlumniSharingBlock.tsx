import MashiatLamisa from '@/assets/studentlife/alumni/mashiat-lamisa.jpg';
import RenaultLuk from '@/assets/studentlife/alumni/renault-luk.jpg';
import SammiHo from '@/assets/studentlife/alumni/sammi-ho.jpg';
import LinkedinIconBlue from '@/assets/linkedin-icon-blue.svg';
import AlexWong from '@/assets/studentlife/alumni/alex-wong.jpg';
import Image from 'next/image';

const studentAlumni = [
    {
        title: 'Renault LUK',
        subtitle: 'BSc in Integrative Systems and Design, Class of 2024\n ',
        currentEmployer: 'Hong Kong Exchanges and Clearing Limited (HKEX)',
        currentJob: 'Graduate Programme Technology Associate',
        description:
            '\“ISD degree is a hands-on learning experience spanning everything from initial analysis of problems to conceptualizing and implementing solutions. In addition to undertaking smaller, more theoretical Computer Science projects, ISD has enabled me to significantly sharpen my project management, design thinking, and UI/UX design capabilities across several different disciplines. The biggest benefit an ISD degree offers is the “adaptable, user-centric mindset” I need to systematically translate business user requirements into innovative solutions for different fields.\” \n \n For full sharing, please visit ',
        image: RenaultLuk,
        link: 'https://ais.hkust.edu.hk/whats-happening/news/how-innovative-thinking-earned-isd-graduate-renault-luk-promising-career',
    },
    {
        title: 'Sammi HO',
        subtitle: 'BSc in Integrative Systems and Design, Class of 2024',

        currentEmployer: 'Cathay Pacific',
        currentJob: 'Digital and IT Graduate Trainee',
        description:
            "“I was drawn to ISD's integration of business, technology and hands-on learning experiences. Through project-based learning, I practiced defining problems and prototyping solutions like an intelligent snooker scoring system with interactive lighting. Thanks to ISD's fast-paced, collaborative projects, I could efficiently manage tasks, tackle complex design initiatives and adapt quickly during my internship.” \n\n For full sharing, please visit ",
        image: SammiHo,
        link: 'https://ais.hkust.edu.hk/whats-happening/news/igniting-innovative-spirit-how-isd-cultivates-next-generation-innovators',
    },
    {
        title: 'Alex WONG',
        subtitle: 'BSc in Integrative Systems and Design, Class of 2022',

        currentEmployer: 'A Startup',
        currentJob: 'Product Engineer',
        description:
            '“Instead of just applying a single area of engineering knowledge, the ISD program taught us to think more holistically, to identify root issues, then to approach the problem with a human-centered approach which caters to user needs“ \n\n For full sharing, please visit ',
        image: AlexWong,
        link: 'https://ais.hkust.edu.hk/whats-happening/news/igniting-innovative-spirit-how-isd-cultivates-next-generation-innovators',
    },
    {
        title: 'Mashiat LAMISA (BSc ISD student)',
        subtitle: 'Mashiat LAMISA [BSc in ISD 2021]',
        currentEmployer: 'Sparkmate Hong Kong',
        currentJob: 'Product Engineer',
        description:
            '\“HKUST has been the most significant point of turn in my personal and professional life given how much it has allowed me to grow as a person and inspired me to turn my entrepreneurial dreams into reality. I not only got to study here but learnt to build things, invent and work with new technology hands-on. \n\n Graduating from ISD has made it possible for me to get my hands on the latest technologies while in university which a lot of people might not                                have the opportunity to. And that has led me to                                my dream job of being a maker, a product                                engineer at Sparkmate. Being a female in STEM                                was not just encouraged but also celebrated here in HKUST and that has played a core part of building a can-do attitude within me.\”',
        image: MashiatLamisa,
        link: '',
    },
];

export default function AlumniSharingBlock() {
    return (
        <div className="overflow-clip flex flex-col gap-section-title-gap">
            <h1 className="lg:block hidden text-h1 offset-text-background">
                Alumni Sharing
            </h1>

            <>
                {studentAlumni.map((s, index) => (
                    <>
                        <Image
                            src={s.image}
                            alt="Student"
                            className="w-[400px] h-[400px] object-cover"
                        />
                        <div className="flex flex-col gap-[24px]">
                            <h2 className="text-isd-primary lg:text-[36px] lg:leading-[36px] text-h2 font-bold">
                                {s.title}
                            </h2>

                            <div className="flex flex-col gap-section-title-gap">
                                <div className="flex flex-col gap-[12px]">
                                    <p className="text-black font-bold text-md">
                                        {s.subtitle}{' '}
                                    </p>{' '}
                                    <p className="text-black font-bold text-md italic">
                                        {s.currentJob} at {s.currentEmployer}
                                    </p>
                                    <p className="text-isd-font-1 text-md whitespace-pre-line">
                                        {s.description}{' '}
                                        <span>
                                            <a
                                                href={s.link}
                                                className="inline text-primary"
                                            >
                                                {s.link}
                                            </a>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </>
                ))}
                <div className="flex flex-col gap-[12px]">
                    <div className="flex gap-section-title-gap">
                        <a
                            href="https://www.linkedin.com/school/hkust-ais/"
                            className="flex gap-[12px] border-l-5 border-isd-primary px-element-gap py-element-gap bg-isd-primary-2"
                        >
                            <Image
                                src={LinkedinIconBlue}
                                alt="LinkedIn Logo"
                                width={28.5}
                                height={28.5}
                                className="text-isd-primary"
                            />
                            <div className="flex gap-[24px]  text-isd-primary">
                                <h2 className="text-lg font-bold">
                                    AIS LinkedIn
                                </h2>
                            </div>
                        </a>

                        <a
                            href="https://alum.hkust.edu.hk/keep-your-information-date"
                            className="flex border-l-5 border-isd-primary px-element-gap py-element-gap bg-isd-primary-2"
                        >
                            <div className="  text-isd-primary">
                                <h2 className="text-lg font-bold">
                                    DAO Alumni
                                </h2>
                            </div>
                        </a>
                    </div>
                    <p className="text-sm text-isd-primary">
                        One of our alumni? Follow the Academy of
                        Interdisciplinary Studies (AIS) on LinkedIn to stay
                        connected and receive updates. Additionally, please
                        leave your latest contact information to ensure you
                        receive university news and updates.
                    </p>
                </div>
            </>
        </div>
    );
}
