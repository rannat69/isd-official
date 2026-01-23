import { LANGUAGE_CHINESE_SIMPLIFIED, LANGUAGE_ENGLISH } from '@/app/constants';
import { useEffect, useState } from 'react';

export default function SummaryBlock() {
    const [language, setLanguage] = useState<string | null>(null);

    useEffect(() => {
        setLanguage(sessionStorage.getItem('language'));
    }, []);

    return (
        <div>
            {(language === LANGUAGE_ENGLISH || !language) &&
                'The Hong Kong University of Science and Technology (HKUST) is committed to fostering the spirit of innovation and entrepreneurship, and has incubated over 1,700 active start-ups,            including 10 unicorns and 11 listed companies, creating more than            HK$400 billion of economic benefits for the community, and nurturing            tens of thousands of innovative talents rooted in a wide range of            industries. Today, Clear Water Bay has become a cradle of technology            innovations with rich resources and a strong eco-system.'}
            {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                '香港科技大学（港科大）致力于培养创新创业精神，至今已孵化超过 1,700 家活跃的初创企业，其中包括 10 家独角兽企业和 11 家上市公司，为社会创造了超过 4,000 亿港元的经济效益，并在各行各业培养了数以万计的创新人才。如今，清水湾已成为资源丰富、生态强大的科技创新摇篮。'}
            <br />
            <br />
            {(language === LANGUAGE_ENGLISH || !language) &&
                '          The Master of Philosophy in Technology Innovation and            Entrepreneurship (TIE) is a major attempt by HKUST to reshape the            education system and make the school a real driving force for            continuous innovation in society after 30 years of focus on            education. The entire training model will be transformed from the            traditional model to a problem-oriented, multidisciplinary,            project-based learning model, designed for innovators and            entrepreneurs who aspire to take the lead in the deep technology            field.'}
            {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                '“科技创新与创业哲学硕士（TIE）”项目是港科大在专注教育三十年后，重塑教育体系、使学校成为社会持续创新核心驱动力的重大尝试。整个培养模式将由传统模式转型为以问题为导向、跨学科、基于项目的学习模式，旨在为志在深科技（Deep Tech）领域引领未来的创新者和创业者提供支持。'}
            <br />
            <br />
            {(language === LANGUAGE_ENGLISH || !language) &&
                '                 The program provides a comprehensive new engineering education            experience, combining in-depth technical knowledge with necessary            entrepreneurial skills. Students will work in dynamic teams,            participate in rigorous research training, and gain valuable            industry experience opportunities. Each student must complete a            thesis independently under the guidance of faculty members and            collaborate on team projects that combine theoretical insights with            practical applications. If you have a solid foundation in science            and engineering, a courageous entrepreneurial spirit, a good team            spirit, and a desire to learn interdisciplinary thinking, come and            apply!'}
            {language === LANGUAGE_CHINESE_SIMPLIFIED &&
                '该课程提供全方位的新工科教育体验，将深厚的专业技术知识与必备的创业技能相结合。学生将在充满活力的团队中工作，接受严谨的科研训练，并获得宝贵的行业实战机会。每位学生须在导师指导下独立完成学位论文，并参与将理论洞察与实践应用相结合的团队项目。如果您具备扎实的理工科基础、敢于开拓的创业精神、优秀的团队协作能力并渴望跨学科思考，欢迎即刻申请'}
        </div>
    );
}
