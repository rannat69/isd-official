import { Link2, Mail, MapPin, Phone } from 'lucide-react';
import { StaticImageData } from 'next/image';
import Link from 'next/link';
import Image from 'next/image';
import ReadMoreButton from './ReadMoreButton';

interface FacultyCardProps {
    name: string;
    role: string;
    keywords?: string[];
    photo: StaticImageData | string;
    email?: string;
    phone?: string;
    location?: string;
    link?: string;
    details?: string;
    primaryApt?: string;
}

export default function FacultyCard({
    name,
    role,
    keywords = [],
    photo,
    email,
    phone,
    location,
    link,
    details,
    primaryApt,
}: FacultyCardProps) {
    return (
        <div className="flex lg:gap-component-gap-sm gap-6">
            <div className="relative lg:w-[221px] lg:h-[288px] w-28 h-44 flex-shrink-0 overflow-hidden lg:border-l-3 border-isd-primary">
                <Image
                    src={photo}
                    alt={`${name}'s photo`}
                    fill
                    className="object-cover"
                    sizes="221px"
                />
            </div>
            <div className="flex flex-col justify-between flex-1 text-left">
                <div className="flex flex-col gap-footer-gap">
                    <div className="lg:text-h2 text-lg font-bold text-isd-font-1">
                        {name}
                    </div>
                    <div className="lg:text-md text-sm text-isd-secondary">
                        {role}
                    </div>
                    <div className="text-md text-isd-font-3">
                        {primaryApt
                            ? `Primary appointment: ${primaryApt}`
                            : null}
                    </div>
                    <div className="hidden lg:block">
                        <span className="text-md text-isd-font-3 overflow-hidden break-words line-clamp-3">
                            {keywords.join(', ')}
                        </span>
                    </div>
                    <ReadMoreButton
                        name={name}
                        role={role}
                        keywords={keywords}
                        photo={photo}
                        email={email}
                        phone={phone}
                        location={location}
                        link={link}
                        details={details}
                        primaryApt={primaryApt}
                    />
                </div>

                <div className="flex flex-col gap-[24px] before:content-[''] before:bg-isd-primary before:w-[111px] before:h-[3px]">
                    <div className="flex lg:gap-element-gap gap-3 ">
                        {email && (
                            <a
                                href={`mailto:${email}`}
                                className="lg:p-[9px] p-[5px] rounded-full w-fit h-fit bg-isd-primary-2"
                                data-tooltip={email}
                            >
                                <Mail className="text-isd-primary lg:size-[24px] size-[20px]" />
                            </a>
                        )}
                        {phone && (
                            <a
                                href={`tel:${phone}`}
                                className="lg:p-[9px] p-[5px] rounded-full w-fit h-fit bg-isd-primary-2"
                                data-tooltip={phone}
                            >
                                <Phone className="text-isd-primary lg:size-[24px] size-[20px]" />
                            </a>
                        )}
                        {location && (
                            <div
                                className="lg:p-[9px] p-[5px] rounded-full w-fit h-fit bg-isd-primary-2"
                                data-tooltip={location}
                            >
                                <MapPin className="text-isd-primary lg:size-[24px] size-[20px]" />
                            </div>
                        )}
                        {link && (
                            <Link
                                href={link}
                                className="lg:p-[9px] p-[5px] rounded-full w-fit h-fit bg-isd-primary-2"
                            >
                                <Link2 className="text-isd-primary lg:size-[24px] size-[20px]" />
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
