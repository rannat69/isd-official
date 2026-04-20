'use client';
import React, { useState, useEffect } from 'react';
import SummaryBlock from './SummaryBlock';
import EducationalObjectiveBlock from './EducationalObjectiveBlock';
import LearningOutcomeBlock from './LearningOutcomeBlock';
import CurriculumBlock from './CurriculumBlock';
import ResearchAreasBlock from './ResearchAreasBlock';
import AcademicAndIndustrialPartnersBlock from './AcademicAndIndustrialPartnersBlock';
import ApplicationAndFinancialAssistanceBlock from './ApplicationAndFinancialAssistanceBlock';
import ProgramContactBlock from './ProgramContactBlock';
import Select from '@/components/Select';
import Breadcrumb from '@/components/Breadcrumb';
import FacultyAdvisorsBlock from './FacultyAdvisorsBlock';
import {
    LANGUAGE_CHINESE_SIMPLIFIED,
    LANGUAGE_CHINESE_TRADITIONAL,
    LANGUAGE_ENGLISH,
} from '@/app/constants';

export default function MPTIEBlock() {
    const [activeContentId, setActiveContentId] = useState('edu-obj');

    const [language, setLanguage] = useState<string | null>(null);

    useEffect(() => {
        setActiveContentId('edu-obj');
        setLanguage(sessionStorage.getItem('language'));
    }, []);

    const handleMenuClick = (id: string) => {
        setActiveContentId(id);
    };

    const content = [
        {
            title:
                language === LANGUAGE_ENGLISH || !language
                    ? 'Educational Objectives'
                    : language === LANGUAGE_CHINESE_SIMPLIFIED
                      ? '教育目标'
                      : language === LANGUAGE_CHINESE_TRADITIONAL
                        ? '教育目標'
                        : '',
            id: 'edu-obj',
            content: (
                <>
                    <SummaryBlock />

                    <EducationalObjectiveBlock />
                    <div id="curriculum">
                        <CurriculumBlock />
                    </div>
                    <div id="fac-adv">
                        <FacultyAdvisorsBlock />
                    </div>
                    <div id="research">
                        <ResearchAreasBlock />
                    </div>
                    <AcademicAndIndustrialPartnersBlock />
                    <div id="app">
                        <ApplicationAndFinancialAssistanceBlock />
                    </div>
                    <ProgramContactBlock />
                    {/*<LearningOutcomeBlock />*/}
                </>
            ),
        },

        {
            title:
                language === LANGUAGE_ENGLISH || !language
                    ? 'Curriculum'
                    : language === LANGUAGE_CHINESE_SIMPLIFIED
                      ? '课程设置'
                      : language === LANGUAGE_CHINESE_TRADITIONAL
                        ? ''
                        : '',
            id: 'curriculum',
            content: (
                <>
                    <CurriculumBlock />
                </>
            ),
        },
        {
            /*  title: 'Faculty & Advisors',
            id: 'fac-adv',
            content: (
                <>
                    <FacultyAdvisorsBlock />
                </>
            ),*/
        },
        {
            title:
                language === LANGUAGE_ENGLISH || !language
                    ? 'Research & Collaborators'
                    : language === LANGUAGE_CHINESE_SIMPLIFIED
                      ? '研究&合作伙伴'
                      : language === LANGUAGE_CHINESE_TRADITIONAL
                        ? ''
                        : '',
            id: 'research',
            content: (
                <>
                    <FacultyAdvisorsBlock />
                    <ResearchAreasBlock />
                    <AcademicAndIndustrialPartnersBlock />
                </>
            ),
        },
        {
            title:
                language === LANGUAGE_ENGLISH || !language
                    ? 'Application'
                    : language === LANGUAGE_CHINESE_SIMPLIFIED
                      ? '申请'
                      : language === LANGUAGE_CHINESE_TRADITIONAL
                        ? ''
                        : '',
            id: 'app',
            content: (
                <>
                    <ApplicationAndFinancialAssistanceBlock />
                    <ProgramContactBlock />
                </>
            ),
        },
    ];

    return (
        <>
            <div
                className="dot-pattern before:top-[5px] before:right-[10px] [--dot-color:var(--isd-primary-2)] m-1"
                aria-hidden
            />

            <div className="flex relative pb-2 text-nav divide-x-2">
                <p
                    className={`px-2 relative z-50 text-nav hover:underline hover:underline-offset-10 hover:decoration-isd-primary hover:decoration-4 ${
                        !language || language?.includes(LANGUAGE_ENGLISH)
                            ? 'text-isd-primary underline underline-offset-10 decoration-isd-primary decoration-4'
                            : 'text-isd-font-3'
                    }`}
                    onClick={() => {
                        sessionStorage.setItem('language', LANGUAGE_ENGLISH);
                        window.location.reload();
                    }}
                >
                    ENG
                </p>
                <p
                    className={`px-2 relative z-50 text-nav hover:underline hover:underline-offset-10 hover:decoration-isd-primary hover:decoration-4 ${
                        language?.includes(LANGUAGE_CHINESE_SIMPLIFIED)
                            ? 'text-isd-primary underline underline-offset-10 decoration-isd-primary decoration-4'
                            : 'text-isd-font-3'
                    }`}
                    onClick={() => {
                        sessionStorage.setItem(
                            'language',
                            LANGUAGE_CHINESE_SIMPLIFIED
                        );
                        window.location.reload();
                    }}
                >
                    简
                </p>
                {/* <p
                            className={`px-2 relative z-50 text-nav hover:underline hover:underline-offset-10 hover:decoration-isd-primary hover:decoration-4 ${
                                pathname.includes('xxx')
                                    ? 'text-isd-primary underline underline-offset-10 decoration-isd-primary decoration-4'
                                    : 'text-isd-font-3'
                            }`}
                            onClick={() => {
                                 sessionStorage.setItem(
                                    'language',
                                    LANGUAGE_CHINESE_TRADITIONAL
                                );
                                //window.location.reload();
                                alert('Coming soon');
                            }}
                        >
                            繁
                        </p>*/}
            </div>

            <div className="container overflow-y-clip flex flex-col py-section-gap gap-component-gap">
                <div className="flex flex-col gap-component-gap-sm">
                    <div className="gap-element-gap flex flex-col">
                        <Breadcrumb
                            titles={
                                !language || language === LANGUAGE_ENGLISH
                                    ? [
                                          'Academics',
                                          'MPhil in Technology Innovation and Entrepreneurship (TIE)',
                                      ]
                                    : language === LANGUAGE_CHINESE_SIMPLIFIED
                                      ? [
                                            '学术部分',
                                            '技术创新与创业哲学硕士 (TIE)',
                                        ]
                                      : [] // Add a default case if needed
                            }
                        />
                        <h1 className="text-h1 offset-text-background text-pretty mb-component-gap-sm">
                            {(!language || language === LANGUAGE_ENGLISH) &&
                                'MPhil in Technology Innovation \n and Entrepreneurship (TIE)'}

                            {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                                '技术创新与创业哲学硕士 (TIE)'}
                        </h1>
                    </div>
                    <div className="hidden w-full lg:flex items-center gap-component-gap-sm text-isd-font-2">
                        {content.map((link) => (
                            <span
                                key={link.id}
                                onClick={() =>
                                    setActiveContentId(link.id ? link.id : '')
                                }
                                className={`text-h2 h-[60px] flex items-center box-border cursor-pointer ${
                                    activeContentId === link.id
                                        ? 'text-isd-secondary border-b-3 border-isd-secondary'
                                        : 'text-isd-font-2'
                                }`}
                            >
                                {link.title}
                            </span>
                        ))}
                    </div>
                    {/* 
                    <Select
                        triggerClassName="text-lg text-center cursor-pointer pb-[6px] text-isd-secondary border-b-3 border-isd-secondary flex items-center gap-[10px]"
                        className="lg:hidden"
                        options={content.map((link) => ({
                            label: link.title,
                            value: link.id,
                        }))}
                        value={activeContentId}
                        onChange={(value) => handleMenuClick(value as string)}
                        itemClassName="px-[12px] py-[12px] text-xl text-isd-font-2"
                    />*/}
                </div>

                {content.map((section, index) => (
                    <div
                        key={index}
                        id={section.id}
                        className={`flex flex-col gap-component-gap lg:text-md text-sm leading-[28px] text-isd-font-1 ${
                            activeContentId === section.id ? '' : 'hidden'
                        }`}
                    >
                        {section.content}
                    </div>
                ))}
            </div>
        </>
    );
}
