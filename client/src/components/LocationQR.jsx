import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { useNavigate } from "react-router-dom";
import "./TextQR.css";

export default function LocationQR() {
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [qr, setQr] = useState("");

  const navigate = useNavigate();

  const generateQR = async () => {
    if (!lat || !lng) {
      alert("Enter latitude and longitude");
      return;
    }

    const locationURL = `https://www.google.com/maps?q=${lat},${lng}`;
    setQr(locationURL);

    try {
      const res = await fetch("http://localhost:3000/save-qr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: locationURL }),
      });

      const data = await res.json();
      if (data.success) console.log("Location saved ✅");
         alert("Location QR saved to DB");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="textqr">
      <button className="back-btn" onClick={() => navigate("/")}>
        ⬅ Back
      </button>

      <h1>Location to QR</h1>

      <input
        type="text"
        placeholder="Latitude (e.g. 12.9716)"
        value={lat}
        onChange={(e) => setLat(e.target.value)}
      />

      <input
        type="text"
        placeholder="Longitude (e.g. 77.5946)"
        value={lng}
        onChange={(e) => setLng(e.target.value)}
      />

      <button onClick={generateQR}>Generate QR Code</button>

      {/* 🔥 BONUS: Auto detect location */}
      <button
        onClick={() => {
          navigator.geolocation.getCurrentPosition((pos) => {
            setLat(pos.coords.latitude);
            setLng(pos.coords.longitude);
          });
        }}
      >
        📍 Use My Location
      </button>

      {qr && (
        <div className="qr-box">
          <QRCodeCanvas value={qr} size={200} />
        </div>
      )}
    </div>
  );
}