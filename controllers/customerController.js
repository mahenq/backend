// backend/controllers/customerController.js
const db = require("../models/db");

exports.getAll = async (req, res) => {
  try {
    const result = await db.query(
      "SELECT * FROM customers ORDER BY created_at DESC"
    );
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Gagal mengambil data customers", error);
    res.status(500).json({ error: "Gagal mengambil data" });
  }
};

exports.create = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await db.query(
      "INSERT INTO customers (name, email, message, status, notes, created_at) VALUES ($1, $2, $3, 'baru', '', NOW())",
      [name, email, message]
    );
    res.status(201).json({ message: "Pesan berhasil dikirim" });
  } catch (error) {
    console.error("Gagal menyimpan pesan", error);
    res.status(500).json({ error: "Gagal menyimpan pesan" });
  }
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { status, notes } = req.body;

  try {
    await db.query(
      "UPDATE customers SET status = $1, notes = $2 WHERE id = $3",
      [status, notes, id]
    );
    res.status(200).json({ message: "Customer berhasil diupdate" });
  } catch (error) {
    console.error("Gagal mengupdate customer", error);
    res.status(500).json({ error: "Gagal update data" });
  }
};

exports.remove = async (req, res) => {
  const { id } = req.params;

  try {
    await db.query("DELETE FROM customers WHERE id = $1", [id]);
    res.status(200).json({ message: "Customer berhasil dihapus" });
  } catch (error) {
    console.error("Gagal menghapus customer", error);
    res.status(500).json({ error: "Gagal hapus data" });
  }
};
