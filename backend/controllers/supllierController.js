const Supplier = require("../models/supllierModel");

const createSupplier = async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ message: "Please add all fields" });
    }

    const newSupplier = await Supplier.create({
      user: req.user.id, // If you’re linking to a user; otherwise remove this line
      name,
      email,
    });

    res.status(201).json(newSupplier);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const deleteSupplier = async (req, res) => {
    // Your logic here
  };

  const getAllSuppliers = async (req, res) => {
    try {
      const suppliers = await Supplier.find();
      res.status(200).json(suppliers);
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  };

module.exports = { createSupplier, deleteSupplier ,  getAllSuppliers };

