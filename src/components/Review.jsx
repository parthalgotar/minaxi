import { useEffect, useState } from "react";

export default function ReviewsSection() {
  const reviews = [
    {
      name: "Ravi Patel",
      text: "Best quality grains and fast delivery!",
      rating: 5
    },
    {
      name: "Jay Mehta",
      text: "Trusted wholesale supplier in Ahmedabad.",
      rating: 5
    },
    {
      name: "Amit Shah",
      text: "Good price and excellent service.",
      rating: 4
    }
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const current = reviews[index];

  return (
    <section style={styles.section}>
      {/* ANIMATED BACKGROUND BLOBS */}
      <div style={styles.bg}>
        <span style={styles.blob1}></span>
        <span style={styles.blob2}></span>
        <span style={styles.blob3}></span>
      </div>

      <h2 style={styles.title}>Customer Reviews</h2>
      <p style={styles.subtitle}>What our customers say about us</p>

      {/* CARD */}
      <div style={styles.card}>
        <h4 style={styles.name}>{current.name}</h4>
        <p style={styles.stars}>{"⭐".repeat(current.rating)}</p>
        <p style={styles.text}>{current.text}</p>
      </div>

      {/* DOTS */}
      <div style={styles.dotsWrap}>
        {reviews.map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            style={{
              ...styles.dot,
              background: i === index ? "#25D366" : "#ccc"
            }}
          />
        ))}
      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-40px) scale(1.2); }
          100% { transform: translateY(0px) scale(1); }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  );
}

/* ===== STYLES ===== */
const styles = {
  section: {
    position: "relative",
    padding: "90px 20px",
    textAlign: "center",
    background: "#ffffff",
    overflow: "hidden"
  },

  /* BACKGROUND WRAPPER */
  bg: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 0
  },

  blob1: {
    position: "absolute",
    width: "300px",
    height: "300px",
    background: "#25d366",
    borderRadius: "50%",
    filter: "blur(100px)",
    opacity: 0.2,
    top: "-80px",
    left: "-80px",
    animation: "float 8s infinite ease-in-out"
  },

  blob2: {
    position: "absolute",
    width: "280px",
    height: "280px",
    background: "#4dabf7",
    borderRadius: "50%",
    filter: "blur(100px)",
    opacity: 0.2,
    bottom: "-100px",
    right: "-80px",
    animation: "float 10s infinite ease-in-out"
  },

  blob3: {
    position: "absolute",
    width: "250px",
    height: "250px",
    background: "#ff6b6b",
    borderRadius: "50%",
    filter: "blur(100px)",
    opacity: 0.15,
    top: "40%",
    left: "50%",
    animation: "float 12s infinite ease-in-out"
  },

  title: {
    position: "relative",
    zIndex: 2,
    fontSize: "2.6rem",
    fontWeight: "900",
    color: "#111",
    marginBottom: "10px"
  },

  subtitle: {
    position: "relative",
    zIndex: 2,
    color: "#666",
    marginBottom: "40px"
  },

  card: {
    position: "relative",
    zIndex: 2,
    maxWidth: "520px",
    margin: "auto",
    padding: "35px",
    borderRadius: "18px",
    background: "#fff",
    border: "1px solid rgba(0,0,0,0.08)",
    boxShadow: "0 25px 60px rgba(0,0,0,0.10)",
    animation: "fadeIn 0.6s ease"
  },

  name: {
    fontWeight: "800",
    marginBottom: "10px"
  },

  stars: {
    color: "#ffc107",
    fontSize: "18px",
    marginBottom: "10px"
  },

  text: {
    color: "#555"
  },

  dotsWrap: {
    position: "relative",
    zIndex: 2,
    marginTop: "20px"
  },

  dot: {
    height: "10px",
    width: "10px",
    margin: "5px",
    display: "inline-block",
    borderRadius: "50%",
    cursor: "pointer"
  }
};