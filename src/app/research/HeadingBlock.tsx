export default function HeadingBlock() {
    return (
        <>
            <div
                className="hidden lg:block w-full overflow-clip pt-section-gap gap-section-title-gap dot-pattern before:top-[-95px] 
        before:right-[-10px] [--dot-color:var(--isd-primary-2)]"
            >
                <h1 className="text-h2 lg:text-h1 offset-text-background uppercase container">
                    Research Area
                </h1>
            </div>

            <div className=" block lg:hidden w-full overflow-clip pt-component-gap gap-section-title-gap ">
                <h1 className="text-h2 lg:text-h1 offset-text-background uppercase container">
                    Research Area
                </h1>
            </div>
        </>
    );
}
