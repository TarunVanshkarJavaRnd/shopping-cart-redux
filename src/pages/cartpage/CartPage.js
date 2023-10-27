import React from 'react';
import { useSelector } from 'react-redux';
import './styles.css';

const CartPage = () => {
    const cartItems = useSelector(state => state.cart);
    return (
        <div className='cart-container'>
            {
                cartItems.map((item) => (
                    <div className='cart-card' key={item.id}>
                        <img src={item.image} alt={item.title} />
                        <h3>{item.title}</h3>
                        <p>Price : ${item.price}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default CartPage;
