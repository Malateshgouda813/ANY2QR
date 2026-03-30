import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { useNavigate } from "react-router-dom";
import "./TextQR.css"; // reuse same CSS

export default function UrlQR() {
  const [url, setUrl] = useState("");
  const [qr, setQr] = useState("");

  const navigate = useNavigate();

  const generateQR = async () => {
    console.log("URL Button clicked");

    if (!url) {
      alert("Please enter a URL");
      return;
    }

    // ✅ Simple validation
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      alert("Enter valid URL (start with http:// or https://)");
      return;
    }

    setQr(url);

    try {
      const res = await fetch("http://localhost:3000/save-qr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: url }),
      });

      const data = await res.json();

      if (data.success) {
        console.log("URL Saved to DB ✅");
        alert("URL Saved to DB");
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

      <h1>URL to QR</h1>

      <input
        type="text"
        placeholder="Enter URL (https://example.com)"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
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