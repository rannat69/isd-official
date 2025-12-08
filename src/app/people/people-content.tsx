'use client';

import FacultyBlock from '@/components/blocks/people/FacultyBlock';
import StaffBlock from '@/components/blocks/people/StaffBlock';

import { filterAndSortPeople, Person } from '@/lib/peopleFilter';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

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

    const [staffList, setStaffList] = useState<Person[]>([]);
    const [facultyList, setFacultyList] = useState<Person[]>([]);
    // prepare an openName derived from keyword for opening a matching faculty card
    // the URL may use pluses for spaces (e.g. Qian+ZHANG); replace them with spaces
    const openName = keyword ? keyword.replace(/\+/g, ' ') : '';
    // if a returnTo was provided in the query, decode it and forward to the block
    const openReturnTo = searchParams.get('returnTo')
        ? decodeURIComponent(searchParams.get('returnTo') || '')
        : '';

    // get staff from API
    useEffect(() => {
        const fetchStaff = async () => {
            let data = await fetch('api/people/allStaff', {
                method: 'POST', // Specify the HTTP method as POST
                headers: {
                    'Content-Type': 'application/json', // Indicate the content type of the body
                },
                body: JSON.stringify(''), // Convert the JavaScript object to a JSON string
            });

            const staff = await data.json();

            if (data.ok) {
                const staffListTemp =
                    role === 'faculty'
                        ? []
                        : filterAndSortPeople(staff as Person[], {
                              keyword,
                              area,
                              context: 'staff',
                              tag,
                          });

                setStaffList(staffListTemp);
            }
        };

        fetchStaff();

        const fetchFaculty = async () => {
            let data = await fetch('api/people/allFaculty', {
                method: 'POST', // Specify the HTTP method as POST
                headers: {
                    'Content-Type': 'application/json', // Indicate the content type of the body
                },
                body: JSON.stringify(''), // Convert the JavaScript object to a JSON string
            });

            const faculty = await data.json();

            console.log('faculty', faculty);

            if (data.ok) {
                const facultyListTemp =
                    role === 'staff'
                        ? []
                        : filterAndSortPeople(faculty as Person[], {
                              keyword,
                              area,
                              context: 'faculty',
                              tag,
                          });

                console.log('facultyListTemp', facultyListTemp);

                setFacultyList(facultyListTemp);
            }
        };

        fetchFaculty();
    }, []);

    return (
        <>
            {/* Render blocks according to selected role */}
            {(role === 'all' || role === 'faculty') && (
                <>
                    <div className="lg:dot-pattern before:top-[-115px] before:right-0 [--dot-color:var(--isd-secondary-1)]" />
                    <FacultyBlock
                        people={facultyList}
                        openName={openName}
                        openReturnTo={openReturnTo}
                    />
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
