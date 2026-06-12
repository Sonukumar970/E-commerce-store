import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function RecentlyViewed() {
  const products = useSelector(
    (state) => state.recentlyViewed.items
  );

  if (products.length === 0) {
    return null;
  }

  return (
    <div className="recently-viewed">
      <h2>Recently Viewed Products</h2>

      <div className="recent-grid">
        {products.map((product) => (
          <div
            key={product.id}
            className="recent-card"
          >
            <h4>{product.name}</h4>

            <p className="recent-price">
              ${product.price}
            </p>

            <Link
              to={`/product/${product.id}`}
              className="recent-btn"
            >
              View Again
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentlyViewed;