'use client';
import React, { useEffect, useState } from 'react';
import HeroImageFile from '@/assets/scholarships-img.png';
import HeroImage from '@/components/HeroImage';
import IDTEduObjBlock from './IDTEduObjBlock';
import IDTCurriculumBlock from './IDTCurriculumBlock';
import IDTAdmissionBlock from './IDTAdmissionBlock';
import Select from '@/components/Select';
import Breadcrumb from '@/components/Breadcrumb';

export default function IDTPage() {
    const [activeMenuId, setActiveMenuId] = useState('edu-obj-menu');
    const menu = [
        {
            title: 'Educational Objectives',
            id: 'edu-obj',
        },
        { title: 'Curriculum', id: 'curriculum' },
        {
            title: 'Admission Requirements',
            id: 'adm-req',
        },
    ];

    useEffect(() => {
        setActiveMenuId('edu-obj');
    }, []);

    const handleMenuClick = (id: string) => {
        setActiveMenuId(id);
    };
    return (
        <>
            <HeroImage image={HeroImageFile} />
            <div className="lg:block hidden dot-pattern before:top-[-115px] before:right-[-10px] [--dot-color:var(--isd-primary-2)]" />

            <div className="container overflow-clip flex flex-col py-section-gap lg:gap-component-gap gap-component-gap-sm">
                {/* FIXME - fix underline for multiple lines text */}
                <div>
                    <div className="gap-element-gap flex flex-col">
                        <Breadcrumb
                            titles={[
                                'Academics',
                                'BSc in Innovation, Design and Technology (IDT)',
                            ]}
                        />
                        <h1 className="text-h1 offset-text-background text-pretty mb-component-gap-sm">
                            BSc in Innovation, Design and Technology (IDT)
                        </h1>
                    </div>

                    <div className="hidden lg:flex w-full items-center justify-start gap-component-gap-sm divide-isd-font-2/30 text-isd-font-2">
                        {menu.map((link) => (
                            <div
                                key={link.id}
                                id={link.id}
                                onClick={() => handleMenuClick(link.id)}
                                className={`text-h2 text-center cursor-pointer py-3 ${
                                    activeMenuId === link.id
                                        ? 'text-isd-secondary border-b-3 border-isd-secondary'
                                        : 'text-isd-font-2'
                                }`}
                            >
                                {link.title}
                            </div>
                        ))}
                    </div>

                    <Select
                        triggerClassName="text-lg text-center cursor-pointer pb-[6px] text-isd-secondary border-b-3 border-isd-secondary flex items-center gap-[10px]"
                        className="lg:hidden"
                        options={menu.map((link) => ({
                            label: link.title,
                            value: link.id,
                        }))}
                        value={activeMenuId}
                        onChange={(value) => handleMenuClick(value as string)}
                        itemClassName="px-[12px] py-[12px] text-xl text-isd-font-2"
                    />
                </div>
                <div className="lg:text-md text-sm">
                    {activeMenuId === 'edu-obj' && <IDTEduObjBlock />}{' '}
                    {activeMenuId === 'curriculum' && <IDTCurriculumBlock />}
                    {activeMenuId === 'adm-req' && <IDTAdmissionBlock />}
                </div>
            </div>
            {activeMenuId === 'edu-obj' && (
                <div className="lg:block hidden dot-pattern before:top-[-65px] before:left-[-10px] [--dot-color:var(--isd-secondary-1)]" />
            )}
            {activeMenuId === 'curriculum' && (
                <div className="lg:block hidden dot-pattern before:top-[-110px] before:left-[-10px] [--dot-color:var(--isd-secondary-1)]" />
            )}
            {activeMenuId === 'adm-req' && (
                <div className="lg:block hidden dot-pattern before:top-[-2050px] before:left-[-10px] [--dot-color:var(--isd-secondary-1)]" />
            )}
        </>
    );
}
