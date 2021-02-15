import { createToken } from "../middlewares/token";
import ResponseModel from "../helpers/response";
import { Response, Request } from "express";
import bcrypt from "bcryptjs";
import validUser from "../validations/user";
import pool from "../database/dbconnect";
import { createUser, returnUser, returnUsers } from "../database/sqlqueries";

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
    static async create(req: Request, res: Response) {
        try {
            const { errors, isValid } = validUser(req.body);

            // Check Validation
            if (!isValid) {
                return ResponseModel.error(
                    res,
                    400,
                    400,
                    errors,
                );
            }

            const user = [
                req.body.firstName,
                req.body.lastName,
                req.body.email,
                bcrypt.hashSync(req.body.password, process.env.SALT)
              ];

            const createduser = await pool.query(createUser,)

            console.log(createduser)
            // const payload = {
            //     firstName: createduser.firstName,
            //     lastName: createduser.lastName,
            //     email: createduser.email,
            // };

            // const token = await createToken(payload);
            // res.status(201).json({
            //     status: 201,
            //     message: "Registration successful",
            //     user: userExtractor(user, token),
            // });
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
    static async getAllUsers(req: Request, res: Response) {
        try {
            const payload = await pool.query(returnUsers)

            return ResponseModel.success(
                res,
                200,
                200,
                payload,
                "Users retrieved successfully",
            );
        } catch (error) {
            return ResponseModel.error(
                res,
                400,
                400,
                error,
                "Users could not be retrieved",
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
    static async getUser(req: Request, res: Response) {
        try {
            let { id } = req.params;

            const idnum = Number(id);

            const user = await pool.query(returnUser, [idnum])

            const payload = {
                id,
                // firstName,
                // lastName,
                // email,
            } = user.rows[0];

            return ResponseModel.success(
                res,
                200,
                200,
                payload,
                "User retrieved successfully",
            );
        } catch (err) {
            return ResponseModel.error(
                res,
                400,
                400,
                err,
                "User could not be retrieved",
            );
        }
    }
}

export default UserModel;
