import HeroImageFile from '@/assets/MPTIE.jpg';

import HeroImage from '@/components/HeroImage';
import EntrepreneurshipBlock from '@/components/blocks/Entrepreneurship';

export default function EntrepreneurshipPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <HeroImage image={HeroImageFile} />
            <EntrepreneurshipBlock />
        </div>
    );
}
