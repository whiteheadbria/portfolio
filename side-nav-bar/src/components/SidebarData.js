import React from "react";
import { GrHome } from 'react-icons/gr';
import { HiBadgeCheck } from 'react-icons/hi';
import { GrProjects } from 'react-icons/gr';
import { GrGithub } from 'react-icons/gr ';
import { HiMail } from 'react-icons/hi';
import { GrLinkedinOption } from "react-icons/gr";


export const SidebarData = [ 
    {
        title: "home",
        path: "/home",
        icon: <GrHome />
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
        icon: <GrProjects />
    },

    {
        title: "github",
        path:"/github",
        icon: <GrGithub />
    },

    {
        title: "lets keep in touch",
        path:"/keep-in-touch",
        icon: <HiMail />
    },

    {
        title: "linkedin",
        path:"/linkedin",
        icon: <GrLinkedinOption />
    },

];