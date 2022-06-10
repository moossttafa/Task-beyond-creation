import React, { useEffect, useState } from 'react'; 
import { FaBars , FaTimes  } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import Logo from "../../img/LOGOWhite_EN 1.png";
import "./Header.css" 
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../../redux/actions/WeatherActions';

const Header = () => {

  const calc = 32 * 5 / 9 ;
  const weather = useSelector((state) => state.allWeather.weather);
  const temp = useSelector((state) => state.allWeather.weather?.main?.temp-calc);

  const dispatch = useDispatch();   
  useEffect(() => { 
    dispatch(fetchWeather());
  }, [])

 

  // console.log(weather.weather , "weather"); 

  const style = { 
    color: "white", 
    fontSize: "38px" ,
    border : "1px solid #FFF" ,
    padding: "10px" ,
    borderRadius: "50%"
   }
   const style2 = { 
    marginLeft: "10px"
   }


  const [click , setClick ] =  useState(false);
  const [button, setButton] = useState(true);
  const [nav, setNav] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
      if(window.innerWidth <= 960 ){
          setButton(false)
      }else{
          setButton(true)
      }
  }
  useEffect(() =>{
      showButton();
  }, []);

  const changeBackground = () => {
      if(window.scrollY >= 50){
          setNav(true)
      }else{
          setNav(false)
      }
  }
window.addEventListener("scroll" , changeBackground);
  return (
    <> 
    {weather ? 
    <div>
      <div className={nav ? 'header active' : 'header'}>
       <div className='container'>
        <div className="navbar-wrapper">
          <a href='/' className="navbar-logo" onClick={closeMobileMenu}>
            <img src={Logo} alt='pic' /> 
          </a>
          <div className='menu-icon' onClick={handleClick}>
            {click ? <FaTimes className="icons-nav" /> : <FaBars className="icons-nav" />}
          </div>
          <div className={click ? 'menu active' : 'menu'}>
           
          <ul className='nav-menu' >
          {weather.weather && weather.weather.map((item) => ( 
            <li className="nav-item">
              <img id="wicon" src={`http://openweathermap.org/img/wn/${item.icon}`}  alt="Weather icon" /> 
            </li>
          ))}  
            <li className="nav-item">
              {Math.trunc(temp).toFixed(2)} 
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-links" onClick={closeMobileMenu}>
               
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-links" onClick={closeMobileMenu}>
              <BsFillTelephoneFill style={style} />
              </a>
            </li>
            <li className="nav-item ">
              <a href="/" className="nav-links" onClick={closeMobileMenu}>
                <button className='button'> Book Now</button>
              </a>
            </li> 
              <li className="nav-item">
                <a href='#worldState' className="nav-links" onClick={closeMobileMenu}>
                  MENU 
                  <FiMenu style={style2} />
                </a>
              </li>  
            </ul> 
          </div>
        </div>
      </div>
      </div>
    </div>
      :""}
      </>
  )
}

export default Header