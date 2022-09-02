import React from "react";
// Open and close Saidebar View, use the useState() hook
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons/lib";

.sidenavbar {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #708090;
    overflow-x: hidden;
    transition: 1s;
    padding-top: 60px;
  }
  
  .sidenavbar a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 30px;
    color: #c0c2c9;
    display: block;
    transition: 0.1s;
  }
  
  .sidenavbar a:hover {
    color: #fcfaf0;
  }
  
  .sidenavbar .closebutton {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
  }


  const Sidebar = () => 


