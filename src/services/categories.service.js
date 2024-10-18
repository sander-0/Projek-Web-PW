import { create as _create, find, findById, findOneAndUpdate, findOneAndDelete } from "../models/categories.model.js";

const create = async (payload) => {
  const result = await _create(payload);
  return result;
};

const findAll = async () => {
  const result = await find();
  return result;
};

const findOne = async (id) => {
  const result = await findById(id);
  return result;
};

const update = async (id, payload) => {
  const result = await findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const remove = async (id) => {
  const result = await findOneAndDelete({ _id: id });
  return result;
};

export default {
  create,
  findAll,
  findOne,
  update,
  remove,
};
