import ResponseModel from "../helpers/response";
import { Response, Request } from "express";
import validOrder from "../validations/order";
import pool from "../database/dbconnect";
import { createOrder, createOrderProduct, returnOrderByUser } from "../database/sqlqueries";

/**
 * Order Model
 * @async
 * @class OrderModel
 */
class OrderModel {
    /**
     * @static
     * @param {*} req - Request object
     * @param {*} res - Response object
     * @param {*} next - The next middleware
     * @return {json} Returns json object
     * @memberof OrderModel
     */
    static async create(req: Request, res: Response): Promise<Response> {
        const client = await pool.connect();
        try {
            const { errors, isValid } = validOrder(req.body);

            // Check Validation
            if (!isValid) {
                return ResponseModel.error(res, 400, 400, errors);
            }

            const { user_id } = req.params;

            const order = [
                Number(user_id),
                Number(req.body.order_status),
            ]
            
            const { rows: orderitem } = await client.query(createOrder, order);

            const orderproducts = [
                Number(user_id),
                Number(orderitem[0].id),
                Number(req.body.productid),
                Number(req.body.productqty),
            ];
            
            const { rows } = await client.query(createOrderProduct, orderproducts);

            client.release();

            const payload = {
                id: orderitem[0].id,
                user_id: user_id,
                product_id: rows[0].productid,
                productqty: rows[0].productqty,
                order_status: orderitem[0].order_status,
            };

            return ResponseModel.success(
                res,
                201,
                201,
                payload,
                "Order created successfully"
            );
        } catch (error) {
            return ResponseModel.error(
                res,
                400,
                400,
                error.stack,
                "Order creation unsuccessful"
            );
        }
    }

    /**
   * @static
   * @param {*} req - Request object
   * @param {*} res - Response object
   * @param {*} next - The next middleware
   * @return {json} Returns json object
   * @memberof OrderModel
   */
    static async getActiveOrders(req: Request, res: Response): Promise<Response> {
        const client = await pool.connect();
        try {
            const { user_id } = req.params;

            // order_status: 1 is active and 2 is complete
            const order = [
                Number(user_id),
                1
            ];

            const { rows: payload } = await client.query(returnOrderByUser, order);
            client.release();

            return ResponseModel.success(
                res,
                200,
                200,
                payload,
                "Orders retrieved successfully"
            );
        } catch (error) {
            return ResponseModel.error(
                res,
                400,
                400,
                error.stack,
                "Orders could not be retrieved"
            );
        }
    }

    /**
   * @static
   * @param {*} req - Request object
   * @param {*} res - Response object
   * @param {*} next - The next middleware
   * @return {json} Returns json object
   * @memberof OrderModel
   */
    static async getCompleteOrders(req: Request, res: Response): Promise<Response> {
        const client = await pool.connect();
        try {
            const { user_id } = req.params;

            // order_status: 1 is active and 2 is complete
            const order = [
                Number(user_id),
                2
            ];

            const { rows: payload } = await client.query(returnOrderByUser, order);
            client.release();

            return ResponseModel.success(
                res,
                200,
                200,
                payload,
                "Orders retrieved successfully"
            );
        } catch (error) {
            return ResponseModel.error(
                res,
                400,
                400,
                error.stack,
                "Orders could not be retrieved"
            );
        }
    }
}

export default OrderModel;
