import axios from "axios";
import { correctOrder, extraOrder } from "./mockdata/order";

interface IObjectConstructor {
    [key: string]: string | number | boolean | Record<string, unknown>;
};

interface IData {
    status?: number,
    token?: string,
    body?: IObjectConstructor
};

describe("ORDERS TESTS >> :", function () {
    describe("Tests for /orders/ CREATE order route-", () => {
        const data: IData = {};
        beforeAll(async (done) => {
            try {
                const response = await axios.post("/orders/1", correctOrder);
                await axios.post("/orders/1", extraOrder);

                data.status = response.data.status;
                data.body = response.data.payload;
            } catch (error) {
                console.log(error.response.data);
            }
            done();
        });
        it("should have a status of 201", () => {
            expect(data.status).toBe(201);
        });
        it("typeof body should be an object", () => {
            expect(typeof data.body).toBe("object");
        });
    });
    describe("Tests for /orders/1 GET orders by user route-", () => {
        const data: IData = {};

        beforeAll(async (done) => {
            try {
                const response = await axios.get("/orders/1");
                data.status = response.data.status;
                data.body = response.data.payload;
            } catch (error) {
                console.log(error.response);
            }
            done();
        });

        it("should have a status of 200", () => {
            expect(data.status).toBe(200);
        });
        it("typeof data should be an object", () => {
            expect(typeof (data)).toBe("object");
        });
    });
    describe("Tests for /orders/1/completed GET order by category route-", () => {
        const data: IData = {};
        beforeAll(async (done) => {
            try {
                const response = await axios.get("/orders/1/completed");
                data.status = response.data.status;
                data.body = response.data.payload;
            } catch (error) {
                console.log(error.response);
            }
            done();
        });

        it("should have a status of 200", () => {
            expect(data.status).toBe(200);
        });
        it("typeof body should be an object", () => {
            expect(typeof data.body).toBe("object");
        });
    });
});
