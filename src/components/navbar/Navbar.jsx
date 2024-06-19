import { useState } from "react";
import "./navbar.scss" 
function Navbar(){
    const [open,setOpen]=useState(false);
return(
    <nav>
        <div className="left">
            <a href="/" className="logo">
                <img src="/logo.png" alt="" />
                <span>BirlaEstate</span>
            </a>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contacts</a>
            <a href="/">Agent</a>

        </div>
        <div className="right">
        <a href="/">Sign in</a>
        <a href="/" className="register">Sign up</a>

        <div className="menuIcon">
            <img src="/menu.png" alt="" onClick={()=>setOpen((prev)=>!prev)}/>
        </div>
        <div className={open? "menu active " : "menu"}>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contacts</a>
            <a href="/">Agent</a>
            <a href="/">Sign in</a>
            <a href="/">Sign up</a>
        </div>
        </div>
        
    </nav>
)
}

export default Navbar;