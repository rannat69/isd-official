export default function UsefulLinksBlock() {
    const links = [
        {
            title: 'Deviation from Curriculum (UG) Information and Procedures',
            url: 'https://registry.hkust.edu.hk/resource-library/deviation-curriculum-ug',
        },
        {
            title: 'Deviation from Curriculum (UG) Application Form',
            url: 'https://registry.hkust.edu.hk/system/files?file=internal/gr-23.pdf',
        },
        {
            title: 'Minor Program (UG)',
            url: 'https://registry.hkust.edu.hk/resource-library/minor-program-ug',
        },
        {
            title: 'Additional Major (UG) Information and Procedures',
            url: 'https://registry.hkust.edu.hk/resource-library/additional-major-ug',
        },
        {
            title: 'Additional Major (UG) Application Form',
            url: 'https://registry.hkust.edu.hk/system/files/internal/Form%20RR-47.pdf',
        },
        {
            title: 'Credit Transfer',
            url: 'https://registry.hkust.edu.hk/resource-library/courses-taken-elsewhere-during-registration-ug',
        },
        {
            title: 'ISD Design Studio Booking Form',
            url: '/resources/isd_design_studio_booking_form_0.pdf',
        },
    ];

    return (
        <div className=" overflow-clip flex flex-col gap-section-title-gap">
            <h1 className="text-h1 offset-text-background">Useful Links</h1>

            <div className="flex flex-col gap-[24px] text-md">
                <p className="text-isd-font-1">
                    Students may access frequently used documents in the
                    following links: 
                </p>

                <div className="flex flex-col gap-[12px]">
                    {links.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-isd-secondary font-bold hover:underline"
                        >
                            {link.title}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
