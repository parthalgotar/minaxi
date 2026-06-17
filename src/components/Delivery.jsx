export default function DeliverySection() {
  return (
    <section className="delivery-section" id="delivery">
      {/* Background blobs */}
      <div className="bg-blobs">
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* TITLE (NO CONFLICT CLASS) */}
      <h2 className="delivery-title">
        Delivery & Service Area
      </h2>

      <p className="subtitle">
        We provide fast and reliable grain delivery service
      </p>

      <div className="row cards-wrapper">
        <div className="col-md-4 mb-3">
          <div className="glass-card">
            <h5>📍 Location</h5>
            <p>Ahmedabad & Nearby Areas</p>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="glass-card">
            <h5>🚚 Delivery</h5>
            <p>Same Day / Next Day Delivery</p>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="glass-card">
            <h5>🏭 Wholesale</h5>
            <p>Direct APMC Market Supply</p>
          </div>
        </div>
      </div>

      <style>{`
        .delivery-section {
          position: relative;
          overflow: hidden;
          padding: 80px 20px;
          text-align: center;
          background: #0f172a;
          color: white;
        }

        /* 🔥 FIXED TITLE */
        .delivery-title {
          font-size: 2.6rem;
          font-weight: 900;
          margin-bottom: 10px;
          color: #ffffff !important;
          position: relative;
          z-index: 2;
          animation: fadeDown 1s ease;
        }

        .subtitle {
          color: #cbd5e1;
          margin-bottom: 50px;
          position: relative;
          z-index: 2;
        }

        /* BACKGROUND BLOBS */
        .bg-blobs span {
          position: absolute;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          filter: blur(90px);
          opacity: 0.6;
          animation: float 10s infinite ease-in-out;
        }

        .bg-blobs span:nth-child(1) {
          background: #ff6b6b;
          top: -80px;
          left: -80px;
        }

        .bg-blobs span:nth-child(2) {
          background: #4dabf7;
          bottom: -100px;
          right: -80px;
          animation-delay: 2s;
        }

        .bg-blobs span:nth-child(3) {
          background: #51cf66;
          top: 40%;
          left: 60%;
          animation-delay: 4s;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-40px) scale(1.2);
          }
        }

        /* CARDS */
        .cards-wrapper {
          position: relative;
          z-index: 2;
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(15px);
          border-radius: 18px;
          padding: 25px;
          transition: 0.4s ease;
        }

        .glass-card:hover {
          transform: translateY(-10px) scale(1.05);
        }

        @keyframes fadeDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
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