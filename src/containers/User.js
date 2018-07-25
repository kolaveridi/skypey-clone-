


import React from "react";
import "./User.css";
const _ = require("lodash");
const User = ({ user }) => {
 //const { name, profile_pic, status } = user;
 console.log()
 console.log('user inside User is',_.values(user));
 let abc=_.values(user);
 console.log(abc);
 const show=abc.map((val,index)=> {
  return(
      <div>
      <img src={val.profile_pic} alt={val.name} className="User__pic"/>
      <p className="User__details-name">{val.name}</p>
      <p className="User__details-status">{val.status}</p>
      </div>
  );
});

 return (
 <div>
 {show}
 </div>
 );
};
// <img src={abc[1].profile_pic} alt={abc[1].name} className="User__pic" />
// <div className="User__details">
// <p className="User__details-name">{abc[1].name}</p>
// <p className="User__details-status">{abc[1].status}</p>
// </div>
export default User;
