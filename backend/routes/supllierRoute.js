const express = require("express");
const protect = require("../middleWare/authMiddleware");
const router = express.Router();
const{
    createSupplier,
    deleteSupplier,
    getAllSuppliers
} = require("../controllers/supllierController");

router.get("/", getAllSuppliers); 
router.post("/", protect, createSupplier);
router.delete("/:id", protect, deleteSupplier);

module.exports = router;