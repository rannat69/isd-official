import HeroImageFile from '@/assets/people/all.jpg';
import HeroImagePeople from '@/components/HeroImagePeople';
import { Suspense } from 'react';
import FilterBlock from '@/components/blocks/people/FilterBlock';
import PeopleContent from './people-content';

// Loading skeleton component for people content
function PeopleContentSkeleton() {
    return (
        <>
            <div className="animate-pulse">
                <div className="dot-pattern before:top-[-115px] before:right-0 [--dot-color:var(--isd-secondary-1)]" />
                <div className="container py-section-gap">
                    <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-component-gap">
                        {[...Array(8)].map((_, i) => (
                            <div
                                key={i}
                                className="h-64 bg-gray-200 rounded"
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default function PeoplePage() {
    return (
        <div className="min-h-screen flex flex-col">
            <HeroImagePeople image={HeroImageFile} />

            {/* 
              Wrap all client components in a Suspense boundary in order for useSearchParams() to work correctly
            */}
            <Suspense fallback={<PeopleContentSkeleton />}>
                <FilterBlock />
                <PeopleContent />
            </Suspense>
        </div>
    );
}
