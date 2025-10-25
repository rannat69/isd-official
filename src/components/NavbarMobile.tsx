'use client';

import HKUSTLogoM from '@/assets/hkust-logo.m.svg';
import HKUSTLogoWhite from '@/assets/hkust-logo-white.svg';

import ISDLogoM from '@/assets/isd-logo.m.svg';
import ISDLogoWhite from '@/assets/isd-logo-white.svg';
import { ChevronRight, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function NavbarMobile() {
    const [selectedItem, setSelectedItem] = useState('');

    const [displayMobileMenu, setDisplayMobileMenu] = useState(false);

    const navItems = [
        {
            name: 'About ISD',
            href: '/about-isd',
            submenu: {
                items: [
                    {
                        name: "Head's Message",
                        href: '/about-isd#heads-message',
                    },
                    { name: 'What is ISD', href: '/about-isd#what-is-isd' },
                    { name: 'Join Us', href: '/about-isd#join-us' },
                ],
            },
        },
        {
            name: 'People',
            href: '/people?role=faculty&area=all&tag=regular',
            submenu: {
                items: [
                    {
                        name: 'Faculty',
                        href: '/people?role=faculty&area=all&tag=regular',
                    },
                    { name: 'ISD Staff', href: '/people?role=staff' },
                ],
            },
        },
        {
            name: 'Academics',
            href: '/academics',
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
        { name: 'Research', href: '/research' },
        {
            name: 'News & Events',
            href: '/news',
            submenu: {
                items: [
                    { name: 'News', href: '/news?category=news' },
                    { name: 'Events', href: '/news?category=events' },
                    {
                        name: 'Achievement',
                        href: '/news?category=achievements',
                    },
                ],
            },
        },
        { name: 'Collaborators', href: '/collaborators' },
        {
            name: 'Student Life',
            href: '/student-life?page=stud-comp',
            submenu: {
                items: [
                    {
                        name: 'Student Competitions',
                        href: '/student-life?page=stud-comp',
                    },
                    {
                        name: 'Extracurricular Activities',
                        href: '/student-life?page=extra-act',
                    },
                    { name: 'Internships', href: '/student-life?page=intern' },
                    { name: 'Exchange', href: '/student-life?page=exchange' },
                    {
                        name: 'Alumni Sharing',
                        href: '/student-life?page=alumni',
                    },
                    { name: 'Useful Links', href: '/student-life?page=links' },
                ],
            },
        },
    ];

    interface MenuItemProps {
        item: {
            name: string;
            href?: string;
            submenu?: {
                items: {
                    name: string;
                    href: string;
                }[];
            };
        };
        selectedItem: string;
        setSelectedItem: (name: string) => void;
        setDisplayMobileMenu: (display: boolean) => void;
    }

    const MenuItem: React.FC<MenuItemProps> = ({
        item,
        selectedItem,
        setSelectedItem,
        setDisplayMobileMenu,
    }) => {
        const handleClick = () => {
            setSelectedItem(selectedItem !== item.name ? item.name : '');
            if (!item.submenu) {
                setDisplayMobileMenu(false);
            }
        };

        return (
            <div
                className="flex justify-between items-center w-full "
                onClick={handleClick}
            >
                <div className="text-white text-nav py-2">{item.name}</div>

                <div className="text-white">
                    <ChevronRight />
                </div>
            </div>
        );
    };

    return (
        <div className="block lg:hidden">
            <nav
                className={`flex items-center justify-between bg-white px-element-gap lg:px-section-gap sticky z-42 h-[54px] ${displayMobileMenu ? 'hidden' : ''}`}
            >
                <div className="flex items-center gap-[7px] divide-x-1 divide-isd-primary">
                    <Link href="https://hkust.edu.hk/">
                        <Image
                            src={HKUSTLogoM}
                            alt="HKUST Logo"
                            width={112.1}
                            height={27.7}
                            className="pr-[7px]"
                            style={{ minWidth: '90px', height: '44.4px' }}
                        />
                    </Link>
                    <Link href="/">
                        <Image
                            src={ISDLogoM}
                            alt="ISD Logo"
                            width={147}
                            height={16.8}
                            style={{ minWidth: '130px', height: '27px' }}
                        />
                    </Link>
                </div>

                <Menu
                    className="block lg:hidden text-isd-primary "
                    onClick={() => setDisplayMobileMenu(true)}
                />
            </nav>

            {displayMobileMenu && (
                <div
                    className={`flex flex-col  justify-between bg-isd-primary px-element-gap lg:px-section-gap sticky z-42  ${!displayMobileMenu ? 'hidden' : ''}`}
                >
                    <div className="flex items-center justify-between  h-[54px]">
                        <div className="flex  items-center gap-[7px] divide-x-1 divide-white">
                            {' '}
                            <Link href="https://hkust.edu.hk/">
                                <Image
                                    src={HKUSTLogoWhite}
                                    alt="HKUST Logo"
                                    width={112}
                                    height={27.7}
                                    className="pr-[7px]"
                                    style={{
                                        minWidth: '112px',
                                        height: '44.4px',
                                    }}
                                />
                            </Link>
                            <Link href="/">
                                <Image
                                    src={ISDLogoWhite}
                                    alt="ISD Logo"
                                    width={147}
                                    height={16.8}
                                    style={{
                                        minWidth: '130px',
                                        height: '27px',
                                    }}
                                />
                            </Link>
                        </div>
                        <X
                            strokeWidth={2}
                            size={16}
                            className="text-white "
                            onClick={() => setDisplayMobileMenu(false)}
                        />
                    </div>

                    <div className="flex flex-col   items-start  h-full px-element-gap my-component-gap-sm ">
                        {navItems.map((item) => (
                            <>
                                {item.submenu ? (
                                    <div className="py-[8px] w-full">
                                        <div
                                            onClick={() =>
                                                selectedItem != item.name
                                                    ? setSelectedItem(item.name)
                                                    : setSelectedItem('')
                                            }
                                            className="flex justify-between items-center  w-full border-b-1 border-white"
                                        >
                                            <MenuItem
                                                key={item.name}
                                                item={item}
                                                selectedItem={selectedItem}
                                                setSelectedItem={
                                                    setSelectedItem
                                                }
                                                setDisplayMobileMenu={
                                                    setDisplayMobileMenu
                                                }
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    <div className="py-[8px] w-full">
                                        <Link
                                            onClick={() =>
                                                selectedItem != item.name
                                                    ? setSelectedItem(item.name)
                                                    : setSelectedItem('')
                                            }
                                            className="flex justify-between items-center  w-full border-b-1 border-white"
                                            href={item.href}
                                        >
                                            <MenuItem
                                                item={item}
                                                selectedItem={selectedItem}
                                                setSelectedItem={
                                                    setSelectedItem
                                                }
                                                setDisplayMobileMenu={
                                                    setDisplayMobileMenu
                                                }
                                            />
                                        </Link>
                                    </div>
                                )}

                                {selectedItem === item.name && (
                                    <div className="flex flex-col gap-[6px] py-[4px] ">
                                        {item.submenu?.items.map((subItem) => (
                                            <Link
                                                onClick={() => {
                                                    setDisplayMobileMenu(false);
                                                }}
                                                key={subItem.name}
                                                href={subItem.href}
                                                className="block  text-white text-nav-sub whitespace-nowrap"
                                            >
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
