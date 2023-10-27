import React from 'react';
import './styles.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const items = useSelector(state => state.cart);
    return (
        <div className='navbar-container'>
            <span>REDUX STORE</span>
            <div className='right-bar'>
                <Link to='/'>Home</Link>
                <Link to='/cart'>Cart</Link>
                <span>Cart items : {items.length}</span>
            </div>
        </div>
    );
}

export default Navbar;
