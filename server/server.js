require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { connectDB, getDB } = require("./config/db");

const app = express();

// 🔥 FORCE PORT (avoid confusion)
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Connect DB
connectDB();

// ✅ Save QR Data
app.post("/save-qr", async (req, res) => {
  try {
    console.log("Incoming request:", req.body);

    const db = getDB();
    const { text } = req.body;

    if (!text) {
      return res.status(400).send({ error: "Text is required" });
    }

    const result = await db.collection("qrdata").insertOne({
      text,
      createdAt: new Date(),
    });

    console.log("Saved in DB:", result.insertedId);

    res.send({ success: true, id: result.insertedId });
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).send({ error: err.message });
  }
});
app.get("/", (req, res) => {
  res.send("ANY2QR Backend is running 🚀");
});



// ✅ Get QR History
app.get("/qr-history", async (req, res) => {
  try {
    const db = getDB();

    const data = await db
      .collection("qrdata")
      .find()
      .sort({ createdAt: -1 })
      .toArray();

    res.send(data);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});