import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate(); 

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>

      {/* HEADER */}
      <header style={{
        backgroundColor: "#1E90FF",
        color: "white",
        padding: "20px",
        textAlign: "center",
        boxShadow: "0 2px 5px rgba(0,0,0,0.3)"
      }}>
        <h1>🌟 My Online Store</h1>
        <p>Best products, best prices!</p>
      </header>

      {/* HERO SECTION */}
      <section style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "50px",
        background: "linear-gradient(90deg, #87CEFA, #00BFFF)",
        color: "white",
        borderRadius: "0 0 50% 50% / 0 0 10% 10%"
      }}>
        <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>Welcome to Our Store</h2>
        <p style={{ fontSize: "18px", marginBottom: "30px" }}>Find amazing products at unbeatable prices</p>
        <button
          style={{
            padding: "12px 30px",
            backgroundColor: "orange",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.3)"
          }}
          onClick={() => navigate("/products")} 
        >
          Shop Now
        </button>
      </section>

      {/* FEATURE CARDS */}
      <section style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "50px",
        flexWrap: "wrap",
        backgroundColor: "#f2f2f2"
      }}>
        <div style={{ width: "250px", margin: "20px", textAlign: "center", padding: "20px", backgroundColor: "white", borderRadius: "10px", boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }}>
          <h3>🚚 Fast Delivery</h3>
          <p>Get your orders delivered quickly and safely.</p>
        </div>
        <div style={{ width: "250px", margin: "20px", textAlign: "center", padding: "20px", backgroundColor: "white", borderRadius: "10px", boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }}>
          <h3>💰 Best Prices</h3>
          <p>Affordable prices for everyone, every day.</p>
        </div>
        <div style={{ width: "250px", margin: "20px", textAlign: "center", padding: "20px", backgroundColor: "white", borderRadius: "10px", boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }}>
          <h3>⭐ Quality Products</h3>
          <p>Only high-quality products in our store.</p>
        </div>
      </section>

      {/* BANNER IMAGE */}
      <section style={{ textAlign: "center", padding: "30px" }}>
        <img 
          src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=900" 
          alt="shopping" 
          style={{ width: "80%", borderRadius: "15px", boxShadow: "0 2px 8px rgba(0,0,0,0.3)" }} 
        />
      </section>

      {/* FOOTER */}
      <footer style={{
        backgroundColor: "#1E90FF",
        color: "white",
        textAlign: "center",
        padding: "20px",
        marginTop: "30px"
      }}>
        <p>© 2026 My Online Store</p>
      </footer>

    </div>
  );
}

export default Home;