'use client';

import { useMemo } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import data from '@/data/news_events.json';
import {
    filterNews,
    sortNews,
    type NewsEntry,
    type CategoryFilter,
    getYears,
} from '@/lib/newsFilter';
import { resolveFirstImage } from '@/lib/newsImages';
import NewsCard from '@/components/NewsCard';
import EventCard from '@/components/EventCard';
import Select, { type Option } from '@/components/Select';

export default function NewsListBlock() {
    const allItems = data as NewsEntry[];
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const category: CategoryFilter = useMemo(() => {
        return (searchParams.get('category') as CategoryFilter) || 'all';
    }, [searchParams]);

    const year: number | 'all' = useMemo(() => {
        const raw = searchParams.get('year');
        if (!raw) return 'all';
        const n = Number(raw);
        return Number.isFinite(n) ? (n as number) : 'all';
    }, [searchParams]);

    const categoryOptions: Option[] = [
        { value: 'all', label: 'All Category' },
        { value: 'news', label: 'News' },
        { value: 'events', label: 'Events' },
        { value: 'achievements', label: 'Achievements' },
    ];

    const yearOptions: Option[] = useMemo(() => {
        const ys = getYears(allItems);
        return [
            { value: 'all', label: 'Year' },
            ...ys.map((y) => ({ value: y, label: String(y) })),
        ];
    }, [allItems]);

    const items = sortNews(
        filterNews(allItems, {
            category,
            year,
        })
    );

    function updateSearchParams(next: {
        category?: CategoryFilter;
        year?: number | 'all';
    }) {
        const params = new URLSearchParams(searchParams.toString());
        if (next.category !== undefined) {
            const p = (() => {
                return next.category === 'all' ? null : next.category;
            })();
            if (!p) params.delete('category');
            else params.set('category', p);
        }
        if (next.year !== undefined) {
            if (next.year === 'all') params.delete('year');
            else params.set('year', String(next.year));
        }
        const qs = params.toString();
        router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    }

    return (
        <div className="dot-pattern before:top-[-115px] before:right-[10px] [--dot-color:var(--isd-primary-2)]">
            <div className="container flex flex-col py-section-gap gap-0">
                <div className="flex justify-between">
                    <h1 className="text-h1 offset-text-background text-isd-font-1 text-balance">
                        News & Events
                    </h1>

                    <div className="flex gap-component-gap-sm">
                        <Select
                            options={categoryOptions}
                            value={category}
                            onChange={(v) =>
                                updateSearchParams({
                                    category: (v as CategoryFilter) ?? 'all',
                                })
                            }
                            placeholder="All Category"
                            triggerClassName="text-isd-secondary text-lg border-b border-secondary h-component-gap-sm flex items-center px-element-gap gap-[12px]"
                        />
                        <Select
                            options={yearOptions}
                            value={year}
                            onChange={(v) =>
                                updateSearchParams({
                                    year: (v as number) ?? 'all',
                                })
                            }
                            placeholder="Year"
                            triggerClassName="text-isd-secondary text-lg border-b border-secondary h-component-gap-sm flex items-center px-element-gap gap-[12px]"
                        />
                    </div>
                </div>

                <div className="flex flex-col divide-y divide-isd-primary-3">
                    {items.map((item) => {
                        const href = `/news/${item.id}`;
                        const img = resolveFirstImage(item.pictures);
                        const formattedDate = formatDate(item.date);
                        if (item.type === 'events') {
                            return (
                                <EventCard
                                    key={item.id}
                                    href={href}
                                    title={item.title}
                                    date={formattedDate}
                                    time={item.evt_time ?? null}
                                    location={item.evt_location ?? null}
                                    imageSrc={img.src}
                                />
                            );
                        }
                        return (
                            <NewsCard
                                key={item.id}
                                href={href}
                                category={
                                    item.type === 'achievements'
                                        ? 'Achievement'
                                        : 'News'
                                }
                                title={item.title}
                                excerpt={stripTags(item.details)}
                                date={formattedDate}
                                imageSrc={img.src}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

function stripTags(text: string) {
    // Remove custom xTx/xETx tags and collapse whitespace for preview
    return text
        .replace(/x+EndTitlex+/gi, '')
        .replace(/xTx\s*/gi, '')
        .replace(/\s*xETx/gi, '')
        .replace(/\n+/g, ' ')
        .trim();
}

function formatDate(iso: string) {
    const d = new Date(iso);
    return d.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}
