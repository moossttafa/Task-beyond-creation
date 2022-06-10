import axios from "axios";
import { Types } from "../constants/Types"

export const fetchWeather = () => async (dispatch) => {
 try{
   const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=26.96546281915211&lon=33.883077697384714&appid=f1130b3524feefd0549671bf69edc578')
  //  console.log("response",response.data);
   dispatch({
     type : Types.FETCH_WEATHER,
     payload : response.data
   });
 }catch(err){
  console.log("error",err);
 } 
};

 