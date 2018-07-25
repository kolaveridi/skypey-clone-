import { combineReducers } from "redux";
import user from "./user";
import contacts from "./contacts";

export default combineReducers({
    user: user,
    contacts: contacts
});
/*
When we do user:user , the user on left is object key while user on right is the reducer imported from above

*/
