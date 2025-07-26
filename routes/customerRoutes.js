// backend/controllers/customerRoutes.js

const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customerController");
const auth = require("../middleware/auth");

// admin access
router.get("/", auth, customerController.getAll);
router.put("/:id", auth, customerController.update);
router.delete("/:id", auth, customerController.remove);

// public form
router.post("/", customerController.create);

module.exports = router;
