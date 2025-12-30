import StudentImage from '@/assets/studentlife/alumni/mashiat-lamisa.jpg';
import LinkedinIconBlue from '@/assets/linkedin-icon-blue.svg';
import Image from 'next/image';

export default function AlumniSharingBlock() {
    return (
        <div className="overflow-clip flex flex-col gap-section-title-gap">
            <h1 className="lg:block hidden text-h1 offset-text-background">
                Alumni Sharing
            </h1>

            <>
                <Image
                    src={StudentImage}
                    alt="Student"
                    className="w-480px h-480px"
                />
                <div className="flex flex-col gap-[24px]">
                    <h2 className="text-isd-primary lg:text-[36px] lg:leading-[36px] text-h2 font-bold">
                        Mashiat LAMISA (BSc ISD student)
                    </h2>

                    <div className="flex flex-col gap-section-title-gap">
                        <div className="flex flex-col gap-[12px]">
                            <p className="text-isd-secondary font-bold text-md">
                                Mashiat LAMISA [BSc in ISD 2021] <br />
                                Current employer: Sparkmate Hong Kong
                                <br />
                                Current job title: Product Engineer
                                <br />
                            </p>

                            <p className="text-isd-font-1 text-md">
                                “HKUST has been the most significant point of
                                turn in my personal and professional life given
                                how much it has allowed me to grow as a person
                                and inspired me to turn my entrepreneurial
                                dreams into reality. I not only got to study
                                here but learnt to build things, invent and work
                                with new technology hands-on.
                                <br />
                                Graduating from ISD has made it possible for me
                                to get my hands on the latest technologies while
                                in university which a lot of people might not
                                have the opportunity to. And that has led me to
                                my dream job of being a maker, a product
                                engineer at Sparkmate. Being a female in STEM
                                was not just encouraged but also celebrated here
                                in HKUST and that has played a core part of
                                building a can-do attitude within me.”
                            </p>
                        </div>

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
                                        <h2 className="text-lg font-bold">DAO Alumni</h2>
                                    </div>
                                </a>
                            </div>
                            <p className='text-sm text-isd-primary'>
                                One of our alumni? You can add AIS to your
                                LinkedIn profile and update your profiles under
                                DAO.
                            </p>
                        </div>
                    </div>
                </div>
            </>
        </div>
    );
}
