import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SingleProduct = () => {

    let [product, setProduct] = useState({})

    let { id } = useParams()
    console.log(id, product)

    let fetchData = async () => {
        try {
            let final = (await axios.get(`https://fakestoreapi.com/products/${id}`)).data
            setProduct(final)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [id])

    return (
        <>
            <div className="container">
                <div className="row d-flex align-items-center justify-content-center my-5">

                    <div className="card mb-3 p-4" style={{ maxWidth: '840px' }}>
                        <div className="row g-0 d-flex align-items-center justify-content-between">
                            <div className="col-md-4">
                                <img src={product.image} className="img-fluid rounded-start" alt={product.title} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body g-4">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-title">{product.category}</p>
                                    <p className="card-text my-4">{product.description}</p>
                                    <h6>₹ {product.price}</h6>

                                    <p className="card-text">
                                        <small className="text-body-secondary">Last updated 3 mins ago</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleProduct;
