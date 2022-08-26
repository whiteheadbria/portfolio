import React from "react";

const SideNav = (props) => {

    return (
        <div id="sidenav" className="sidenavbar">
            <a href="javascript:void(0)" class="closebutton" onclick="closeNav()">&times;</a>
        <span class="material-symbols-outlined">
            <a href="index.html">home</a> </span>
        <a href="aboutme.html" > about me </a>
        <a href="badges.html"> badges </a> 
        <a href="projects.html"> projects </a>  
        <a href="https://github.com/whiteheadbria" target="_blank" rel="noopener noreferrer">github</a> 
        <a href="mailto:whitehead.bria@protonmail.com?Subject =Found your portfolio website"> let's keep in touch</a> 
        <a href="https://www.linkedin.com/in/briawhitehead" target="_blank" rel="noopener noreferrer"> linkedin</a> 

        </div>


    );
};

export default SideNav;