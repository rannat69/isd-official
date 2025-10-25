import HeroImageFile from '@/assets/academics-hero.jpg';

import HeroImage from '@/components/HeroImage';
import ProgramBlock from '@/components/blocks/ProgramsBlock';
import ProgramBlockMobile from '@/components/blocks/ProgramsBlockMobile';
import ResourceBlock from '@/components/blocks/ResourceBlock';
export default function AcademicsPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <HeroImage image={HeroImageFile} />
            <ProgramBlock />
            <ProgramBlockMobile />
            <ResourceBlock />
        </div>
    );
}
