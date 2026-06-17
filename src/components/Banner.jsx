export default function BrandBanner() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "1100px",
        margin: "40px auto",
        padding: "25px 16px",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        background: "rgba(0,0,0,0.55)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",

        border: "1px solid rgba(255,255,255,0.12)",
        borderRadius: "16px",

        boxShadow:
          "0 20px 50px rgba(0,0,0,0.6), inset 0 0 20px rgba(0,255,150,0.08)",

        overflow: "hidden",

        // 👇 RESPONSIVE FIX
        boxSizing: "border-box"
      }}
    >
      {/* GLOW BACKGROUND */}
      <span
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle, rgba(0,255,150,0.18), transparent 60%)",
          filter: "blur(40px)",
          animation: "glowMove 6s infinite linear",
          zIndex: 0
        }}
      />

      {/* DARK OVERLAY */}
      <span
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.7), rgba(0,0,0,0.4))",
          zIndex: 1
        }}
      />

      {/* TEXT */}
      <div
        style={{
          textAlign: "center",
          zIndex: 2,
          width: "100%"
        }}
      >
        <h2
          style={{
            color: "#fff",
            fontWeight: "800",
            letterSpacing: "1px",
            margin: 0,

            // 👇 RESPONSIVE FONT
            fontSize: "clamp(14px, 3.5vw, 20px)",

            textShadow: "0 2px 10px rgba(0,0,0,0.8)",

            animation: "floatText 3s infinite ease-in-out"
          }}
        >
          QUALITY IS NOT A PROMISE
        </h2>

        <p
          style={{
            color: "#25D366",
            marginTop: "8px",
            marginBottom: 0,

            letterSpacing: "2px",
            fontWeight: "700",

            // 👇 RESPONSIVE FONT
            fontSize: "clamp(10px, 2.5vw, 12px)",

            textShadow: "0 2px 10px rgba(0,0,0,0.8)"
          }}
        >
          IT’S OUR HABIT AT MINAXI ENTERPRISES
        </p>
      </div>

      {/* ANIMATIONS */}
      <style>
        {`
          @keyframes glowMove {
            0% { transform: translate(-20%, -20%) scale(1); }
            50% { transform: translate(20%, 20%) scale(1.2); }
            100% { transform: translate(-20%, -20%) scale(1); }
          }

          @keyframes floatText {
            0% { transform: translateY(0); }
            50% { transform: translateY(-3px); }
            100% { transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
}