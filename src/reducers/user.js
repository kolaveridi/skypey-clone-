import { generateUser } from "../static-data";
console.log('generateUser is ',generateUser());
export default function user(state = generateUser(), action) {
//console.log('Inside user reducer state is ',state);
 return state;
}
