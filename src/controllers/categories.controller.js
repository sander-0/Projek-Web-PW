import { create, findAll, findOne, update, remove } from "../services/categories.service";

export async function create(req, res) {
    /**
     #swagger.tags = ['Categories']
     #swagger.security = [{
      "bearerAuth": []
     }]
     #swagger.requestBody = {
      required: true,
      schema: {
        $ref: "#/components/schemas/CategoryRequest"
      }
     }
     */
    try {
        const result = await create(req.body);
        res.status(201).json({
            data: result,
            message: "Success create category",
        });
    } catch (error) {
        const err = error;
        res.status(500).json({
            data: err.message,
            message: "Failed create category",
        });
    }
}
export async function findAll(req, res) {
    /**
     #swagger.tags = ['Categories']
     */
    try {
        const result = await findAll();
        res.status(200).json({
            data: result,
            message: "Success get all categories",
        });
    } catch (error) {
        const err = error;
        res.status(500).json({
            data: err.message,
            message: "Failed get all categories",
        });
    }
}
export async function findOne(req, res) {
    /**
     #swagger.tags = ['Categories']
     */
    try {
        const result = await findOne(req.params?.id);

        res.status(200).json({
            data: result,
            message: "Success get one category",
        });
    } catch (error) {
        const err = error;
        res.status(500).json({
            data: err.message,
            message: "Failed get one category",
        });
    }
}
export async function update(req, res) {
    /**
     #swagger.tags = ['Categories']
     #swagger.security = [{
      "bearerAuth": []
     }]
     #swagger.requestBody = {
      required: true,
      schema: {
        $ref: "#/components/schemas/CategoryRequest"
      }
     }
    */
    try {
        const result = await update(req.params?.id, req.body);

        res.status(200).json({
            data: result,
            message: "Success update category",
        });
    } catch (error) {
        const err = error;
        res.status(500).json({
            data: err.message,
            message: "Failed update category",
        });
    }
}
export async function remove(req, res) {
    /**
     #swagger.tags = ['Categories']
     #swagger.security = [{
      "bearerAuth": []
     }]
    */
    try {
        const result = await remove(req.params?.id);

        res.status(200).json({
            data: result,
            message: "Success delete category",
        });
    } catch (error) {
        const err = error;
        res.status(500).json({
            data: err.message,
            message: "Failed delete category",
        });
    }
}
