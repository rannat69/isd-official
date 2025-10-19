import { Calendar, Clock, MapPin } from 'lucide-react';

export default function EventCard({
    href,
    title,
    date,
    time,
    location,
    imageSrc,
}: {
    href: string;
    title: string;
    date: string;
    time?: string | null;
    location?: string | null;
    imageSrc: string;
}) {
    return (
        <a
            className="flex gap-component-gap h-[360px] items-center"
            href={href}
        >
            <div className="w-[396px] h-[240px] bg-isd-font-2/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={imageSrc}
                    alt={title}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />
            </div>
            <div className="flex-1 flex flex-col gap-[12px]">
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
        </a>
    );
}
