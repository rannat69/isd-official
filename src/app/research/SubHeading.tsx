export default function SubHeading({ text }: { text: string }) {
    return (
        <div className="self-stretch inline-flex flex-col justify-start items-start  mb-[0px] lg:mb-component-gap-sm">
            <div className="self-stretch justify-start text-primary text-[20px] lg:text-4xl font-bold uppercase">
                {text}
            </div>
            <div className="w-[180px] h-0 outline-1 outline-isd-secondary" />
        </div>
    );
}
