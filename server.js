// File: backend/server.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const adminRoutes = require("./routes/adminRoutes");
const customerRoutes = require("./routes/customerRoutes");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Tambahkan ini agar Railway tahu server aktif
app.get("/", (req, res) => {
  res.send("🚀 Backend aktif di Railway");
});
app.get("/ping", (req, res) => res.json({ ping: "pong", time: Date.now() }));

app.use("/api/admins", adminRoutes);
app.use("/api/customers", customerRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
