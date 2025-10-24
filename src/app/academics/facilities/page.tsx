import HeroImageFile from '@/assets/facilities-hero.jpg';

import HeroImage from '@/components/HeroImage';
import FacilitiesBlock from '@/components/blocks/academics/FacilitiesBlock';

export default function AcademicsPage() {
    return (
        <div className="min-h-screen flex flex-col items-center">
            <HeroImage image={HeroImageFile} />
            <FacilitiesBlock />
        </div>
    );
}
