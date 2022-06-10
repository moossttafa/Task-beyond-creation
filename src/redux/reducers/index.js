import { combineReducers } from "redux"; 
import { WeatherReducer } from "./weather";

export const RootReducers = combineReducers({
  allWeather : WeatherReducer,  
});