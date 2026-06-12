import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addToCart } from "../features/cart/cartSlice";

import { addToWishlist } from "../features/wishlist/wishlistSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
   <div className="card">
  <img
    src={product.image}
    alt={product.name}
    className="product-image"
  />

  <div className="card-content">
    <h3>{product.name}</h3>

    <p className="price">
      ${product.price}
    </p>

    <p>{product.description}</p>

    <div className="card-buttons">
      <Link
        to={`/product/${product.id}`}
        className="view-btn"
      >
        View Details
      </Link>

      <button
        onClick={() =>
          dispatch(addToCart(product))
        }
      >
        Add To Cart
      </button>

      <button
        onClick={() =>
          dispatch(addToWishlist(product))
        }
      >
        Add To Wishlist
      </button>
    </div>
  </div>
</div>
  );
}

export default React.memo(ProductCard);