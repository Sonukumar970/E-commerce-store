import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../features/cart/cartSlice";

function Cart() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const total = cartItems.reduce(
    (sum, item) =>
      sum +
      item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h1>🛒 Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h2>Your Cart Is Empty</h2>
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              className="cart-item"
              key={item.id}
            >
              <img
                src={item.image}
                alt={item.title}
                className="cart-image"
              />

              <div className="cart-info">
                <h3>{item.title}</h3>

                <p>
                  Price: $
                  {item.price}
                </p>

                <p>
                  Quantity:
                  {item.quantity}
                </p>

                <p className="subtotal">
                  Subtotal: $
                  {(
                    item.price *
                    item.quantity
                  ).toFixed(2)}
                </p>

                <button
                  className="remove-btn"
                  onClick={() =>
                    dispatch(
                      removeFromCart(
                        item.id
                      )
                    )
                  }
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="cart-summary">
            <h2>
              Total: $
              {total.toFixed(2)}
            </h2>

            <button className="checkout-btn">
              Proceed To Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;