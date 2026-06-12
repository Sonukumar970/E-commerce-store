import { useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  useSelector,
  useDispatch,
} from "react-redux";

import { addToCart } from "../features/cart/cartSlice";

import { addToWishlist } from "../features/wishlist/wishlistSlice";

import { addViewedProduct } from "../features/recentlyViewed/recentlyViewedSlice";

import Reviews from "../components/Reviews";

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
      <h2>
        Product Not Found
      </h2>
    );
  }

  return (
    <div className="detail-page">
      <img
        src={product.image}
        alt={product.name}
        width="300"
      />

      <h1>{product.name}</h1>

      <h2>${product.price}</h2>

      <p>
        {product.description}
      </p>

      <button
        onClick={() =>
          dispatch(addToCart(product))
        }
      >
        Add To Cart
      </button>

      <button
        onClick={() =>
          dispatch(
            addToWishlist(product)
          )
        }
      >
        Add To Wishlist
      </button>

      <Reviews
        reviews={product.reviews}
      />
    </div>
  );
}

export default ProductDetail;