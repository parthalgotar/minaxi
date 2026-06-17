import { useState } from "react";

export default function OrderSection() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");

const sendOrder = () => {
  const phone = "919104144971";

  const message = "Hello, I want to place an order";

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
};

    // validation
    if (!name || !mobile || !product || !quantity) {
      alert("Please fill all fields");
      return;
    }

    const message = `
🛒 NEW ORDER

👤 Name: ${name}
📱 Mobile: ${mobile}
🌾 Product: ${product}
⚖️ Quantity: ${quantity}

🙏 Thank you for your order
    `;

    // ✅ BEST WORKING LINK (mobile + desktop)
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    // open WhatsApp
    window.location.href = url;
  };

  return (
    <section id="order" className="order-section">
      <div className="glow glow1" />
      <div className="glow glow2" />

      <h2 className="title">PLACE YOUR ORDER</h2>

      <p className="subtitle">
        Fill details below and get instant WhatsApp confirmation
      </p>

      <div className="form-box">
        <input
          type="text"
          placeholder="Your Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="tel"
          placeholder="Mobile Number"
          value={mobile}
          onChange={(e) =>
            setMobile(e.target.value.replace(/\D/g, "")) // only numbers
          }
        />

        <input
          type="text"
          placeholder="Product Name (Wheat / Rice / Pulses)"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
        />

        <input
          type="text"
          placeholder="Quantity (Kg / Bags)"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <button className="btn" onClick={sendOrder}>
          📲 SEND ORDER ON WHATSAPP
        </button>
      </div>

      <style>{`
        .order-section {
          position: relative;
          overflow: hidden;
          padding: 110px 20px;
          text-align: center;
          background: #ffffff;
        }

        .glow {
          position: absolute;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.35;
          z-index: 0;
          animation: floatGlow 10s infinite ease-in-out;
        }

        .glow1 {
          top: -120px;
          left: -120px;
          background: radial-gradient(circle, #25d366, transparent 70%);
        }

        .glow2 {
          bottom: -140px;
          right: -140px;
          background: radial-gradient(circle, #00b4ff, transparent 70%);
          animation-delay: 4s;
        }

        @keyframes floatGlow {
          0%, 100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(80px, -60px) scale(1.25); }
        }

        .title {
          font-size: 3rem;
          font-weight: 900;
          margin-bottom: 10px;
        }

        .subtitle {
          margin-bottom: 40px;
          color: #555;
        }

        .form-box {
          max-width: 520px;
          margin: auto;
          padding: 30px;
          border-radius: 20px;
          background: #fff;
          box-shadow: 0 20px 60px rgba(0,0,0,0.1);
          position: relative;
          z-index: 2;
        }

        .form-box input {
          width: 100%;
          padding: 12px;
          margin-bottom: 14px;
          border-radius: 10px;
          border: 1px solid #ddd;
          outline: none;
        }

        .btn {
          width: 100%;
          padding: 14px;
          border: none;
          border-radius: 12px;
          background: linear-gradient(135deg, #25d366, #1db954);
          color: white;
          font-weight: bold;
          cursor: pointer;
          transition: 0.3s;
        }

        .btn:hover {
          transform: scale(1.04);
        }
      `}</style>
    </section>
  );
}