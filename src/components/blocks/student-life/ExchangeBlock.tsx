'use client';

import ExchangeImage1 from '@/assets/studentlife/exchange-1.jpg';
import ExchangeImage2 from '@/assets/studentlife/exchange-2.jpg';
import Image from 'next/image';
import { useState } from 'react';

export default function ExchangeBlock() {
    const [readMore, setReadMore] = useState<boolean>(false);

    return (
        <div className=" overflow-clip flex flex-col gap-section-title-gap">
            <h1 className="text-h1 offset-text-background">Exchange</h1>

            <>
                <div className="flex gap-[24px]">
                    <Image
                        src={ExchangeImage1}
                        alt="Student"
                        className="h-[300px] object-cover"
                    />
                    <Image
                        src={ExchangeImage2}
                        alt="Student"
                        className="h-[300px] object-cover"
                    />
                </div>
                <div className="flex flex-col gap-[24px] text-md">
                    <h2 className="text-isd-primary text-[36px] leading-[36px] font-bold">
                        Mashiat LAMISA (BSc ISD student)
                    </h2>
                    <div className="flex flex-col gap-[12px]">
                        <p className="text-isd-secondary font-bold">
                            University of British Columbia, Vancouver, Canada:
                            Spring 2020
                        </p>

                        <p className="text-isd-font-1">
                            In my Spring semester, I was extremely lucky to have
                            the opportunity of a semester abroad at the
                            University of British Columbia in Canada. It was one
                            of the most enlightening experiences of my life –
                            both in terms of knowledge gain as well as personal
                            growth. The University of British Columbia is the
                            oldest university of BC in Canada and I had a heard
                            a lot about how magnanimous the campus is. I would
                            not have believed it before but now that I have
                            spent about 6 months in the campus, I truly
                            completely believe in its magnanimity.
                        </p>

                        {readMore && (
                            <p className="text-isd-font-1">
                                The institution is famous for its location,
                                beach, well designed buildings, excellent
                                connection to every part of the city, forest
                                trail, best museum for anthropology where people
                                from all over the world fly to visit, excellent
                                sports facilities, and top notch academic and
                                research reputation. And I was lucky to have
                                experienced all of those.
                                <br />
                                As soon as I went there, one of the few clubs
                                that I joined were the Engineering Society, the
                                Hong Kong Society of UBC, Varsity Outdoor Club,
                                Exchange Students&apos; Club, and Dance Society
                                – and immediately after joining these I started
                                finding like-minded people, who eventually
                                became very close friends that I am still in
                                touch with from different parts of the world.
                                The experiences I gained from all these clubs
                                are incomparable – starting from snowshoeing to
                                the top most peaks in British Columbia, to
                                hiking, to walking and running miles in the
                                Pacific Spirit Park on the outskirts of the
                                campus, to having bonfires on the campus beach,
                                to taking online classes from my favorite
                                outdoor spots just outside the library when
                                COVID-19 started affecting our lives. I actively
                                participated in outdoor activities every chance
                                I got, but I also spent a lot of time building
                                friendships and connections with people to learn
                                from them and grow my mindset. And I think that
                                really helped me broaden my mind to see how far
                                I can dream of in terms of being independent and
                                achieving my goals.
                                <br />
                                I think one of the toughest times in my exchange
                                was when COVID-19 hit Vancouver and all my
                                friends were called back to their countries. I
                                helped each of them pack while they said goodbye
                                to me one after another. It was very painful for
                                me to do so but I think it also brought us
                                closer in terms of trying to keep in touch with
                                each other during this tough time despite the
                                time zones. I was mentally exhausted at that
                                time because of all these people leaving – my
                                friends, roommates, everyone. I could not
                                concentrate on work or studies and took up
                                running in the forest as a habit. I also started
                                doing yoga and learnt more about myself.
                                <br />
                                Towards mid-March, I got an excellent
                                opportunity to starting working at a department
                                in UBC called Integrated Renewal Program. The
                                Integrated Renewal Program (IRP) unites
                                previously independent projects, formerly known
                                as Student Academic Systems Initiative (SASI),
                                and HR Finance Renewal to replace 20-year old
                                legacy systems and switch to Workday as UBC's
                                core enterprise system. My role is to design and
                                produce training content in the form of
                                developing websites and editing videos for the
                                UBC student and staff body to adapt and
                                transition to the new Workday system smoothly
                                and fast. So far, I have designed 100+ web
                                content tutorials on Workday's application in
                                Finance and HR and counting. I built a great
                                relationship with my supervisor in that program
                                and even though I am back in Hong Kong now, I am
                                still employed by UBC which gives me great
                                exposure for building my resume for the future
                                and helps me build gain a lot of experience in
                                terms of working for the systems development of
                                a newly launched software for a large group of
                                diverse users which included the university
                                staff and professors.
                                <br />
                                One of the most adventurous trips I can think of
                                while in Canada was the road trip to the Rocky
                                Mountains in Alberta. For that, usually you
                                would always need to drive. But because of
                                COVID-19, all public transportation had been
                                shut down and it was impossible for me to see
                                the Rockies even though that was one of my goals
                                in this exchange. I was also very disheartened
                                because all my friends had left, but because I
                                was persistent, I still wanted to make one more
                                trip before I came back to Hong Kong. So I went
                                on Facebook and searched up “Friends Who Live In
                                Alberta” and found a senior from my middle
                                school and messaged her immediately. She agreed
                                to host me with an open heart and offered to
                                drive me all around 3 provincial parks and 3
                                national parks around Alberta and British
                                Columbia. Never have I ever experienced such
                                beautiful nature where I did not mind being in
                                the car for hours, and hiking amidst the rain,
                                storm, and sun, and seeing incredible wildlife
                                like grizzly bears. The trip changed me inside
                                and out, and I have never wanted to explore the
                                inner happenings of natural sciences more. It
                                also made me extremely interested in
                                environmental geography and going further, it
                                might even add an element to me deciding on my
                                final year project topic. Hiking has always been
                                a sport that challenges me. But this time,
                                because it was so deep into the wild, and
                                because I was with another person, it helped me
                                navigate my physical strengths and the way I act
                                in stressful situations. I mention stressful
                                because at one point on top of a really high
                                peak, there was a thunderstorm and my senior was
                                very scared of heights and keeping her calm
                                while also navigating myself towards a downward
                                slope was exciting and terrifying at the same
                                time!
                                <br />A very memorable experience of my exchange
                                semester was the opportunity of participating in
                                my first ever 
                                <a href="https://www.linkedin.com/company/major-league-hacking/">
                                    Major League Hacking
                                </a>
                                 from 
                                <a href="https://www.linkedin.com/company/nwplus/">
                                    nwPlus
                                </a>
                                 at the cmd-f Hackathon 2020 hosted by The
                                University of British Columbia. My absolutely
                                brilliant teammates 
                                <a href="https://www.linkedin.com/in/ACoAAA7ijRUBM68TNXESQmsdmqTEdlM74cjZ1vc/">
                                    Ilana Zimmerman
                                </a>
                                , 
                                <a href="https://www.linkedin.com/in/dama-correch-926551164/">
                                    Dama Correch
                                </a>
                                 and I were awarded the 'Empower Women Through
                                Technology’ prize by 
                                <a href="https://www.linkedin.com/company/sap/">
                                    SAP
                                </a>
                                 for our hack of an app called “KYR: Know Your
                                Rights”, which leverages the power of 
                                <a href="https://www.linkedin.com/search/results/all/?keywords=%23%23crowdsourcing&origin=GLOBAL_SEARCH_HEADER&sid=KB_">
                                    crowdsourcing
                                </a>
                                , and lets women and other gender minorities
                                know their rights when facing discrimination in
                                the workplace. The application empowers
                                employees who may have experienced some form of
                                harassment or human rights violation in the
                                workplace. The user fills out a form and
                                summarizes their experience. The application
                                then displays recommendations, the Canadian law
                                being violated, next steps, and resources
                                available. Additionally, the output displays a
                                similar past user experience and the resolution
                                (if any) experienced along with a similarity
                                score comparing the two experiences. In a span
                                of 24 hours, we built this application that
                                allows the user summarize their experience on
                                the app, displays recommendations, the specific
                                Canadian law being violated, and resources
                                available. More details
                                <a href="https://lnkd.in/gqxyXni">here</a>. One
                                thing that struck me was that there were mentors
                                from different sponsoring companies who were
                                there to help us at any time we needed and most
                                of these mentors were women--- young leaders in
                                their own companies/fields which was an
                                incredible experience as we, or I personally
                                haven’t seen so many leading women dominating
                                STEM fields in the same room. My team was an
                                all-women’s* team, needless to say. And we
                                collaborated just like any other team with good
                                team dynamics and healthy ideation processes
                                irrespective of gender.
                                <br />
                                Regarding courses, I had a fantastic time
                                learning new domains in UBC. My courses
                                included:
                                <br />
                                ·          COGS200: Introduction to Cognitive
                                Science – very interesting, thought provoking
                                course taken by three professors from Computer
                                Science, Neuroscience, Linguistics, Psychology
                                and Philosophy to introduce the fundamental
                                concepts of Cognitive Science. I had never
                                learnt these, so I found the course to be very
                                interesting. My final project was in a team
                                where we wrote a research proposal and a video
                                paper on studying the possible applications of
                                social robots with co-speech gestures in
                                teaching humans a second language. <br />
                                ·          CPEN421: Software Project Management
                                – I had a blast in this course learning about
                                all sorts of software project management methods
                                including Agile, Waterfall and a lot of case
                                studies, quantitative analysis of these systems.
                                I got to get my hands dirty on advanced project
                                planning, cost estimation and scheduling,
                                factors influencing productivity and success,
                                and analysis of options and risk. It was super
                                fun and useful for my future in Integrative
                                Systems and Design. <br />
                                ·          CPSC210: Software Construction –
                                Another very interesting and enlightening course
                                that will help me advance in projects at ISDN as
                                it taught software design from scratch to
                                development, leveraging on git tools as well as
                                version control, and testing. I think this will
                                help me a lot playing the role of a software
                                teammate in any ISDN project. Final deliverable
                                included a software design in Java by oneself
                                and writing testing code for it. <br />
                                ·          MECH431: Engineering Economics –
                                Great course on economics from a very
                                engineering perspective. The professor was very,
                                very cool – one of my favorite classes to go to.
                                Final deliverable included designing a business
                                proposal from scratch in a team and analyzing
                                the evaluation and comparison of economic
                                models, cash flow and risk and inventory
                                analysis.
                                <br />
                                Having a very interdisciplinary major like ISDN
                                in HKUST and always working in interdisciplinary
                                teams, I think doing this exchange program in
                                Canada sharpened my group leading skills more
                                and more, and equipping me to cater to the
                                different needs of team members better.
                                <br /> I have also noticed so far on my exchange
                                experience that I can learn how to communicate
                                people with whom I do not have a common
                                language. Sometimes, when English is
                                someone&apos;s second or third language, it is
                                very hard to communicate with them on a
                                professional level. However, meeting people from
                                the most rural parts of Europe to countries I
                                have never even heard of before, really gave me
                                the exposure to understand what kind of
                                communication is reciprocated by which
                                nationality and how I can speak a universal
                                language to talk, and understand anyone. And I
                                think in today&apos;s world, it is very
                                important to do that for both professional and
                                personal growth.
                            </p>
                        )}

                        <a
                            className="text-isd-secondary font-bold cursor-pointer"
                            onClick={() => setReadMore(!readMore)}
                        >
                            {readMore ? 'Show less' : 'Read more'}
                        </a>
                    </div>
                </div>
            </>
        </div>
    );
}
