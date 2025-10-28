import { ArrowRight, Calendar, Clock, MapPin } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';

export default function EventCard({
    href,
    title,
    date,
    time,
    location,
    image,
}: {
    href: string;
    title: string;
    date: string;
    time?: string | null;
    location?: string | null;
    image: StaticImageData;
}) {
    return (
        <a
            className="flex flex-col lg:flex-row gap-component-gap lg:h-[360px] lg:items-center pb-[24px] lg:pb-[0px]"
            href={href}
        >
            <div className=" hidden lg:block w-[396px] h-[240px] bg-isd-font-2/10">
                <Image
                    src={image}
                    alt={title}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />
            </div>
            <div className="hidden lg:flex  flex-1 flex-col gap-[12px]">
                <p className="text-h2 text-secondary">Event</p>
                <h2 className="text-h2 text-primary">{title}</h2>
                <div className="flex flex-col gap-[4px]">
                    <div className="flex items-center gap-[12px]">
                        <div className="p-[7px] text-isd-primary bg-isd-primary-2 rounded-full">
                            <Calendar size={22} />
                        </div>

                        <p className="text-md text-isd-font-3">{date}</p>
                    </div>
                    {time ? (
                        <div className="flex items-center gap-[12px]">
                            <div className="p-[7px] text-isd-primary bg-isd-primary-2 rounded-full">
                                <Clock size={22} />
                            </div>

                            <p className="text-md text-isd-font-3">{time}</p>
                        </div>
                    ) : null}
                    {location ? (
                        <div className="flex items-center gap-[12px]">
                            <div className="p-[7px] text-isd-primary bg-isd-primary-2 rounded-full">
                                <MapPin size={22} />
                            </div>

                            <p className="text-md text-isd-font-3">
                                {location}
                            </p>
                        </div>
                    ) : null}
                </div>
            </div>

            <div className="flex lg:hidden flex-1 flex-col border-1 border-isd-font-2 rounded-lg">
                <div className="w-full h-[252px] bg-isd-font-2/10">
                    <Image
                        src={image}
                        alt={title}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                </div>

                <div className="px-section-title-gap py-[18px] flex flex-col gap-[12px]">
                    {' '}
                    <div className="flex items-center justify-between">
                        <h2 className="text-md font-bold text-primary  line-clamp-2 lg:line-clamp-none">
                            {title}
                        </h2>
                        <div className="text-primary">
                            <ArrowRight size={14} strokeWidth={3} />
                        </div>
                    </div>
                    <div>
                        <p className="text-sm text-secondary">Event</p>
                        <span className="text-isd-font-2 text-sm">{date}</span>
                    </div>
                </div>
            </div>
        </a>
    );
}
