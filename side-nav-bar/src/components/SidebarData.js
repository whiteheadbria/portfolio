import React from "react";
import { Home } from "grommet-icons";
import { HiBadgeCheck } from "react-icons/hi";
import { Github } from "grommet-icons";
import { HiMail } from 'react-icons/hi';
import { Linkedin } from "grommet-icons";



export const SidebarData = [ 
    {
        title: "home",
        path: "/home",
        icon: <Home />
    },

    {
        title:"about",
        path:"/about-me",
    },

    {
        title: "badges",
        path:"/badges",
        icon: <HiBadgeCheck />
    },

    {
        title: "projects",
        path:"/projects",
        icon: <Github />
    },


    {
        title: "lets keep in touch",
        path:"/keep-in-touch",
        icon: <HiMail />
    },

    {
        title: "linkedin",
        path:"/linkedin",
        icon: <Linkedin />
    },

];