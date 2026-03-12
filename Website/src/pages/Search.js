import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ProductCard from "../components/Productcard";

const productData = [
  { title: "Laptop", price: 999, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400" },
  { title: "Smartphone", price: 599, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400" },
  { title: "Tablet", price: 299, image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=400" },
  { title: "Headphones", price: 199, image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400" },
  { title: "Smartwatch", price: 199, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400" },
  { title: "Camera", price: 499, image: "https://images.unsplash.com/photo-1519183071298-a2962ccf0e1e?w=400" },
  { title: "Gaming Console", price: 399, image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400" },
  { title: "Monitor", price: 299, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400" },
  { title: "Keyboard", price: 99, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400" },
  { title: "Mouse", price: 49, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400" },
  { title: "Printer", price: 199, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400" },
  { title: "Router", price: 149, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400" },
  {title: "Dress", price: 199, image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=400" },
  {title: "Shoes", price: 99, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400" },
  {title: "Bag", price: 149, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400" },
  {title: "Watch", price: 199, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400" },
];

const Search = ({ addToCart }) => {
  const navigate = useNavigate();
  const query = new URLSearchParams(useLocation().search).get("q") || "";

  // filter products by search query (case-insensitive)
  const results = productData.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Search Results for: "{query}"</h2>

      {results.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))",
          gap: "20px",
          marginTop: "20px"
        }}>
          {results.map((p, i) => (
            <ProductCard
              key={i}
              product={p}
              addToCart={() => {
                addToCart(p);
                navigate("/cart"); // optional: go to cart after adding
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;