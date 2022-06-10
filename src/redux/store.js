import { createStore , applyMiddleware, compose } from "redux";
import Thunk from "redux-thunk"; 
import { RootReducers } from "./reducers";

let middleware = [Thunk];

const composeEnhancers  = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  RootReducers,
  composeEnhancers(applyMiddleware(...middleware))
); 

export default store;