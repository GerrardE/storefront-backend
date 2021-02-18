import axios from "axios";
import server from "../dist/server";

interface IData {
    status?: number,
    token?: string,
    message?: string,
    body?: any[], // allow for broad values for testing
};

describe("INDEX TESTS >> :", function () {
    afterAll(() => {
        server.close();
    });
    describe("Tests for /index/ route-", () => {
        let data: IData = {};
        beforeAll(async (done) => {
            try {
                const response = await axios.get("/");
 
                data.status = response.status;
                data.message = response.data;
            } catch (error) {
                console.log(error.response.data); 
            }
            done();
        });
        it("should have a status of 200", () => {
            expect(data.status).toBe(200);
        });
        it("expect message to be a string", () => {
            expect(data.message).toEqual("Welcome to the Store-Front API");
        });
    });
});
