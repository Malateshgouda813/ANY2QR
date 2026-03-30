import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { useNavigate } from "react-router-dom";
import "./TextQR.css";

export default function TextQR() {
  const [text, setText] = useState("");
  const [qr, setQr] = useState("");

  const navigate = useNavigate();

  const generateQR = async () => {
    console.log("Button clicked");

    if (!text) {
      alert("Please enter text");
      return;
    }

    setQr(text);

    try {
      const res = await fetch("http://localhost:3000/save-qr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      const data = await res.json();

      console.log("Response:", data);

      if (data.success) {
        console.log("Saved to DB ✅");
        alert("Saved to DB");
      } else {
        console.log("Failed to save ❌");
      }

    } catch (err) {
      console.error("Error saving:", err);
    }
  };

  const downloadQR = () => {
    const canvas = document.querySelector("canvas");
    const url = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = url;
    link.download = "qr.png";
    link.click();
  };

  return (
    <div className="textqr">
      <button className="back-btn" onClick={() => navigate("/")}>
        ⬅ Back
      </button>

      <h1>Text to QR</h1>

      <input
        type="text"
        placeholder="Enter your text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={generateQR}>Generate QR Code</button>

      {qr && (
        <div className="qr-box">
          <QRCodeCanvas value={qr} size={200} />
          <button onClick={downloadQR}>Download</button>
        </div>
      )}
    </div>
  );
}