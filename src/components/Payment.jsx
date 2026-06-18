import paymentQr from "../assets/WhatsApp Image 2026-06-18 at 12.14.59 PM.jpeg";

export default function PaymentSection() {
  const upiId = "parthalgotar15@okaxis";
  const amount = "500";

const handlePayment = () => {
  window.open(
    "tez://upi/pay?pa=parthalgotar15@okaxis&pn=Parth%20Algotar&am=500&cu=INR",
    "_self"
  );
};
  return (
    <section id="payment" className="payment-section">
      <div className="payment-container">
        <h2>💳 Secure Payment</h2>

        <p>
          Scan the QR Code below or click Pay Now to make payment instantly.
        </p>

        <div className="qr-box">
          <img src={paymentQr} alt="Payment QR" />
        </div>

        <div className="upi-box">
          <h3>UPI ID</h3>
          <p>{upiId}</p>
        </div>

        <div className="payment-methods">
          <span>📱 Google Pay</span>
          <span>💜 PhonePe</span>
          <span>💙 Paytm</span>
          <span>🏦 UPI</span>
        </div>

        <button className="pay-btn" onClick={handlePayment}>
          💳 Pay Now
        </button>

        <div className="security">
          🔒 100% Secure Payment
          <br />
          📱 Use Mobile For Best Experience
        </div>
      </div>

      <style>{`
        .payment-section{
          padding:100px 20px;
          background:#f8fafc;
          text-align:center;
        }

        .payment-container{
          max-width:700px;
          margin:auto;
          background:#fff;
          padding:40px;
          border-radius:25px;
          box-shadow:0 20px 50px rgba(0,0,0,.08);
        }

        .payment-container h2{
          font-size:3rem;
          font-weight:800;
          margin-bottom:15px;
          color:#111827;
        }

        .payment-container p{
          color:#666;
          margin-bottom:25px;
        }

        .qr-box{
          width:260px;
          height:260px;
          margin:0 auto 25px;
          border-radius:20px;
          overflow:hidden;
          box-shadow:0 10px 30px rgba(0,0,0,.15);
        }

        .qr-box img{
          width:100%;
          height:100%;
          object-fit:cover;
        }

        .upi-box{
          background:#f1f5f9;
          padding:15px;
          border-radius:15px;
          margin-bottom:25px;
        }

        .upi-box h3{
          margin:0;
          color:#111827;
          font-size:20px;
        }

        .upi-box p{
          margin:8px 0 0;
          font-size:18px;
          font-weight:700;
          color:#16a34a;
          word-break:break-all;
        }

        .payment-methods{
          display:flex;
          justify-content:center;
          gap:15px;
          flex-wrap:wrap;
          margin-bottom:30px;
        }

        .payment-methods span{
          padding:10px 18px;
          background:#f1f5f9;
          border-radius:30px;
          font-weight:600;
        }

        .pay-btn{
          border:none;
          padding:15px 35px;
          border-radius:15px;
          background:linear-gradient(135deg,#22c55e,#16a34a);
          color:#fff;
          font-size:17px;
          font-weight:700;
          cursor:pointer;
          transition:.3s;
        }

        .pay-btn:hover{
          transform:translateY(-4px);
        }

        .security{
          margin-top:25px;
          color:#16a34a;
          font-weight:700;
          line-height:1.8;
        }

        @media(max-width:768px){
          .payment-container{
            padding:25px;
          }

          .payment-container h2{
            font-size:2rem;
          }

          .qr-box{
            width:220px;
            height:220px;
          }

          .upi-box p{
            font-size:16px;
          }
        }
      `}</style>
    </section>
  );
}