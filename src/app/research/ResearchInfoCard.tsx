import Link from 'next/link';

export default function ResearchInfoCard({
    title,
    description,
    supervisor,
}: {
    title: string;
    description: string;
    supervisor: string;
}) {
    // encode supervisor for the `keyword` query param, using pluses for spaces
    const keyword = encodeURIComponent(supervisor).replace(/%20/g, '+');
    const href = `/people/?role=faculty&area=all&tag=regular&keyword=${keyword}`;

    return (
        <div className="self-stretch inline-flex flex-col justify-start items-start">
            <div className="self-stretch justify-start text-primary text-lg  font-bold capitalize">
                {title}
            </div>
            <div className="self-stretch justify-start text-isd-font-2 text-[12px] leading-[18px]">
                {description}
            </div>
            <div className="self-stretch justify-start text-isd-secondary text-[12px] leading-[18px] capitalize">
                <Link href={href} className="underline">
                    {supervisor}
                </Link>
            </div>
        </div>
    );
}
