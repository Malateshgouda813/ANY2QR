// Home.jsx
import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <h1>ANY2QR</h1>
        <h2>Convert Anything to QR Code in Seconds</h2>
        <p>
          Generate QR codes for text, email, phone numbers, URLs, WiFi, and more -- all in one place.
        </p>
        <div className="hero-buttons">
  <button 
    className="primary"
    onClick={() => navigate("/dashboard")}
  >
    Generate QR
  </button>
</div>
      </section>

      {/* Supported Types */}
      <section className="types">
        <h2>Supported QR Types</h2>
        <div className="type-grid">
          <div>💰 UPI_id</div>
          <div>🌐 URL</div>
          <div>📧 Email</div>
          <div>📞 Phone</div>
          <div>📝 Text</div>
          <div>📶 WiFi</div>
          <div>📍 Location</div>
          <div>🖼️ Image</div>
          <div>💬 SMS</div>
          <div>👤vCard</div>
          <div>🌐Social Media</div>
          <div>📅 Event</div>
        </div>
        <p>All your QR needs in one simple tool.</p>
      </section>

      {/* How It Works */}
      <section className="how">
        <h2>How It Works</h2>
        <div className="steps">
          <div>1. Enter your data</div>
          <div>2. Click Generate</div>
          <div>3. Download or Share</div>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <h2>Features</h2>
        <ul>
          <li>⚡ Instant QR generation</li>
          <li>🔒 Secure & private</li>
          <li>📱 Mobile-friendly</li>
          <li>🎨 Custom design (coming soon)</li>
          <li>📥 Download PNG/SVG</li>
        </ul>
      </section>

      {/* Why Section */}
      <section className="why">
        <h2>Why ANY2QR?</h2>
        <p>
          ANY2QR is designed for students, developers, and businesses who need fast and reliable QR code generation without complexity.
        </p>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Start Creating Your QR Code Now!</h2>
<button 
    className="primary"
    onClick={() => navigate("/dashboard")}
  >
    Generate QR
  </button>
        </section>

      {/* Footer */}
      <footer className="footer">
        <p>  ANY2QR </p>
        <div className="footer-links">
  <span onClick={() => navigate("/about")}>About</span>
  <span onClick={() => navigate("/contact")}>Contact</span>
  <span onClick={() => navigate("/privacy")}>Privacy</span>
  <span onClick={() => navigate("/terms")}>Terms</span>
</div>
      </footer>
    </div>
  );
}