import React from 'react'

const Icons = ({ imgData }) => {

    return (
        <>
            <div className='container-fluid pt-5 bg-body-secondary'>
                <div className='row' style={{ width: '100%' }}>
                    {imgData.map((ele, ind) => (
                        <div key={ind} className="col-md-3 col-6 d-flex flex-column align-items-center">
                            <img src={ele.image} alt="" className='img-fluid h-50' />
                            <p>{ele.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Icons