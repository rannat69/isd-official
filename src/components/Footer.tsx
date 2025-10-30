import Image from 'next/image';
import Link from 'next/link';
import HKUSTLogoWhite from '@/assets/hkust-logo-white.svg';
import LinkedinIcon from '@/assets/linkedin-icon.png';
import FacebookIcon from '@/assets/facebook-icon.png';
import WechatIcon from '@/assets/wechat-icon.png';
import YoutubeIcon from '@/assets/youtube-icon.png';
import InstagramIcon from '@/assets/instagram-icon.png';
import FootLogo from '@/assets/award-white.svg';

import HKUSTWechat from '@/assets/mainsite_Wechat_Eng_new.jpg';

export default function Footer() {
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
            subheadings: ['Faculty', 'Staff'],
            links: [
                '/people?role=faculty&area=all&tag=regular',
                '/people?role=staff',
            ],
        },
        {
            title: 'Academics',
            subheadings: [
                'Programs',
                // 'Scholarships',
                'Internship & Exchange',
                'Facilities',
            ],
            links: [
                '/academics#programs',
                // '/academics/scholarships',
                '/academics/internship',
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
        <footer className="bg-isd-primary text-white lg:py-[61px]">
            <div className="lg:hidden container py-9 flex flex-col justify-center items-center gap-9">
                <div className="flex flex-col items-center">
                    <span className=" mb-3 text-xs">Follow HKUST on</span>
                    <div className="flex flex-row gap-[12px] h-full">
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
                </div>
                <div className="flex flex-col items-center gap-3">
                    <div className="flex flex-row gap-3 text-callout-link">
                        <Link href="https://dataprivacy.ust.hk/university-data-privacy-policy-statement/">
                            Privacy
                        </Link>
                        <div className="w-px h-3 bg-white"></div>
                        <Link href="https://dataprivacy.hkust.edu.hk/sitemap">
                            Sitemap
                        </Link>
                    </div>
                    <Image
                        src={HKUSTLogoWhite}
                        alt="HKUST Logo"
                        width={160}
                        height={50}
                        // className="object-cover"
                    />

                    <p className="text-callout text-center">
                        Copyright &copy; The Hong Kong University of Science and
                        Technology. All rights reserved.
                    </p>
                </div>
            </div>

            <div className="container flex flex-col gap-[60px]">
                <div>
                    <div className="flex flex-row justify-start divide-x-1 divide-white gap-component-gap-sm pb-[24px]">
                        <div className="hidden lg:flex flex-row justify-start gap-component-gap-sm w-full text-nowrap pr-component-gap-sm">
                            {navTitles.map((nav) => (
                                <div key={nav.title} className="flex flex-col">
                                    <h3 className="font-bold uppercase mb-[24px]">
                                        {nav.title}
                                    </h3>
                                    <div className="flex flex-col gap-[24px] text-footer">
                                        {nav.subheadings.map((sub, index) => (
                                            <Link
                                                key={sub}
                                                href={nav.links[index] ?? '#'}
                                            >
                                                {sub}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex-row justify-start gap-component-gap-sm hidden lg:flex">
                            {divisionInfo.map((nav) => (
                                <div key={nav.title} className="flex flex-col">
                                    <h3 className="font-bold uppercase mb-[24px]">
                                        {nav.title}
                                    </h3>
                                    <div className="flex flex-col gap-[24px] text-footer">
                                        {nav.subtexts.map((sub) => (
                                            <p key={sub}>{sub}</p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="justify-start font-bold uppercase hidden lg:flex flex-row gap-component-gap-sm">
                        <Link href="/research">research</Link>
                        <Link href="/collaborators">collaboration</Link>
                    </div>
                </div>

                <div className="hidden lg:flex flex-row justify-between">
                    <div className="flex flex-row gap-[24px]">
                        <Image
                            src={HKUSTLogoWhite}
                            alt="HKUST Logo"
                            width={160}
                            height={50}
                            // className="object-cover"
                        />
                        <div className="flex flex-col justify-center">
                            <div className="flex flex-row gap-[36px] text-callout-link">
                                <Link href="https://dataprivacy.ust.hk/university-data-privacy-policy-statement/">
                                    Privacy
                                </Link>
                                <Link href="https://dataprivacy.hkust.edu.hk/sitemap">
                                    Sitemap
                                </Link>
                            </div>
                            <p className="text-callout mt-2">
                                Copyright &copy; The Hong Kong University of
                                Science and Technology. All rights reserved.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-row gap-[24px] items-center">
                        <Image
                            src={FootLogo}
                            alt="HKUST Logo"
                            width={100}
                            height={100}
                        />
                        <span className="text-callout">Follow HKUST on</span>
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
                    </div>
                </div>
            </div>
        </footer>
    );
}
