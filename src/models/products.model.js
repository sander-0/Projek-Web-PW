import { Schema as _Schema, model } from "mongoose";

const Schema = _Schema;

const ProductsSchema = new Schema(
  {
    name: {
      type: Schema.Types.String,
      required: true,
    },
    description: {
      type: Schema.Types.String,
      required: true,
    },
    images: {
      type: [Schema.Types.String],
      required: true,
    },
    price: {
      type: Schema.Types.Number,
      required: true,
    },
    qty: {
      type: Schema.Types.Number,
      required: true,
      min: [1, "Minimal qty adalah 1"],
    },
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  {
    timestamps: true,
  }
);

const ProductsModel = model("Products", ProductsSchema);

export default ProductsModel;
