import React, { useEffect, useState } from 'react';
import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { STATUSES, fetchProducts } from '../../store/productSlice';
import { add } from '../../store/cartSlice';

const Products = () => {
    const dispatch = useDispatch();
    const { data: products, status } = useSelector(state => state.product);
    // const [products, setProducts] = useState([]);

    useEffect(() => {
        // const fetchProducts = async() => {
        //     const res = await fetch('https://fakestoreapi.com/products');
        //     const data = await res.json();
        //     console.log(data);
        //     setProducts(data);
        // }
        // fetchProducts();

        dispatch(fetchProducts());
    }, []);

    // Function to add product in cart
    const addToCart = (product) => {
        dispatch(add(product));
    };

    if (status === STATUSES.LOADING) {
        return <h1>Loading...</h1>
    }

    if (status === STATUSES.ERROR) {
        return <h1>Something went wrong!</h1>
    }

    return (
        <div className='cards-container'>
            {
                products.map(product => (
                    <div className='card' key={product.id}>
                        <img src={product.image} alt={product.category} />
                        <div>
                            <h4>{product.title}</h4>
                            {/* <p>{product.description}</p> */}
                            <span>Price : ${product.price}</span>
                            <div className='rating-container'>
                                <span>Rating : {product.rating.rate}</span>
                                <span>Count : {product.rating.count}</span>
                            </div>
                        </div>
                        <button onClick={() => addToCart(product)}>Add to cart</button>
                    </div>
                ))
            }
        </div>
    );
}

export default Products;
