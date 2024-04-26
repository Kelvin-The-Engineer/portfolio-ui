import React, { useRef } from "react";
import { useNavigate } from 'react-router-dom';
import AccountSettings from "./AccountSettings";
import { useAuth } from "../providers/UserInfoProvider";
const NavBar =()=>{
    const  AuthStatus = useAuth();
    const navigate = useNavigate();
    const handleClick = (navKey: string) => navigate(`/${navKey}`);
    return (
       <>
    <ol>
  <button type="button" onClick={()=>handleClick('')}>
      Home
    </button>
    <button type="button" onClick={()=>handleClick('community')}>
      Community Cleanups
    </button>
    <button type="button" onClick={()=>handleClick('projects')}>
      Personal Projects
    </button>
   
    {AuthStatus.isAuthenticated && 
    <button type="button" onClick={()=>handleClick('specials')}>
      Secret Button
    </button> }
    <button type="button" onClick={()=>handleClick('about')}>
      About
    </button>
     <AccountSettings AuthStatus= {AuthStatus}/>
    </ol>
    
    </>
    )
}

export default NavBar