'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { NewsEntry } from '@/lib/newsFilter';

import { useEffect, useState } from 'react';

export default function NewsAndEventsBlock() {
    const [newsList, setNewsList] = useState<NewsEntry[]>([]);

    // const news = [
    //     {
    //         title: 'Nine ISD Faculty Members Top 2% Most-Cited Scientists 2025',
    //         date: '2025-10-14',
    //         description:
    //             'Nine ISD Faculty Members Recognized Among the World’s Top 2% of Most-Cited Scientists for 2025.',
    //     },
    //     {
    //         title: 'Event : [ISD Seminar] From Fragmented Conversations to Structured Signals',
    //         date: '2025-09-18',
    //         description:
    //             'Multilingual Language AI for Sales Compliance, Business Insights, and Contact Center Analytics.',
    //     },
    //     {
    //         title: 'Prof. Qijia SHAO Selected as Emerging Rockstar in IEEE Pervasive Computing magazine',
    //         date: '2025-07-02',
    //         description:
    //             'Prof. Qijia SHAO was selected as an Emerging Rockstar and featured in an interview in IEEE Pervasive Computing magazine (Volume 24, Issue 2, April-June 2025)!',
    //     },
    // ];

    // Compute basePath for links in client: prefer NEXT_PUBLIC_BASE_PATH,
    // then CI build flag, then detect from window.location if possible.
    const buildBasePath =
        process.env.NEXT_PUBLIC_BASE_PATH ??
        (process.env.CI === 'true' ? '/isd-official' : '');
    let clientBasePath = buildBasePath;
    if (!clientBasePath && typeof window !== 'undefined') {
        const first = window.location.pathname.split('/').filter(Boolean)[0];
        if (first === 'isd-official') clientBasePath = '/isd-official';
    }

    useEffect(() => {
        const fetchNews = async () => {
            const data = await fetch('/api/news/allNews', {
                method: 'POST', // Specify the HTTP method as POST
                headers: {
                    'Content-Type': 'application/json', // Indicate the content type of the body
                },
                body: JSON.stringify(''), // Convert the JavaScript object to a JSON string
            });

            let news = await data.json();

            // Sort by date desc
            news.sort((a: NewsEntry, b: NewsEntry) => {
                return new Date(b.date).getTime() - new Date(a.date).getTime();
            });

            news = news.slice(0, 3);
            console.log('news', news);

            if (data.ok) {
                setNewsList(news);
            }
        };

        fetchNews();
    }, []);

    function stripTags(text: string) {
        // Remove custom xTx/xETx tags and collapse whitespace for preview
        return text
            .replace(/<\/?strong>/gi, '') // Removes both <strong> and </strong>
            .replace(/x+EndTitlex+/gi, '')
            .replace(/xTx\s*/gi, '')
            .replace(/\s*xETx/gi, '')
            .replace(/\n+/g, ' ')
            .trim();
    }

    return (
        <div className="container overflow-clip flex flex-col py-section-gap gap-section-title-gap dot-pattern before:top-[-95px] before:right-0 [--dot-color:var(--isd-secondary-1)]">
            <h1 className="text-h1 offset-text-background uppercase">
                NEWS & EVENTS
            </h1>

            <div className="flex flex-col gap-[12px]">
                <Link
                    href="/news"
                    className="text-sm text-isd-primary font-bold self-end flex gap-[6px]"
                >
                    View all
                    <ArrowRight size={20} strokeWidth={3} />
                </Link>

                <div className="flex lg:flex-row flex-col lg:gap-component-gap-sm gap-component-gap">
                    {newsList.map((news, i) => (
                        <a
                            href={`${clientBasePath}/news/${news.id}`}
                            className={
                                'flex flex-col text-black rounded-sm p-element-gap pt-component-gap-sm gap-[12px] ' +
                                (i % 2
                                    ? 'bg-isd-secondary-1 text-isd-secondary'
                                    : 'bg-isd-primary-2 text-isd-primary') +
                                ' flex-1 min-h-[200px] '
                            }
                            key={i}
                        >
                            <h2 className="text-h2 font-bold line-clamp-3">
                                {news.title}
                            </h2>
                            <span className="lg:text-lg text-md leading-[26px]">
                                {news.date}
                            </span>
                            <div className="text-md text-start text-isd-font-3 line-clamp-3">
                                {news.details && stripTags(news.details.replace('# ', ''))}
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
