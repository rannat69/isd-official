import FacAdv1 from '@/assets/academics/mphil-in-tie/fac-adv.1.png';

import Image from 'next/image';

export default function FacultyAdvisorsBlock() {
    return (
        <div className="flex flex-col gap-[24px]">
            <h2 className="lg:text-[36px] hidden lg:block text-h2 leading-[36px] font-bold text-isd-primary">
                Faculty & Advisors
            </h2>

            <div className="flex flex-col gap-component-gap-sm">
                <Image src={FacAdv1} alt="Faculty and advisors" />
            </div>
        </div>
    );
}
