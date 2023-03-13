import {GiTrade, GiScales} from 'react-icons/gi'
import {BsTrophy,BsPersonVideo3} from 'react-icons/bs'
import {MdOutlineMonitorHeart, MdOutlineEventAvailable, MdPodcasts} from 'react-icons/md'
import {FiMonitor, FiUsers} from 'react-icons/fi'
import {TbFileCertificate, TbClockEdit, TbFileSpreadsheet} from 'react-icons/tb'
import {ImStack} from 'react-icons/im'
import {AiFillCodeSandboxCircle,AiOutlineTeam } from 'react-icons/ai'
import {FaBrain} from 'react-icons/fa'
import dark from '../assets/icon1.svg'

import icon1 from '../assets/asana.png'
import icon2 from '../assets/azuread.png'
import icon3 from '../assets/Yellow logo.png'
import icon4 from '../assets/github.png'
import icon5 from '../assets/gmail.png'
import icon6 from '../assets/calender.png'
import icon7 from '../assets/harvest.png'
import {HiOutlineMailOpen} from 'react-icons/hi'
import {CgNotes, CgScreen} from 'react-icons/cg'
import {FaGlasses} from 'react-icons/fa'
import {CiCalculator1,CiSquareQuestion} from 'react-icons/ci'
import img1 from '../assets/6409a47a12b4fe7321c28752_Self-management- What it is and why it’s important 1.png'
import img2 from '../assets/6409a47a12b4fe7321c28752_Self-management- What it is and why it’s important 1.png'
import img3 from '../assets/6409b3cde7c9a7393c6bd5a8_why is time tracking important 1.png'
import {BiChat} from 'react-icons/bi'
export const industryData ={
    industry:[
    {
        id: 1,
        name:"Accountants",
        icon:<GiTrade/>,
        url: 'accountants'
    },
    {
        id: 2,
        name:"Agencies",
        icon:<BsTrophy/>,
        url: 'agencies'
    },
    {
        id: 3,
        name:"Consulting Firms",
        icon:<MdOutlineMonitorHeart/>,
        url: 'consulting-firms'
    },
    {
        id: 4,
        name:"Creatives",
        icon:< FiMonitor/>,
        url: 'creatives'
    },
    {
        id: 5,
        name:"Employees ",
        icon:< TbFileCertificate/>,
        url: 'employees'
    },
    {
        id: 6,
        name:"Freelancers",
        icon:< BsPersonVideo3/>,
        url: 'freelancers'
    },
    {
        id: 7,
        name:"Lawyers",
        icon:<GiScales/>,
        url: 'lawyers',
    },
    {
        id: 8,
        name:"Project Managers",
        icon:< ImStack/>,
        url: 'project-managers'
    },
    {
        id: 9,
        name:"Remote Workers",
        icon:< FiMonitor/>,
        url: 'remote-workers'
    },
    {
        id: 10,
        name:"Software Companies",
        icon:< AiFillCodeSandboxCircle/>,
        url: 'software-companies'
    },
    {
        id: 12,
        name:"Teams",
        icon:< AiOutlineTeam/>,
        url: 'teams'
    },
],
apps:[
    {
       item:[
        {
        id:1,
        name: 'Memory App',
        icon: <FaBrain/>,
        content: 'See everything you work on each day',
        style:"red"
       },
       
    ],
    item2:[
        {
            id:2,
            name: 'Timely Search',
            logo: dark,
            content: 'Find anything you worked on',
           }
    ]
    }
],
}

export const integrationData = [
    {
        id:1,
        icon: icon1,
        name: 'Asana',
        url: 'asana'
    },
    {
        id:2,
        icon: icon2,
        name: 'Azure AD',
        url: 'azure'
    },
    {
        id:3,
        icon: icon3,
        name: 'Basecamp',
        url: 'basecamp'
    },
    {
        id:4,
        icon: icon4,
        name: 'Github',
        url: 'github'
    },
    {
        id:5,
        icon: icon5,
        name: 'Gmail',
        url: 'gmail'
    },
    {
        id:6,
        icon: icon6,
        name: 'Google Calender',
        url: 'google-calender'
    },
    {
        id:7,
        icon: icon7,
        name: 'Harvest',
        url: 'harvest'
    },
]
export const featureData = [
    {
        id: 1,
        icon: <TbClockEdit />,
        title: 'Track time',
        content:'Get the complete picture of your work day with zero effort',
        link:'Automate time tracking',
        url: 'automatic-time-tracking'
    },
    {
        id: 2,
        icon: <MdOutlineEventAvailable />,
        title: 'Track projects',
        content:'Monitor budgets, hours and activities in real time',
        link:'Run smarter projects',
        url: 'track-projects'
    },
    {
        id: 3,
        icon: <FiUsers />,
        title: 'Track teams',
        content:'Get a complete overview of your team’s time',
        link:'Lead happier teams',
        url: 'track-teams'
    },
    {
        id: 4,
        icon: <TbFileSpreadsheet />,
        title: 'Track plans',
        content:'Real-time feedback loop of how plans actually unfold',
        link:'Project and team planning',
        url: 'planning'
    },
]


export const learnData = [
    {
        id: 1,
        icon: <CgNotes />,
        title: 'Blog',
        content:'Productivity insights and advice, plus Timely tips and product news.',
        url: 'blog'
    },
    {
        id: 2,
        icon: <FaGlasses />,
        title: 'Time tracking guide',
        content:'Here’s everything you ever needed to know about time tracking.',
        url: 'time-tracking-guide'
    },
    {
        id: 3,
        icon: <CiCalculator1 />,
        title: 'Time card calculator',
        content:'Make calculating employees’ hours simple and quick.',
        url:'time-card-calculator',
    },
    {
        id: 4,
        icon: <BsTrophy />,
        title: 'Success stories',
        content:'See how teams like yours reach peak productivity with Timely.',
        url:'case-studies',
    },
    {
        id: 5,
        icon: <CgScreen />,
        title: 'Demo',
        content:'Watch quick videos to learn the basics of Timely.',
        url:'webiners',
    },
    {
        id: 6,
        icon: <MdPodcasts />,
        title: 'Podcasts',
        content:'A 5-episode probe of our complex relationship with time.',
        url:'podcasts',
    },
]

export const supportData =[
    {
        id: 1,
        name:"Talk to sales",
        icon:<BiChat/>,
        url: 'sales'
    },
    {
        id: 2,
        name:"Help center",
        icon:<CiSquareQuestion/>,
        url: '/'
    },
    {
        id: 3,
        name:"Contact us",
        icon:<HiOutlineMailOpen/>,
        url: 'contact'
    },
]

export const blogData =[
    {
        id: 1,
        img: img1,
        content:'Self-management skills: What they are and why they’re important',
        url:'self-management-skills'
    },
    {
        id: 2,
        img: img2,
        content:'How to track time in a team',
        url:'how-to-track-time'
    },
    {
        id: 3,
        img: img3,
        content:'Why is Time Tracking Important',
        url:'why-is-time-tracking-important'
    },
]