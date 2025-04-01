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
    aboutme: "I’m a Backend-focused Software Engineer with over 3 years of experience, specializing in Java (Spring Boot), RESTful APIs, and event-driven systems using Kafka, OAuth2, and JWT.\n\nI’ve worked on large-scale backend systems in the financial and logistics domains, with a strong focus on performance, scalability, and security. I also bring full-stack experience with the MERN stack (MongoDB, Express.js, React, Node.js), allowing me to contribute across the development lifecycle when needed.\n\nI recently completed my Master’s in Information Systems at Northeastern University in Boston. I’m passionate about solving complex engineering problems and constantly expanding my skill set.In my free time, I enjoy playing the guitar.",
}

const education = {
    title: "Education",
    description1: "Northeastern University, Boston, MA",
    major1: "Master of Science in Information Systems",
    year1: "2022-2024",
    description2: "Amrita Vishwa Vidyapeetham, Coimbatore, India",
    major2: "Bachelor of Technology in Computer Science",
    year2: "2016-2020",
};

const worktimeline = [
    {
        jobtitle: "Software Engineer Intern",
        where: "WhoozCooking, Boston, MA",
        date: "Jan 2024 – Jul 2024",
        summary: "Worked on optimizing delivery logistics and improving backend reliability. Led integration of third-party APIs, improved payment security using OAuth2 and JWT, and automated CI/CD workflows using AWS and Terraform."
    },
    {
        jobtitle: "Software Engineer II",
        where: "Cisco Systems, Bangalore, India",
        date: "Aug 2021 – Apr 2022",
        summary: "Built and maintained high-throughput microservices using Spring Boot and Kafka. Focused on fault-tolerant, event-driven systems and introduced TDD practices to improve code quality and reliability."
    },
    {
        jobtitle: "Software Engineer",
        where: "Cisco Systems, Bangalore, India",
        date: "May 2020 – Jul 2021",
        summary: "Developed financial analytics tools and real-time visualizations using Java and React. Improved data processing performance and streamlined CI/CD pipelines for faster releases."
    },
    {
        jobtitle: "Software Engineer Intern",
        where: "Cisco Systems, Bangalore, India",
        date: "Jan 2020 – Apr 2020",
        summary: "Created a network analytics tool using Python and Flask to enhance protocol analysis and reporting efficiency."
    }
];


const skills = [
    {
        category: "Programming Languages",
        items: [
            { name: "Java (8+)", value: 95 },
            { name: "C++", value: 75 },
            { name: "Python", value: 80 },
            { name: "JavaScript", value: 85 },
            { name: "TypeScript", value: 80 }
        ]
    },
    {
        category: "Backend Frameworks & APIs",
        items: [
            { name: "Spring Boot", value: 95 },
            { name: "Spring / Spring JPA", value: 90 },
            { name: "Spring Batch", value: 85 },
            { name: "Node.js / Express.js", value: 80 },
            { name: "RESTful API", value: 95 }
        ]
    },
    {
        category: "Web & Frontend",
        items: [
            { name: "React.js", value: 80 },
            { name: "Redux", value: 75 },
            { name: "MERN Stack", value: 80 },
            { name: "HTML", value: 80 },
            { name: "CSS", value: 75 }
        ]
    },
    {
        category: "Additional Backend Tech",
        items: [
            { name: "GraphQL", value: 75 },
            { name: "gRPC", value: 70 },
            { name: "Flask", value: 75 },
            { name: "Kafka", value: 90 },
            { name: "Highcharts", value: 70 }
        ]
    },
    {
        category: "DevOps & CI/CD",
        items: [
            { name: "Git / GitHub Actions", value: 90 },
            { name: "Jenkins", value: 75 },
            { name: "Docker", value: 80 },
            { name: "Terraform", value: 80 },
            { name: "CI/CD Pipelines", value: 90 }
        ]
    },
    {
        category: "Cloud & Infrastructure",
        items: [
            { name: "AWS EC2 / S3 / RDS", value: 85 },
            { name: "AWS Lambda / SNS", value: 80 },
            { name: "CloudWatch", value: 80 },
            { name: "OAuth 2.0 / JWT", value: 90 },
            { name: "VPC & Networking", value: 75 }
        ]
    },
    {
        category: "Databases & Tools",
        items: [
            { name: "MongoDB", value: 85 },
            { name: "PostgreSQL", value: 85 },
            { name: "SQL", value: 90 },
            { name: "Swagger", value: 80 },
            { name: "Postman", value: 80 }
        ]
    },
    {
        category: "Other Tools",
        items: [
            { name: "Jira", value: 75 },
            { name: "Shell Scripting", value: 70 },
            { name: "Maven", value: 75 },
            { name: "Gradle", value: 75 },
            { name: "Linux", value: 80 }
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
    link: "https://github.com/Chakradhar-Grandhi/Personal-Portfolio",
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