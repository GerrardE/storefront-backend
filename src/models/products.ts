import ResponseModel from "../helpers/response";
import { Response, Request } from "express";
import validProduct from "../validations/product";
import pool from "../database/dbconnect";
import { createProduct, returnProducts, returnProduct, returnProductByCategory } from "../database/sqlqueries";

/**
 * Product Model
 * @async
 * @class ProductModel
 */
class ProductModel {
    /**
     * @static
     * @param {*} req - Request object
     * @param {*} res - Response object
     * @param {*} next - The next middleware
     * @return {json} Returns json object
     * @memberof ProductModel
     */
    static async create(req: Request, res: Response): Promise<Response> {
        const client = await pool.connect();
        try {
            const { errors, isValid } = validProduct(req.body);

            // Check Validation
            if (!isValid) {
                return ResponseModel.error(res, 400, 400, errors);
            }

            const product = [
                req.body.name,
                req.body.price,
                Number(req.body.categoryid),
            ];

            const { rows } = await client.query(createProduct, product);
            client.release();

            const payload = {
                id: rows[0].id,
                name: rows[0].name,
                price: rows[0].price,
                categoryid: rows[0].categoryid,
            };

            return ResponseModel.success(
                res,
                201,
                201,
                payload,
                "Product created successfully"
            );
        } catch (error) {
            return ResponseModel.error(
                res,
                400,
                400,
                error,
                "Product creation unsuccessful"
            );
        }
    }

    /**
   * @static
   * @param {*} req - Request object
   * @param {*} res - Response object
   * @param {*} next - The next middleware
   * @return {json} Returns json object
   * @memberof ProductModel
   */
    static async getAllProducts(req: Request, res: Response): Promise<Response> {
        const client = await pool.connect();
        try {
            const { rows: payload } = await client.query(returnProducts);
            client.release();

            return ResponseModel.success(
                res,
                200,
                200,
                payload,
                "Products retrieved successfully"
            );
        } catch (error) {
            return ResponseModel.error(
                res,
                400,
                400,
                error,
                "Products could not be retrieved"
            );
        }
    }

     /**
     * @static
     * @param {*} req - Request object
     * @param {*} res - Response object
     * @param {*} next - The next middleware
     * @return {json} Returns json object
     * @memberof ProductModel
     */
    static async getProduct(req: Request, res: Response): Promise<Response> {
        const client = await pool.connect();
        try {
            const { productid } = req.params;

            let { rows: payload } = await client.query(returnProduct, [Number(productid)]);
            client.release();

            payload = payload[0];

            return ResponseModel.success(
                res,
                200,
                200,
                payload,
                "Product retrieved successfully"
            );
        } catch (error) {
            return ResponseModel.error(
                res,
                400,
                400,
                error,
                "Product could not be retrieved"
            );
        }
    }

     /**
     * @static
     * @param {*} req - Request object
     * @param {*} res - Response object
     * @param {*} next - The next middleware
     * @return {json} Returns json object
     * @memberof ProductModel
     */
    static async getProductByCategory(req: Request, res: Response): Promise<Response> {
        const client = await pool.connect();
        try {
            const { categoryid } = req.params;

            const { rows: payload } = await client.query(returnProductByCategory, [Number(categoryid)]);
            client.release();

            return ResponseModel.success(
                res,
                200,
                200,
                payload,
                "Product retrieved successfully"
            );
        } catch (error) {
            return ResponseModel.error(
                res,
                400,
                400,
                error,
                "Product could not be retrieved"
            );
        }
    }
}

export default ProductModel;
