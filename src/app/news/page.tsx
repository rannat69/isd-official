import HeroImageFile from '@/assets/MPTIE.jpg';

import HeroImage from '@/components/HeroImage';
import NewsListBlock from '@/components/blocks/NewsListBlock';
import { Suspense } from 'react';

export default function NewsPage() {
    return (
        <div className="min-h-screen flex flex-col items-stretch">
            <Suspense fallback={<div>Loading...</div>}>
                <HeroImage image={HeroImageFile} />
                <NewsListBlock />
            </Suspense>
        </div>
    );
}
