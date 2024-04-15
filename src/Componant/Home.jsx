import React, { useState, useEffect } from 'react'
import ButtonComp from './ButtonComp'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Icons from './Icons'

import firstIcon from '/assets/Fast Delivery (HD).png'
import secondIcon from '/assets/Free Stream (HD).png'
import thirdIcon from '/assets/best quality(HD) (1).png'
import fourthIcon from '/assets/24 x 7(HD) (2).png'

const Home = () => {

    let [apiData, setApiData] = useState([])
    let [loading, setLoading] = useState(false)

    let fetchData = async () => {
        try {
            setLoading(true)
            let final = (await axios.get('https://fakestoreapi.com/products?limit=3')).data
            setApiData(final)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])

    const Shortened = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    };

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

            <div className="container">
                <div className="row">
                    <h3 className='text-center my-4'>Most Popular Products</h3>
                    {
                        loading ? <>
                            <div className="container d-flex align-items-center justify-content-center my-5">
                                <div className="spinner-border" style={{ width: '6rem', height: '6rem' }} role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        </>
                            :
                            apiData.map((ele) => {
                                return (
                                    <div className="col-md-4 col-12 my-3" key={ele.id}>
                                        <Link to={`/shop/singleproduct/${ele.id}`}>

                                            <div className="card">
                                                <img src={ele.image} alt="watch" className='img-fluid card-img' />
                                                <div className="card-body d-flex align-items-center justify-content-between">
                                                    <div>
                                                        <p>{Shortened(ele.title, 40)}</p>
                                                        <p className='fw-bold'>{ele.category}</p>
                                                        <h5>₹ {ele.price}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })}
                </div>
            </div>
        </>
    )
}

export default Home