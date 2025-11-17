import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition duration-300">
      <img
        src={product.image}
        alt=""
        className="h-48 w-full object-contain"
      />

      <h3 className="mt-3 text-lg font-semibold text-gray-700">
        {product.title.substring(0, 40)}
      </h3>

      <p className="text-xl font-bold text-blue-600 mt-2">₹ {product.price}</p>

      <Link to={`/product/${product.id}`}>
        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
