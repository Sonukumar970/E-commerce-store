import React, {
  Suspense,
  useState,
  useEffect,
} from "react";

import {
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Catalog from "./pages/Catalog";

import "./index.css";

const ProductDetail = React.lazy(() =>
  import("./pages/ProductDetail")
);

const Cart = React.lazy(() =>
  import("./pages/Cart")
);

const Wishlist = React.lazy(() =>
  import("./pages/Wishlist")
);

const Checkout = React.lazy(() =>
  import("./pages/Checkout")
);

function App() {
  const [darkMode, setDarkMode] =
    useState(
      localStorage.getItem(
        "darkMode"
      ) === "true"
    );

  useEffect(() => {
    localStorage.setItem(
      "darkMode",
      darkMode
    );
  }, [darkMode]);

  return (
    <div
      className={
        darkMode ? "dark" : ""
      }
    >
      <Navbar
        darkMode={darkMode}
        setDarkMode={
          setDarkMode
        }
      />

      <div className="container">
        <Suspense
          fallback={
            <h2>Loading...</h2>
          }
        >
          <Routes>
            <Route
              path="/"
              element={<Catalog />}
            />

            <Route
              path="/product/:id"
              element={
                <ProductDetail />
              }
            />

            <Route
              path="/cart"
              element={<Cart />}
            />

            <Route
              path="/wishlist"
              element={
                <Wishlist />
              }
            />

            <Route
              path="/checkout"
              element={
                <Checkout />
              }
            />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;