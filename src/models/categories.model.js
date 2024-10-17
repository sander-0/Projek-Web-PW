import { Schema as _Schema, model } from "mongoose";

const Schema = _Schema;

const CategoriesSchema = new Schema(
  {
    name: {
      type: Schema.Types.String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const CategoriesModel = model("Categories", CategoriesSchema);

export default CategoriesModel;
