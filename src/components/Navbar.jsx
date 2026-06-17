import { useState } from "react";
import './Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1000,
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          background: "rgba(0,0,0,0.45)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          padding: "12px 16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0 8px 25px rgba(0,0,0,0.35)"
        }}
      >
        {/* BRAND */}
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            minWidth: "0",
            cursor: "pointer",
            transition: "0.25s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "translateY(-2px)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "translateY(0)")
          }
        >
          {/* LOGO */}
        {/* LOGO WITH 3D LIGHT ANIMATION */}
<span
  style={{
    position: "relative",
    width: "38px",
    height: "38px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
    background: "linear-gradient(135deg,#25D366,#00ff99)",
    boxShadow:
      "0 6px 15px rgba(37,211,102,0.35)",
    flexShrink: 0,
    overflow: "visible"
  }}
>
  {/* 🔥 ANIMATED LIGHT GLOW BEHIND LOGO */}
  <span
    style={{
      position: "absolute",
      width: "70px",
      height: "70px",
      borderRadius: "50%",
      background:
        "radial-gradient(circle, rgba(0,255,150,0.5), transparent 60%)",
      filter: "blur(8px)",
      animation: "pulseGlow 2s infinite ease-in-out",
      zIndex: -1
    }}
  />

  {/* SVG LOGO */}
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path
      d="M4 20V4l8 6 8-6v16"
      stroke="white"
      strokeWidth="2"
    />
    <path
      d="M4 4l8 8 8-8"
      stroke="white"
      strokeWidth="2"
    />
  </svg>
</span>

          {/* TEXT */}
          <span
            style={{
              fontSize: "14px",
              fontWeight: "800",
              letterSpacing: "2px",
              color: "#fff",
              textTransform: "uppercase",
              textShadow:
                "0 0 8px rgba(0,255,120,0.6)"
            }}
          >
            MINAXI <span style={{ color: "#25D366" }}>ENTERPRISES</span>
          </span>
        </span>

        {/* DESKTOP MENU */}
        <div className="d-none d-md-flex">
          {["Home", "Products", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                color: "white",
                margin: "0 8px",
                textDecoration: "none",
                fontSize: "14px",
                padding: "6px 10px",
                borderRadius: "6px",
                transition: "0.25s"
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(255,255,255,0.08)";
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow =
                  "0 5px 12px rgba(0,255,120,0.15)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "transparent";
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "none";
              }}
            >
              {item}
            </a>
          ))}
        </div>

        {/* HAMBURGER */}
        <div
          className="d-md-none"
          onClick={() => setOpen(!open)}
          style={{
            fontSize: "26px",
            color: "white",
            cursor: "pointer"
          }}
        >
          {open ? "✖" : "☰"}
        </div>
      </nav>

      {/* OVERLAY */}
      <div
        onClick={() => setOpen(false)}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.5)",
          opacity: open ? 1 : 0,
          visibility: open ? "visible" : "hidden",
          transition: "0.3s",
          zIndex: 998
        }}
      />

      {/* MOBILE MENU */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: open ? "0" : "-260px",
          width: "260px",
          height: "100%",
          zIndex: 999,
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
          background: "rgba(0,0,0,0.6)",
          borderLeft: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "-10px 0 20px rgba(0,0,0,0.4)",
          transition: "0.3s ease"
        }}
      >
        <h5 style={{ color: "white" }}>Menu</h5>

        {["Home", "Products", "About", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setOpen(false)}
            style={{
              color: "white",
              textDecoration: "none",
              padding: "8px",
              borderRadius: "6px",
              transition: "0.2s"
            }}
            onMouseEnter={(e) =>
              (e.target.style.background = "rgba(37,211,102,0.15)")
            }
            onMouseLeave={(e) =>
              (e.target.style.background = "transparent")
            }
          >
            {item}
          </a>
        ))}
      </div>
    </>
  );
}