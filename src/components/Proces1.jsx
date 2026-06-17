export default function OurProcessSection() {
  const steps = [
    {
      title: "🌾 Procurement from APMC",
      desc: "We directly source wheat, rice and pulses from trusted APMC markets."
    },
    {
      title: "🔍 Quality Checking",
      desc: "Every grain is carefully checked for purity and quality standards."
    },
    {
      title: "📦 Safe Packaging",
      desc: "Products are packed hygienically in strong bags for safety."
    },
    {
      title: "🚚 Fast Delivery",
      desc: "We ensure quick delivery to Ahmedabad and nearby areas."
    }
  ];

  return (
    <section id="process" className="process-section">
      {/* background glow lines */}
      <div className="line line1"></div>
      <div className="line line2"></div>

      {/* TITLE (FIXED SAFE CLASS) */}
      <h2 className="process-title">Our Process</h2>

      <p className="subtitle">How Minaxi Enterprises works for you</p>

      <div className="timeline">
        {steps.map((s, i) => (
          <div key={i} className="step">
            <div className="dot">{i + 1}</div>
            <div className="content">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .process-section {
          position: relative;
          padding: 90px 20px;
          background: #0b1220;
          color: white;
          text-align: center;
          overflow: hidden;
        }

        /* ===== TITLE FIX ===== */
        .process-title {
          font-size: 2.6rem;
          font-weight: 900;
          margin-bottom: 10px;
          color: #ffffff !important;
          animation: fadeDown 1s ease;
        }

        .subtitle {
          color: #cbd5e1;
          margin-bottom: 60px;
        }

        /* ===== glowing lines ===== */
        .line {
          position: absolute;
          width: 200%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #25d366, transparent);
          opacity: 0.3;
          animation: moveLine 6s linear infinite;
        }

        .line1 {
          top: 20%;
        }

        .line2 {
          top: 70%;
          animation-delay: 3s;
        }

        @keyframes moveLine {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }

        /* ===== timeline ===== */
        .timeline {
          max-width: 800px;
          margin: auto;
          position: relative;
        }

        .timeline::before {
          content: "";
          position: absolute;
          top: 0;
          left: 50%;
          width: 2px;
          height: 100%;
          background: rgba(255,255,255,0.2);
          transform: translateX(-50%);
        }

        .step {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          margin-bottom: 50px;
          position: relative;
        }

        .step:nth-child(even) {
          flex-direction: row-reverse;
          text-align: right;
        }

        .dot {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background: #25d366;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          box-shadow: 0 0 20px rgba(37,211,102,0.6);
          animation: pulse 2s infinite;
        }

        .content {
          width: 45%;
          padding: 20px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 14px;
          backdrop-filter: blur(12px);
          transition: 0.3s;
        }

        .content:hover {
          transform: scale(1.05) translateY(-5px);
        }

        .content h3 {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .content p {
          color: #cbd5e1;
          font-size: 14px;
        }

        /* animations */
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.15); }
          100% { transform: scale(1); }
        }

        /* mobile */
        @media (max-width: 768px) {
          .timeline::before {
            left: 20px;
          }

          .step,
          .step:nth-child(even) {
            flex-direction: column;
            text-align: left;
          }

          .content {
            width: 100%;
            margin-top: 10px;
          }
        }
      `}</style>
    </section>
  );
}