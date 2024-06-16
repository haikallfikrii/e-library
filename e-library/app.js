const express = require("express");
const app = express();
require("dotenv").config();
const authRoutes = require("./routes/auth");
const kelasRoutes = require("./routes/kelas");
// Tambahkan route lain sesuai kebutuhan
const db = require("./config/db");

// Middleware
app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/kelas", kelasRoutes);
// Tambahkan route lain sesuai kebutuhan

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
