'use client';

import HKUSTLogo from '@/assets/hkust-logo.svg';
import ISDLogo from '@/assets/isd-logo.svg';
import useHash from '@/lib/getHash';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const hash = useHash();

    const navItems = [
        {
            name: 'About ISD',
            href: '/about-isd',
            pathnameKeyword: 'about-isd',
            submenu: {
                items: [
                    {
                        name: "Head's Message",
                        href: '/about-isd#heads-message',
                        pathnameKeyword: 'heads-message',
                    },
                    {
                        name: 'What is ISD',
                        href: '/about-isd#what-is-isd',
                        pathnameKeyword: 'what-is-isd',
                    },
                    {
                        name: 'Join Us',
                        href: '/about-isd#join-us',
                        pathnameKeyword: 'join-us',
                    },
                ],
            },
        },
        {
            name: 'People',
            href: '/people?role=faculty&area=all&tag=regular',
            pathnameKeyword: 'people',
            submenu: {
                items: [
                    {
                        name: 'Faculty',
                        href: '/people?role=faculty&area=all&tag=regular',
                        pathnameKeyword: 'faculty',
                    },
                    {
                        name: 'Staff',
                        href: '/people?role=staff',
                        pathnameKeyword: 'staff',
                    },
                ],
            },
        },
        {
            name: 'Academics',
            href: '/academics',
            pathnameKeyword: 'academics',
            submenu: {
                items: [
                    {
                        name: 'Programs',
                        href: '/academics#programs',
                        pathnameKeyword: 'programs',
                    },
                    {
                        name: 'Scholarships',
                        href: '/academics/scholarships',
                        pathnameKeyword: 'scholarships',
                    },
                    {
                        name: 'Internship & Exchange',
                        href: '/academics/internship',
                        pathnameKeyword: 'internship',
                    },
                    {
                        name: 'Facilities',
                        href: '/academics/facilities',
                        pathnameKeyword: 'facilities',
                    },
                ],
            },
        },
        { name: 'Research', href: '/research', pathnameKeyword: 'research' },
        {
            name: 'News & Events',
            href: '/news',
            pathnameKeyword: 'news',
            submenu: {
                items: [
                    {
                        name: 'News',
                        href: '/news?category=news',
                        pathnameKeyword: '=news',
                    },
                    {
                        name: 'Events',
                        href: '/news?category=events',
                        pathnameKeyword: 'events',
                    },
                    {
                        name: 'Achievement',
                        href: '/news?category=achievements',
                        pathnameKeyword: 'achievements',
                    },
                ],
            },
        },
        {
            name: 'Collaborators',
            href: '/collaborators',
            pathnameKeyword: 'collaborators',
        },
        {
            name: 'Student Life',
            href: '/student-life?page=stud-comp',
            pathnameKeyword: 'student-life',
            submenu: {
                items: [
                    {
                        name: 'Student Competitions',
                        href: '/student-life/?page=stud-comp',
                        pathnameKeyword: 'stud-comp',
                    },
                    {
                        name: 'Extracurricular Activities',
                        href: '/student-life?page=extra-act',
                        pathnameKeyword: 'extra-act',
                    },
                    {
                        name: 'Internships',
                        href: '/student-life?page=intern',
                        pathnameKeyword: 'intern',
                    },
                    {
                        name: 'Exchange',
                        href: '/student-life?page=exchange',
                        pathnameKeyword: 'exchange',
                    },
                    {
                        name: 'Alumni Sharing',
                        href: '/student-life?page=alumni',
                        pathnameKeyword: 'alumni',
                    },
                    {
                        name: 'Useful Links',
                        href: '/student-life?page=links',
                        pathnameKeyword: 'links',
                    },
                ],
            },
        },
    ];

    return (
        <nav className="bg-white px-section-gap sticky z-40 top-12 py-8">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-[11px] divide-x-1 divide-isd-primary">
                    <Link href="https://hkust.edu.hk/">
                        <Image
                            src={HKUSTLogo}
                            alt="HKUST Logo"
                            width={180}
                            height={44.4}
                            className="pr-[11px]"
                        />
                    </Link>
                    <Link href="/">
                        <Image
                            src={ISDLogo}
                            alt="ISD Logo"
                            width={263}
                            height={27}
                        />
                    </Link>
                </div>

                <div className="inline-flex justify-center items-center gap-element-gap pt-2">
                    {navItems.map((item, i) => (
                        <div className="relative group pb-2" key={item.name}>
                            <Link
                                href={item.href}
                                className={`relative z-50 text-nav group-hover:underline group-hover:underline-offset-10 group-hover:decoration-isd-primary group-hover:decoration-4 ${
                                    pathname.includes(item.pathnameKeyword)
                                        ? 'text-isd-primary underline underline-offset-10 decoration-isd-primary decoration-4'
                                        : 'text-isd-font-3'
                                }`}
                            >
                                {item.name}
                            </Link>

                            {item.submenu && (
                                <div
                                    className={
                                        'absolute mt-2 hidden group-hover:block bg-white shadow-lg shadow-black/30 z-40' +
                                        (i === navItems.length - 1
                                            ? ' right-0'
                                            : ' left-0')
                                    }
                                >
                                    {item.submenu.items.map((subItem) => (
                                        <Link
                                            key={subItem.name}
                                            href={subItem.href}
                                            className={`block px-4 py-2 text-nav-sub hover:bg-gray-100 whitespace-nowrap ${pathname.includes(subItem.pathnameKeyword) || searchParams.toString().includes(subItem.pathnameKeyword) || hash.includes(subItem.pathnameKeyword) ? 'text-isd-primary font-bold underline' : 'text-isd-font-3'}`}
                                        >
                                            {subItem.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    );
}
