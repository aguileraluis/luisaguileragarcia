import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  getequal,
  littleheaven,
  breakfastime,
  carrent,
  jobit,
  procarport,
  authorlanding,
  tripguide,
  express,
  stripe,
  mailchimp,
  emailjs,
  procarportwebsite,
  littleheavenwebsite,
  authorlandingwebsite,
  crudwebsite,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front End Developer",
    icon: web,
  },
  {
    title: "Back End Developer",
    icon: mobile,
  },
  {
    title: "Full Stack React Developer",
    icon: backend,
  },
  {
    title: "Save Money With A Full Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Express",
    icon: express,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MailChimp",
    icon: mailchimp,
  },
  {
    name: "Stripe",
    icon: stripe,
  },
  {
    name: "EmailJS",
    icon: emailjs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Fullstack Software Developer Contractor",
    company_name: "Pro Carport Buildings LLC",
    icon: procarport,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Current",
    points: [
      "Built a full stack web application for a carport business, allowing clients to view carports, submit a proposal for a quote and browse through images and different pages",
      "Integrated payment processing with StripeJS",
      "Integrated emails with EmailJS",
      "Created a cart for the measurements of the carports",
    ],
  },
  {
    title: "Fullstack Software Developer Contractor",
    company_name: "Little Heaven Bed & Breakfast",
    icon: littleheaven,
    iconBg: "#383E56",
    date: "October 2023 - Current",
    points: [
      "	Created a full stack web application showing the client's Bed and Breakfast, added pver 10 pages full of content, images, and text",
      "	Created a booking engine for their rooms where I showcased the rooms that they have for booking using Moment.JS, JavaScript, HTML, CSS, NodeJS, EmailJS, MongoDB, ExpressJS, and React JS",
      "	Integrated payment processing with Stripe.JS",
      "	Integrated emails with EmailJS and MailChimp using front-end and back-end technologies such as React and Node JS",
    ],
  },

  {
    title: "General Manager",
    company_name: "Breakfastime Inc.",
    icon: breakfastime,
    iconBg: "#383E56",
    date: "April 2016 - Current",
    points: [
      "Trained and managed a team of 30 employees working in the kitchen and the front of the house",
      "Made sure all orders were being processed correctly from the front of the house to the back of the house",
      "Conducted interviews and hired staff members",
      "Increased the sales of the restuarant by 10% in the time that I have been managing the store",
    ],
  },
  {
    title: "National Organizer",
    company_name: "GetEQUAL",
    icon: getequal,
    iconBg: "#E6DEDD",
    date: "April 2014 - April 2018",
    points: [
      "GetEQUAL was, from 2010 to 2018, an American non-profit organization and advocacy group which advocates for LGBT social and political equality through confrontational but non-violent direct action.",
      "As a national organizer I worked with many groups across the United States to plan, and execute national campaigns.",
      "I worked from home building workplans, and executing my workplans.",
      "We won national and local campaigns around marriage equality, immigration campaigns to release individuals in detention, and local campaigns focused on individual needs of the cummunity",
      "My main focus was to build teams across the USA who can plan and implement their own campains.",
    ],
  },
];

const testimonials = [
  {
    testimonial: `- Luis, I just finished reading every single thing and looked at the AMAZING JOB that you did!!
      That is sooooooo beautiful!!! 
      - I think everything looks so great though. You did an AMAZING JOB!!. `,
    name: "Jonathan & Maria Hunt",
    designation: "Owners",
    company: "Little Heaven Bed & Breakfast",
    image: "https://i.postimg.cc/J0BvGTLr/jonathanmariahunt.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Luis does.",
    name: "Luis Morales",
    designation: "Owner",
    company: "Pro Carport Buildings LLC",
    image: "https://i.postimg.cc/jjDFBvS4/IMG-3490.jpg",
  },
  {
    testimonial:
      "I wanted to take a moment to thank you for the services you have provided. Luis has been a pleasure to work with, professional and timely. Job well done!",
    name: "Carter Neill Holmes",
    designation: "Author",
    company:
      "Happy Gay Christian Hereafter: 8 Steps to Reconcile Your Identity to Family and Faith or Leave without Regret",
    image:
      "https://i.postimg.cc/DwxzxfSb/uct9rm2l41m964ktvpaii1mk6p-SY450-CR0-0-450-450.jpg",
  },
];

const projects = [
  {
    name: "Pro Carport Buildings",
    description:
      "Web application that enables users to search and view carports, request a free quote, select various sizes, and process a payment when they order a carport.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "node",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
      {
        name: "emailjs",
        color: "green-text-gradient",
      },
    ],
    image: procarportwebsite,
    source_code_link: "https://github.com/aguileraluis/procarportbuildings",
    website_link: "https://procarportbuildings.onrender.com/",
  },
  {
    name: "Little Heaven Bed & Breakfast",
    description:
      "Web-based platform that allows users to search, book, and manage room rentals, providing a convenient and efficient solution for showcasing the Bed & Breakfast, rooms, services, and functionality to send emails, collect payment, and update room content.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "stripe",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "emailjs",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: littleheavenwebsite,
    source_code_link:
      "https://github.com/aguileraluis/littleheaven-bedandbreakfast",
    website_link: "https://littleheavenbedandbreakfast.onrender.com/",
  },
  {
    name: "Author's Landing Page",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: authorlandingwebsite,
    source_code_link: "https://github.com/aguileraluis/landingpage",
    website_link: "https://authorlanding.w3spaces.com/index.html",
  },
  {
    name: "Create Read Update Delete To Do Application",
    description:
      "This is an application I created for my to-do list. It allows you to create a task, read a task, update a task, and delte a task. I used tailwind CSS to add a color theme where you can select the hue of the website and you can go from dark mode to light mode with the use of local storage.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: crudwebsite,
    source_code_link: "https://github.com/aguileraluis/todolist",
    website_link: "- https://endearing-zabaione-327c4b.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
