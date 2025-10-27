import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AboutISDBlock() {
    const links = [
        { title: "Head's Message", href: '/about-isd#heads-message' },
        { title: 'What is ISD', href: '/about-isd#what-is-isd' },
        { title: 'Academics', href: '/about-isd#academics' },
    ];

    return (
        <div className="container overflow-clip flex flex-col py-section-gap gap-section-title-gap lg:dot-pattern lg:before:top-[-95px] lg:before:right-0 lg:[--dot-color:var(--isd-secondary-1)]">
            <h1 className="text-h1 offset-text-background uppercase">
                ABOUT ISD
            </h1>

            <div className="flex flex-col gap-component-gap-sm">
                <p className="text-md text-isd-font-1 lg:text-start text-justify">
                    The mission of the Division of Integrative Systems and
                    Design is to nurture a new generation of innovators who can
                    work across multiple disciplines and create disruptive
                    innovations to solve the world&apos;s great challenges.
                </p>

                <div className="flex flex-col lg:flex-row gap-component-gap-sm text-white">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="flex flex-1 items-center justify-between min-h-[72px] px-element-gap bg-isd-primary rounded-sm"
                        >
                            <span className="lg:text-h2 text-lg font-bold">
                                {link.title}
                            </span>
                            <ArrowRight size={20} strokeWidth={3} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
