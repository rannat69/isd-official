import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function NewsAndEventsBlock() {
    const news = [
        {
            title: 'Nine ISD Faculty Members Top 2% Most-Cited Scientists 2025',
            date: '2025-10-14',
            description:
                'Nine ISD Faculty Members Recognized Among the World’s Top 2% of Most-Cited Scientists for 2025.',
        },
        {
            title: 'Event : [ISD Seminar] From Fragmented Conversations to Structured Signals',
            date: '2025-09-18',
            description:
                'Multilingual Language AI for Sales Compliance, Business Insights, and Contact Center Analytics.',
        },
        {
            title: 'Prof. Qijia SHAO Selected as Emerging Rockstar in IEEE Pervasive Computing magazine',
            date: '2025-07-02',
            description:
                'Prof. Qijia SHAO was selected as an Emerging Rockstar and featured in an interview in IEEE Pervasive Computing magazine (Volume 24, Issue 2, April-June 2025)!',
        },
    ];

    return (
        <div className="container overflow-clip flex flex-col py-section-gap gap-section-title-gap lg:dot-pattern lg:before:top-[-95px] lg:before:right-0 lg:[--dot-color:var(--isd-secondary-1)]">
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
                    {news.map((news, i) => (
                        <div
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
                            <p className="text-md text-isd-font-3 line-clamp-3">
                                {news.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
