import { SET_ACTIVE_USER_ID } from "../constants/action-types";

export default function activeUserId(state = null, action) {
    console.log('Inside activeUserId action is ',action);
 switch (action.type) {
 case SET_ACTIVE_USER_ID:
 return action.payload;
 default:
 return state;
 }
}
