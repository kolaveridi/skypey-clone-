import { combineReducers } from "redux";
import user from "./user";
import contacts from "./contacts";
import activeUserId from './activeUserId';


export default combineReducers({
    user: user,
    contacts: contacts,
    activeUserId:activeUserId
});
/*
When we do user:user , the user on left is object key while user on right is the reducer imported from above

*/
