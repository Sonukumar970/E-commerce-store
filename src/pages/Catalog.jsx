import { useEffect } from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import ProductCard from "../components/ProductCard";
import RecentlyViewed from "../components/RecentlyViewed";

import {
  fetchProducts,
  filterByCategory,
  filterByPrice,
  resetFilters,
} from "../features/products/productsSlice";

function Catalog() {
  const dispatch = useDispatch();

  const products = useSelector(
    (state) => state.products.filtered
  );

  const loading = useSelector(
    (state) => state.products.loading
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <h2>Loading Products...</h2>;
  }

  return (
    <>
      <h1>Product Catalog</h1>

      <div className="filters">
        <button
          onClick={() =>
            dispatch(
              filterByCategory(
                "electronics"
              )
            )
          }
        >
          Electronics
        </button>

        <button
          onClick={() =>
            dispatch(filterByPrice(100))
          }
        >
          Under $100
        </button>

        <button
          onClick={() =>
            dispatch(resetFilters())
          }
        >
          All Products
        </button>
      </div>

      <div className="grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

      <RecentlyViewed />
    </>
  );
}

export default Catalog;