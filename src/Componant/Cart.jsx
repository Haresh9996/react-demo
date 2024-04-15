import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cartProduct')) || [];
    setCartItems(savedCart.map(item => ({ ...item, quantity: 1 })));
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cartProduct', JSON.stringify(updatedCart));
  };

  const increaseQuantity = (id) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem('cartProduct', JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });

    setCartItems(updatedCart);
    localStorage.setItem('cartProduct', JSON.stringify(updatedCart));
  };

  const calculateItemPrice = (item) => {
    return item.price * item.quantity;
  };


  const calculateTotalPrice = () => {
    let totalPrice = cartItems.reduce((total, item) => total + calculateItemPrice(item), 0);
    return totalPrice.toFixed(2);
  };

  return (
    <div className='container'>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className='my-5'>
          {cartItems.map(item => (
            <li key={item.id} className='d-flex align-items-center justify-content-between'>
              <div className='d-flex align-items-center gap-5'>
                <img src={item.image} alt={item.title} className='img-fluid' style={{ height: '4rem', width: '4rem' }} />
                <div>
                  <h3>{item.title}</h3>
                  <div className='d-flex align-items-center'>
                    <p className='me-5'>Item Price: ₹{item.price}</p>

                    <p className='ms-5 border border-2 p-1 border-secondary-subtle'>Total Price: ₹{calculateItemPrice(item).toFixed(2)}</p> 
                  </div>
                </div>
              </div>
              <div className='d-flex align-items-center gap-2'>
                <div className="btn-group btn-group-sm" role="group" aria-label="Small button group">
                  <button type="button" className="btn btn-outline-primary fw-bolder" onClick={() => decreaseQuantity(item.id)}>-</button>
                  <button type="button" className="btn btn-outline-primary fw-bolder">{item.quantity}</button>
                  <button type="button" className="btn btn-outline-primary fw-bolder" onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <div>
          <p className='text-end fw-semibold fs-3'>Total Price: ₹{calculateTotalPrice()}</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
