import React,{useState, useEffect} from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Card from "../../card/Card";
import axios from "axios";
import "./ProductForm.css";

const ProductForm = ({
  product,
  description,
  setDescription,
  handleInputChange,
  saveProduct,
  handleSupplierChange,
  supplier
}) => {
  const [suppliers, setSuppliers] = useState([]);
  useEffect(() => {
    const fetchSuppliers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/suppliers");
        console.log("Fetched suppliers:", response.data);
        setSuppliers(response.data); // Set the suppliers state with the fetched data
      } catch (error) {
        console.error("Error fetching suppliers:", error);
      }
    };

    fetchSuppliers(); // Call the function to fetch suppliers
  }, []);
  

  

  return (
    <div className="add-product">
      <Card cardClass={"card"}>
        <form onSubmit={saveProduct}>
          <label>Product Name:</label>
          <input
            type="text"
            placeholder="Product name"
            name="name"
            value={product?.name}
            onChange={handleInputChange}
          /> 

          <label>Product Category:</label>
          <input
            type="text"
            placeholder="Product Category"
            name="category"
            value={product?.category}
            onChange={handleInputChange}
          />

          <label>Product Price:</label>
          <input
            type="text"
            placeholder="Product Price"
            name="price"
            value={product?.price}
            onChange={handleInputChange}
          />

          <label>Product Quantity:</label>
          <input
            type="text"
            placeholder="Product Quantity"
            name="quantity"
            value={product?.quantity}
            onChange={handleInputChange}
          />

<label>Supplier:</label>
      <select value={supplier} onChange={handleSupplierChange}>
        <option value="">Select Supplier</option>
        {suppliers.length > 0 ? (
          suppliers.map((supplier) => (
            <option key={supplier._id} value={supplier._id}>
              {supplier.name}
            </option>
          ))
        ) : (
          <option value="" disabled>
            No suppliers available
          </option>
        )}
      </select>


          <label>Product Description:</label>
          <ReactQuill
            theme="snow"
            value={description}
            onChange={setDescription}
            modules={ProductForm.modules}
            formats={ProductForm.formats}
          />

          <div className="--my">
            <button type="submit" className="--btn --btn-primary">
              Save Product
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

ProductForm.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ align: [] }],
    [{ color: [] }, { background: [] }],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["clean"],
  ],
};
ProductForm.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "color",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "video",
  "image",
  "code-block",
  "align",
];

export default ProductForm;
