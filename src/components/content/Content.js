import React from 'react'
import Iamge from "../../img/DSC_5199.png"
import "./style.css"

const Content = () => {
  return (
    <div className='about'>
    <div className='container'>
      <div className="row">
        <div className="col-md-6">
          <img src={Iamge} alt="Logo" className="w-75" />
        </div>
        <div className="col-md-6">
          <div className='description'>
            <h1 className='text-white text-capitalize'>the place <br />
              <strong className='text-white text-capitalize fw-bold'>we call home</strong>
            </h1>
            <p style={{ fontFamily: "Open Sans, sans-serif" }} className='text-light lead my-5'>Makadi Heights is a town built over 3.4 million square meters planned for development, with an elevation reaching 78 meters above sea level guaranteeing magnificent panoramic sea views residential units.
              Envisioned as a comprehensive town.
            </p>
            <div className="d-flex ">
              <button type="button" className=" text-uppercase about-btn w-75">Download Brochure</button>
              <button type="button" className=" text-uppercase about-btn  w-75">Show Master plan</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Content