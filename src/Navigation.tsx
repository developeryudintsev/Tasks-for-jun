import React from "react";
import { NavLink } from "react-router-dom";

export let Navigation=()=>{
    return(
        <div>
           <div><button> <NavLink to={'/page1'}>page1</NavLink></button></div>
            <div> <button> <NavLink to={'/page2'}>page2</NavLink></button></div>
        </div>
    )
}