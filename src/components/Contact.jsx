export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "80px 20px",
        textAlign: "center",
        background: "#ffffff"
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          fontWeight: "900",
          marginBottom: "20px",
          color: "#111"
        }}
      >
        Contact Us
      </h2>

      <p style={{ fontSize: "16px", marginBottom: "8px", color: "#444" }}>
        📍 Ahmedabad, Gujarat
      </p>

      <p style={{ fontSize: "16px", marginBottom: "20px", color: "#444" }}>
        📞 +91 99049 66566
      </p>

      {/* RESPONSIVE WHATSAPP BUTTON */}
      <a
        href="https://wa.me/919904966566"
        target="_blank"
        rel="noreferrer"
        style={{
          display: "block",
          width: "100%",
          maxWidth: "420px",
          margin: "auto",

          padding: "16px 18px",
          borderRadius: "14px",

          background: "linear-gradient(135deg, #25D366, #1db954)",
          color: "#fff",

          fontSize: "18px",
          fontWeight: "800",
          textAlign: "center",
          textDecoration: "none",

          boxShadow: "0 20px 40px rgba(37,211,102,0.25)",
          transition: "0.3s"
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = "scale(1.07)";
          e.target.style.boxShadow =
            "0 25px 60px rgba(37,211,102,0.4)";
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "scale(1)";
          e.target.style.boxShadow =
            "0 20px 40px rgba(37,211,102,0.25)";
        }}
      >
        💬 Chat on WhatsApp
      </a>

      {/* RESPONSIVE FIX (mobile safe) */}
      <style>{`
        @media (max-width: 600px) {
          a {
            width: 90% !important;
            font-size: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}