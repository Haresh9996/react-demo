import React from 'react'
import ButtonComp from './ButtonComp'

const AboutText = () => {
    return (
        <>
            <div className='d-flex flex-column align-items-end p-3'>
                <h2>About Us</h2>
                <p className=''>Hi_Tech is a leading retailer of brand name designer watches for all watch brands listed on our website. We pride ourselves on having one of the most efficient shopping systems available with communication at every stage to inform you of your order status, as well as excellent customer service and support team who are glad to assist you with any enquiry or problem, should one arise.</p>

                <ButtonComp background={'#5a1b9d'} color={'#fff'} content={'Read more'} />
            </div>
        </>
    )
}

export default AboutText