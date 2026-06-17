import homeImg from "../assets/wheat-grain-in-jute-bags-apmc-market-agricultural-produce-market-committee-grain-mandi-punjab-india-asia-asian-indian-R8RGC3.jpg";

export default function Home() {
  return (
    <section
      id="home"
      style={{
        backgroundImage: `url(${homeImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "80vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center"
      }}
    >
      {/* DARK OVERLAY */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.65)"
        }}
      ></div>

      {/* CONTENT */}
      <div style={{ zIndex: 2, maxWidth: "800px", padding: "20px" }}>

        <h1
          style={{
            fontSize: "2.3rem",
            fontWeight: "800",
            letterSpacing: "2px",
            textShadow: "0px 0px 15px rgba(0,255,120,0.5)"
          }}
        >
          MINAXI ENTERPRISES
        </h1>

        <p
          style={{
            fontSize: "1.3rem",
            marginTop: "15px",
            color: "#f1f1f1"
          }}
        >
          Trusted Wholesale Supplier of <b>Wheat • Rice • Pulses • Spices</b>
        </p>

        <p
          style={{
            marginTop: "10px",
            fontSize: "1rem",
            color: "#cfcfcf"
          }}
        >
          Quality grains directly from APMC market at best wholesale price
        </p>

        {/* BUTTON */}
        <a
          href="https://wa.me/9904966566"
          target="_blank"
          style={{
            display: "inline-block",
            marginTop: "25px",
            padding: "12px 25px",
            background: "#25D366",
            color: "white",
            borderRadius: "30px",
            fontWeight: "600",
            textDecoration: "none",
            boxShadow: "0px 0px 20px rgba(37,211,102,0.5)"
          }}
        >
          📱 Order on WhatsApp
        </a>

      </div>
    </section>
  );
}