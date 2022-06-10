import React, { Fragment } from 'react' 
import Content from '../components/content/Content'
import Hero from '../components/Hero/Hero'
import SecondSection from '../components/secondSection/secondSection'

const About = () => {
  return (
    <Fragment>
      <Hero /> 
      <Content />  
      <SecondSection />
    </Fragment>
  )
}

export default About