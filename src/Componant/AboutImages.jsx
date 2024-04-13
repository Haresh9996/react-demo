import React from 'react'
import mainImg from '/assets/watch (6).jpg'
import secondWatchImg from '/assets/watch (1).jpg'
import thirdWatchImg from '/assets/watch (2).jpg'

const AboutImages = () => {
  return (
    <>
      <div className="row d-flex align-items-center">
        <div className="col-12 col-lg-6 mb-5 mb-md-0">
          <img src={mainImg} alt="" className='img-fluid' />
        </div>
        <div className="col-12 col-lg-6 d-flex flex-column gap-5" >
          <img src={secondWatchImg} alt="" className='img-fluid' />
          <img src={thirdWatchImg} alt="" className='img-fluid' />
        </div>
      </div>
    </>
  )
}

export default AboutImages