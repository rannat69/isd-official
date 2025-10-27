import { Calendar, Clock, MapPin } from 'lucide-react';
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

            <div className="flex lg:hidden flex-1 flex-col gap-[12px]">
                <p className="text-h2 text-[22px] leading-[28px] text-secondary">
                    Event
                </p>
                <h2 className="text-h2 text-[22px] leading-[28px] text-primary">
                    {title}
                </h2>
                <div className="flex flex-col gap-[4px]">
                    <div className="flex items-center gap-[12px]">
                        <div className="p-[7px] text-isd-primary bg-isd-primary-2 rounded-full">
                            <Calendar size={22} />
                        </div>

                        <p className="text-md text-isd-font-3 leading-[22px] lg:leading-[26px]">
                            {date}
                        </p>
                    </div>
                    {time ? (
                        <div className="flex items-center gap-[12px]">
                            <div className="p-[7px] text-isd-primary bg-isd-primary-2 rounded-full">
                                <Clock size={22} />
                            </div>

                            <p className="text-md text-isd-font-3 leading-[22px] lg:leading-[26px]">
                                {time}
                            </p>
                        </div>
                    ) : null}
                    {location ? (
                        <div className="flex items-center gap-[12px]">
                            <div className="p-[7px] text-isd-primary bg-isd-primary-2 rounded-full">
                                <MapPin size={22} />
                            </div>

                            <p className="text-md text-isd-font-3 leading-[22px] lg:leading-[26px]">
                                {location}
                            </p>
                        </div>
                    ) : null}
                </div>

                <div className="w-[198px] h-[120px] bg-isd-font-2/10">
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
            </div>
        </a>
    );
}
