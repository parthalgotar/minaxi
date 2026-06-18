import { useState } from "react";

export default function OrderSection() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");

  const sendOrder = () => {
    const phone = "919104144971";

    // Validation
    if (!name || !mobile || !product || !quantity) {
      alert("Please fill all fields");
      return;
    }

    if (mobile.length !== 10) {
      alert("Please enter a valid 10 digit mobile number");
      return;
    }

    const message = `
🛒 *NEW ORDER*

👤 Name: ${name}
📱 Mobile: ${mobile}
🌾 Product: ${product}
⚖️ Quantity: ${quantity}

🙏 Thank you for your order.
`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section id="order" className="order-section">
      <div className="glow glow1"></div>
      <div className="glow glow2"></div>

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
          maxLength={10}
          onChange={(e) =>
            setMobile(e.target.value.replace(/\D/g, ""))
          }
        />

        <select
          value={product}
          onChange={(e) => setProduct(e.target.value)}
        >
          <option value="">Select Product</option>
          <option value="Wheat">🌾 Wheat</option>
          <option value="Rice">🍚 Rice</option>
          <option value="Toor Dal">🟡 Toor Dal</option>
          <option value="Chana Dal">🟠 Chana Dal</option>
          <option value="Moong Dal">🟢 Moong Dal</option>
        </select>

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
          0%,100% {
            transform: translate(0,0) scale(1);
          }
          50% {
            transform: translate(80px,-60px) scale(1.25);
          }
        }

        .title {
          font-size: 3rem;
          font-weight: 900;
          margin-bottom: 10px;
          position: relative;
          z-index: 2;
        }

        .subtitle {
          color: #555;
          margin-bottom: 40px;
          position: relative;
          z-index: 2;
        }

        .form-box {
          max-width: 520px;
          margin: auto;
          padding: 35px;
          border-radius: 22px;
          background: #fff;
          box-shadow: 0 20px 60px rgba(0,0,0,0.12);
          position: relative;
          z-index: 2;
          transition: 0.4s;
        }

        .form-box:hover {
          transform: translateY(-8px);
        }

        .form-box input,
        .form-box select {
          width: 100%;
          padding: 14px;
          margin-bottom: 15px;
          border-radius: 12px;
          border: 1px solid #ddd;
          outline: none;
          font-size: 15px;
          box-sizing: border-box;
        }

        .form-box input:focus,
        .form-box select:focus {
          border-color: #25d366;
          box-shadow: 0 0 10px rgba(37,211,102,0.2);
        }

        .btn {
          width: 100%;
          padding: 15px;
          border: none;
          border-radius: 12px;
          background: linear-gradient(
            135deg,
            #25d366,
            #1db954
          );
          color: white;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          transition: 0.3s;
        }

        .btn:hover {
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .title {
            font-size: 2rem;
          }

          .form-box {
            padding: 25px;
          }
        }
      `}</style>
    </section>
  );
}