import React from 'react'
import AboutImages from './AboutImages'
import AboutText from './AboutText'

const About = () => {
  return (
    <div className='container-fluid mb-5'>
      <div className="row d-flex align-items-center">
        <div className="col-12 col-md-6">
          <AboutImages />
        </div>
        <div className="col-12 col-md-6">
          <AboutText />
        </div>
      </div>
    </div>
  )
}

export default About