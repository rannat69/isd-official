'use client';

import NewsReadMoreBlock from '@/components/blocks/news/NewsReadMoreBlock';
import { Suspense } from 'react';

export default function NewsReadMoreButtonPage() {
    return (
        <Suspense fallback="Loading...">
            <NewsReadMoreBlock />;
        </Suspense>
    );
}
