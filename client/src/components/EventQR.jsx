import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { useNavigate } from "react-router-dom";
import "./TextQR.css";

export default function EventQR() {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [desc, setDesc] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [qr, setQr] = useState("");

  const navigate = useNavigate();

  // 🔥 Convert date → correct format
  const formatDate = (date) => {
    return date.replace(/[-:]/g, "").split(".")[0];
  };

  const generateQR = async () => {
    if (!title || !start || !end) {
      alert("Enter required fields");
      return;
    }

    const eventQR = `BEGIN:VEVENT
SUMMARY:${title}
LOCATION:${location}
DESCRIPTION:${desc}
DTSTART:${formatDate(start)}
DTEND:${formatDate(end)}
END:VEVENT`;

    setQr(eventQR);

    try {
      const res = await fetch("https://any2qr.onrender.com/save-qr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: eventQR }),
      });

      const data = await res.json();
      if (data.success) console.log("Event saved ✅");
        alert("Event QR saved to DB");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="textqr">
      <button className="back-btn" onClick={() => navigate("/")}>
        ⬅ Back
      </button>

      <h1>Event to QR</h1>

      <input
        type="text"
        placeholder="Event Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <input
        type="text"
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />

      <input
        type="datetime-local"
        value={start}
        onChange={(e) => setStart(e.target.value)}
      />

      <input
        type="datetime-local"
        value={end}
        onChange={(e) => setEnd(e.target.value)}
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