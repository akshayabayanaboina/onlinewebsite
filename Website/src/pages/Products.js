import React, { useState } from "react";
import ProductCard from "../components/Productcard";
import "./Products.css";
const productData = [
  {
    title: "Laptop",
    price: "999",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
  },
  {
    title: "Smart Phone",
    price: "599",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
  },

  {
    title: "Smart Watch",
    price: "299",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400",
  },
 
  {
    title: "Gaming Console",
    price: "399",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400",
  },
  {
    title: "Tablet",
    price: "299",
    image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=400",
  },
  {
    title: "Speaker",
    price: "199",
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400",
  },
  {
    title: "Monitor",
    price: "299",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400",
  },
  {
    title: "Dress",
    price: "199",
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=400",
  },
  {
    title: "Shoes",
    price: "99",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
  },
  {
    title: "Bag",
    price: "149",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400",
  },
  {
    title: "Watch",
    price: "199",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
  },
  {
    title: "Sunglasses",
    price: "99",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400",
  },
  {
  title: "Headphones",
  price: "199",
  image: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?w=400",
},

{
  title: "Camera",
  price: "499",
  image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400",
},
{
  title :"Books",
  price: "29",
  image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400",
}
];

const Products = () => {

  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // ADD TO CART
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // ADD TO WISHLIST
  const addToWishlist = (product) => {
    setWishlist([...wishlist, product]);
  };

  // REMOVE FROM CART
  const removeFromCart = (index) => {
    const updated = cart.filter((_, i) => i !== index);
    setCart(updated);
  };

  // REMOVE FROM WISHLIST
  const removeFromWishlist = (index) => {
    const updated = wishlist.filter((_, i) => i !== index);
    setWishlist(updated);
  };

  // TOTAL
  const totalAmount = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div>

      <h2 style={{ textAlign: "center" }}>
        🛒 Cart: {cart.length} | ❤️ Wishlist: {wishlist.length}
      </h2>

      {/* PRODUCTS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))",
          gap: "20px",
          padding: "20px"
        }}
      >

        {productData.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            addToCart={addToCart}
            addToWishlist={addToWishlist}
          />
        ))}

      </div>

      {/* CART SECTION */}
      <h2 style={{ paddingLeft: "20px" }}>🛒 Cart Details</h2>

      {cart.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            border: "1px solid gray",
            margin: "10px",
            padding: "10px"
          }}
        >
          <img src={item.image} width="80" alt={item.title} />

          <h4>{item.title}</h4>

          <p>₹{item.price}</p>

          <button onClick={() => removeFromCart(index)}>
            Remove
          </button>
        </div>
      ))}

      <h2 style={{ padding: "20px" }}>
        Total Amount: ₹{totalAmount}
      </h2>

      {/* WISHLIST */}
      <h2 style={{ paddingLeft: "20px" }}>❤️ Wishlist</h2>

      {wishlist.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            border: "1px solid gray",
            margin: "10px",
            padding: "10px"
          }}
        >
          <img src={item.image} width="80" alt={item.title} />

          <h4>{item.title}</h4>

          <p>₹{item.price}</p>

          <button onClick={() => removeFromWishlist(index)}>
            Remove
          </button>
        </div>
      ))}

    </div>
  );
};

export default Products;