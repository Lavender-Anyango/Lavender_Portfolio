import workbench from '../asset/workbench.png';
import badge from '../asset/badge.png';
import stat from '../asset/stat.png';
import github from '../asset/github_purple.png';
import linkedin from '../asset/linkedin_purple.png';
import email from '../asset/mail_purple.png';
import aydmedia from '../asset/aydmedia.png';
import aydmedia_dashboard from '../asset/ayd_dashboard.png';
import comradeng from '../asset/comardeng.png';
import designlotw from '../asset/designlotw-home.png';
import pocketmoni from '../asset/pocketMoni.png';
import robonytics from '../asset/robonytics-landing-page.png';
import portfolio from '../asset/newportfolio.png';
import myportfolio from '../asset/myportfolio.png';
import mpb from '../asset/mpb_app.png';
import icook from '../asset/icook.png'
import kipepeo from '../asset/kipepeo.png'
import akili from '../asset/akili.png'

export const navbar = [
    { id: 0, name: 'Home', link: '/' },
    { id: 2, name: 'Projects', link: '/projects' },
    { id: 4, name: 'Contact', link: '/contact' }
];
export const proficiency = [
    { id: 0, icon: workbench, name: 'Expertise', details: 'Full Stack Developer' },
    { id: 1, icon: badge, name: 'Experience', details: '3 years' },
    { id: 2, icon: stat, name: 'Projects', details: '10 projects completed' }
];

export const skillsData = [
    [
        { id: 0, name: 'Javascript' },
        { id: 1, name: 'Python' },
        { id: 2, name: 'Typescript' },
        { id: 3, name: 'Next' },
        { id: 4, name: 'React' },
    ],
    [
        { id: 0, name: 'Postgresql' },
        { id: 1, name: 'MYSQL' },
        { id: 2, name: 'MongoDB' },
        { id: 3, name: 'Redis' },
        { id: 5, name: 'Product Management' }
    ],
    [
        { id: 0, name: 'HTML/CSS' },
        { id: 2, name: 'Git' },
        { id: 3, name: 'Data Structures' },
        { id: 4, name: 'UI/ UX Design' },
        { id: 5, name: 'UX Research' }
    ]
];

export const reviewsData = [
    {
        id: 0,
        name: 'Linda Kamau',
        company: 'AkiraChix',
        text: 'Highly efficient software developer with expertise in multiple programming languages. Lavender has demonstrated the ability to complete projects quickly while delivering high-quality software. I fully recommend Lavender for any software engineering role; they will excel.'
    },
    {
        id: 1,
        name: 'Irene Aragona',
        company: 'ALX',
        text: 'I rarely encounter talents who stand out like Lavender.I was impressed by their ability to manage multiple software projects effectively, significantly boosting our team’s productivity. Lavender is smart, dedicated, and reliable.She was chosen as one of the Learning Ambassadors because of her reliabilty and quick wits'
    },
    {
        id: 2,
        name: 'Tevin Isaac',
        company: 'ICP',
        text: 'Lavender is an exceptional developer who created a live stream embed player for my website. This development enabled me to stream content from my site to multiple media platforms seamlessly.'
    },
    {
        id: 3,
        name: 'Brandon',
        company: 'LinkedIn',
        text: 'Lavender is a thoughtful and resourceful full-stack developer who is always eager to learn and contribute to organizational growth. I collaborated with Lavender to develop a backend microservices and Payment API while working on a product called Skin Soko, and their contributions were invaluable.'
    }
];

export const contactData = [
    { id: 0, name: 'Github profile:', icon: github, link: 'https://github.com/ven8462' },
    { id: 1, name: 'LinkedIn profile:', icon: linkedin, link: 'https://www.linkedin.com/in/lavender-anyango-a24a2a2b2/' },
    { id: 2, name: 'Email:', icon: email, link: 'anyangolavenderr@gmail.com' }
];

export const projectData = [
    {
        id: 0,
        name: 'My Portfolio',
        link: '#',
        collabo: 'solo',
        img: myportfolio,
        repo: 'https://github.com/Lavender-Anyango/Lavender_Portfolio',
        disabled: false
    },
    {
        id: 1,
        name: 'iCook',
        link: 'https://github.com/ven8462/iCooK',
        collabo: 'solo',
        img: icook,
        repo: '#',
        disabled: false
    },
    {
        id: 2,
        name: 'AkiliQuiz',
        link: 'https://akili-quiz.vercel.app/',
        collabo: 'collaborated',
        img: akili,
        repo: 'https://github.com/Lavender-Anyango/AkiliQuiz',
        disabled: false
    },
    {
        id: 3,
        name: 'Kipepeo',
        link: 'https://www.figma.com/design/KTOfYOWEb09uQb2mFyhZtm/Kipepeo?node-id=0-1&t=roUeEWKlyYzzT9zd-1',
        collabo: 'solo',
        img: kipepeo,
        repo: 'https://www.figma.com/design/KTOfYOWEb09uQb2mFyhZtm/Kipepeo?node-id=0-1&t=roUeEWKlyYzzT9zd-1'
    }
];

export const experienceData = [
    {
        id: 0,
        title: 'Information Technology',
        company: 'codeHive - AkiraChix',
        date: 'Feb, 2024 - present',
        details:
            'Currently in the codeHive program by AkiraChix undertaking both backend and frontend development, with a focus on Python and JavaScript. I have also delved into data and software architecture, UI/UX design, and UX research. Additionally, my skill set includes product management, Android development, machine learning, and IoT, equipping me with a diverse range of capabilities to tackle various technological challenges.'
    },
    {
        id: 1,
        title: 'Software Engineering - Backend Development',
        company: 'ALX',
        date: '2023 - 2024',
        details:
            'Gained expertise in server-side programming with Python, Java, and Node.js. Developed skills in API design, database management (SQL and NoSQL), and cloud services. Proficient in using tools like DataDog for monitoring and performance optimization, and NGINX for load balancing and web server management. Focused on building scalable applications, implementing security measures, and optimizing overall system performance'
    }
];
