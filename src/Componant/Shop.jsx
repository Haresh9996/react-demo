import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Shop = () => {
    let [apiData, setApiData] = useState([])
    let [loading, setLoading] = useState(false)

    let fetchData = async () => {
        try {
            setLoading(true)
            let final = (await axios.get('https://fakestoreapi.com/products')).data
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
    const cartItem = (product) => {
        const cartProducts = JSON.parse(localStorage.getItem('cartProduct')) || [];
        const isProductExist = cartProducts.find((item) => item.id === product.id);

        if (!isProductExist) {
            const updatedCart = [...cartProducts, product];
            localStorage.setItem('cartProduct', JSON.stringify(updatedCart));
            alert('Product added to cart:', product);
        } else {
            alert('Product already exists in the cart:', product);
        }
    };

    return (
        <>
            <div className="container">
                <div className="row">

                    {loading ?
                        <>
                        <div className="container d-flex align-items-center justify-content-center my-5">
                            <div class="spinner-border" style={{width: '6rem', height: '6rem'}} role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                        </>
                        :
                        apiData.map((ele) => {
                            return (

                                <div className="col-md-4 col-12 my-3" key={ele.id} >
                                    <div className="card" >
                                        <Link to={`/shop/singleproduct/${ele.id}`}>
                                            <img src={ele.image} alt="watch" className='img-fluid card-img' />
                                            <div className="card-body d-flex align-items-center justify-content-between">
                                                <div>
                                                    <p>{Shortened(ele.title, 35)}</p>
                                                    <p className='fw-bold'>{ele.category}</p>
                                                    <h5>₹ {ele.price}</h5>
                                                </div>
                                            </div>
                                        </Link>
                                        <button onClick={() => cartItem(ele)}>Add to Cart</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Shop;
