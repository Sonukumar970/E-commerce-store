import {
  useSelector,
  useDispatch,
} from "react-redux";

import { Link } from "react-router-dom";

import { removeFromWishlist } from "../features/wishlist/wishlistSlice";

function Wishlist() {
  const dispatch = useDispatch();

  const wishlistItems = useSelector(
    (state) => state.wishlist.items
  );

  return (
    <div className="wishlist-page">
      <h1>❤️ My Wishlist</h1>

      {wishlistItems.length === 0 ? (
        <div className="empty-wishlist">
          <h2>No Products In Wishlist</h2>

          <Link to="/">
            <button>
              Browse Products
            </button>
          </Link>
        </div>
      ) : (
        wishlistItems.map((item) => (
          <div
            key={item.id}
            className="wishlist-card"
          >
            <div>
              <h3>{item.name}</h3>

              <p>
                Price: ${item.price}
              </p>
            </div>

            <div className="wishlist-actions">
              <Link
                to={`/product/${item.id}`}
                className="view-product-btn"
              >
                View Product
              </Link>

              <button
                className="remove-wishlist-btn"
                onClick={() =>
                  dispatch(
                    removeFromWishlist(
                      item.id
                    )
                  )
                }
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Wishlist;