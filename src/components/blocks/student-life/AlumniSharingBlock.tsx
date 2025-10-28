import StudentImage from '@/assets/studentlife/mashiat-lamisa.jpg';
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
                    <div className="flex flex-col gap-[12px]">
                        <p className="text-isd-secondary font-bold">
                            Mashiat LAMISA [BSc in ISD 2021] <br />
                            Current employer: Sparkmate Hong Kong
                            <br />
                            Current job title: Product Engineer
                            <br />
                        </p>

                        <p className="text-isd-font-1">
                            “HKUST has been the most significant point of turn
                            in my personal and professional life given how much
                            it has allowed me to grow as a person and inspired
                            me to turn my entrepreneurial dreams into reality. I
                            not only got to study here but learnt to build
                            things, invent and work with new technology
                            hands-on.
                            <br />
                            Graduating from ISD has made it possible for me to
                            get my hands on the latest technologies while in
                            university which a lot of people might not have the
                            opportunity to. And that has led me to my dream job
                            of being a maker, a product engineer at Sparkmate.
                            Being a female in STEM was not just encouraged but
                            also celebrated here in HKUST and that has played a
                            core part of building a can-do attitude within me.”
                        </p>
                    </div>
                </div>
            </>
        </div>
    );
}
