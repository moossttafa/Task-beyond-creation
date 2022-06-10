import { Types } from "../constants/Types";

const initialState = {
  weather : {}, 
}

export const WeatherReducer = (state = initialState , action) => {
  switch (action.type) {
    case Types.FETCH_WEATHER: 
    return{ ...state, 
      weather: action.payload 
    };  
    default:
      return state; 
    } 
}