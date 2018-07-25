


import React from "react";
import store from "../store";
import { setActiveUserId } from "../actions";
import "./User.css";
const _ = require("lodash");

const User = ({ user }) => {
 //const { name, profile_pic, status } = user;
 //console.log()
 //console.log('user inside User is',_.values(user));
 let _users=_.values(user);
// console.log(abc);
 const show=_users.map((eachuser,index)=> {
  return(
      <div className="User" onClick={handleUserClick.bind(null, eachuser)}>
      <img src={eachuser.profile_pic} alt={eachuser.name} className="User__pic"/>
      <p className="User__details-name">{eachuser.name}</p>
      <p className="User__details-status">{eachuser.status}</p>
      </div>
  );
});

 return (
 <div>
 {show}
 </div>
 );
};
// se passed object user and destruzized it
function handleUserClick({ user_id }) {
console.log('user inside handleUserClick is',user_id);
 store.dispatch(setActiveUserId(user_id));
}
// <img src={abc[1].profile_pic} alt={abc[1].name} className="User__pic" />
// <div className="User__details">
// <p className="User__details-name">{abc[1].name}</p>
// <p className="User__details-status">{abc[1].status}</p>
// </div>
export default User;
