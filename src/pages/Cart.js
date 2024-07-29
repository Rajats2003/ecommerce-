import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../compoent/CartItem';  // Corrected the import
import { Link } from 'react-router-dom';
import './Cart.css'; // Ensure the correct import path for your CSS file

function Cart() {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="cart-container">
      {
        cart.length > 0 ? 
        (
          <div className="cart-items">
            {
              cart.map((item, index) => {
                return <CartItem key={item.id} item={item} itemIndex={index} /> // Corrected the component name
              })
            }

            <div className="cart-summary">
              <div>Your Cart</div>
              <div>Summary</div>
              <p className="total-info">
                <span>Total Items: {cart.length}</span>
              </p>
              <p className="total-info">
                <span>Total Amount: ${totalAmount.toFixed(2)}</span>
              </p>
              <button className="checkout-btn">Check Out</button>
            </div>
          </div>
        ) : 
        (
          <div className="empty-cart">
            <h1>Cart Empty</h1>
            <Link to={"/"}>
              <button>Shop Now</button>
            </Link>
          </div>
        )
      }
    </div>
  );
}

export default Cart;
