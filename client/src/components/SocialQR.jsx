import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { useNavigate } from "react-router-dom";
import "./TextQR.css";

export default function SocialQR() {
  const [name, setName] = useState("");
  const [instagram, setInstagram] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [qr, setQr] = useState("");

  const navigate = useNavigate();

  const generateQR = async () => {
    if (!name) {
      alert("Enter your name");
      return;
    }

    // 🔥 Combine all links
    const socialData = `
Name: ${name}
Instagram: ${instagram}
LinkedIn: ${linkedin}
GitHub: ${github}
`;

    setQr(socialData);

    try {
      const res = await fetch("http://localhost:3000/save-qr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: socialData }),
      });

      const data = await res.json();
      if (data.success) console.log("Social QR saved ✅");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="textqr">
      <button className="back-btn" onClick={() => navigate("/")}>
        ⬅ Back
      </button>

      <h1>Social Media to QR</h1>

      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Instagram URL"
        value={instagram}
        onChange={(e) => setInstagram(e.target.value)}
      />

      <input
        type="text"
        placeholder="LinkedIn URL"
        value={linkedin}
        onChange={(e) => setLinkedin(e.target.value)}
      />

      <input
        type="text"
        placeholder="GitHub URL"
        value={github}
        onChange={(e) => setGithub(e.target.value)}
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