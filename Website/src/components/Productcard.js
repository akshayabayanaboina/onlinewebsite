import React from "react";
import "./Productcard.css";

const ProductCard = ({ product, addToCart, addToWishlist }) => {

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "10px",
        textAlign: "center"
      }}
    >

      <img src={product.image} width="150" alt={product.title} />

      <h3>{product.title}</h3>

      <p>₹{product.price}</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart 🛒
      </button>

      <br /><br />

      <button onClick={() => addToWishlist(product)}>
        Add to Wishlist ❤️
      </button>

    </div>
  );
};

export default ProductCard;