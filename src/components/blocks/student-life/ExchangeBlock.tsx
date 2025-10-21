import ExchangeImage1 from '@/assets/studentlife/exchange-1.jpg';
import ExchangeImage2 from '@/assets/studentlife/exchange-2.jpg';
import Image from 'next/image';

export default function ExchangeBlock() {
    return (
        <div className=" overflow-clip flex flex-col gap-section-title-gap">
            <h1 className="text-h1 offset-text-background">Exchange</h1>

            <>
                <div className="flex gap-[24px]">
                    <Image
                        src={ExchangeImage1}
                        alt="Student"
                        className="h-[300px] object-cover"
                    />
                    <Image
                        src={ExchangeImage2}
                        alt="Student"
                        className="h-[300px] object-cover"
                    />
                </div>
                <div className="flex flex-col gap-[24px] text-md">
                    <h2 className="text-isd-primary text-[36px] leading-[36px] font-bold">
                        Mashiat LAMISA (BSc ISD student)
                    </h2>
                    <div className="flex flex-col gap-[12px]">
                        <p className="text-isd-secondary font-bold">
                            University of British Columbia, Vancouver, Canada:
                            Spring 2020
                        </p>

                        <p className="text-isd-font-1">
                            In my Spring semester, I was extremely lucky to have
                            the opportunity of a semester abroad at the
                            University of British Columbia in Canada. It was one
                            of the most enlightening experiences of my life –
                            both in terms of knowledge gain as well as personal
                            growth. The University of British Columbia is the
                            oldest university of BC in Canada and I had a heard
                            a lot about how magnanimous the campus is. I would
                            not have believed it before but now that I have
                            spent about 6 months in the campus, I truly
                            completely believe in its magnanimity.
                        </p>

                        <a className="text-isd-secondary font-bold">
                            Read more
                        </a>
                    </div>
                </div>
            </>
        </div>
    );
}
