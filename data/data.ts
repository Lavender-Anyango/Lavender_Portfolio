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
        { id: 1, name: 'Java' },
        { id: 2, name: 'Typescript' },
        { id: 3, name: 'Next' },
        { id: 4, name: 'React' },
        { id: 5, name: 'Node' }
    ],
    [
        { id: 0, name: 'Spring boot' },
        { id: 1, name: 'MYSQL' },
        { id: 2, name: 'MongoDB' },
        { id: 3, name: 'JPA' },
        { id: 4, name: 'EJS' },
        { id: 5, name: 'Docker' }
    ],
    [
        { id: 0, name: 'Redux' },
        { id: 1, name: 'Technical Support' },
        { id: 2, name: 'Restful service development' },
        { id: 3, name: 'Microfrontends' },
        { id: 4, name: 'Microservices' },
        { id: 5, name: 'GraphQL' }
    ],
    [
        { id: 0, name: 'HTML' },
        { id: 1, name: 'CSS' },
        { id: 2, name: 'Git' },
        { id: 3, name: 'Solidity' },
        { id: 4, name: 'Blockchain' },
        { id: 5, name: 'Value Added Service support' }
    ]
];

export const reviewsData = [
    {
        id: 0,
        name: 'Bolaji',
        company: 'ComradeNG',
        text:
            'I rarely come across real talents who stand out like Alimazoya. I had the pleasure of working with Alimazoya for a year at comradeNG as his team lead. Alimazoya`s ability to handle multiple software projects was exceptional, this made a dramatic increase in the productivity level of our engineering team. He is smart, dedicated and reliable.'
    },
    {
        id: 1,
        name: 'Michael',
        company: 'eTranzact PLC',
        text:
            'Alimazoya is a thoughtful and resourceful full stack developer who is always willing to learn and contribute meaningfully to organizational growth, I worked with him at eTranzact PLC to build backend microservices and APIs'
    },
    {
        id: 2,
        name: 'Jeff',
        company: 'Upwork Inc',
        text:
            'Alimazoya is a great developer that created a live stream embed player for my website, making it possible for me to stream from my website to multiple media'
    }
];

export const contactData = [
    { id: 0, name: 'Github profile:', icon: github, link: 'https://github.com/Davidalimazo' },
    { id: 1, name: 'LinkedIn profile:', icon: linkedin, link: 'https://www.linkedin.com/in/alimazoya-david' },
    { id: 2, name: 'Email:', icon: email, link: 'Davidalimazo@gmail.com' }
];

export const projectData = [
    { id: 0, name: 'My Portfolio', link: '#', collabo: 'solo', img: portfolio, repo: '#', disabled: false },
    {
        id: 1,
        name: 'AYD Media',
        link: 'https://davidalimazo.github.io/portfolio.github.io/',
        collabo: 'solo',
        img: aydmedia,
        repo: 'https://github.com/Davidalimazo/portfolio.github.io',
        disabled: false
    },
    {
        id: 2,
        name: 'Designlotw',
        link: 'https://designlotw.com/',
        collabo: 'solo',
        img: designlotw,
        repo: 'https://github.com/Davidalimazo/adebisi_portfolio',
        disabled: true
    },
    {
        id: 3,
        name: 'ComradeNG',
        link: 'https://comrade.ng/',
        collabo: 'collaborated',
        img: comradeng,
        repo: 'https://gitlab.com/comradeng/comradeng',
        disabled: true
    },
    {
        id: 4,
        name: 'Ayd Dashboard',
        link: 'https://https://ayd_dashboard.surge.sh/',
        collabo: 'solo',
        img: aydmedia_dashboard,
        disabled: false,
        repo: 'https://github.com/Davidalimazo/ayd_dashboard'
    },
    {
        id: 5,
        name: 'Robonytics',
        link: 'https://roboadvisor-client.vercel.app/',
        collabo: 'solo',
        img: robonytics,
        repo: 'https://github.com/Davidalimazo/roboadvisor-client',
        disabled: false
    },
    {
        id: 6,
        name: 'PocketMoni Dashboard',
        link: 'https://getpocketmoni.com/mypocketmoni',
        collabo: 'collaborated',
        img: pocketmoni,
        repo: '#',
        disabled: true
    }
];
