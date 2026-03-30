import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { useNavigate } from "react-router-dom";
import "./TextQR.css";

export default function PhoneQR() {
  const [phone, setPhone] = useState("");
  const [qr, setQr] = useState("");

  const navigate = useNavigate();

  const generateQR = async () => {
    if (!phone) {
      alert("Enter phone number");
      return;
    }

    const phoneQR = `tel:${phone}`;
    setQr(phoneQR);

    try {
      const res = await fetch("http://localhost:3000/save-qr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: phoneQR }),
      });

      const data = await res.json();
      if (data.success) console.log("Phone saved ✅");
        alert("Phone QR saved to DB");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="textqr">
      <button className="back-btn" onClick={() => navigate("/")}>
        ⬅ Back
      </button>

      <h1>Phone to QR</h1>

      <input
        type="text"
        placeholder="Enter phone (+91...)"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
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