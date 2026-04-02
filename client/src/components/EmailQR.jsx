import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { useNavigate } from "react-router-dom";
import "./TextQR.css";

export default function EmailQR() {
  const [email, setEmail] = useState("");
  const [qr, setQr] = useState("");

  const navigate = useNavigate();

  const generateQR = async () => {
    console.log("Email Button clicked");

    if (!email) {
      alert("Please enter email");
      return;
    }

    // ✅ Simple email validation
    if (!email.includes("@")) {
      alert("Enter valid email");
      return;
    }

    const mailQR = `mailto:${email}`;

    setQr(mailQR);

    try {
      const res = await fetch("https://any2qr.onrender.com/save-qr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: mailQR }),
      });

      const data = await res.json();

      if (data.success) {
        console.log("Email saved to DB ✅");
        alert("Email saved to DB");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div className="textqr">
      <button className="back-btn" onClick={() => navigate("/")}>
        ⬅ Back
      </button>

      <h1>Email to QR</h1>

      <input
        type="text"
        placeholder="Enter email (example@gmail.com)"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={generateQR}>Generate QR Code</button>

      {qr && (
        <div className="qr-box">
          <QRCodeCanvas value={qr} size={200} />
        </div>
      )}
    </div>
  );
}