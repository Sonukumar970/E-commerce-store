import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cartCount = useSelector(
    (state) => state.cart.items.length
  );

  const wishlistCount = useSelector(
    (state) => state.wishlist.items.length
  );

  return (
    <nav className="navbar">
      <h2>E-Commerce Store</h2>

      <div className="nav-links">
        <Link to="/">Catalog</Link>

        <Link to="/cart">
          Cart ({cartCount})
        </Link>

        <Link to="/wishlist">
          Wishlist ({wishlistCount})
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;