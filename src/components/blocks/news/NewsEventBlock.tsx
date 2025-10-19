'use client';

import NewsCard from '@/components/NewsCard';
import newsEvents from '@/data/news_events.json';

import filterAndSortNews, { News } from '@/lib/newsFilter';
import FilterBlock from './FilterBlock';
import { ChevronsDown } from 'lucide-react';
import { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import news from '@/data/news_events.json';

export default function NewsEventBlock() {
    // only first 5 records

    const [totalRecords, setTotalRecords] = useState(5);

    function loadMore(): void {
        setTotalRecords(totalRecords + 5);
        slicedNews = news?.slice(0, totalRecords);
    }

    const searchParams = useSearchParams();

    const typeParam = searchParams.get('type');
    const yearparam = searchParams.get('year');

    const filteredNews = filterAndSortNews(news as News[], {
        type: typeParam ? typeParam : 'all',
        year: yearparam ? yearparam : 'all',
    });

    let slicedNews = filteredNews?.slice(0, totalRecords);

    return (
        <Suspense fallback="Loading...">
            <div
                className={
                    'container flex flex-col py-section-gap gap-section-title-gap' +
                    ' dot-pattern before:top-[-95px] before:right-[-60px] [--dot-color:var(--isd-primary-2)]'
                }
            >
                <div className="flex justify-between items-center">
                    {' '}
                    <h1 className="text-h1 offset-text-background ">
                        News & Events
                    </h1>{' '}
                    <FilterBlock />
                </div>

                {(() => {
                    const list = slicedNews && slicedNews;

                    if (!list || list.length === 0) {
                        return (
                            <div className="text-isd-font-2">
                                No results found.
                            </div>
                        );
                    }

                    return (
                        <div className="grid grid-cols-1  divide-y-1 divide-isd-primary-3">
                            {list.map((news) => (
                                <div key={news.title}>
                                    <NewsCard
                                        title={news.title ?? ''}
                                        type={(news.type ?? '') as string}
                                        pictures={news.pictures ?? []}
                                        evt_date={news.evt_date ?? undefined}
                                        evt_time={news.evt_time ?? undefined}
                                        evt_location={
                                            news.evt_location ?? undefined
                                        }
                                        date={news.date ?? undefined}
                                        details={news.details ?? undefined}
                                        id={news.id ?? undefined}
                                    />
                                </div>
                            ))}
                        </div>
                    );
                })()}

                {totalRecords < newsEvents.length && (
                    <div className="flex justify-center ">
                        <div
                            className="flex justify-center text-lg text-isd-secondary border-b-1 w-fit "
                            onClick={() => loadMore()}
                        >
                            Load More <ChevronsDown />
                        </div>{' '}
                    </div>
                )}
            </div>
        </Suspense>
    );
}
