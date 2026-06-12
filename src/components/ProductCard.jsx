import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addToCart } from "../features/cart/cartSlice";
import { addToWishlist } from "../features/wishlist/wishlistSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="product-badge">
        New
      </div>

      <button
        className="heart-btn"
        onClick={() =>
          dispatch(addToWishlist(product))
        }
      >
        ♡
      </button>

      <img
        src={product.image}
        alt={product.title}
        className="product-image"
      />

      <div className="card-content">
        <h3>
          {product.title.slice(0, 40)}
        </h3>

        <p className="price">
          ${product.price}
        </p>

        <p className="desc">
          {product.description?.slice(
            0,
            70
          )}
          ...
        </p>

        <div className="card-actions">
          <button
            className="cart-btn"
            onClick={() =>
              dispatch(addToCart(product))
            }
          >
            🛒 Add To Cart
          </button>

          <Link
            to={`/product/${product.id}`}
            className="details-btn"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default React.memo(ProductCard);