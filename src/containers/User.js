


import React from "react";
import "./User.css";
const _ = require("lodash");
const User = ({ user }) => {
 //const { name, profile_pic, status } = user;
 console.log()
 console.log('user inside User is',_.values(user));
 let abc=_.values(user);
 return (
 <div className="User">
 <img src={abc[0].profile_pic} alt={abc[0].name} className="User__pic" />
 <div className="User__details">
 <p className="User__details-name">{abc[0].name}</p>
 <p className="User__details-status">{abc[0].status}</p>
 </div>
 </div>
 );
};

export default User;
