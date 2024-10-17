import { create, find } from "../models/order.model";
import { findById } from "../models/products.model";

const createOrder = async (payload) => {
  // Validasi quantity
  for (const item of payload.orderItems) {
    const product = await findById(item.productId);
    if (!product) throw new Error(`Product not found: ${item.productId}`);

    if (item.quantity > product.qty) {
      throw new Error(`Insufficient quantity for product ${item.name}`);
    }

    // Update product qty
    product.qty -= item.quantity;
    await product.save();
  }

  // Simpan order baru
  const order = await create(payload);
  return order;
};

const findOrdersByUser = async (userId, page, limit) => {
  const skip = (page - 1) * limit;
  const orders = await find({ createdBy: userId })
    .skip(skip)
    .limit(limit);
  return orders;
};

export default {
  createOrder,
  findOrdersByUser,
};
