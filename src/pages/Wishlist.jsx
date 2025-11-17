import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import { Link } from "react-router-dom";

export default function Wishlist() {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

  if (wishlist.length === 0)
    return <h2 className="text-center mt-10">No Wishlist Items ❤️</h2>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-5">My Wishlist ❤️</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {wishlist.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded shadow">
            <img src={item.image} className="h-32 mx-auto" alt="" />

            <h3 className="font-semibold mt-2">{item.title}</h3>
            <p className="font-bold">₹{item.price}</p>

            <div className="flex justify-between mt-3">
              <Link to={`/product/${item.id}`}>
                <button className="bg-blue-600 text-white px-3 py-1 rounded">
                  View
                </button>
              </Link>

              <button
                onClick={() => removeFromWishlist(item.id)}
                className="bg-red-600 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
