import Image from 'next/image';
import Link from 'next/link';
import LinkedinIcon from '@/assets/linkedin-icon.png';
import FacebookIcon from '@/assets/facebook-icon.png';
import WechatIcon from '@/assets/wechat-icon.png';
import YoutubeIcon from '@/assets/youtube-icon.png';
import InstagramIcon from '@/assets/instagram-icon.png';
import HKUSTWhiteFooter from '@/assets/HKUST.white.footer.png';

import HKUSTWechat from '@/assets/mainsite_Wechat_Eng_new.jpg';

export default function FooterMobile() {
    const navTitles = [
        {
            title: 'About ISD',
            subheadings: ['Head’s Message', 'What is ISD', 'Join Us'],
            links: [
                '/about-isd/#heads-message',
                '/about-isd#what-is-isd',
                '/about-isd#join-us',
            ],
        },
        {
            title: 'People',
            subheadings: ['ISD Faculty', 'ISD Staff'],
            links: [
                '/people?role=faculty&area=all&tag=regular',
                '/people?role=staff',
            ],
        },
        {
            title: 'Academics',
            subheadings: [
                'Programs',
                'Scholarships',
                'Internship & Exchange',
                'Facilities',
            ],
            links: [
                '/academics#programs',
                '/academics/scholarships',
                '/academics/internship-and-exchange',
                '/academics/facilities',
            ],
        },
        {
            title: 'News & Events',
            subheadings: ['News', 'Events', 'Achievement'],
            links: [
                '/news?category=news',
                '/news?category=events',
                '/news?category=achievements',
            ],
        },
        {
            title: 'Student Life',
            subheadings: [
                'Student Competitions',
                'Extracurricular Activities',
                'Internship',
                'Exchange',
                'Alumni Sharing',
            ],
            links: [
                '/student-life?page=stud-comp',
                '/student-life?page=extra-act',
                '/student-life?page=intern',
                '/student-life?page=exchange',
                '/student-life?page=alumni',
            ],
        },
    ];

    const divisionInfo = [
        {
            title: 'Division of Integrative Systems and Design',
            subtexts: [
                'Location: Room 5591, Lift 29-30, The Hong Kong University of Science and Technology, Clear Water Bay, Hong Kong',
                'Tel: +852 3469 2723',
                'Fax: +852 3521 0943',
                'Email: isd@ust.hk',
            ],
        },
    ];
    return (
        <footer className=" block lg:hidden bg-isd-primary text-white px-[18px] py-[36px] ">
            <div className="flex flex-col gap-[24px] items-center">
                <span className="text-callout leading-[16px]">
                    Follow HKUST on
                </span>

                <div className="flex flex-col items-center gap-component-gap-sm">
                    <div className="flex flex-row gap-[12px] items-center h-full">
                        <Link
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.facebook.com/hkust/"
                        >
                            <Image
                                src={FacebookIcon}
                                alt="Facebook Logo"
                                width={36}
                                height={36}
                            />
                        </Link>

                        <Link
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.instagram.com/hkust/"
                        >
                            <Image
                                src={InstagramIcon}
                                alt="Instagram Logo"
                                width={36}
                                height={36}
                            />
                        </Link>

                        <Link
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.linkedin.com/school/hkust/"
                        >
                            <Image
                                src={LinkedinIcon}
                                alt="LinkedIn Logo"
                                width={36}
                                height={36}
                            />
                        </Link>

                        <Link
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.youtube.com/user/hkust"
                        >
                            <Image
                                src={YoutubeIcon}
                                alt="YouTube Logo"
                                width={36}
                                height={36}
                            />
                        </Link>

                        <Link href={HKUSTWechat.src} target="_blank">
                            <Image
                                src={WechatIcon}
                                alt="WeChat Logo"
                                width={36}
                                height={36}
                            />
                        </Link>
                    </div>

                    <div className="flex flex-col items-center gap-[12px]">
                        <div className="flex flex-row gap-[12px] text-callout-link divide-x-1">
                            <Link
                                className="pr-[12px]"
                                href="https://dataprivacy.ust.hk/university-data-privacy-policy-statement/"
                            >
                                Privacy
                            </Link>
                            <Link href="https://dataprivacy.hkust.edu.hk/sitemap">
                                Sitemap
                            </Link>
                        </div>
                        <Image
                            src={HKUSTWhiteFooter}
                            alt="HKUST Logo"
                            width={161}
                            height={53}
                            // className="object-cover"
                        />
                        <div className="text-callout  text-center leading-[16px]">
                            Copyright &copy; The Hong Kong University of Science
                            and Technology. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-[24px]">
                    <div className="flex flex-col justify-center"></div>
                </div>
            </div>
        </footer>
    );
}
