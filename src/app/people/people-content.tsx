'use client';

import FacultyBlock from '@/components/blocks/people/FacultyBlock';
import StaffBlock from '@/components/blocks/people/StaffBlock';
import faculty from '@/data/faculty.json';
import staff from '@/data/staff.json';
import { filterAndSortPeople, Person } from '@/lib/peopleFilter';
import { useSearchParams } from 'next/navigation';

/**
 * Client component that uses searchParams
 * This component must be used within a Suspense boundary in the parent
 */
export default function PeopleContent() {
    const searchParams = useSearchParams();

    const role = searchParams.get('role') || 'all';
    const area = searchParams.get('area') || 'all';
    const keyword = searchParams.get('keyword') || '';
    const tag = searchParams.get('tag') || '';

    // Prepare filtered lists per role context
    const facultyList =
        role === 'staff'
            ? []
            : filterAndSortPeople(faculty as Person[], {
                  keyword,
                  area,
                  context: 'faculty',
                  tag,
              });

    const staffList =
        role === 'faculty'
            ? []
            : filterAndSortPeople(staff as Person[], {
                  keyword,
                  area,
                  context: 'staff',
                  tag,
              });

    return (
        <>
            {/* Render blocks according to selected role */}
            {(role === 'all' || role === 'faculty') && (
                <>
                    <div className="lg:dot-pattern before:top-[-115px] before:right-0 [--dot-color:var(--isd-secondary-1)]" />
                    <FacultyBlock people={facultyList} />
                </>
            )}
            {/*(role === 'all' || role === 'affiliate') && (
                <FacultyBlock type="affiliate" people={affiliateList} />
            )*/}
            {(role === 'all' || role === 'staff') && (
                <>
                    <div className="lg:dot-pattern before:top-[-45px] before:right-0 [--dot-color:var(--isd-secondary-1)]" />
                    <StaffBlock people={staffList} />
                </>
            )}
        </>
    );
}
