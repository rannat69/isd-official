'use client';

import { ChevronRight } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';

export default function Breadcrumb({ titles }: { titles?: string[] }) {
    const pathname = usePathname();
    const pathSegments = pathname.split('/').filter(Boolean);

    // Ensure we prepend the app base path (if set at build time).
    // The project can expose Next.js basePath to the client by setting
    // NEXT_PUBLIC_BASE_PATH at build time. If it's not set, fallback to ''.
    const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
    const basePath = rawBasePath
        ? rawBasePath.startsWith('/')
            ? rawBasePath
            : `/${rawBasePath}`
        : '';

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
