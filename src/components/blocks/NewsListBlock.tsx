'use client';

import { useState } from 'react';
import data from '@/data/news_events.json';
import {
    filterNews,
    sortNews,
    type NewsEntry,
    type CategoryFilter,
} from '@/lib/newsFilter';
import { resolveFirstImage } from '@/lib/newsImages';
import NewsCard from '@/components/NewsCard';
import EventCard from '@/components/EventCard';
import Select, { type Option } from '@/components/Select';

export default function NewsListBlock() {
    const allItems = data as NewsEntry[];
    const [category, setCategory] = useState<CategoryFilter>('All');
    const [year, setYear] = useState<number | 'All'>('All');
    const items = sortNews(
        filterNews(allItems, {
            category: category,
            year: year,
        })
    );

    const categoryOptions: Option[] = [
        { value: 'All', label: 'All Category' },
        { value: 'News', label: 'News' },
        { value: 'Events', label: 'Events' },
        { value: 'Achievements', label: 'Achievements' },
    ];
    const yearOptions: Option[] = [
        { value: 'All', label: 'Year' },
        { value: 2025, label: '2025' },
        { value: 2024, label: '2024' },
        { value: 2023, label: '2023' },
        { value: 2022, label: '2022' },
        { value: 2021, label: '2021' },
    ];
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
                                setCategory((v as CategoryFilter) ?? 'All')
                            }
                            placeholder="All Category"
                            triggerClassName="text-isd-secondary text-lg border-b border-secondary h-component-gap-sm flex items-center px-element-gap gap-[12px]"
                        />
                        <Select
                            options={yearOptions}
                            value={year}
                            onChange={(v) =>
                                setYear((v as number | 'All') ?? 'All')
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
                        if (item.type === 'Events') {
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
                                    item.type === 'Achievements'
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
