import { useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  useSelector,
  useDispatch,
} from "react-redux";

import { addToCart } from "../features/cart/cartSlice";
import { addToWishlist } from "../features/wishlist/wishlistSlice";
import { addViewedProduct } from "../features/recentlyViewed/recentlyViewedSlice";

function ProductDetail() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const product = useSelector(
    (state) =>
      state.products.all.find(
        (p) => p.id === Number(id)
      )
  );

  useEffect(() => {
    if (product) {
      dispatch(
        addViewedProduct(product)
      );
    }
  }, [product, dispatch]);

  if (!product) {
    return (
      <h2>Product Not Found</h2>
    );
  }

  return (
    <div className="detail-page">
      <div className="detail-container">
        <div className="detail-image">
          <img
            src={product.image}
            alt={product.title}
          />
        </div>

        <div className="detail-info">
          <span className="category">
            {product.category}
          </span>

          <h1>
            {product.title}
          </h1>

          <h2 className="detail-price">
            ${product.price}
          </h2>

          <p>
            {product.description}
          </p>

          <div className="detail-buttons">
            <button
              className="add-cart-btn"
              onClick={() =>
                dispatch(
                  addToCart(product)
                )
              }
            >
              🛒 Add To Cart
            </button>

            <button
              className="wishlist-btn"
              onClick={() =>
                dispatch(
                  addToWishlist(
                    product
                  )
                )
              }
            >
              ❤️ Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;