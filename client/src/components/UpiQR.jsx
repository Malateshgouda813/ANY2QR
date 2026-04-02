import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { useNavigate } from "react-router-dom";
import "./TextQR.css";

export default function UpiQR() {
  const [upi, setUpi] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [qr, setQr] = useState("");

  const navigate = useNavigate();

  const generateQR = async () => {
    if (!upi || !name) {
      alert("Enter UPI ID and Name");
      return;
    }

    const upiQR = `upi://pay?pa=${upi}&pn=${name}&am=${amount || 0}&cu=INR`;

    setQr(upiQR);

    try {
      const res = await fetch("https://any2qr.onrender.com/save-qr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: upiQR }),
      });

      const data = await res.json();
      if (data.success) console.log("UPI QR saved ✅");
      alert("UPI QR saved to DB");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="textqr">
      <button className="back-btn" onClick={() => navigate("/")}>
        ⬅ Back
      </button>

      <h1>UPI to QR</h1>

      <input
        type="text"
        placeholder="Enter UPI ID (abc@upi)"
        value={upi}
        onChange={(e) => setUpi(e.target.value)}
      />

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount (optional)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
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