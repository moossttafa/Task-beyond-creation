import React from 'react'
import "./style.css"
import Icon1 from "../../img/icons/commercailArea.png"
import Icon2 from "../../img/icons/hotel.png"
import Icon3 from "../../img/icons/kids.png"
import Icon4 from "../../img/icons/medical.png"
import Icon5 from "../../img/icons/park.png"
import Icon6 from "../../img/icons/sport.png"
import banner from "../../img/slide.png" 
import Carousel from 'react-bootstrap/Carousel';
 

const SecondSection = () => {
  return (
    <div className='my-5'>
    <div className="container">
        <div className='row'>
            <div className='col-md-6'>
                <div className='my-5  header-title'>
                    <h3  className='title-des'>Discover Lifestyle </h3>
                    <h1 className='ms-2 '>
                        <strong  className='title-name '>Amentities</strong>
                    </h1>
                    <p  className='description'>Occupying a land area of 33,000 square meters, <br /> Makadi Heights’ stunning clubhouse</p>
                </div>
                <div className='discover d-flex w-100'>
                    <section className='firstRow text-center'>
                        <div style={{ height: "150px" }}>
                            <img src={Icon1} alt="Logo" />
                            <h4 className='title'>Commercial Areas</h4>
                            <p className='paragraph'>Downtown <br /> Makadi Heights Mall</p>
                        </div>
                        <hr className="mobileView horizontalline"  />
                        <div style={{ height: "150px" }}>
                            <img src={Icon2} alt="Logo" />
                            <h4 className='title'>Kids Friendly Areas</h4>
                            <p className='paragraph'>Kids Aqua Park <br /> Kids Areas</p>
                        </div>
                        <hr className="mobileView horizontalline"  />
                        <div style={{ height: "150px" }}>
                            <img src={Icon3} alt="Logo" />
                            <h4 className='title'>Hotels</h4>
                            <p className='paragraph'>Far far away,<br /> behind the word mountains</p>
                        </div>
                    </section>
                    <div  className="mx-4 verticalline"></div>
                    <section className='firstRow text-center' >
                    <div style={{ height: "150px" }}>
                            <img src={Icon4} alt="Logo" />
                            <h4 className='title'>Sports Facilities</h4>
                            <p className='paragraph'>Sports Courts, Fitness Center <br />
                                Water Sports Activities
                            </p>
                        </div>
                        <hr className="mobileView horizontalline"  />
                        <div style={{ height: "150px" }}>
                            <img src={Icon5} alt="Logo" />
                            <h4 className='title'>Central Park</h4>
                            <p className='paragraph'>Far far away, <br />behind the word mountains</p>
                        </div>
                        <hr className="mobileView horizontalline"  />
                        <div style={{ height: "150px" }}>
                            <img src={Icon6} alt="Logo" />
                            <h4 className='title title-des'>Medical Facilities</h4>
                            <p className='paragraph'>Far far away, behind <br /> the word mountains</p>
                        </div>
                    </section>

                </div>
            </div>
            <div className='col-md-6'> 
            <Carousel fade>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={banner}
                  alt="First slide"
                /> 
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={banner}
                  alt="Second slide"
                />
 
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={banner}
                  alt="Third slide"
                /> 
              </Carousel.Item>
              <Carousel.Item>
              <img
                className="d-block w-100"
                src={banner}
                alt="Third slide"
              /> 
            </Carousel.Item>
            <Carousel.Item>
            <img
              className="d-block w-100"
              src={banner}
              alt="Third slide"
            /> 
          </Carousel.Item>
            </Carousel> 
            </div> 
        </div>
    </div>
</div>
  )
}

export default SecondSection;