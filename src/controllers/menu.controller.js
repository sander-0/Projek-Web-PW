import { create, findAll, findOne, update, remove } from "../services/product.service.js";
  
  export async function create(req, res) {
    /**
     #swagger.tags = ['Menu']
     #swagger.security = [{
      "bearerAuth": []
     }]
     #swagger.requestBody = {
      required: true,
      schema: {
        $ref: "#/components/schemas/MenuRequest"
      }
     }
     */
    try {
        const result = await create(req.body);
        res.status(201).json({
            data: result,
            message: "Success create product",
        });
    } catch (error) {
        const err = error;
        res.status(500).json({
            data: err.message,
            message: "Failed create product",
        });
    }
}
export async function findAll(req, res) {
    /**
     #swagger.tags = ['Menu']
     */
    try {
        const result = await findAll();
        res.status(200).json({
            data: result,
            message: "Success get all products",
        });
    } catch (error) {
        const err = error;
        res.status(500).json({
            data: err.message,
            message: "Failed get all products",
        });
    }
}
export async function findOne(req, res) {
    /**
     #swagger.tags = ['Menu']
     */
    try {
        const result = await findOne(req.params?.id);

        res.status(200).json({
            data: result,
            message: "Success get one product",
        });
    } catch (error) {
        const err = error;
        res.status(500).json({
            data: err.message,
            message: "Failed get one product",
        });
    }
}
export async function update(req, res) {
    /**
     #swagger.tags = ['Menu']
     #swagger.security = [{
      "bearerAuth": []
     }]
     #swagger.requestBody = {
      required: true,
      schema: {
        $ref: "#/components/schemas/MenuRequest"
      }
     }
    */
    try {
        const result = await update(req.params?.id, req.body);

        res.status(200).json({
            data: result,
            message: "Success update product",
        });
    } catch (error) {
        const err = error;
        res.status(500).json({
            data: err.message,
            message: "Failed update product",
        });
    }
}
export async function remove(req, res) {
    /**
     #swagger.tags = ['Menu']
     #swagger.security = [{
      "bearerAuth": []
     }]
    */
    try {
        const result = await remove(req.params?.id);

        res.status(200).json({
            data: result,
            message: "Success delete product",
        });
    } catch (error) {
        const err = error;
        res.status(500).json({
            data: err.message,
            message: "Failed delete product",
        });
    }
}
  