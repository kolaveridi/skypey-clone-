import React, { Component } from 'react';

import './App.css';
import Sidebar from '../components/Sidebar.js';
import store from "../store";
import Main from '../components/Main.js';
const _ = require("lodash");
const App=()=>{
    const {contacts,activeUserId,user}=store.getState();
    //console.log('contacts inside App.js is ',contacts);
    //console.log(_.values(contacts));
  return(
     <div className="App">
     <Sidebar  contacts={_.values(contacts)}/>
     <Main user={user} activeUserId={activeUserId} />
     </div>


  );
};

export default App;
