'use client';

import { ChevronRight } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';

export default function Breadcrumb({ titles }: { titles?: string[] }) {
    const pathname = usePathname();
    const pathSegments = pathname.split('/').filter(Boolean);

    return (
        <nav className="text-md flex items-center gap-2">
            {pathSegments.map((segment, index) => {
                const isLast = index === pathSegments.length - 1;
                const href = '/' + pathSegments.slice(0, index + 1).join('/');

                return (
                    <Fragment key={href}>
                        <a className="inline">
                            {!isLast ? (
                                <a href={href} className="text-isd-primary">
                                    {titles?.[index] || segment}
                                </a>
                            ) : (
                                <span className="text-isd-primary font-bold">
                                    {titles?.[index] || segment}
                                </span>
                            )}
                        </a>
                        {!isLast && (
                            <ChevronRight
                                size={16}
                                className="text-isd-font-2"
                            />
                        )}
                    </Fragment>
                );
            })}
        </nav>
    );
}
