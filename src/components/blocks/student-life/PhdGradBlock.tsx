import ConnieLee from '@/assets/studentlife/phd-grad/connie-lee.jpg';
import YiChen from '@/assets/studentlife/phd-grad/yi-chen.png';
import Select from '@/components/Select';
import Image from 'next/image';
import { useState } from 'react';

const studentPhd = [
    {
        title: 'Connie K.W. LEE',
        post: 'Associate Professor of Practice, School of Innovation, The University of Hong Kong\n ',
        phd: '2026, Supervised by Mitch Li',
        image: ConnieLee,
        link: 'https://i-school.hku.hk/people/lee-connie-k-w/',
    },
    {
        title: 'Yi CHEN',
        post: 'Assistant Professor, School of Mechanical and Electrical Engineering and Control Engineering, Shenzhen University\n ',
        phd: '2025, Supervised by Mitch Li',
        image: YiChen,
        link: 'https://cmce.szu.edu.cn/info/1683/8765.htm',
    },
    
];

const years = [
    { value: 'all', label: 'All Years' },
    ...Array.from(new Set(studentPhd.map((s) => s.phd.match(/^\d{4}/)?.[0]).filter(Boolean)))
        .sort((a, b) => Number(b) - Number(a))
        .map((y) => ({ value: y!, label: y! })),
];

export default function PhdGradBlock() {
    const [year, setYear] = useState<string>('all');
    const [studentPhdList, setStudentPhdList] = useState(studentPhd);

    function handleChangeYear(year: string | number | null) {
        if (year) {
            setYear(String(year));

            if (year != 'all') {
                setStudentPhdList(
                    studentPhd.filter((s) => s.phd.includes(String(year)))
                );
            } else {
                setStudentPhdList(studentPhd);
            }
        }
    }

    return (
        <div className="overflow-clip flex flex-col gap-section-title-gap">
            <h1 className="lg:block hidden text-h1 offset-text-background">
                PhD Graduates
            </h1>
            <div className="flex items-center">
                <div className="text-black font-bold text-md">Grad Year</div>

                <Select
                    id="year-select"
                    options={years}
                    value={year}
                    onChange={(v) => {
                        handleChangeYear(v);
                    }}
                    placeholder="Filter by year"
                    className="min-w-[180px]"
                    triggerClassName={`w-full flex items-center justify-between px-[12px] py-[6px] h-fit lg:h-component-gap-sm bg-white focus:outline-none ${
                        year === 'all'
                            ? 'text-isd-font-3'
                            : 'font-bold text-isd-primary'
                    }`}
                    itemClassName="px-[12px]"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {studentPhdList.map((s, index) => (
                    <div
                        key={index}
                        className="flex flex-col bg-isd-primary-2 rounded-lg p-2
             hover:bg-isd-primary-3 transition-colors duration-1000"
                    >
                        <a href={s.link}>
                            <Image
                                src={s.image}
                                alt="Student"
                                className="w-[200px] h-[200px] object-cover max-w-full rounded-lg"
                            />

                            <div className="flex flex-col gap-[24px]">
                                <h2 className="text-isd-primary lg:text-[36px] lg:leading-[36px] text-h2 font-bold">
                                    {s.title}
                                </h2>

                                <div className="flex flex-col gap-section-title-gap">
                                    <div className="flex flex-col gap-[12px]">
                                        <p className="text-black font-bold text-md">
                                            {s.post}{' '}
                                        </p>
                                        <p className="text-black font-bold text-md italic">
                                            PhD {s.phd}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
