'use client';

import React, { useEffect, useState } from 'react';
import Select from '../../Select';
import { useRouter, useSearchParams } from 'next/navigation';

export default function FilterBlock() {
    const roles = [
        { value: 'faculty', label: 'Faculty' },
        { value: 'staff', label: 'Staff' },
    ];

    const areas = [
        { value: 'all', label: 'All Areas' },
        { value: 'health_tech', label: 'Health-Tech' },
        { value: 'sustainable_tech', label: 'Sustainable-Tech' },
        { value: 'design_tech', label: 'Design-Tech' },
        { value: 'marine_tech', label: 'Marine-Tech' },
    ];

    const tags = [
        { value: 'regular', label: 'Regular' },
        { value: 'joint_appointment', label: 'Joint Appointment' },
        { value: 'teaching_track', label: 'Teaching Track' },
        { value: 'research_track', label: 'Research Track' },
        { value: 'adjunct', label: 'Adjunct' },
        { value: 'emeritus', label: 'Emeritus' },
        { value: 'affiliate', label: 'Affiliate' },
    ];

    const router = useRouter();
    const searchParams = useSearchParams();

    // initialize from URL so the UI reflects the current page state
    // (defaults - role: faculty, area: all, keyword: '', tag: '')
    const initialRole = searchParams?.get('role') ?? 'faculty';
    const initialArea = searchParams?.get('area') ?? 'all';
    const initialKeyword = searchParams?.get('keyword') ?? '';
    const initialTag = searchParams?.get('tag') ?? '';

    const [role, setRole] = useState<string>(initialRole);
    const [area, setArea] = useState<string>(initialArea);
    const [keyword, setKeyword] = useState<string>(initialKeyword);
    const [tag, setTag] = useState<string>(initialTag);
    const [displayTags, setDisplayTags] = useState<string>('all');

    const paramString = searchParams?.toString() ?? '';

    useEffect(() => {
        // keep state synced if the user navigates with back/forward
        setRole(searchParams?.get('role') ?? 'faculty');
        setArea(searchParams?.get('area') ?? 'all');
        setKeyword(searchParams?.get('keyword') ?? '');
        setTag(searchParams?.get('tag') ?? 'regular');

        if (
            searchParams?.get('area') != 'all' &&
            searchParams?.get('role') === 'faculty'
        ) {
            setDisplayTags('regular');
        } else {
            if (searchParams?.get('role') === 'faculty') {
                setDisplayTags('all');
            } else {
                setDisplayTags('none');
            }
        }
    }, [paramString, searchParams]);

    function applyFilters(newParams?: {
        role?: string;
        area?: string;
        keyword?: string;
        tag?: string;
    }) {
        const params = new URLSearchParams(searchParams?.toString() ?? '');
        if (newParams?.role !== undefined) params.set('role', newParams.role);
        if (newParams?.area !== undefined) params.set('area', newParams.area);
        if (newParams?.keyword !== undefined) {
            if (newParams.keyword === '') params.delete('keyword');
            else params.set('keyword', newParams.keyword);
        }

        if (newParams?.tag !== undefined) params.set('tag', newParams.tag);

        // push so page updates and server component will re-render
        const qs = params.toString();

        // if  tag, add #faculty at the end

        router.push(`/people${qs ? `?${qs}` : ''}#select`);
    }

    function handleSearch() {
        applyFilters({ role, area, keyword, tag });
    }

    function handleClear() {
        setRole('faculty');
        setArea('all');
        setKeyword('');
        applyFilters({
            role: 'faculty',
            area: 'all',
            keyword: '',
            tag: '',
        });
    }

    return (
        <div className="bg-isd-primary-2">
            {/* <div
                id="select"
                className="absolute top-[50%] left-0 w-full h-0 invisible"
            ></div> */}
            <div className="container w-full flex pt-section-gap pb-component-gap-sm gap-component-gap-sm items-center">
                <div className="flex gap-component-gap-sm ">
                    <Select
                        id="role-select"
                        options={roles}
                        value={role}
                        onChange={(v) => {
                            const val = String(v);
                            setRole(val);
                            applyFilters({ role: val, area, keyword, tag });
                        }}
                        className="min-w-[130px]"
                        triggerClassName="w-full flex items-center justify-between px-[12px] h-component-gap-sm bg-white focus:outline-none font-bold text-isd-primary"
                        itemClassName="px-[12px]"
                    />

                    {role === 'staff' ? null : (
                        <Select
                            id="area-select"
                            options={areas}
                            value={area}
                            onChange={(v) => {
                                const val = String(v);
                                setArea(val);

                                if (tag != '' && tag != 'regular') {
                                    setDisplayTags('regular');
                                    setTag('');
                                    applyFilters({
                                        role,
                                        area: val,
                                        keyword,
                                        tag: '',
                                    });
                                } else {
                                    applyFilters({
                                        role,
                                        area: val,
                                        keyword,
                                        tag,
                                    });
                                }
                            }}
                            placeholder="Filter by area"
                            className="min-w-[180px]"
                            triggerClassName={`w-full flex items-center justify-between px-[12px] h-component-gap-sm bg-white focus:outline-none ${
                                area === 'all'
                                    ? 'text-isd-font-3'
                                    : 'font-bold text-isd-primary'
                            }`}
                            itemClassName="px-[12px]"
                        />
                    )}
                </div>

                <div className="flex gap-[24px] flex-1">
                    <input
                        type="text"
                        placeholder="Keyword Search"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') handleSearch();
                        }}
                        className="bg-white px-[12px] flex-1 h-component-gap-sm text-isd-font-1 placeholder:text-isd-font-3 focus:outline-none"
                    />
                    <button
                        onClick={handleSearch}
                        className="bg-isd-primary w-section-gap h-component-gap-sm text-white"
                    >
                        Search
                    </button>
                    <button
                        onClick={handleClear}
                        className="bg-white w-section-gap h-component-gap-sm text-isd-primary"
                    >
                        Clear
                    </button>
                </div>
            </div>

            {displayTags === 'none' ? null : (
                <div className="flex justify-center gap-component-gap-sm mb-component-gap-sm h-fit">
                    {tags.map((leTag) => (
                        <button
                            key={leTag.value}
                            onClick={() => {
                                if (tag !== leTag.value) {
                                    setTag(leTag.value);
                                    applyFilters({
                                        role,
                                        area,
                                        keyword,
                                        tag: leTag.value,
                                    });
                                } else {
                                    setTag('');
                                    applyFilters({
                                        role,
                                        area,
                                        keyword,
                                        tag: '',
                                    });
                                }
                            }}
                            className={`text-sm py-[10px]  border rounded-full px-element-gap ${
                                tag === leTag.value
                                    ? 'text-isd-primary font-bold border-2'
                                    : 'text-isd-font-3'
                            } ${
                                displayTags === 'none'
                                    ? 'invisible'
                                    : displayTags === 'regular' &&
                                        leTag.value !== 'regular'
                                      ? 'hidden'
                                      : ''
                            }`}
                        >
                            {leTag.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
