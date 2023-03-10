import img1 from "../assets/amazon.svg"
import img2 from "../assets/kellegy.svg"
import img3 from "../assets/pepsico.svg"
import img4 from "../assets/havas.svg"
import img5 from "../assets/workdoy.svg"
import img6 from "../assets/marriott.svg"
import img7 from "../assets/yale.svg"
import img8 from "../assets/grant.svg"
import {MdOutlineEventAvailable} from 'react-icons/md'
import {FiUsers} from 'react-icons/fi'
import {TbFileSpreadsheet, TbClockEdit} from 'react-icons/tb'
export const headerData = [
    // {
    //     id: 1,
    //     logo: logo
    // },
    {
        id: 2,
        linkTitle:'Product',
       
    },
    {
        id: 3,
        linkTitle:'Resources',
    },
    {
        id: 4,
        linkTitle:'Pricing',
        url:'pricing'
    },
    {
        id: 5,
        linkTitle:'Talk to sales',
        url:'sales'
    },
    {
        id: 6,
        linkTitle:'Login',
        url:'login'
    },
   
]

export const color={
    primary: '#491C8B',
    white: '#fff',
    secondary: '#001141',
    black:'#000'
}

export const company =[
    {
        id: '1',
        img: img1
    },
    {
        id: '2',
        img: img2
    },
    {
        id: '3',
        img: img3
    },
    {
        id: '4',
        img: img4
    },
    {
        id: '5',
        img: img5
    },
    {
        id: '6',
        img: img6
    },
    {
        id: '7',
        img: img7
    },
    {
        id: '8',
        img:img8
    },
    
]

export const trackData = [
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