'use client';

import { ChevronRight } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';

export default function Breadcrumb({ titles }: { titles?: string[] }) {
    const pathname = usePathname();
    const pathSegments = pathname.split('/').filter(Boolean);

    // Determine basePath in this priority order:
    // 1. runtime public env (NEXT_PUBLIC_BASE_PATH) if provided
    // 2. build-time CI flag (process.env.CI) used during your CI builds
    // 3. runtime detection: if the current page is being served under
    //    /isd-official (useful when you exported the site and are serving
    //    it from that subpath without rebuilding), detect from
    //    window.location.pathname.
    const buildBasePath =
        process.env.NEXT_PUBLIC_BASE_PATH ??
        (process.env.CI === 'true' ? '/isd-official' : '');

    let basePath = buildBasePath;
    if (!basePath && typeof window !== 'undefined') {
        // Example: when serving exported files from /isd-official, the
        // pathname will start with '/isd-official'. Detect and use it.
        const firstSegment = window.location.pathname
            .split('/')
            .filter(Boolean)[0];
        if (firstSegment === 'isd-official') {
            basePath = '/isd-official';
        }
    }

    return (
        <nav className="text-md flex items-center gap-2">
            {pathSegments.map((segment, index) => {
                const isLast = index === pathSegments.length - 1;
                const linkPath =
                    '/' + pathSegments.slice(0, index + 1).join('/');
                const href = `${basePath}${linkPath}`;

                return (
                    <Fragment key={href}>
                        {/* outer element must not be an anchor to avoid nested anchors */}
                        <span className="inline">
                            {!isLast ? (
                                <a href={href} className="text-isd-primary">
                                    {titles?.[index] || segment}
                                </a>
                            ) : (
                                <span
                                    className="text-isd-primary font-bold"
                                    aria-current="page"
                                >
                                    {titles?.[index] || segment}
                                </span>
                            )}
                        </span>
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
