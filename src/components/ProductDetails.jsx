import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Button from './Button';
import { FaStar } from 'react-icons/fa';  // For product rating
import Comment from './Comment';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  // Function to display star rating based on the product rating
  const renderStars = (rating) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar
          key={i}
          color={i < rating ? "#FFD700" : "#e4e5e9"}  // Gold for filled stars, gray for empty stars
        />
      );
    }
    return stars;
  };

  return (
    <>
    
    <div className="container mt-5 mb-5">
      <div className="row mt-5">
        {/* Image Column */}
        <div className="col-md-6 mb-4 mt-5">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid rounded"
            style={{
              height: '400px',
              objectFit: 'contain',
            }}
          />
        </div>

        {/* Product Details Column */}
        <div className="col-md-6 mt-5 d-flex flex-column justify-content-start">
          <h2>{product.title}</h2>
          <div className="d-flex mb-3">
            {renderStars(Math.round(product.rating.rate))}
            <span className="ml-2">({product.rating.count} reviews)</span>
          </div>

          <p>{product.description}</p>

          <p>
            <strong>Price: </strong>${product.price}
          </p>

          {/* Additional Product Info */}
          <div>
            <p><strong>Category: </strong>{product.category}</p>
            <p><strong>Brand: </strong>{product.brand || 'Not available'}</p>
          </div>
          <Link to="/checkout">
          <Button btn="Checkout" />
          </Link>

          {/* Product features or other details */}
          <div className="mt-5">
            <h4>Product Details</h4>
            <ul>
              <li><strong>Weight:</strong> 500g</li>
              <li><strong>Dimensions:</strong> 15 x 10 x 5 cm</li>
              <li><strong>Material:</strong> Plastic</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <Comment/>
    </>
  );
};

export default ProductDetails;
