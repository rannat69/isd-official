import Partner1 from '@/assets/academics/mphil-in-tie/partner1.png';
import Partner2 from '@/assets/academics/mphil-in-tie/partner2.png';
import Partner3 from '@/assets/academics/mphil-in-tie/partner3.png';
import Partner4 from '@/assets/academics/mphil-in-tie/partner4.png';
import Partner5 from '@/assets/academics/mphil-in-tie/partner5.png';
import Partner6 from '@/assets/academics/mphil-in-tie/partner6.png';
import Partner7 from '@/assets/academics/mphil-in-tie/partner7.png';
import Partner8 from '@/assets/academics/mphil-in-tie/partner8.png';
import Partner9 from '@/assets/academics/mphil-in-tie/partner9.png';
import Partner10 from '@/assets/academics/mphil-in-tie/partner10.png';
import Partner11 from '@/assets/academics/mphil-in-tie/partner11.png';
import Partner12 from '@/assets/academics/mphil-in-tie/partner12.png';
import Partner13 from '@/assets/academics/mphil-in-tie/partner13.png';
import Image from 'next/image';

export default function AcademicAndIndustrialPartnersBlock() {
    return (
        <div className="flex flex-col gap-[24px]">
            <h2 className="lg:text-[36px] text-h2 leading-[36px] font-bold text-isd-primary">
                Academic and Industrial Partners
            </h2>

            <p>
                The TIE MPhil program is designed to bridge the gap between
                academic research and real-world application. Our program
                collaborates with a diverse range of academic institutions and
                industrial partners to provide students with a comprehensive
                learning experience.
            </p>

            <div className="flex flex-col">
                <h3 className="text-isd-secondary font-bold mb-[24px]">
                    Academic Incubators
                </h3>
                <div className="flex gap-[50px] items-center mb-[24px]">
                    <div>
                        <a href="https://www.olin.edu/">
                            <Image
                                className="h-12 w-full object-contain"
                                src={Partner1}
                                alt="Olin College of Engineering"
                            />
                        </a>
                    </div>
                    <div>
                        <Image
                            className="h-12"
                            src={Partner2}
                            alt="Politecnico"
                        />
                    </div>
                    <div>
                        <Image
                            className="h-12 w-full object-contain"
                            src={Partner3}
                            alt="Chinese Academy of Sciences"
                        />
                    </div>
                    <div>
                        <Image
                            className="h-12 w-full object-contain"
                            src={Partner4}
                            alt="Fujita Health University"
                        />
                    </div>
                </div>
                <h3 className="text-isd-secondary font-bold mb-[24px]">
                    Partner Incubators
                </h3>
                <div className="flex gap-[70px] items-center mb-[24px]">
                    <div>
                        <Image
                            className="h-12 w-full object-contain"
                            src={Partner5}
                            alt=""
                        />{' '}
                    </div>
                    <div>
                        <Image
                            className="h-6 w-full object-contain"
                            src={Partner6}
                            alt="BotPark"
                        />{' '}
                    </div>
                    <div>
                        <Image
                            className="h-12 w-full object-contain"
                            src={Partner7}
                            alt=""
                        />{' '}
                    </div>
                    <div>
                        <Image
                            className="h-12 w-full object-contain"
                            src={Partner8}
                            alt="BotPark"
                        />
                    </div>
                </div>
                <h3 className="text-isd-secondary font-bold mb-[24px]">
                    Industrial Partners
                </h3>{' '}
                <div className="flex gap-[50px] items-center">
                    <div>
                        <Image
                            className="h-12 w-full object-contain"
                            src={Partner9}
                            alt=""
                        />
                    </div>
                    <div>
                        <Image
                            className="h-12"
                            src={Partner10}
                            alt="Politecnico"
                        />
                    </div>
                    <div>
                        <Image
                            className="h-12 w-full object-contain"
                            src={Partner11}
                            alt=""
                        />
                    </div>
                    <div>
                        <Image
                            className="h-12 w-full object-contain"
                            src={Partner12}
                            alt=""
                        />
                    </div>
                    <div>
                        <Image
                            className="h-12 w-full object-contain"
                            src={Partner13}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
