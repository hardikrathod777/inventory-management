const mongoose = require("mongoose");

const supplierSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: [true, "Please add a supplier"],
      trim: true,
    },
    email:{
        type:String,
        required:[true,"Please add a supplier email"],
        trim:true
    }
    
}
);

const Supplier = mongoose.model("Supplier", supplierSchema);
module.exports = Supplier;
