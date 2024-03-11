import { createStore } from "redux";
import rootReducer from "./todoRedux/reducers";

const store = createStore(rootReducer)

export default store