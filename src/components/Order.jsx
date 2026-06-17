export default function OrderSection() {
  return (
    <section id="order" className="order-section">
      <div className="glow glow1" />
      <div className="glow glow2" />

      <h2 className="title">PLACE YOUR ORDER</h2>

      <p className="subtitle">
        Fill details below and get instant WhatsApp confirmation
      </p>

      <div className="form-box">
        <input placeholder="Your Full Name" />
        <input placeholder="Mobile Number (WhatsApp Active)" />
        <input placeholder="Product Name (Wheat / Rice / Pulses)" />
        <input placeholder="Quantity (Kg / Bags)" />

        <a
          href="https://wa.me/919904966566"
          target="_blank"
          className="btn"
        >
          📲 SEND ORDER ON WHATSAPP
        </a>
      </div>

      <style>{`
        .order-section {
          position: relative;
          overflow: hidden;
          padding: 110px 20px;
          text-align: center;
          background: #ffffff;
        }

        /* ===== BIG PREMIUM GLOW ===== */
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
          0%, 100% {
            transform: translate(0,0) scale(1);
          }
          50% {
            transform: translate(80px, -60px) scale(1.25);
          }
        }

        /* ===== MAIN TITLE (HEAVY IMPACT) ===== */
        .title {
          font-size: 3.2rem;
          font-weight: 900;
          letter-spacing: 2px;

          background: linear-gradient(90deg, #111, #444);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;

          margin-bottom: 10px;

          position: relative;
          z-index: 2;

          animation: fadeDown 0.8s ease;
        }

        /* ===== SUBTITLE ===== */
        .subtitle {
          font-size: 1.1rem;
          color: #555;
          margin-bottom: 55px;
          position: relative;
          z-index: 2;
        }

        /* ===== FORM BOX (ULTRA PREMIUM) ===== */
        .form-box {
          max-width: 560px;
          margin: auto;
          padding: 35px;
          border-radius: 22px;

          background: #ffffff;
          border: 1px solid rgba(0,0,0,0.08);

          box-shadow:
            0 25px 60px rgba(0,0,0,0.12),
            0 5px 15px rgba(0,0,0,0.05);

          position: relative;
          z-index: 2;

          transition: 0.4s ease;
        }

        .form-box:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow:
            0 35px 90px rgba(0,0,0,0.18);
        }

        /* ===== INPUTS (BOLD LOOK) ===== */
        .form-box input {
          width: 100%;
          padding: 14px 16px;
          margin-bottom: 16px;

          border-radius: 12px;
          border: 1px solid #ddd;

          font-size: 15px;
          font-weight: 500;

          outline: none;
          transition: 0.3s;
        }

        .form-box input:focus {
          border-color: #25d366;
          box-shadow: 0 0 12px rgba(37,211,102,0.25);
          transform: scale(1.02);
        }

        /* ===== BUTTON (HEAVY CTA) ===== */
        .btn {
          display: inline-block;
          width: 100%;
          padding: 14px;

          border-radius: 14px;

          background: linear-gradient(135deg, #25d366, #1db954);
          color: white;

          font-size: 16px;
          font-weight: 800;
          letter-spacing: 1px;

          text-decoration: none;

          box-shadow: 0 20px 40px rgba(37,211,102,0.3);

          transition: 0.3s;
        }

        .btn:hover {
          transform: scale(1.06);
          box-shadow: 0 25px 60px rgba(37,211,102,0.45);
        }

        /* ===== ANIMATION ===== */
        @keyframes fadeDown {
          from {
            opacity: 0;
            transform: translateY(-25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}