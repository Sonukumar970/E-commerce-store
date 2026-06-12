import { useState } from "react";
import { useSelector } from "react-redux";

function Checkout() {
  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    payment: "UPI",
  });

  const total = cartItems.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `✅ Order Placed Successfully!\nThank you ${form.name}`
    );
  };

  return (
    <div className="checkout-page">
      <div className="checkout-form">
        <h1>Checkout</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            required
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
          />

          <input
            type="email"
            placeholder="Email"
            required
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
          />

          <input
            type="tel"
            placeholder="Phone Number"
            required
            value={form.phone}
            onChange={(e) =>
              setForm({
                ...form,
                phone: e.target.value,
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
                address: e.target.value,
              })
            }
          />

          <select
            value={form.payment}
            onChange={(e) =>
              setForm({
                ...form,
                payment: e.target.value,
              })
            }
          >
            <option>UPI</option>
            <option>Credit Card</option>
            <option>Cash On Delivery</option>
          </select>

          <button type="submit">
            Place Order
          </button>
        </form>
      </div>

      <div className="order-summary">
        <h2>Order Summary</h2>

        {cartItems.map((item) => (
          <div
            key={item.id}
            className="summary-item"
          >
            <span>
              {item.title}
            </span>

            <span>
              x {item.quantity}
            </span>
          </div>
        ))}

        <hr />

        <h3>
          Total: $
          {total.toFixed(2)}
        </h3>
      </div>
    </div>
  );
}

export default Checkout;