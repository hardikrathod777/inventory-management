import React, { useState } from "react";
import Card from "../../components/card/Card";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './addSupplier.css'; // Axios is optional; you can also use Fetch API

const AddSupplier = () => {
  const [supplier, setSupplier] = useState({ name: "", email: "" });
  const navigate = useNavigate(); // Initialize useNavigate

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSupplier({ ...supplier, [name]: value });
  };

  const saveSupplier = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/suppliers", supplier); // Adjust the URL to your API endpoint
      console.log("Supplier saved:", response.data);
      // Handle success (e.g., reset form or redirect)
      navigate("/dashboard");
    } catch (error) {
      console.error("Error saving supplier:", error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <div className="add-supplier">
      <Card cardClass={"card"}>
        <form onSubmit={saveSupplier}>
          <label>Supplier Name:</label>
          <input
            type="text"
            placeholder="Supplier Name"
            name="name"
            value={supplier.name}
            onChange={handleInputChange}
          />

          <label>E-mail:</label>
          <input
            type="text"
            placeholder="Supplier Email"
            name="email"
            value={supplier.email}
            onChange={handleInputChange}
          />

          <div className="--my">
            <button type="submit" className="--btn --btn-primary">
              Save Supplier
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default AddSupplier;
