import ownerImg from "../assets/WhatsApp Image 2026-06-17 at 6.52.23 PM.jpeg";
import directorImg from "../assets/WhatsApp Image 2026-06-17 at 6.54.24 PM.jpeg";

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "60px 20px",
        background: "#f8f9fa",
        textAlign: "center"
      }}
    >
      <h2 style={{ fontWeight: "800", marginBottom: "40px" }}>
        About Minaxi Enterprises
      </h2>

      <p style={{ maxWidth: "700px", margin: "0 auto 40px" }}>
        Minaxi Enterprises is a trusted wholesale grain and grocery supplier
        dealing in Wheat, Rice, Pulses and Spices. We focus on quality,
        honesty, and best market price.
      </p>

      {/* CARDS */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px"
        }}
      >
        {/* OWNER */}
        <div style={{ ...styles.card, animationDelay: "0s" }}>
          <div style={styles.glowGreen}></div>

          <img src={ownerImg} style={styles.img} />

          <h4>Owner</h4>
          <h3 style={{ color: "#25D366" }}>Algotar Motibhai</h3>

          <p style={{ fontSize: "14px", color: "#666" }}>
            Founder of Minaxi Enterprises
          </p>
        </div>

        {/* DIRECTOR */}
        <div style={{ ...styles.card, animationDelay: "0.2s" }}>
          <div style={styles.glowBlue}></div>

          <img src={directorImg} style={styles.img} />

          <h4>Director</h4>
          <h3 style={{ color: "#0d6efd" }}>Algotar Parth M</h3>

          <p style={{ fontSize: "14px", color: "#666" }}>
            Managing Operations & Business Growth
          </p>
        </div>
      </div>

      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-18px) scale(1.03); }
          100% { transform: translateY(0px) scale(1); }
        }

        @keyframes glowMove {
          0% { transform: translate(-30%, -30%) scale(1); }
          50% { transform: translate(30%, 30%) scale(1.4); }
          100% { transform: translate(-30%, -30%) scale(1); }
        }

        @keyframes popIn {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

/* ================= HEAVY BOX EFFECT ================= */
const styles = {
  card: {
    position: "relative",
    width: "280px",
    background: "white",
    borderRadius: "18px",
    padding: "22px",
    boxShadow: "0 25px 60px rgba(0,0,0,0.18)",

    overflow: "hidden",
    transition: "0.4s ease",

    animation: "floatUp 4s ease-in-out infinite, popIn 0.8s ease"
  },

  img: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "15px",
    border: "3px solid #25D366",
    position: "relative",
    zIndex: 2
  },

  glowGreen: {
    position: "absolute",
    top: "-60%",
    left: "-60%",
    width: "220%",
    height: "220%",
    background:
      "radial-gradient(circle, rgba(37,211,102,0.35), transparent 60%)",
    filter: "blur(45px)",
    animation: "glowMove 5s infinite ease-in-out",
    zIndex: 0
  },

  glowBlue: {
    position: "absolute",
    top: "-60%",
    left: "-60%",
    width: "220%",
    height: "220%",
    background:
      "radial-gradient(circle, rgba(13,110,253,0.30), transparent 60%)",
    filter: "blur(45px)",
    animation: "glowMove 5s infinite ease-in-out",
    zIndex: 0
  }
};