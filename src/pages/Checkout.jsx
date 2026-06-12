import { useState } from "react";

import {
  useSelector,
} from "react-redux";

function Checkout() {
  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const [form, setForm] =
    useState({
      name: "",
      address: "",
      payment: "UPI",
    });

  const total = cartItems.reduce(
    (sum, item) =>
      sum +
      item.price * item.quantity,
    0
  );

  const handleSubmit = (
    e
  ) => {
    e.preventDefault();

    alert(
      "Order Placed Successfully"
    );
  };

  return (
    <div className="checkout">
      <h1>Checkout</h1>

      <form
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Full Name"
          required
          value={form.name}
          onChange={(e) =>
            setForm({
              ...form,
              name:
                e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="Address"
          required
          value={form.address}
          onChange={(e) =>
            setForm({
              ...form,
              address:
                e.target.value,
            })
          }
        />

        <select
          value={form.payment}
          onChange={(e) =>
            setForm({
              ...form,
              payment:
                e.target.value,
            })
          }
        >
          <option>
            UPI
          </option>

          <option>
            Credit Card
          </option>

          <option>
            Cash On Delivery
          </option>
        </select>

        <h2>
          Order Summary
        </h2>

        {cartItems.map(
          (item) => (
            <p key={item.id}>
              {item.name}
              {" x "}
              {item.quantity}
            </p>
          )
        )}

        <h3>
          Total: ${total}
        </h3>

        <button type="submit">
          Place Order
        </button>
      </form>
    </div>
  );
}

export default Checkout;