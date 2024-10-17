import { Schema as _Schema, model } from "mongoose";

const Schema = _Schema;

const OrderSchema = new Schema(
  {
    grandTotal: {
      type: Schema.Types.Number,
      required: true,
    },
    orderItems: [
      {
        name: { type: Schema.Types.String, required: true },
        productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
        price: { type: Schema.Types.Number, required: true },
        quantity: { type: Schema.Types.Number, required: true, min: 1, max: 5 },
      },
    ],
    createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
    status: {
      type: Schema.Types.String,
      enum: ["pending", "completed", "cancelled"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

const OrderModel = model("Order", OrderSchema);

export default OrderModel;
