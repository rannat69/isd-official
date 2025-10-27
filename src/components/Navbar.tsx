'use client';

import HKUSTLogoWhiteFull from '@/assets/hkust-white-logo-full.svg';
import HKUSTLogo from '@/assets/hkust-logo.svg';
import ISDLogo from '@/assets/isd-logo.svg';
import ISDLogoWhite from '@/assets/isd-logo-white.svg';
import useHash from '@/lib/getHash';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

export default function Navbar() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const hash = useHash();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [expandedSubmenu, setExpandedSubmenu] = useState<string | null>(null);

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

    const toggleSubmenu = (itemName: string) => {
        setExpandedSubmenu(expandedSubmenu === itemName ? null : itemName);
    };

    return (
        <nav
            className={`lg:bg-white lg:px-section-gap sticky z-40 top-12 lg:py-8 transition-colors duration-300 ${mobileMenuOpen ? 'bg-isd-primary' : 'bg-white'}`}
        >
            {/* Desktop Navigation */}
            <div className="hidden 2xl:flex items-center justify-between">
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

            {/* Mobile Navigation */}
            <div
                className={`2xl:hidden flex items-center justify-between p-[18px]`}
            >
                <div
                    className={`flex items-center gap-[7px] divide-x-1 ${
                        mobileMenuOpen ? 'divide-white' : 'divide-isd-primary'
                    }`}
                >
                    <Link href="https://hkust.edu.hk/">
                        {mobileMenuOpen ? (
                            <Image
                                src={HKUSTLogoWhiteFull}
                                alt="HKUST Logo"
                                width={112.1}
                                height={27.7}
                                className="pr-[7px]"
                            />
                        ) : (
                            <Image
                                src={HKUSTLogo}
                                alt="HKUST Logo"
                                width={112.1}
                                height={27.7}
                                className="pr-[7px]"
                            />
                        )}
                    </Link>
                    <Link href="/">
                        {mobileMenuOpen ? (
                            <Image
                                src={ISDLogoWhite}
                                alt="ISD Logo"
                                width={147}
                                height={16.8}
                            />
                        ) : (
                            <Image
                                src={ISDLogo}
                                alt="ISD Logo"
                                width={147}
                                height={16.8}
                            />
                        )}
                    </Link>
                </div>

                {/* Burger Menu Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="flex flex-col gap-1.5 p-2"
                    aria-label="Toggle menu"
                >
                    <div
                        className={`w-6 h-0.5 bg-isd-primary transition-all duration-300 ${
                            mobileMenuOpen
                                ? 'rotate-45 translate-y-2 bg-white'
                                : ''
                        }`}
                    />
                    <div
                        className={`w-6 h-0.5 bg-isd-primary transition-all duration-300 ${
                            mobileMenuOpen ? 'opacity-0 bg-white' : ''
                        }`}
                    />
                    <div
                        className={`w-6 h-0.5 bg-isd-primary transition-all duration-300 ${
                            mobileMenuOpen
                                ? '-rotate-45 -translate-y-2 bg-white'
                                : ''
                        }`}
                    />
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
                <div className="lg:hidden text-white bg-isd-primary px-9 pb-9">
                    {navItems.map((item) => (
                        <div key={item.name}>
                            <div className="flex items-center justify-between border-b border-white">
                                <Link
                                    href={item.href}
                                    onClick={() => {
                                        if (!item.submenu) {
                                            setMobileMenuOpen(false);
                                        }
                                    }}
                                    className={`block py-3 text-nav ${
                                        pathname.includes(item.pathnameKeyword)
                                            ? 'font-bold'
                                            : ''
                                    }`}
                                >
                                    {item.name}
                                </Link>

                                {item.submenu && (
                                    <button
                                        onClick={() => toggleSubmenu(item.name)}
                                        className="p-2"
                                        aria-label={`Toggle ${item.name} submenu`}
                                    >
                                        <ChevronRight
                                            className={`h-full transition-transform duration-300 ${
                                                expandedSubmenu === item.name
                                                    ? 'rotate-90'
                                                    : ''
                                            }`}
                                        />
                                    </button>
                                )}
                            </div>

                            {/* Mobile Submenu */}
                            <div className="mt-3">
                                {item.submenu &&
                                    expandedSubmenu === item.name && (
                                        <div className="flex flex-col gap-[6px]">
                                            {item.submenu.items.map(
                                                (subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        href={subItem.href}
                                                        onClick={() =>
                                                            setMobileMenuOpen(
                                                                false
                                                            )
                                                        }
                                                        className={`block text-sm ${
                                                            pathname.includes(
                                                                subItem.pathnameKeyword
                                                            ) ||
                                                            searchParams
                                                                .toString()
                                                                .includes(
                                                                    subItem.pathnameKeyword
                                                                ) ||
                                                            hash.includes(
                                                                subItem.pathnameKeyword
                                                            )
                                                                ? 'font-bold'
                                                                : ''
                                                        }`}
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                )
                                            )}
                                        </div>
                                    )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </nav>
    );
}
