// backend/routes/adminRoutes.js
const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

router.post("/login", adminController.login);
router.get("/", adminController.getAllAdmins);

// backend/routes/adminRoutes.js
router.post("/", async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await db.query(
      "INSERT INTO admins (email, password) VALUES ($1, $2) RETURNING *",
      [email, password]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("Error insert admin:", err.message);
    res.status(500).json({ error: "Gagal insert admin" });
  }
});

module.exports = router;
