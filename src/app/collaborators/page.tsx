import HeroImageFile from '@/assets/collaborators-hero.jpg';

import HeroImage from '@/components/HeroImage';
import CollaboratorsBlock from '@/components/blocks/CollaboratorsBlock';

export default function AcademicsPage() {
    return (
        <div className="min-h-screen flex flex-col items-center">
            <HeroImage image={HeroImageFile} />
            <CollaboratorsBlock />
        </div>
    );
}
