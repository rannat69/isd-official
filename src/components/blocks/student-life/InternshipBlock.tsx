import { StaticImageData } from 'next/image';
import Intern01 from '@/assets/studentlife/intern-1.jpg';
import Intern02 from '@/assets/studentlife/intern-2.jpg';
import Intern03 from '@/assets/studentlife/intern-3.jpg';
import Intern04 from '@/assets/studentlife/intern-4.jpg';
import Intern05 from '@/assets/studentlife/intern-5.jpg';
import Intern06 from '@/assets/studentlife/intern-6.jpg';
import Intern07 from '@/assets/studentlife/intern-7.jpg';
import Intern08 from '@/assets/studentlife/intern-8.jpg';
import Intern09 from '@/assets/studentlife/intern-9.jpg';
import Intern10 from '@/assets/studentlife/intern-10.jpg';
import Intern11 from '@/assets/studentlife/intern-11.jpg';
import Intern12 from '@/assets/studentlife/intern-12.jpg';
import Intern13 from '@/assets/studentlife/intern-13.jpg';

import InternshipReadMore from './InternshipReadMore';
import { Fragment, useState } from 'react';
import ImageCard from '@/components/ImageCard';
interface Internship {
    name: string;
    program: string;
    company: string;
    period: string;
    description: string;
    moreInfo: string;
    pictures: StaticImageData[];
}

const internships: Internship[] = [
    {
        name: 'HU Ruyu, Lethe',
        program: 'BSc ISD student',
        company: 'atomSTEM',
        period: 'Dec 2020 - Feb 2021',
        description:
            'Designed Python and robotics courses for primary school students.',
        moreInfo:
            "It is totally a wonderful trip to design a course as instructor instead of student, and take care of students' feeling and interests while keeping the course efficient. During this internship, I have learnt about course designing and organizing. What's more, making friends with colleagues and collaborate with each other is such a good experience that it was so hard to say goodbye.",
        pictures: [Intern01, Intern02],
    },
    {
        name: 'TANG Jin',
        program: 'BSc ISD student',
        company: 'Xiaomi Communications Co. Ltd.',
        period: 'Feb 2020 - Aug 2020',
        description:
            'Product manager designing commercial monitors and cooperating with ID, GTM and QC teams.',
        moreInfo:
            "I'm in gap period and having my internship in BeiJin, as a product manager in Xiaomi. My main job is to design the commercial monitor and cooperate with many different teams like ID, GTM and QC at the same time... It's lucky that I have half year to go thought a complete commercial project and watch the product finally go into the market! During the whole intern, I was able to use the knowledge I leant in ISD to assist my work and apply them in the product! I feel really meaningful by watching a product coming out from 0 to 1. Overall speaking, this is a valuable opportunity for me and thank for the whole team I worked with!",
        pictures: [Intern03, Intern04],
    },
    {
        name: 'WONG Tat Hang',
        program: 'BSc ISD student',
        company: 'Swimtelligence Limited',
        period: 'Aug 2019 - May 2021',
        description:
            'Developed drowning detection wearable device for swimmers, registered company and secured funding.',
        moreInfo:
            'Through connections made in ISD courses, I was eventually connected with a group of spirited CUHK medical students hoping to develop a drowning detection wearable device for swimmers. We got along together well and decided to register a company to work on the idea. To get funding for our idea, we developed physical working prototypes for our idea and pitched our idea to startup funds. Our company was eventually funded by the Science Park STEP program and was granted 100K HKD throughout a 1-year period. The funding enabled us to pursue the idea further and refine our product and idea. Although eventually we disbanded the company, this experience taught me the ins and outs of launching a startup and I am excited to give it another try!',
        pictures: [Intern05, Intern06],
    },
    {
        name: 'Mark Anthony FUNG',
        program: 'BSc ISD student',
        company: 'Neurotech, Hong Kong',
        period: 'July 2020 - Present',
        description:
            'Designed testing rigs for animals and molds for casting medical silicone parts.',
        moreInfo:
            'During my summer break, I was very fortunate to be given the opportunity to join Neurotech – a biotechnology company specializing in active medical implants – as an intern. My job is to design testing rigs for animals and also design molds for casting medical silicone parts. These tasks were significant tasks for the project, so this made me feel like I am part of the team and I am directly contributing to the progress of the project (unlike the typical interns I heard of which only does some trivial tasks). I am able to utilize my skills and knowledge in areas I have never thought of, like in the biomedical field. I was also able to experience going to laboratories in the HKU Medical School to do some tests and work with the professors and doctors there! Overall, I learned and experienced a lot and I am very thankful to the people that gave me this opportunity.',
        pictures: [Intern07, Intern08],
    },
    {
        name: 'Jiakun ZHENG, Jack',
        program: 'BSc ISD student',
        company: 'ePropulsion',
        period: 'June - September 2020',
        description:
            'Motor driver software engineer working on electronic power systems for boats.',
        moreInfo:
            'I worked for ePropulsion, which is a company manufacturing electronic power system for boats, from June 11 to Sept 3. During the three-month internship, I worked as a motor driver software engineer. I found that motor driver is a complicated system which requires broad knowledge from not only electronic software and hardware, but also electromagnetics, mechanics, etc. The comprehensive fields of knowledge and systematic way of thinking I learned from ISD helps me a lot to solve engineering problems in my internship work experience.',
        pictures: [Intern09, Intern10],
    },
    {
        name: 'Mashiat LAMISA',
        program: 'BSc ISD student',
        company: 'WeLab Bank',
        period: 'July - September 2020',
        description:
            'Product Intern at WeLab, an up and coming virtual bank in Hong Kong.',
        moreInfo:
            "This summer, I got the opportunity to work as a Product Intern at WeLab – which is a up and coming virtual bank in Hong Kong. Being an intern at WeLab debunked a myth believed by my past self from 2016 where a fictional intern's job was to make tea for their supervisor. If you're a nerd like me, this would probably be the most interesting part of this post where I dissect what my assignments looked like in this internship.",
        pictures: [Intern11, Intern12, Intern13],
    },
];

export default function InternshipBlock() {
    const [readMore, setReadMore] = useState<Internship | null>(null);

    return (
        <div className=" overflow-clip flex flex-col  gap-section-title-gap ">
            <h1 className="text-h1 offset-text-background ">Internships</h1>

            <div className="flex flex-col gap-component-gap-sm">
                <p className="text-md text-isd-font-1">
                    Students are encouraged to undertake internships during your
                    university study. Internships could provide you experience
                    in a real-world perspective, understanding the job setting
                    in the industry, exchanging knowledge with industry
                    professionals, keeping in touch with the latest trend in the
                    market, and etc.
                </p>

                <div className="grid grid-cols-[repeat(auto-fill,minmax(360px,1fr))] auto-cols-min gap-component-gap-sm">
                    {internships.map((intern, index) => (
                        <Fragment key={index}>
                            <ImageCard
                                key={index}
                                // title={`${intern.name} - ${intern.company}`}
                                title={intern.name}
                                imageSrc={intern.pictures[0]}
                                description={`Internship company: ${intern.company}\nInternship period: ${intern.period}`}
                                onClick={() => setReadMore(intern)}
                                lineLimit={2}
                            />
                            <InternshipReadMore
                                {...intern}
                                detailsOpen={readMore === intern}
                                setDetailsOpen={setReadMore}
                            />
                        </Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
}
