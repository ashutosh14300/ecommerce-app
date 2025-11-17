import { useParams, Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      setProduct(res.data);
    });
  }, [id]);

  if (!product) return <h2 className="text-center mt-10">Loading...</h2>;

  return (
    <div className="p-8 text-center">
      <button
        onClick={() => addToWishlist(product)}
        className="text-3xl absolute right-10 top-20"
      >
        ❤️
      </button>

      <img src={product.image} className="h-60 mx-auto" />

      <h2 className="text-2xl font-bold mt-4">{product.title}</h2>
      <p className="mt-4">{product.description}</p>

      <p className="text-2xl font-bold mt-4">₹{product.price}</p>

      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => addToCart(product)}
          className="bg-yellow-500 px-6 py-2 text-white rounded"
        >
          Add to Cart
        </button>

        <Link to="/payment">
          <button className="bg-blue-600 px-6 py-2 text-white rounded">
            Buy Now
          </button>
        </Link>
      </div>
    </div>
  );
}
