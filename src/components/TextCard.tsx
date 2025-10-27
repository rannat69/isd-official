import Link from 'next/link';
export default function TextCard({
    heading,
    content,
    link,
}: {
    heading: string;
    content: string;
    link?: string | null;
}) {
    return (
        <Link href={link || '#'} className="no-underline">
            <div className="relative overflow-clip aspect-square px-element-gap pt-[60px] lg:aspect-square text-h2 bg-primary hover:bg-isd-secondary transition-colors duration-200 text-white rounded-lg flex flex-col gap-4 divide-y-2 text-center lg:w-full w-[270px] h-[270px] lg:h-full">
                <div className="uppercase pb-[22px]">{heading}</div>
                <div className="font-normal">{content}</div>
            </div>
        </Link>
    );
}
