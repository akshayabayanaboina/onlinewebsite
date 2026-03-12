import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar({ cart = [] }) {

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?q=${search}`);
  };

  return (

    <nav className="navbar">

      <h2 className="logo">ShopEase - Big Day Sales</h2>

      <form onSubmit={handleSearch} className="search-box">

        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button type="submit">Search</button>

      </form>

      <div className="links">

        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
        <Link to="/login">Login</Link>
        <Link to="/Wishlist">Wishlist</Link>


      </div>

    </nav>

  );
}

export default Navbar;