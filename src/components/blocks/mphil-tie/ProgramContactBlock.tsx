export default function ProgramContactBlock() {
    return (
        <div className="flex flex-col items-start gap-[24px]">
            <h2 className="lg:text-[36px] text-h2 leading-[36px] font-bold text-isd-primary">
                Program Contact
            </h2>
            <p>
                For inquiries, please contact the Program Office{' '}
                <a
                    href="mailto:isdtie@ust.hk"
                    className="font-bold text-isd-secondary underline"
                >
                    isdtie@ust.hk
                </a>
                .
            </p>
        </div>
    );
}
