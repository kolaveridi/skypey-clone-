import React from "react";
import store from "../store";
import Header from "../components/Header";
const _ = require("lodash");

const ChatWindow = ({ activeUserId }) => {
    const state=store.getState();
    console.log('activeUserId inside ChatWindow is',activeUserId);
    const arr=_.values(state.contacts);
    //console.log('activeuser is',arr[0][activeUserId].name)
    //console.log(arr[activeUserId]);
    const activeUser =arr[0][activeUserId].name ;
    const activeuserstatus=arr[0][activeUserId].status;
    console.log('activeuser inside ChatWindow is',activeUser);
    console.log('activeuserstatus inside ChatWindow is',activeuserstatus);
    //console.log('state.contacts is',state.contacts);
    console.log('state.contacts in arry is',_.values(state.contacts))
    //console.log('activeUser is',activeUser);
 return (
 <div className="ChatWindow">
   <Header user={activeUser} activeuserstatus={activeuserstatus}/>
</div>
 );
};
export default ChatWindow;
