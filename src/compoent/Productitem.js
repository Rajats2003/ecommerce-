import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slice/Cartslice";
import "./Productitem.css"; // Import the CSS file

function Productitem({ post, selected }) {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from Cart");
  };

  return (
    <div className="product-item">
      <p className="para-tittle">{post.title}</p>
      <p className="para-description">{post.description}</p>
      <img src={post.image} alt={post.title} />
      <p className="price">${post.price}</p>
      {cart.some((p) => p.id === post.id) ? (
        <button className="remove-btn" onClick={removeFromCart}>Remove Item</button>
      ) : (
        <button onClick={addToCart}>Add to Cart</button>
      )}
    </div>
  );
}

export default Productitem;
