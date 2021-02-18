import ResponseModel from "../helpers/response";
import { Response, Request } from "express";
import validCategory from "../validations/category";
import pool from "../database/dbconnect";
import { createCategory, returnCategories, deleteCategory, updateCategory } from "../database/sqlqueries";

/**
 * Category Model
 * @async
 * @class CategoryModel
 */
class CategoryModel {
    /**
     * @static
     * @param {*} req - Request object
     * @param {*} res - Response object
     * @param {*} next - The next middleware
     * @return {json} Returns json object
     * @memberof CategoryModel
     */
    static async create(req: Request, res: Response): Promise<Response> {
        const client = await pool.connect();
        try {
            const { errors, isValid } = validCategory(req.body);

            // Check Validation
            if (!isValid) {
                return ResponseModel.error(res, 400, 400, errors);
            }

            const category = [
                req.body.name,
                req.body.notes,
            ];

            const { rows } = await client.query(createCategory, category);
            client.release();

            const payload = {
                id: rows[0].id,
                name: rows[0].name,
                notes: rows[0].notes,
            };

            return ResponseModel.success(
                res,
                201,
                201,
                payload,
                "Category created successfully"
            );
        } catch (error) {
            return ResponseModel.error(
                res,
                400,
                400,
                error,
                "Category creation unsuccessful"
            );
        }
    }

    /**
   * @static
   * @param {*} req - Request object
   * @param {*} res - Response object
   * @param {*} next - The next middleware
   * @return {json} Returns json object
   * @memberof CategoryModel
   */
    static async getAllCategories(req: Request, res: Response): Promise<Response> {
    const client = await pool.connect();
        try {
            const { rows: payload } = await client.query(returnCategories);
            client.release();

            return ResponseModel.success(
                res,
                200,
                200,
                payload,
                "Categories retrieved successfully"
            );
        } catch (error) {
            return ResponseModel.error(
                res,
                400,
                400,
                error,
                "Categories could not be retrieved"
            );
        }
    }

    /**
   * @static
   * @param {*} req - Request object
   * @param {*} res - Response object
   * @param {*} next - The next middleware
   * @return {json} Returns json object
   * @memberof CategoryModel
   */
    static async updateCategory(req: Request, res: Response): Promise<Response> {
        const client = await pool.connect();
        try {
            const { errors, isValid } = validCategory(req.body);

            // Check Validation
            if (!isValid) {
                return ResponseModel.error(res, 400, 400, errors);
            }
            
            const { categoryid: id } = req.params;

            const categoryid = Number(id);

            const update = [
                categoryid,
                req.body.name,
                req.body.notes,
            ]

            let { rows: payload } = await client.query(updateCategory, update);
            client.release();

            payload = payload[0];

            return ResponseModel.success(
                res,
                200,
                200,
                payload,
                "Category updated successfully"
            );
        } catch (error) {
            return ResponseModel.error(
                res,
                400,
                400,
                error,
                "Category could not be updated"
            );
        }
    }

    /**
   * @static
   * @param {*} req - Request object
   * @param {*} res - Response object
   * @param {*} next - The next middleware
   * @return {json} Returns json object
   * @memberof CategoryModel
   */
    static async deleteCategory(req: Request, res: Response): Promise<Response> {
        const client = await pool.connect();
        try {
            const { categoryid: id } = req.params;

            const categoryid = Number(id);

            await client.query(deleteCategory, [categoryid]);
            client.release();

            return ResponseModel.success(
                res,
                200,
                200,
                {},
                "Category deleted successfully"
            );
        } catch (error) {
            return ResponseModel.error(
                res,
                400,
                400,
                error,
                "Category could not be deleted"
            );
        }
    }
}

export default CategoryModel;
