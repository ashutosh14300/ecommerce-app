import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { WishlistContext } from "../context/WishlistContext";

export default function Home() {
  const [products, setProducts] = useState([]);
  const { addToWishlist } = useContext(WishlistContext);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <div className="bg-white p-4 rounded shadow relative" key={product.id}>
          <button
            onClick={() => addToWishlist(product)}
            className="absolute top-2 right-2 text-2xl"
          >
            ❤️
          </button>

          <img src={product.image} className="h-40 mx-auto" alt="" />

          <h2 className="font-semibold text-sm mt-2">{product.title}</h2>
          <p className="font-bold mt-1">₹{product.price}</p>

          <Link to={`/product/${product.id}`}>
            <button className="bg-blue-600 text-white w-full py-1 mt-3 rounded">
              View
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}
