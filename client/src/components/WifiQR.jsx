import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { useNavigate } from "react-router-dom";
import "./TextQR.css";

export default function WifiQR() {
  const [ssid, setSsid] = useState("");
  const [password, setPassword] = useState("");
  const [qr, setQr] = useState("");

  const navigate = useNavigate();

  const generateQR = async () => {
    if (!ssid) {
      alert("Enter WiFi name");
      return;
    }

    const wifiQR = `WIFI:T:WPA;S:${ssid};P:${password};;`;

    setQr(wifiQR);

    try {
      const res = await fetch("http://localhost:3000/save-qr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: wifiQR }),
      });

      const data = await res.json();
      if (data.success) console.log("WiFi saved ✅");
      alert("WiFi QR saved to DB");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="textqr">
      <button className="back-btn" onClick={() => navigate("/")}>
        ⬅ Back
      </button>

      <h1>WiFi to QR</h1>

      <input
        type="text"
        placeholder="WiFi Name (SSID)"
        value={ssid}
        onChange={(e) => setSsid(e.target.value)}
      />

      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
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