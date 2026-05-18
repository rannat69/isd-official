import { ArrowLeft, Calendar, Clock, MapPin } from 'lucide-react';
import Link from 'next/link';
import { resolveImages } from '@/lib/newsImages';
import { type NewsEntry } from '@/lib/newsFilter';
import Carousel from '@/components/Carousel';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import ISDFacultyRecognized51IntExhInv from './ISDFacultyRecognized51IntExhInv';
import HKUSTInnoBayBootcamp2026 from './HKUSTInnoBayBootcamp2026';
import InnovationSummerSchool2026 from './2026InnovationSummerSchool';
import TDTA2526 from './TDTA2526';
import HKUSTLands3MillionGPTX from './HKUSTLands3MillionGPTX';

/*export function generateStaticParams() {
    const items = data as NewsEntry[];
    return items.map((it) => ({ id: String(it.id) }));
}*/

export default async function NewsDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    let item;

    console.log('NewsDetailPage params', await params);

    const data = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL + '/api/news/allNews',
        {
            method: 'POST', // Specify the HTTP method as POST
            headers: {
                'Content-Type': 'application/json', // Indicate the content type of the body
            },
        }
    );

    const resolvedParams = await params;

    const news = await data.json();

    // Sort by date desc
    news.sort((a: NewsEntry, b: NewsEntry) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    const itemTemp = news.find(
        (it: NewsEntry) => String(it.id) === resolvedParams.id
    );

    if (data.ok) {
        item = itemTemp;
    }

    console.log('item', item);

    //const [item, setItem] = useState<NewsEntry>();

    // if (!item) return null;
    let images = resolveImages(item.pictures);

    //remove from images pictures that contain noneImg
    images = images.filter((image) => {
        return !image.src.includes('noneImg');
    });

    const imagesArray: string[] = [];

    for (const picture of item.pictures) {
        console.log('picture', picture);

        const filePath = path.join(process.cwd(), 'public/', picture);

        try {
            // Check if the file exists
            await fs.promises.access(filePath); // Check if file exists

            // Read the image as a Base64 string
            const imageBuffer = await fs.promises.readFile(filePath); // Read the file
            const base64 = imageBuffer.toString('base64'); // Convert to Base64
            const imageUrl = `data:image/jpeg;base64,${base64}`; // Format the Base64 URL

            imagesArray.push(imageUrl); // Add the image URL to the array
        } catch (err) {
            console.error('Error reading file:', err);
            continue; // Skip this image and continue with the next
        }
    }

    //remove from images pictures that come from public for testing purposes
    item.pictures = item.pictures.filter((image) => {
        return !image.includes('pictures');
    });

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
                    <h1 className="text-h1">{item.title}</h1>
                    <div className="w-full relative">
                        {images.length > 0 && (
                            <>
                                {images.length > 1 ? (
                                    <div className="lg:h-[480px] h-[260px]">
                                        <Carousel
                                            images={images}
                                            imagesAlt={[]}
                                        />
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
                            </>
                        )}

                        {images.length === 0 &&
                            (imagesArray.length > 1 ? (
                                <div className="lg:h-[480px] h-[260px]">
                                    <Carousel
                                        images={[]}
                                        imagesAlt={imagesArray}
                                    />
                                </div>
                            ) : (
                                <img
                                    src={imagesArray[0]}
                                    alt={item.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                    }}
                                />
                            ))}
                    </div>
                    <div className="flex flex-col gap-[24px]">
                        {item.type === 'events' && (
                            <div className="flex flex-col gap-[24px]">
                                <h2 className="lg:text-[36px] text-lg leading-9 font-bold text-primary">
                                    Event Info
                                </h2>
                                <div className="flex flex-col gap-[4px]">
                                    <div className="flex items-center gap-[12px]">
                                        <div className="p-[7px] text-isd-primary bg-isd-primary-2 rounded-full">
                                            <Calendar size={22} />
                                        </div>

                                        <p className="lg:text-md text-sm text-isd-font-3">
                                            {item.evt_date}
                                        </p>
                                    </div>
                                    {item.evt_time ? (
                                        <div className="flex items-center gap-[12px]">
                                            <div className="p-[7px] text-isd-primary bg-isd-primary-2 rounded-full">
                                                <Clock size={22} />
                                            </div>

                                            <p className="lg:text-md text-sm text-isd-font-3">
                                                {item.evt_time}
                                            </p>
                                        </div>
                                    ) : null}
                                    {item.evt_location ? (
                                        <div className="flex items-center gap-[12px]">
                                            <div className="p-[7px] text-isd-primary bg-isd-primary-2 rounded-full">
                                                <MapPin size={22} />
                                            </div>

                                            <p className="lg:text-md text-sm text-isd-font-3">
                                                {item.evt_location}
                                            </p>
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        )}
                        {/*Specific case with pictures embedded in the description. Ugly, but it works. */}
                        <div className="flex flex-col gap-component-gap text-md text-isd-font-1">
                            {item.title ===
                            'ISD Faculty Recognized at the 51st International Exhibition of Inventions Geneva' ? (
                                <ISDFacultyRecognized51IntExhInv />
                            ) : item.title ===
                              'HKUST InnoBay Bootcamp 2026: Your Gateway to Innovation and Entrepreneurship' ? (
                                <HKUSTInnoBayBootcamp2026 />
                            ) : item.title ===
                              '2026 Innovation Summer School' ? (
                                <InnovationSummerSchool2026 />
                            ) : item.title ===
                              'Thetos Distinguished Teaching Awards 2025-26: Accolades for Dr. Jac Leung and Prof. Winnie Leung' ? (
                                <TDTA2526 />
                            ) : item.title ===
                              'HKUST ISD Lands HK$3 Million Boost from GPTX to Launch Next-Gen Innovators' ? (
                                <HKUSTLands3MillionGPTX />
                            ) : (
                                renderContent(item.details)
                            )}
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
        const urlRegex = /(https?:\/\/[^\s)]+)/g;

        const paragraphLines = g.paragraph
            ? // split paragraph into logical lines (preserve blank line groups)
              g.paragraph.split(/\n+/).map((line, lineIdx) => {
                  // split keeps URLs as separate tokens
                  const tokens = line.split(urlRegex);
                  return (
                      <span key={lineIdx}>
                          {tokens.map((token, tIdx) => {
                              if (!token) return null;
                              // token will match urlRegex for URLs because split preserves the separators
                              if (urlRegex.test(token)) {
                                  // reset lastIndex in case of global regex reuse
                                  urlRegex.lastIndex = 0;
                                  return (
                                      <a
                                          key={tIdx}
                                          href={token}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="text-primary underline"
                                      >
                                          {token}
                                      </a>
                                  );
                              } else {
                                  return <span key={tIdx}>{token}</span>;
                              }
                          })}
                          <br />
                      </span>
                  );
              })
            : null;

        return (
            <div
                key={idx}
                className="flex flex-col lg:gap-[24px] gap-[12px] lg:text-md text-sm"
            >
                {g.heading ? (
                    <h2 className="lg:text-[36px] text-lg leading-9 font-bold text-primary">
                        {g.heading}
                    </h2>
                ) : null}
                {g.paragraph ? <p>{paragraphLines}</p> : null}
            </div>
        );
    });
}
