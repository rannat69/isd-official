import HeroImageFile from '@/assets/internship-hero.jpg';

import HeroImage from '@/components/HeroImage';
import InternshipBlock from '@/components/blocks/academics/InternshipBlock';

export default function AcademicsPage() {
    return (
        <div className="min-h-screen flex flex-col items-center">
            <HeroImage image={HeroImageFile} />
            <InternshipBlock />
        </div>
    );
}
