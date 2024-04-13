import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Shop = () => {
    let [apiData, setApiData] = useState([])

    let fetchData = async () => {
        let final = (await axios.get('https://fakestoreapi.com/products')).data
        setApiData(final)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <div className="container">
                <div className="row">
                    {apiData.map((ele) => {
                        return (
                            <div className="col-md-4 col-12 my-3" key={ele.id}>
                                <div className="card">
                                    <img src={ele.image} alt="watch" className='img-fluid card-img' />
                                    <div className="card-body d-flex align-items-center justify-content-between">
                                        <div>
                                            <p>{ele.title}</p>
                                            <p className='fw-bold'>{ele.category}</p>
                                            <h5>₹ {ele.price}</h5>
                                        </div>
                                        <button onClick={() => cartItem(ele)}>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Shop;
