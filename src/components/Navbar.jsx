import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar({
  darkMode,
  setDarkMode,
}) {
  const cartCount = useSelector(
    (state) => state.cart.items.length
  );

  const wishlistCount = useSelector(
    (state) => state.wishlist.items.length
  );

  return (
    <nav className="navbar">
      <Link
        to="/"
        className="logo"
      >
        🛍️ ShopHub
      </Link>

      <div className="nav-links">
        <Link to="/">
          🏠 Home
        </Link>

        <Link to="/wishlist">
          ❤️ Wishlist
          <span className="badge">
            {wishlistCount}
          </span>
        </Link>

        <Link to="/cart">
          🛒 Cart
          <span className="badge">
            {cartCount}
          </span>
        </Link>

        <button
          className="dark-btn"
          onClick={() =>
            setDarkMode(!darkMode)
          }
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;