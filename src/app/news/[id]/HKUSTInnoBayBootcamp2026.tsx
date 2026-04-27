'use client';

import qianzh from '@/assets/people/qianzh.jpg';
import lillyli from '@/assets/people/lillyli.jpg';
import eewswleung from '@/assets/people/eewswleung.png';
import qijiashao from '@/assets/people/qijiashao.jpg';
import hongrigu from '@/assets/people/hongrigu.jpg';

import image01 from '@/assets/news/HKUSTInnoBayBootcamp2026/01.jpg';
import image02 from '@/assets/news/HKUSTInnoBayBootcamp2026/02.jpg';
import image03 from '@/assets/news/HKUSTInnoBayBootcamp2026/03.jpg';

import image04 from '@/assets/news/HKUSTInnoBayBootcamp2026/04.jpg';
import image05 from '@/assets/news/HKUSTInnoBayBootcamp2026/05.jpg';
import image06 from '@/assets/news/HKUSTInnoBayBootcamp2026/06.jpg';
import Image from 'next/image';

import {
    LANGUAGE_CHINESE_SIMPLIFIED,
    LANGUAGE_CHINESE_TRADITIONAL,
    LANGUAGE_ENGLISH,
} from '@/app/constants';
import { useEffect, useState } from 'react';

export default function HKUSTInnoBayBootcamp2026() {
    const [language, setLanguage] = useState<string | null>(null);

    useEffect(() => {
        setLanguage(sessionStorage.getItem('language'));
    }, []);

    return (
        <div className="flex flex-col lg:gap-[24px] gap-[12px] lg:text-md text-sm">
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
            <h2 className="lg:text-[36px] text-lg leading-9 font-bold text-primary">
                {(language === LANGUAGE_ENGLISH || !language) &&
                    'Embark on a Transformative Journey in Innovation and Entrepreneurship'}

                {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                    '报名开启，香港科大邀你相约清水湾，以科技赋能体育，连接未来创新！'}
            </h2>
            {(language === LANGUAGE_ENGLISH || !language) && (
                <>
                    <p>
                        Since its founding, the Hong Kong University of Science
                        and Technology has been committed to nurturing
                        innovative leaders across various industries.
                    </p>
                    <p>
                        Over more than three decades, the Clear Water Bay campus
                        has produced over 1,900 active startup companies,
                        including 9 unicorns and 11 publicly listed firms. These
                        ventures have generated more than HKD 400 billion in
                        economic value for society and cultivated tens of
                        thousands of innovative talents embedded across
                        different sectors.{' '}
                    </p>
                    <p>
                        Today, Clear Water Bay has become a cradle of
                        technological innovation, distinguished by strong
                        resources and a vibrant entrepreneurial ecosystem.{' '}
                    </p>
                    <p>
                        ISD is delighted to see our faculty’s interdisciplinary
                        research and human-centered innovation philosophy
                        recognized on such an influential global stage. Their
                        award-winning inventions reflect ISD’s commitment to
                        combining engineering, design, and entrepreneurship to
                        address real-world challenges.
                    </p>
                </>
            )}
            {language === LANGUAGE_CHINESE_SIMPLIFIED && (
                <p>
                    香港科技大学自成立以来，一直致力于培养具有创新思维的各行各业领军人才。三十余年以来，从清水湾已走出超过1900家活跃的初创公司，其中包括9家独角兽、11家上市公司，为社会创造出超过4000亿港币的经济效益，培养了成千上万扎根于各行各业的创新人才。时至今日，清水湾已成为拥有强大资源和浓厚创新氛围的科创摇篮。
                </p>
            )}
            <div>
                <Image src={image01} alt="HKUST"></Image>
                <Image src={image02} alt="Innobay summer camp 2026"></Image>
            </div>
            <h2 className="lg:text-[36px] text-lg leading-9 font-bold text-primary">
                InnoBay Summer Camp 2026
            </h2>
            {(language === LANGUAGE_ENGLISH || !language) && (
                <p>
                    This summer, ignite your innovation and technology dreams.
                </p>
            )}
            {language === LANGUAGE_CHINESE_SIMPLIFIED && (
                <p>这个夏天，点燃你的科创梦想！</p>
            )}
            {(language === LANGUAGE_ENGLISH || !language) && (
                <p>
                    In the height of July, the Hong Kong University of Science
                    and Technology proudly launches InnoBay Summer Camp 2026, an
                    immersive training camp designed specifically for future
                    leaders in science and technology innovation.
                </p>
            )}

            {language === LANGUAGE_CHINESE_SIMPLIFIED && (
                <p>
                    盛夏七月，香港科技大学重磅推出 InnoBay Summer Camp 2026 ——
                    一场专为未来科创领袖打造的沉浸式训练营。
                </p>
            )}
            {(language === LANGUAGE_ENGLISH || !language) && (
                <p>
                    The InnoBay Summer Camp is designed to provide young people
                    with a strong passion for technological innovation and
                    application with systematic, practice-oriented professional
                    guidance. With a global perspective, the program focuses on
                    translating cutting-edge technologies into real-world
                    industrial applications, cultivating interdisciplinary
                    innovators with technical understanding, product thinking,
                    and business awareness.
                </p>
            )}

            {language === LANGUAGE_CHINESE_SIMPLIFIED && (
                <p className="text-isd-secondary">
                    InnoBay Summer Camp
                    旨在为对科技创新与应用充满热忱的年轻人提供系统化、实践导向的专业指导。训练营以全球化视野出发，聚焦前沿科技在真实产业场景中的落地与转化，培养具备技术理解力、产品思维与商业意识的复合型创新人才。
                </p>
            )}

            {(language === LANGUAGE_ENGLISH || !language) && (
                <p>
                    This year’s camp is built upon the XbotPark innovation and
                    entrepreneurship ecosystem established by Professor Li
                    Zexiang and others. It is led by senior faculty from the
                    Division of Integrative Systems and Design at the Hong Kong
                    University of Science and Technology, along with experienced
                    industry mentors. Participants will engage in structured
                    learning and hands-on practice across key stages including
                    user insight, competitive analysis, solution design,
                    technical implementation, and validation. They will also
                    complete a final demo presentation, experiencing the full
                    innovation process from zero to one, transforming ideas into
                    viable products or system solutions, while connecting deeply
                    with the innovation and industrial ecosystem of the
                    Guangdong Hong Kong Macao Greater Bay Area.
                </p>
            )}

            {language === LANGUAGE_CHINESE_SIMPLIFIED && (
                <p>
                    本届训练营将基于
                    <strong className="font-bold">
                        李泽湘教授等创建的 XbotPark
                        创新创业体系，由香港科技大学综合系统与设计学部（Division
                        of Integrative Systems and Design）资深教授及业界导师
                    </strong>
                    亲自指导。学员将围绕用户需求洞察、竞品分析、解决方案设计、技术实现与验证等关键环节展开系统学习与实践，并完成最终的路演
                    Demo，从 0 到 1
                    沉浸式体验完整的创新过程，助力新一代创客将创意转化为可行的产品或系统方案，并深度连接粤港澳大湾区的创新与产业生态。
                </p>
            )}
            {(language === LANGUAGE_ENGLISH || !language) && (
                <p>
                    Are you ready to take on the challenge, explore the
                    possibilities at the intersection of sports and technology,
                    and create solutions with real-world impact?
                </p>
            )}

            {language === LANGUAGE_CHINESE_SIMPLIFIED && (
                <p className="text-isd-secondary font-bold">
                    那么，你准备好迎接挑战，探索体育与科技融合的无限可能，并创造具有实际影响力的解决方案了吗？
                </p>
            )}
            <div>
                <Image src={image03} alt="Are you ready ?"></Image>
            </div>
            <h2 className="lg:text-[36px] text-lg leading-9 font-bold text-primary">
                {(language === LANGUAGE_ENGLISH || !language) &&
                    'Camp Schedule'}

                {language === LANGUAGE_CHINESE_SIMPLIFIED && '活动详情'}
            </h2>
            <table className="w-full border-1 border-y-2 border-y-isd-primary ">
                <tbody className=" divide-y divide-gray-200">
                    <tr>
                        <td className="text-isd-primary font-bold bg-isd-primary-2 border-r border-gray-200 p-4">
                            {(language === LANGUAGE_ENGLISH || !language) &&
                                'Dates'}
                            {language === LANGUAGE_CHINESE_SIMPLIFIED && '时间'}
                        </td>
                        <td className=" p-4">
                            {(language === LANGUAGE_ENGLISH || !language) &&
                                '2nd July 2026 to 11th July 2026'}

                            {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                                '2026 年 7 月2号至11号'}
                        </td>
                    </tr>
                    <tr>
                        <td className="text-isd-primary  font-bold border-r border-gray-200 p-4">
                            {(language === LANGUAGE_ENGLISH || !language) &&
                                'Location'}
                            {language === LANGUAGE_CHINESE_SIMPLIFIED && '地点'}
                        </td>
                        <td className=" p-4">
                            {(language === LANGUAGE_ENGLISH || !language) &&
                                'Hong Kong University of Science and Technology → Guangdong–Hong Kong–Macao Greater Bay Area (including the Dongguan region)'}
                            {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                                '香港科技大学 → 粤港澳大湾区（含东莞地区）'}
                        </td>
                    </tr>
                    <tr>
                        <td className="text-isd-primary  font-bold border-r border-gray-200 p-4">
                            {(language === LANGUAGE_ENGLISH || !language) &&
                                'Theme'}
                            {language === LANGUAGE_CHINESE_SIMPLIFIED && '主题'}
                        </td>
                        <td className=" p-4">
                            {(language === LANGUAGE_ENGLISH || !language) && (
                                <>
                                    <p>
                                        <strong>Sports Technology</strong>
                                    </p>
                                    <p>
                                        This year’s training camp will center on
                                        sports technology, broadly exploring how
                                        innovation can enhance athletic
                                        training, performance, facilities, and
                                        the wider industry ecosystem. Areas of
                                        exploration include, but are not limited
                                        to:
                                    </p>
                                    <ul className="list-disc ml-5 mt-2 space-y-1 ">
                                        <li>
                                            Using sensors, data analytics, and
                                            artificial intelligence to improve
                                            training efficiency and athletic
                                            performance
                                        </li>
                                        <li>
                                            Applying wearable devices and smart
                                            equipment to sports training and
                                            health monitoring
                                        </li>
                                        <li>
                                            Designing smarter sports venues,
                                            training facilities, and teaching
                                            systems
                                        </li>
                                        <li>
                                            Integrating engineering, computing,
                                            and sports science to address
                                            real-world challenges in athletic
                                            environments
                                        </li>
                                    </ul>
                                </>
                            )}

                            {language === LANGUAGE_CHINESE_SIMPLIFIED && (
                                <>
                                    <p>
                                        <strong className="text-isd-primary">
                                            运动科技（Sports Technology）
                                        </strong>
                                    </p>
                                    <p>
                                        本届训练营将以运动科技为核心主题，广义探讨科技如何赋能体育训练、运动表现、场地设施与相关产业生态。探索的潜在问题包括但不限于：
                                    </p>
                                    <ul className="list-disc ml-5 mt-2 space-y-1 ">
                                        <li>
                                            利用传感器、数据分析和人工智能提升运动员训练效率与竞技表现
                                        </li>
                                        <li>
                                            可穿戴设备与智能装备在体育训练与健康监测中的应用
                                        </li>
                                        <li>
                                            体育场地、训练设施与教学系统的智能化设计
                                        </li>
                                        <li>
                                            将工程技术、计算技术与运动科学相结合，解决真实体育场景中的痛点问题
                                        </li>
                                    </ul>
                                </>
                            )}
                        </td>
                    </tr>
                </tbody>
            </table>

            <h2 className="lg:text-[36px] text-lg leading-9 font-bold text-primary">
                {(language === LANGUAGE_ENGLISH || !language) &&
                    'Programme Highlights'}

                {language === LANGUAGE_CHINESE_SIMPLIFIED && '营期亮点'}
            </h2>

            <h2 className="lg:text-lg text-md leading-9 font-bold text-primary">
                {(language === LANGUAGE_ENGLISH || !language) &&
                    'HKUST Campus Experience'}

                {language === LANGUAGE_CHINESE_SIMPLIFIED && '香港科技大学校园'}
            </h2>

            <p>
                {(language === LANGUAGE_ENGLISH || !language) &&
                    'Participants will immerse themselves in design thinking, rapid prototyping, and commercialization strategies. Working in world-class laboratories and maker spaces, they will collaborate to understand the full journey of a sports technology product, from concept development to functional prototype.'}

                {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                    '深入设计思维、快速原型制作与商业化策略，营员将在世界一流的实验室与创客空间中协作，理解运动科技产品从概念到原型的完整路径。'}
            </p>
            <h2 className="lg:text-lg text-md leading-9 font-bold text-primary">
                {(language === LANGUAGE_ENGLISH || !language) &&
                    'Greater Bay Area Industry and Application Visits'}

                {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                    '大湾区产业与应用场景参访'}
            </h2>
            <p>
                {(language === LANGUAGE_ENGLISH || !language) &&
                    'Through site visits and expert-led sessions, participants will gain firsthand insight into how sports technology is applied in real training environments. This year’s program will feature visits to professional golf training facilities, where participants will explore how advanced technologies support athlete training, motion analysis, data feedback, and system design. These experiences are designed to inspire the practical application of engineering and technology in specific sports contexts.'}

                {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                    '通过实地参访与专家分享，深入了解运动科技在真实训练环境中的应用。本届训练营将重点安排参访专业高尔夫训练场地，了解先进技术如何支持运动员训练、动作分析、数据反馈与训练系统设计，并启发学员将工程与科技手段应用于具体运动场景。'}
            </p>
            <h2 className="lg:text-lg text-md leading-9 font-bold text-primary">
                Demo Day{' '}
            </h2>
            <p>
                {(language === LANGUAGE_ENGLISH || !language) &&
                    'During the final showcase, each team will present its sports technology project to a panel of judges, demonstrating innovation, technical understanding, and entrepreneurial potential while seeking professional recognition.'}

                {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                    '路演中，各团队将向评审团展示其运动科技项目成果，展现创新能力、技术理解与创业潜力，争取专业认可。'}
            </p>
            <h2 className="lg:text-[36px] text-lg leading-9 font-bold text-primary">
                {(language === LANGUAGE_ENGLISH || !language) &&
                    'What You Will Gain'}

                {language === LANGUAGE_CHINESE_SIMPLIFIED && '学员将在训练营中'}
            </h2>
            <ul className="list-disc ml-5 mt-2 space-y-1 ">
                <li>
                    {(language === LANGUAGE_ENGLISH || !language) &&
                        'Explore the integration of cutting-edge technologies across diverse sports settings'}
                    {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                        '探索前沿科技与多元体育场景之间的深度融合'}
                </li>
                <li>
                    {(language === LANGUAGE_ENGLISH || !language) &&
                        'Learn from HKUST professors and experts from the industry to learn from real-world cases and methodologies'}
                    {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                        '向香港科技大学教授及来自产业一线的专家学习真实案例与方法论'}
                </li>
                <li>
                    {(language === LANGUAGE_ENGLISH || !language) &&
                        'Gain practical experience in product definition, user research, competitive analysis, solution design and technical implementation'}
                    {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                        '获得产品定义、用户研究、竞品分析、解决方案设计及技术实现的实战经验'}
                </li>
                <li>
                    {(language === LANGUAGE_ENGLISH || !language) &&
                        'Collaborate in interdisciplinary teams and work with peers from different professional backgrounds to break through monodisciplinary perspectives and inspire innovative thinking'}
                    {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                        '在跨学科团队中协作，与来自不同专业背景的同伴共同工作，突破单一学科视角，激发创新思考'}
                </li>
                <li>
                    {(language === LANGUAGE_ENGLISH || !language) &&
                        'Understand the relevant industrial resources, cross-border cooperation opportunities and innovative policy support in the Greater Bay Area, and lay the foundation for the implementation of future projects'}
                    {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                        '了解大湾区相关产业资源、跨境合作机会及创新政策支持，为未来项目落地奠定基础'}
                </li>
            </ul>
            <p className="font-bold text-isd-secondary">
                {(language === LANGUAGE_ENGLISH || !language) &&
                    'Priority will be given to outstanding campers.'}
                {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                    '优秀营员可优先获得'}
            </p>
            <p className="font-bold text-isd-secondary">
                {(language === LANGUAGE_ENGLISH || !language) &&
                    'Further understanding and recommendation opportunities for MPhil in Technology Innovation and Entrepreneurship and MSc in Technology Leadership and Entrepreneurship programs at the Division of Integrated Systems and Design at the Hong Kong University of Science and Technology.'}

                {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                    '香港科技大学综合系统与设计学部科技创新与创业哲学硕士（MPhil in Technology Innovation and Entrepreneurship）及科技领导力与创业理学硕士（MSc in Technology Leadership and Entrepreneurship） 项目的进一步了解与推荐机会。'}
            </p>
            <h2 className="lg:text-[36px] text-lg leading-9 font-bold text-primary">
                {(language === LANGUAGE_ENGLISH || !language) &&
                    'Faculty lineup'}

                {language === LANGUAGE_CHINESE_SIMPLIFIED && '师资阵容'}
            </h2>
            <p>
                {(language === LANGUAGE_ENGLISH || !language) &&
                    'The faculty team of the innovation camp consists of experts in design thinking, product and brand design, marine technology, robotics, artificial intelligence, and sensor systems. They bring extensive experience in academic research and industry collaboration, with strong expertise in interdisciplinary research and team-based teaching.'}
                {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                    '科创营的教授团队来自设计思维、产品及品牌设计、海洋科技、机器人、人工智能、传感器等领域的专家，具有丰富学术研究和产业合作经验，熟悉跨学科研究与团队教学。'}
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="flex flex-col items-center gap-4">
                    <Image
                        src={qianzh}
                        alt="Professor Zhang Qian"
                        width={256}
                        height={256}
                        sizes="256px"
                    />
                    <p className="font-bold text-isd-primary">
                        {(language === LANGUAGE_ENGLISH || !language) &&
                            'Professor Zhang Qian'}
                        {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                            '张黔 教授'}
                    </p>
                    <p>
                        {(language === LANGUAGE_ENGLISH || !language) &&
                            'Academician of the Hong Kong Academy of Engineering Sciences, IEEE Fellow'}
                        {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                            '香港工程科学院院士，IEEE Fellow'}
                    </p>
                    <p>
                        {(language === LANGUAGE_ENGLISH || !language) &&
                            'Director of the Division of Integrated Systems and Design, The Hong Kong University of Science and Technology'}
                        {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                            '香港科技大学 综合系统与设计学部 主任'}
                    </p>
                    <p>
                        {(language === LANGUAGE_ENGLISH || !language) &&
                            'Professor of Tencent Engineering, Hong Kong University of Science and Technology'}
                        {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                            '香港科技大学腾讯工程学教授'}
                    </p>
                    <p>
                        {(language === LANGUAGE_ENGLISH || !language) &&
                            'Chair Professor, Department of Computer Science and Engineering, Hong Kong University of Science and Technology'}
                        {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                            '香港科技大学计算机科学与工程系讲座教授'}
                    </p>
                    <p>
                        {(language === LANGUAGE_ENGLISH || !language) &&
                            'Research Field: Computer Networks, Wireless Systems, Cyber-Physical Systems, Mobile Computing, Network Security'}
                        {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                            '研究领域：计算机网络、无线系统、信息物理系统、移动计算、网络安全'}
                    </p>
                    <Image
                        src={lillyli}
                        alt="Professor Li Li"
                        width={256}
                        height={256}
                        sizes="256px"
                    />
                    <p className="font-bold text-isd-primary">
                        {(language === LANGUAGE_ENGLISH || !language) &&
                            'Professor Li Li'}
                        {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                            '李鹂 教授'}
                    </p>
                    <p>
                        {(language === LANGUAGE_ENGLISH || !language) &&
                            'Professor, Department of Integrated Systems and Design, Hong Kong University of Science and Technology'}
                        {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                            '香港科技大学综合系统与设计学部教授'}
                    </p>
                    <p>
                        {(language === LANGUAGE_ENGLISH || !language) &&
                            'Research Interests: Sustainable Design, Smart Fiber Materials, Wearable Electronic Textiles, Tactile Interaction Design'}
                        {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                            '研究领域：可持续设计、智能纤维材料、可穿戴电子纺织品、触感交互设计'}
                    </p>
                    <Image
                        src={eewswleung}
                        alt="Professor Winnie Leung"
                        width={256}
                        height={256}
                        sizes="256px"
                    />
                    <p className="font-bold text-isd-primary">
                        {(language === LANGUAGE_ENGLISH || !language) &&
                            'Professor Winnie Leung'}
                        {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                            '梁淑慧 教授'}
                    </p>
                    <p>
                        {(language === LANGUAGE_ENGLISH || !language) &&
                            'Associate Professor of Engineering Education, Division of Integrated Systems and Design, Hong Kong University of Science and Technology'}
                        {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                            '香港科技大学综合系统与设计学部 工程教育副教授'}
                    </p>
                    <p>
                        {(language === LANGUAGE_ENGLISH || !language) &&
                            'Vice President of Hong Kong Science and Technology Education Center'}
                        {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                            '香港科创教育中心 副院长'}
                    </p>
                    <p>
                        {(language === LANGUAGE_ENGLISH || !language) &&
                            'Research Fields: Design Automation, Intelligent Control and Nonlinear Systems, Robotics'}
                        {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                            '研究领域：设计自动化、智能控制与非线性系统、机器人学'}
                    </p>
                    <Image
                        src={qijiashao}
                        alt="Professor Shao Qijia"
                        width={256}
                        height={256}
                        sizes="256px"
                    />
                    <p className="font-bold text-isd-primary">
                        {(language === LANGUAGE_ENGLISH || !language) &&
                            'Professor Shao Qijia'}
                        {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                            '邵琦佳 教授'}
                    </p>
                    <p>
                        {(language === LANGUAGE_ENGLISH || !language) &&
                            'Assistant Professor, Division of Integrated Systems and Design, The Hong Kong University of Science and Technology'}
                        {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                            '香港科技大学综合系统与设计学部助理教授'}
                    </p>
                    <p>
                        {(language === LANGUAGE_ENGLISH || !language) &&
                            'Research Interests: Mobile and pervasive computing, human-computer interaction, cyber-physical systems'}
                        {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                            '研究领域：移动和普适计算、人机交互、信息物理系统'}
                    </p>

                    <Image
                        src={hongrigu}
                        alt="Professor Richard Gu"
                        width={256}
                        height={256}
                        sizes="256px"
                    />

                    <p className="font-bold text-isd-primary">
                        {(language === LANGUAGE_ENGLISH || !language) &&
                            'Professor Richard Gu'}
                        {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                            '顾红日 教授'}
                    </p>

                    <p>
                        {(language === LANGUAGE_ENGLISH || !language) &&
                            'Assistant Professor, Division of Integrated Systems and Design, The Hong Kong University of Science and Technology'}
                        {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                            '香港科技大学综合系统与设计学部助理教授'}
                    </p>
                    <p>
                        {(language === LANGUAGE_ENGLISH || !language) &&
                            'Research Fields: Micro robots, soft robots, structured magnetic materials, medical devices'}
                        {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                            '研究领域：微型机器人、软体机器人、结构化磁性材料、医疗器械'}
                    </p>
                </div>
            </div>
            <p>
                {(language === LANGUAGE_ENGLISH || !language) &&
                    'For more information about ISD professors, please visit the official website:'}
                {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                    '更多综合系统与设计学部(ISD)教授资讯，详见官网:'}
            </p>
            <p className="cursor-pointer text-isd-primary underline">
                <a href="https://isd.hkust.edu.hk/people#isd-faculty">
                    https://isd.hkust.edu.hk/people#isd-faculty
                </a>
            </p>
            <h2 className="lg:text-[36px] text-lg leading-9 font-bold text-primary">
                {(language === LANGUAGE_ENGLISH || !language) &&
                    'Highlights of previous summer camps'}
                {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                    '往届夏令营精彩集锦'}
            </h2>
            <div className="flex flex-col gap-4">
                <Image src={image04} alt="Highlight"></Image>
                <Image src={image05} alt="Highlight"></Image>
                <Image src={image06} alt="Highlight"></Image>
            </div>
            <h2 className="lg:text-[36px] text-lg leading-9 font-bold text-primary">
                {(language === LANGUAGE_ENGLISH || !language) &&
                    'Enrollment target'}
                {language === LANGUAGE_CHINESE_SIMPLIFIED && '招生对象'}
            </h2>
            <p>
                {(language === LANGUAGE_ENGLISH || !language) &&
                    'We welcome undergraduate or graduate students from any region, especially those from mechanical, electronic, computer science, data science, design, biomechanics, medical engineering, smart hardware, and related interdisciplinary backgrounds.'}
                {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                    '我们欢迎来自任何地区的大三（即学制倒数第二学年）本科生或研究生，特别是机械、电子、计算机科学、数据科学、设计、生物力学、医学工程、智能硬件及相关交叉学科背景的学生。'}
            </p>
            <p>
                {(language === LANGUAGE_ENGLISH || !language) &&
                    'Applicants with laboratory experience, project experience, or entrepreneurial background will be preferred. Applicants with other grades or backgrounds will be evaluated comprehensively on a case-by-case basis.'}
                {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                    '具备实验室经验、项目经验或创业背景的申请者将优先考虑。其他年级或背景的申请者将根据个案情况进行综合评估。'}
            </p>
            <h2 className="lg:text-[36px] text-lg leading-9 font-bold text-primary">
                {(language === LANGUAGE_ENGLISH || !language) &&
                    'Registration time'}
                {language === LANGUAGE_CHINESE_SIMPLIFIED && '报名时间'}
            </h2>
            <p>
                {(language === LANGUAGE_ENGLISH || !language) &&
                    'From now until the end of April 2026.'}
                {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                    '即日起至 2026 年4月底。'}
            </p>
            <h2 className="lg:text-[36px] text-lg leading-9 font-bold text-primary">
                {(language === LANGUAGE_ENGLISH || !language) && 'How to apply'}
                {language === LANGUAGE_CHINESE_SIMPLIFIED && '如何申请'}
            </h2>
            <p className="font-bold text-isd-primary">
                {(language === LANGUAGE_ENGLISH || !language) &&
                    'Method 1: Recommended quota'}
                {language === LANGUAGE_CHINESE_SIMPLIFIED && '方式一：推荐名额'}
            </p>
            <p>
                {(language === LANGUAGE_ENGLISH || !language) &&
                    'Each university can refer up to 10 students to participate in the InnoBay Summer Camp. The project team will conduct further interviews and make selective selections. Please email'}
                {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                    '每所大学可推荐最多10名学生参与InnoBay Summer Camp。项目组将进一步面试并择优录取。请发送邮件至'}
                <a
                    className="cursor-pointer text-isd-primary underline"
                    href="mailto:innobay@ust.hk"
                >
                    innobay@ust.hk
                </a>{' '}
                {(language === LANGUAGE_ENGLISH || !language) && (
                    <>
                        and cc{' '}
                        <a
                            className="cursor-pointer text-isd-primary underline"
                            href="mailto:isdtie@ust.hk"
                        >
                            isdtie@ust.hk
                        </a>{' '}
                        for recommendations.
                    </>
                )}
                {language === LANGUAGE_CHINESE_SIMPLIFIED && <>进行推荐。</>}
            </p>
            <p className="font-bold text-isd-primary">
                {(language === LANGUAGE_ENGLISH || !language) &&
                    'Method 2: Open recruitment'}
                {language === LANGUAGE_CHINESE_SIMPLIFIED && '方式二：公开招募'}
            </p>
            <p>
                {(language === LANGUAGE_ENGLISH || !language) &&
                    'Fill out the online application form at this link '}
                {language === LANGUAGE_CHINESE_SIMPLIFIED && '于此链接 '}
                <a
                    className="cursor-pointer text-isd-primary underline"
                    href="https://forms.office.com/r/ULu1g3HQhm"
                >
                    https://forms.office.com/r/ULu1g3HQhm
                </a>
                . Successful candidates will be notified of the follow-up
                interview via email
                {(language === LANGUAGE_ENGLISH || !language) &&
                    '. Successful candidates will be notified of the follow-up interview via email'}
                {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                    '填写线上申请表。提交后，入选者将通过电邮收到后续面试通知。'}
            </p>
            <h2 className="lg:text-[36px] text-lg leading-9 font-bold text-primary">
                {(language === LANGUAGE_ENGLISH || !language) &&
                    'Contact information'}
                {language === LANGUAGE_CHINESE_SIMPLIFIED && '联系方式'}
            </h2>
            <p>
                {(language === LANGUAGE_ENGLISH || !language) &&
                    'For more information, please email: '}
                {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                    '如需更多资讯，请电邮联系：'}
                <a
                    className="cursor-pointer text-isd-primary underline"
                    href="mailto:innobay@ust.hk"
                >
                    innobay@ust.hk.
                </a>
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="flex flex-col items-center gap-4">
                    <p className="text-isd-secondary font-bold">
                        {(language === LANGUAGE_ENGLISH || !language) &&
                            "This summer, let's"}
                        {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                            '这个夏天，让我们'}
                    </p>
                    <p className="text-isd-secondary font-bold">
                        {(language === LANGUAGE_ENGLISH || !language) &&
                            'Meet at Clear Water Bay to empower sports with technology and connect future innovation.'}
                        {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                            '相约清水湾，以科技赋能体育，连接未来创新。'}
                    </p>
                </div>
            </div>
        </div>
    );
}
