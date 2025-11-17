import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-white shadow p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">
        🛒 E-Commerce
      </Link>

      <div className="flex gap-6 text-lg">
        <Link to="/wishlist">Wishlist ❤️</Link>
        <Link to="/cart">Cart 🛍️</Link>
      </div>
    </div>
  );
}
