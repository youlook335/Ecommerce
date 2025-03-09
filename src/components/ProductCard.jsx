import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/productCard.css'
import Button from './Button';

const ProductCard = ({ product }) => {
  return (
    <div className="card shadow">
      <img src={product.image} className="card-img-top" alt={product.title} />
      <div className="card-body">
        <h5 className="card-title mt-3">{product.title?.slice(0, 20)}
          {product.title?.length > 20 && <span>...</span>}
        </h5>
        <p className="card-text">{product.description?.slice(0, 50)}
          {product.description?.length > 50 && <span>...</span>}
        </p>
        <Link to={`/products/${product.id}`} className="btn"> 
          <Button btn= "View More"/>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
