import HeroImageFile from '@/assets/newsEvt/all.png';

import HeroImage from '@/components/HeroImage';
import NewsEventBlock from '@/components/blocks/news/NewsEventBlock';

import { Suspense } from 'react';

export default function PeoplePage() {
    // Prepare filtered lists per role context

    return (
        <div className="min-h-screen flex flex-col ">
            <HeroImage image={HeroImageFile} />
            <Suspense fallback="Loading...">
                <NewsEventBlock  />
            </Suspense>
        </div>
    );
}
