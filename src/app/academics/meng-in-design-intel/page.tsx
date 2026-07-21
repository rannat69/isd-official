import HeroImageFile from '@/assets/MSTLE.png';

import HeroImage from '@/components/HeroImage';
import MEngDesignIntelBlock from '@/components/blocks/MEngDesignIntelBlock';

export default function AcademicsPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <HeroImage image={HeroImageFile} />
            <div
                className="lg:dot-pattern before:top-[-115px] before:right-0 [--dot-color:var(--isd-primary-2)]"
                // aria-hidden
            />
            <MEngDesignIntelBlock />
        </div>
    );
}
