import React from 'react'
import ButtonComp from './ButtonComp'
import { Link } from 'react-router-dom'
import Icons from './Icons'

import firstIcon from '/assets/Fast Delivery (HD).png'
import secondIcon from '/assets/Free Stream (HD).png'
import thirdIcon from '/assets/best quality(HD) (1).png'
import fourthIcon from '/assets/24 x 7(HD) (2).png'

const Home = () => {
    let imgData = [
        { image: firstIcon, text: 'Fast Delivery' },
        { image: secondIcon, text: 'Free Shiping' },
        { image: thirdIcon, text: 'Best Quality' },
        { image: fourthIcon, text: '24x7 Customer Support' },
    ]

    return (

        <>
            <header>
                <div className="header-info">
                    <h2 className='header-heading'>STYLISH WATCHES</h2>
                    <p className='header-data'>A watch is a small clock carried or worn by a person. It is also a fashion accessory for men and women. A watch may be one of the few accessories worn by a person.</p>
                    <div className="d-flex gap-3">
                        <Link to='/contact' >
                            <ButtonComp background={'#19c880'} color={'#fff'} content={'Contact Us'} />
                        </Link>
                        <Link to='/about'>
                            <ButtonComp background={'#5a1b9d'} color={'#fff'} content={'About Us'} />
                        </Link>
                    </div>
                </div>
            </header>
            <Icons imgData={imgData} />
        </>
    )
}

export default Home