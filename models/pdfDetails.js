const mongoose = require("mongoose");
const { Schema } = mongoose

const PdfDetailsSchema = new mongoose.Schema(
  {
    pdf: String,
    title: String,
    user_id: { type: Schema.Types.ObjectId, ref: "User" }, 
  },
  { collection: "PdfDetails" }
);

mongoose.model("PdfDetails", PdfDetailsSchema);
