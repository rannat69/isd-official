import HeroImageFile from '@/assets/carousel-4.jpg';

import HeroImage from '@/components/HeroImage';
import StudentLifeBlock from '@/components/blocks/StudentLifeBlock';

export default function AcademicsPage() {
    return (
        <div className="min-h-screen flex flex-col items-center">
            <HeroImage image={HeroImageFile} />
            <StudentLifeBlock />
        </div>
    );
}
