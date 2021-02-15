import ResponseModel from "../helpers/response";
import { Response, Request } from "express";
import bcrypt from "bcryptjs";
import validUser from "../validations/user";
import pool from "../database/dbconnect";
import { createUser, returnUser, returnUsers } from "../database/sqlqueries";
import { createToken } from "../middlewares/token";
import userextractor from "../helpers/userextractor";

/**
 * User Model
 * @async
 * @class UserModel
 */
class UserModel {
    /**
     * @static
     * @param {*} req - Request object
     * @param {*} res - Response object
     * @param {*} next - The next middleware
     * @return {json} Returns json object
     * @memberof UserModel
     */
    static async create(req: Request, res: Response): Promise<Response> {
        const client = await pool.connect();
        try {
            const { errors, isValid } = validUser(req.body);

            // Check Validation
            if (!isValid) {
                return ResponseModel.error(res, 400, 400, errors);
            }

            const user = [
                req.body.firstName,
                req.body.lastName,
                req.body.email,
                bcrypt.hashSync(req.body.password, Number(process.env.SALT)),
            ];

            const { rows } = await client.query(createUser, user);
            client.release();

            const payload = {
                id: rows[0].id,
                firstName: rows[0].firstname,
                lastName: rows[0].lastname,
                email: rows[0].email,
            };

            const token = await createToken(payload);

            return ResponseModel.success(
                res,
                201,
                201,
                userextractor(payload, token),
                "User created successfully"
            );
        } catch (error) {
            return ResponseModel.error(
                res,
                400,
                400,
                error,
                "Registration unsuccessful"
            );
        }
    }

    /**
     * @static
     * @param {*} req - Request object
     * @param {*} res - Response object
     * @param {*} next - The next middleware
     * @return {json} Returns json object
     * @memberof UserModel
     */
    static async getAllUsers(req: Request, res: Response): Promise<Response> {
        const client = await pool.connect();
        try {
            const { rows: payload } = await client.query(returnUsers);
            client.release();

            return ResponseModel.success(
                res,
                200,
                200,
                payload,
                "Users retrieved successfully"
            );
        } catch (error) {
            return ResponseModel.error(
                res,
                400,
                400,
                error,
                "Users could not be retrieved"
            );
        }
    }

    /**
     * @static
     * @param {*} req - Request object
     * @param {*} res - Response object
     * @param {*} next - The next middleware
     * @return {json} Returns json object
     * @memberof UserModel
     */
    static async getUser(req: Request, res: Response): Promise<Response> {
        const client = await pool.connect();
        try {
            const { userid } = req.params;

            let { rows: payload } = await client.query(returnUser, [Number(userid)]);
            client.release();

            payload = payload[0];

            return ResponseModel.success(
                res,
                200,
                200,
                payload,
                "User retrieved successfully"
            );
        } catch (error) {
            return ResponseModel.error(
                res,
                400,
                400,
                error,
                "User could not be retrieved"
            );
        }
    }
}

export default UserModel;
