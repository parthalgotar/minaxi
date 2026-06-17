import { useState, useEffect } from "react";
import imgt from "../assets/71xuH19n5YL._AC_UF1000,1000_QL80_.jpg";
import imgt1 from "../assets/istockphoto-491090528-612x612.jpg";
import imgt2 from "../assets/toor-dal.jpg";
import imgt3 from "../assets/360_F_102589163_hk02O92vzEYP0rZbVyvDTbkje1GaUDk1.jpg";

import chana from "../assets/360_F_778559979_Y9cPiS7ZZ2eb60sgKKU3r4W2TK7kBzin.jpg";
import moong from "../assets/moong_750x.jpg";
import masoor from "../assets/360_F_61397414_ayZr4yDcC8y9A4dy1K9DUNv7bDJq32jU.jpg";
import urad from "../assets/images.jpg";

export default function Products() {
  const products = [
    { id: 1, name: "Wheat (ઘઉં)", price: 28, discount: 10, rating: 4.5, img: imgt },
    { id: 2, name: "Rice (ચોખા)", price: 45, discount: 5, rating: 4.2, img: imgt1 },
    { id: 3, name: "Toor Dal", price: 120, discount: 15, rating: 4.8, img: imgt2 },
    { id: 4, name: "Spices", price: 80, discount: 8, rating: 4.3, img: imgt3 },
    { id: 5, name: "Chana (ચણા)", price: 70, discount: 10, rating: 4.4, img: chana },
    { id: 6, name: "Moong Dal", price: 110, discount: 12, rating: 4.6, img: moong },
    { id: 7, name: "Masoor Dal", price: 95, discount: 8, rating: 4.3, img: masoor },
    { id: 8, name: "Urad Dal", price: 130, discount: 15, rating: 4.7, img: urad }
  ];

  const [productsList] = useState(products);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  // ✅ RESPONSIVE FIX STATE
  const [screen, setScreen] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreen(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const addToCart = (p) => setCart([...cart, p]);

  const orderWhatsApp = (p) => {
    const msg = `Hello, I want to order:
Product: ${p.name}
Price: ₹${p.price}`;

    window.open(
      `https://wa.me/9104144971?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  const filtered = productsList.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section
      id="products"
      style={{
        padding: "60px 15px",
        background: "#070707",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* BACK GLOW */}
      <div
        style={{
          position: "absolute",
          top: "-120px",
          left: "-120px",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(0,255,150,0.25), transparent 70%)",
          filter: "blur(60px)",
          animation: "moveGlow 6s infinite ease-in-out"
        }}
      />

      {/* TITLE */}
      <h2
        style={{
          textAlign: "center",
          color: "white",
          marginBottom: "15px",
          fontSize: "28px",
          textShadow: "0 0 15px rgba(0,255,150,0.3)"
        }}
      >
        Our Premium Products
      </h2>

      {/* SEARCH */}
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search products..."
        style={{
          display: "block",
          margin: "0 auto 30px auto",
          width: "100%",
          maxWidth: "400px",
          padding: "10px",
          borderRadius: "10px",
          border: "none",
          outline: "none"
        }}
      />

      {/* ✅ RESPONSIVE GRID */}
      <div
        style={{
          display: "grid",
          gap: "20px",

          gridTemplateColumns:
            screen >= 1024
              ? "repeat(4, 1fr)"   // desktop
              : screen >= 768
              ? "repeat(2, 1fr)"   // tablet
              : "repeat(1, 1fr)"   // mobile
        }}
      >
        {filtered.map((p) => {
          const finalPrice = p.price - (p.price * p.discount) / 100;

          return (
            <div
              key={p.id}
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "16px",
                overflow: "hidden",
                backdropFilter: "blur(15px)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                transition: "0.3s",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px) scale(1.03)";
                e.currentTarget.style.boxShadow =
                  "0 20px 50px rgba(0,255,150,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.5)";
              }}
            >
              {/* IMAGE */}
              <div style={{ position: "relative" }}>
                <img
                  src={p.img}
                  alt={p.name}
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover"
                  }}
                />

                <span
                  style={{
                    position: "absolute",
                    top: "10px",
                    left: "10px",
                    background: "red",
                    color: "white",
                    padding: "5px 10px",
                    borderRadius: "8px",
                    fontSize: "12px"
                  }}
                >
                  {p.discount}% OFF
                </span>
              </div>

              {/* INFO */}
              <div style={{ padding: "15px", textAlign: "center", color: "white" }}>
                <h4 style={{ margin: "5px 0" }}>{p.name}</h4>
                <p>⭐ {p.rating}</p>

                <p>
                  <del style={{ opacity: 0.6 }}>₹{p.price}</del>{" "}
                  <b>₹{finalPrice.toFixed(0)}</b>
                </p>

                {/* BUTTONS */}
                <div style={{ display: "flex", gap: "8px", marginTop: "10px" }}>
                  <button
                    onClick={() => addToCart(p)}
                    style={{
                      flex: 1,
                      padding: "8px",
                      border: "none",
                      borderRadius: "8px",
                      background: "rgba(0,255,150,0.2)",
                      color: "white",
                      transition: "0.2s"
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.background = "rgba(0,255,150,0.4)")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.background = "rgba(0,255,150,0.2)")
                    }
                  >
                    Add to Cart
                  </button>

                  <button
                    onClick={() => orderWhatsApp(p)}
                    style={{
                      flex: 1,
                      padding: "8px",
                      border: "none",
                      borderRadius: "8px",
                      background: "#25D366",
                      color: "white",
                      transition: "0.2s"
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.boxShadow =
                        "0 0 15px rgba(37,211,102,0.5)")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.boxShadow = "none")
                    }
                  >
                    WhatsApp
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CART */}
      <h4 style={{ textAlign: "center", color: "white", marginTop: "30px" }}>
        🛒 Cart Items: {cart.length}
      </h4>

      {/* ANIMATION */}
      <style>
        {`
          @keyframes moveGlow {
            0% { transform: translate(0,0); }
            50% { transform: translate(80px,60px); }
            100% { transform: translate(0,0); }
          }
        `}
      </style>
    </section>
  );
}