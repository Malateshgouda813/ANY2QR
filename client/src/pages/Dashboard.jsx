import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="dashboard">
      <h1 className="title">ANY2QR Dashboard</h1>
      <p className="subtitle">
        Choose what you want to convert into a QR code
      </p>

      <div className="card-grid">
      <div className="card" onClick={() => navigate("/upi")}>
  💰 UPI to QR
</div>


        <div className="card" onClick={() => navigate("/text")}>
  📝 Text to QR
</div>
        
        <div className="card" onClick={() => navigate("/url")}>
  🌐 URL to QR
</div>
        <div className="card" onClick={() => navigate("/email")}>
  📧 Email to QR
</div>
        <div className="card" onClick={() => navigate("/phone")}>
  📞 Phone to QR
</div>

<div className="card" onClick={() => navigate("/wifi")}>
  📶 WiFi to QR
</div>
<div className="card" onClick={() => navigate("/location")}>
  📍 Location to QR
</div>

<div className="card" onClick={() => navigate("/image")}>
  🖼 Image to QR
</div>
<div className="card" onClick={() => navigate("/sms")}>
  📩 SMS to QR
</div>
<div className="card" onClick={() => navigate("/vcard")}>
  👤 Contact (vCard) to QR
</div>

<div className="card" onClick={() => navigate("/social")}>
  🌐 Social Media QR
</div>
<div className="card" onClick={() => navigate("/event")}>
  📅 Event to QR
</div>
      </div>

      <div className="recent">
        <h2>Recent QR Codes</h2>
        <p>No QR codes generated yet.</p>
      </div>
    </div>
  );
}