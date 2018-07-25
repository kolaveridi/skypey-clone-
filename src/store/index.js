import reducer from "../reducers";
import { contacts } from "../static-data";
import { createStore } from "redux";
const store = createStore(reducer);
export default store;
