import { createStore } from "redux";
import rootReducer from "./reducers";

export default createStore(rootReducer);

// redux store to save user auth token for future API calls
