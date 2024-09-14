import { createStore } from "redux";
import notesReducers from "../redux/reducers/noteReducers";

const store = createStore(notesReducers);

export default store;
