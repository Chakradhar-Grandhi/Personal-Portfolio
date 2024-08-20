import moneyImage from './assets/images/moneydark.png';
import moneyLightImage from './assets/images/moneylight.png';
import ecommerceLightImage from './assets/images/ecommerceLight.png';
import ecommerceDarkImage from './assets/images/ecommerceDark.png';
import footballAnalysisLightImage from'./assets/images/footballanalysisLight.png';
import footballAnalysisDarkImage from'./assets/images/footballanalysisDark.png';
import portfolioLightImage from './assets/images/portfolioLight.png';
import portfolioDarkImage from './assets/images/portfolioDark.png';
import healthcareLight from './assets/images/healthcareLight.png';
import healthcareDark from './assets/images/healthcareDark.png';
import covidLight from './assets/images/covidLight.png';
import covidDark from './assets/images/covidDark.png';
import motmLight from './assets/images/motmLight.png';
import motmDark from './assets/images/motmDark.png';
const logotext = "CG";
const meta = {
    title: "Chakradhar Grandhi",
    description: "I'm Chakradhar, full stack software engineer working in Boston",
};

const introdata = {
    title: "I’m Chakradhar Grandhi",
    animated: {
        first: "I'm a Full-Stack Engineer",
        second: "I am a Graduate student at Northeastern University",
        third: "I develop web applications",
        fourth:"I develop backend-services",
    },
    description: "I'm a graduate student at Northeastern University, Boston with over 3 years of experience in  financial sector as a Software Engineer.",
};

const dataabout = {
    title: "A bit about myself",
    aboutme:"I’m a Full Stack Software Engineer with over 3 years of experience, specializing in the MERN Stack (MongoDB, React, Node.js, Express.js) and backend development in Java. I have a deep understanding of all stages of the software development lifecycle (SDLC) and am skilled in Test-Driven Development (TDD), ensuring high-quality, reliable code. I’ve successfully worked on projects in the financial sector to enhance performance, security, and user experience. Currently, I’m pursuing a Master’s in Information Systems at Northeastern University in Boston. I’m passionate about tackling complex problems and am always eager to learn something new. In my free time, I enjoy playing the guitar. ",
};

const education = {
    title: "Education",
    description1: "Northeastern University, Boston, MA",
    major1: "Master of Science in Information Systems",
    year1: "2022-2024",
    description2: "Amrita Vishwa Vidyapeetham, Coimbatore, India",
    major2: "Bachelor of Technology in Computer Science",
    year2: "2016-2020",
};

const worktimeline = [{
    jobtitle: "Software Engineer Intern",
    where: "WhoozCooking",
    date: "January 2024 - July 2024",
},
{
    jobtitle: "Software Engineer ",
    where: "Cisco Systems",
    date: "Aug 2020 - April 2022",
},
{
    jobtitle: "Software Engineer Intern",
    where: "Cisco Systems",
    date: "January 2020 - July 2020",
},
];

const skills = [
    {
        category: "Programming Languages",
        items: [
            { name: "Java", value: 90 },
            { name: "C++", value: 80 },
            { name: "Python", value: 75 },
            { name: "JavaScript", value: 85 }
        ]
    },
    {
        category: "Frameworks",
        items: [
            {name: "SpringBoot", value: 85},
            {name:"Spring", value: 85},
            {name:"Flask",value: 80},
            {name: "RESTful API", value: 90}
        ]
    },
    {
        category: "Web Development",
        items: [
            { name: "MERN", value: 80 },
            { name: "HTML", value: 80 },
            { name: "CSS", value: 80 },
            {name: "GraphQl", value: 75}
        ]
    },
    {
        category: "DevOps and Cloud",
        items: [
            { name: "AWS", value: 80 },
            { name: "Git", value: 85 },
            { name: "Docker", value: 70 },
            { name: "Jenkins", value: 70 },

        ]
    },
    {
        category: "Tools and Database",
        items: [
            { name: "MongoDB", value: 80 },
            { name: "SQL", value: 90 },
            { name: "Postman", value: 70 }
        ]
    }
];

const dataportfolio = [{
    imgLight:moneyLightImage,
    imgDark:moneyImage,
    description: "Stock Portfolio Application\n ",

    link: "https://github.com/Chakradhar-Grandhi/stock-management-system",
},
    {
        imgLight: motmLight,
        imgDark: motmDark,
        description: "Minutes of the meeting Generator",
        link: "https://github.com/Chakradhar-Grandhi/Minutes-of-the-meeting-Generator",
    },
{

    imgLight: ecommerceLightImage,
    imgDark: ecommerceDarkImage,
    description: "E-Commerce Web Application",
    link: "https://github.com/RajatSharmaNEU/FreshHarvests",
},
{
    imgLight: healthcareLight,
    imgDark: healthcareDark,
    description: "Healthcare Analytics",
    link: "https://github.com/Chakradhar-Grandhi/Healthcare-Analytics",
},
{
    imgLight: covidLight,
    imgDark: covidDark,
    description: "Covid-19 Data Analysis",
    link: "https://github.com/Chakradhar-Grandhi/Covid-19-Data-Analysis",
},
{
    imgLight: footballAnalysisLightImage,
    imgDark: footballAnalysisDarkImage,
    description: "Football League Analysis",
    link: "https://github.com/Chakradhar-Grandhi/Football-League-Analysis",
},
{
    imgLight: portfolioLightImage,
    imgDark: portfolioDarkImage,
    description: "Professional Portfolio",
    link: "https://github.com/namandiwan/professional-portfolio",
},

];


const testimonials = [{
    name: "Avantika Nautiyal",
    title: "Product Manager at WhoozCooking",
    description: "\"I had the pleasure of mentoring Chakradhar in a technically challenging environment, and I am consistently impressed by his dedication and skills. He thrives in such settings, collaborating effectively with team members to deliver projects within designated timelines. A notable example is his work on RestAPI orchestration with third-party applications, meticulously considering delivery radius and pricing.\n" +
        "Chakradhar is committed to continuous learning and is always open to upskilling. During our database migration from MongoDB to AWS, he proactively identified areas where he needed assistance and compiled a list of open questions. This approach facilitated timely intervention from subject matter experts, ensuring the project remained on track.\n" +
        "He is a critical thinker, adept at proposing solutions for open-ended questions. His work on image compression significantly improved our website's performance, showcasing his ability to address complex technical challenges.\n" +
        "Furthermore, Chakradhar is an excellent team player who diligently documents procedures, contributing to building organizational knowledge. His proactive communication and willingness to seek help when needed make him an invaluable asset to any team.\n" +
        "I highly recommend Chakradhar for any role that demands technical expertise, collaborative spirit, and a solutions-oriented mindset\""
},

];

const contactConfig = {
    YOUR_EMAIL: "chakradhar.grande@gmail.com",
    YOUR_FONE: "(857)-693-8784",
    description: "Have a project for me? Think I'd be a good fit for your team? I'd love to hear from you, give me a shout by email or by using the form below if you'd like to get in contact with me.",
    YOUR_SERVICE_ID: "service_ie7276r",
    YOUR_TEMPLATE_ID: "template_ir17afs",
    YOUR_USER_ID: "pZ_qA7MI_Zc7E64oJ",
};

const socialprofils = {
    github: "https://github.com/Chakradhar-Grandhi",
    facebook: "https://www.facebook.com/grandhi.chakradhar",
    linkedin: "https://www.linkedin.com/in/chakradhar-grandhi-27691b170/",
    twitter: "https://x.com/chgrandh",
};
export {
    meta,
    dataabout,
    testimonials,
    education,
    worktimeline,
    dataportfolio,
    skills,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};