import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

let connect;

if (process.env.NODE_ENV === "dev") {
    connect = {
        user: process.env.DEV_USER,
        host: process.env.DEV_HOST,
        port: Number(process.env.DEV_PORT),
        database: process.env.DEV_DATABASE,
        password: process.env.DEV_PASSWORD,
    };
} else if (process.env.NODE_ENV === "prod") {
    connect = {
        user: process.env.PROD_USER,
        host: process.env.PROD_HOST,
        port: Number(process.env.PROD_PORT),
        database: process.env.PROD_DATABASE,
        password: process.env.PROD_PASSWORD,
    };
} else {
    connect = {
        user: process.env.TEST_USER,
        host: process.env.TEST_HOST,
        port: Number(process.env.TEST_PORT),
        database: process.env.TEST_DATABASE,
        password: process.env.TEST_PASSWORD,
    };
}

const pool = new Pool(connect);

pool.on("connect", () => {
    console.log("db connection established");
});

export default pool;