import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { remove } from '../redux/slice/Cartslice';
import { toast } from 'react-hot-toast';
import './CartItem.css'; // Import the CSS file

function CartItem({ item, itemIndex }) {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} />
      <div className="cart-item-details">
        <h1>{item.title}</h1>
        <p className='des'>{item.description}</p>
        <p className='price'>${item.price}</p>
      </div>
      <div className="cart-item-actions">
        
        <FaTrash  onClick={removeFromCart} />
      </div>
    </div>
  );
}

export default CartItem;