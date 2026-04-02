import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { useNavigate } from "react-router-dom";
import "./TextQR.css";

export default function SmsQR() {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [qr, setQr] = useState("");

  const navigate = useNavigate();

  const generateQR = async () => {
    if (!phone) {
      alert("Enter phone number");
      return;
    }

    const smsQR = `SMSTO:${phone}:${message}`;
    setQr(smsQR);

    try {
      const res = await fetch("https://any2qr.onrender.com/save-qr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: smsQR }),
      });

      const data = await res.json();
      if (data.success) console.log("SMS saved ✅");
      alert("SMS QR saved to DB");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="textqr">
      <button className="back-btn" onClick={() => navigate("/")}>
        ⬅ Back
      </button>

      <h1>SMS to QR</h1>

      <input
        type="text"
        placeholder="Enter phone (+91...)"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
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