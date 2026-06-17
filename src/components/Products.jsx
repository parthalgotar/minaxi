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
  const [screen, setScreen] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreen(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const addToCart = (p) => {
    setCart((prev) => [...prev, p]);
  };

  // ✅ FIXED WHATSAPP FUNCTION
  const orderWhatsApp = (p) => {
    const phone = "919104144971"; // 🔥 MUST be full number with country code

    const msg = `
🛒 NEW ORDER

📦 Product: ${p.name}
💰 Price: ₹${p.price}

🙏 Thank you
    `;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;

    console.log("Opening:", url);

    window.location.href = url; // 🔥 BEST WORKING METHOD
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
          background:
            "radial-gradient(circle, rgba(0,255,150,0.25), transparent 70%)",
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
          fontSize: "28px"
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

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gap: "20px",
          gridTemplateColumns:
            screen >= 1024
              ? "repeat(4, 1fr)"
              : screen >= 768
              ? "repeat(2, 1fr)"
              : "repeat(1, 1fr)"
        }}
      >
        {filtered.map((p) => {
          const finalPrice = p.price - (p.price * p.discount) / 100;

          return (
            <div
              key={p.id}
              style={{
                background: "rgba(255,255,255,0.06)",
                borderRadius: "16px",
                overflow: "hidden",
                color: "white",
                textAlign: "center",
                paddingBottom: "15px",
                transition: "0.3s"
              }}
            >
              <img
                src={p.img}
                alt={p.name}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover"
                }}
              />

              <h4>{p.name}</h4>
              <p>⭐ {p.rating}</p>

              <p>
                <del>₹{p.price}</del> <b>₹{finalPrice.toFixed(0)}</b>
              </p>

              <div style={{ display: "flex", gap: "8px", padding: "0 10px" }}>
                <button
                  onClick={() => addToCart(p)}
                  style={{
                    flex: 1,
                    padding: "8px",
                    border: "none",
                    borderRadius: "8px",
                    background: "#444",
                    color: "white"
                  }}
                >
                  Add
                </button>

                <button
                  onClick={() => orderWhatsApp(p)}
                  style={{
                    flex: 1,
                    padding: "8px",
                    border: "none",
                    borderRadius: "8px",
                    background: "#25D366",
                    color: "white"
                  }}
                >
                  WhatsApp
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <h4 style={{ textAlign: "center", color: "white", marginTop: "20px" }}>
        🛒 Cart Items: {cart.length}
      </h4>

      <style>{`
        @keyframes moveGlow {
          0% { transform: translate(0,0); }
          50% { transform: translate(80px,60px); }
          100% { transform: translate(0,0); }
        }
      `}</style>
    </section>
  );
}