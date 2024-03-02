import React, { useState,useRef, useEffect } from "react";



function Nav(){
    const menu = useRef(null);
    const menuOptionsBar = useRef(null);
   
    
    // const [showOptions, setShowOptions] = useState(false);

    function handleViewClick(){
        (menu.current.style.marginLeft === "auto") ? (menu.current.style.marginLeft = "0"):(menu.current.style.marginLeft = "auto");
        (menuOptionsBar.current.style.display === "none") ? (menuOptionsBar.current.style.display = "flex"):(menuOptionsBar.current.style.display = "none");
        
    }

    useEffect(()=>{
        menu.current.style.marginLeft = "auto";
        menuOptionsBar.current.style.display = "none";
        
    },[]);


    return(
        <div className="nav-bar">
            <div className="inner-nav">
                <div>
                    <img src="bus-icon-white.png" alt="bus-icon" className="bus-icon-img"/>
                </div>
                
                <div className="menu-options" ref={menuOptionsBar}>
                    <div className="hidden">
                        <a href="/">Booking View</a>
                    </div>
                    <div className="hidden">
                        <a href="/dashboard">Passenger View</a>
                    </div>
                </div>
                
                <div className="menu" ref={menu}>
                    <button onClick={handleViewClick}>
                        <img src="icon.png" alt="menu-icon" className="menu-icon-img"/>
                    </button>
                </div>
            </div>
                
            
        </div>
    )
}

export default Nav;