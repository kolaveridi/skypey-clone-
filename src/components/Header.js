import React from "react";
import "./Header.css";

function Header ({user,activeuserstatus}){
    console.log('username inside Header is',user);
    console.log('activeuser inside header is',activeuserstatus);
    //const {name,status}=user;
    return(
        <header className="Header">
        <h1 className="Header__name">{user}</h1>
        <p className="Header__status">{activeuserstatus}</p>
        </header>
    );
}

export default Header;
