import React, { useState, useEffect } from 'react';
import Spinner from '../compoent/Spinner';
import Productitem from '../compoent/Productitem';
import './Home.css'; // Import the CSS file

function Home() {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);
    
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.log("Error fetching data");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div className="home-container">
      {loading ? (
        <div className="spinner-container">
          <Spinner />
        </div>
      ) : posts.length > 0 ? (
        <div className="products-container">
          {posts.map((post) => (
            <Productitem key={post.id} post={post} className="product-item" />
          ))}
        </div>
      ) : (
        <div className="no-data">
          <p>No Data Found</p>
        </div>
      )}
    </div>
  );
}

export default Home;