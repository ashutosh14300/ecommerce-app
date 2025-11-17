import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  if (cart.length === 0)
    return <h2 className="text-center mt-10">Cart is empty 🛒</h2>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Your Cart</h2>

      {cart.map((item) => (
        <div
          key={item.id}
          className="bg-white p-4 rounded shadow flex justify-between mt-4"
        >
          <h3>{item.title}</h3>
          <button
            onClick={() => removeFromCart(item.id)}
            className="bg-red-500 text-white px-4 py-1 rounded"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
