import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

let connect;

if (process.env.NODE_ENV === "dev") {
    connect = {
        connectionString: process.env.DEV_DATABASE_URL
    };
} else if (process.env.NODE_ENV === "prod") {
    connect = {
        connectionString: process.env.PROD_DATABASE_URL
    };
} else {
    connect = {
        connectionString: process.env.TEST_DATABASE_URL
    };
}

const pool = new Pool(connect);

pool.on("connect", () => {
    console.log("db connection established");
});

export default pool;