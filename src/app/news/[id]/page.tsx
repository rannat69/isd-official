import { ArrowLeft, Calendar, Clock, MapPin } from 'lucide-react';
import Link from 'next/link';
import data from '@/data/news_events.json';
import { resolveImages } from '@/lib/newsImages';
import { type NewsEntry } from '@/lib/newsFilter';
import Carousel from '@/components/Carousel';
import Image from 'next/image';

export function generateStaticParams() {
    const items = data as NewsEntry[];
    return items.map((it) => ({ id: String(it.id) }));
}

export default async function NewsDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const resolvedParams = await params;

    const items = data as NewsEntry[];
    const item = items.find((it) => String(it.id) === resolvedParams.id);
    if (!item) return null;
    const images = resolveImages(item.pictures);

    return (
        <div className="container pt-component-gap-sm pb-section-gap min-h-screen flex flex-col items-stretch">
            <div className="flex flex-col gap-component-gap-sm">
                <Link
                    className="flex gap-[6px] text-md items-center text-isd-primary"
                    href="../"
                >
                    <ArrowLeft size={20} className="text-isd-primary" />
                    Back
                </Link>

                <div
                    className={`flex flex-col ${item.type === 'events' ? 'gap-component-gap-sm' : 'gap-section-title-gap'}`}
                >
                    <h1 className=" text-h1 text-[28px] leading-[34px] 2xl:text-[36px]">
                        {item.title}
                    </h1>
                    <div className="w-full bg-isd-font-2/10 relative">
                        {images.length > 1 ? (
                            <div className="h-[480px]">
                                <Carousel images={images} />
                            </div>
                        ) : (
                            <Image
                                src={images[0]}
                                alt={item.title}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                }}
                            />
                        )}
                    </div>
                    <div className="flex flex-col gap-[24px]">
                        {item.type === 'events' && (
                            <div className="flex flex-col gap-[24px]">
                                <h2 className="text-[28px] 2xl:text-[36px] leading-9 font-bold text-primary">
                                    Event Info
                                </h2>
                                <div className="flex flex-col gap-[4px]">
                                    <div className="flex items-center gap-[12px]">
                                        <div className="p-[7px] text-isd-primary bg-isd-primary-2 rounded-full">
                                            <Calendar size={22} />
                                        </div>

                                        <p className="text-md text-isd-font-3">
                                            {item.evt_date}
                                        </p>
                                    </div>
                                    {item.evt_time ? (
                                        <div className="flex items-center gap-[12px]">
                                            <div className="p-[7px] text-isd-primary bg-isd-primary-2 rounded-full">
                                                <Clock size={22} />
                                            </div>

                                            <p className="text-md text-isd-font-3">
                                                {item.evt_time}
                                            </p>
                                        </div>
                                    ) : null}
                                    {item.evt_location ? (
                                        <div className="flex items-center gap-[12px]">
                                            <div className="p-[7px] text-isd-primary bg-isd-primary-2 rounded-full">
                                                <MapPin size={22} />
                                            </div>

                                            <p className="text-md text-isd-font-3">
                                                {item.evt_location}
                                            </p>
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        )}
                        <div className="flex flex-col gap-component-gap text-sm 2xl:text-md leading-[21px] 2xl:leading-[24px] text-isd-font-1">
                            {renderContent(item.details)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Interpret markdown-style headings (# ...) and paragraphs
function renderContent(text: string) {
    const parts: Array<{ type: 'heading' | 'paragraph'; content: string }> = [];
    const lines = text.split(/\r?\n/);
    let buffer: string[] = [];
    const flushParagraph = () => {
        const content = buffer.join('\n').trim();
        buffer = [];
        if (content) parts.push({ type: 'paragraph', content });
    };
    for (const line of lines) {
        const headingMatch = /^\s*#\s+(.*)$/.exec(line);
        if (headingMatch) {
            flushParagraph();
            const content = headingMatch[1].trim();
            if (content) parts.push({ type: 'heading', content });
        } else {
            buffer.push(line);
        }
    }
    flushParagraph();

    // Group headings with the immediate following paragraph to ensure a 24px gap between them
    const groups: Array<{ heading?: string; paragraph?: string }> = [];
    for (let i = 0; i < parts.length; i++) {
        const current = parts[i];
        if (current.type === 'heading') {
            const next = parts[i + 1];
            if (next && next.type === 'paragraph') {
                groups.push({
                    heading: current.content,
                    paragraph: next.content,
                });
                i++; // skip the paragraph we've just paired
            } else {
                groups.push({ heading: current.content });
            }
        } else {
            groups.push({ paragraph: current.content });
        }
    }

    return groups.map((g, idx) => {
        const paragraphLines = g.paragraph
            ? g.paragraph.split(/\n+/).map((l, i) => (
                  <span key={i}>
                      {l}
                      <br />
                  </span>
              ))
            : null;
        return (
            <div key={idx} className="flex flex-col gap-[24px]">
                {g.heading ? (
                    <h1 className="text-[28px] 2xl:text-[36px] leading-9 font-bold text-primary ">
                        {g.heading}
                    </h1>
                ) : null}
                {g.paragraph ? <p>{paragraphLines}</p> : null}
            </div>
        );
    });
}
