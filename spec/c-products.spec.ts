import axios from "axios";
import { correctProduct } from "./mockdata/product";

interface IObjectConstructor {
  [key: string]: string | number | boolean | Record<string, unknown>;
};

interface IData {
  status?: number,
  token?: string,
  body?: IObjectConstructor
};

describe("PRODUCTS TESTS >> :", function () {
  describe("Tests for /products/ CREATE product route-", () => {
    const data: IData = {};
    beforeAll(async (done) => {
      try {
        const response = await axios.post("/products", correctProduct);

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
  describe("Tests for /products GET products route-", () => {
    const data: IData = {};

    beforeAll(async (done) => {
      try {
        const response = await axios.get("/products");
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
  describe("Tests for /products/2/category GET product by category route-", () => {
    const data: IData = {};
    beforeAll(async (done) => {
      try {
        const response = await axios.get("/products/2/category");
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
  describe("Tests for /products/1 GET product by id route-", () => {
    const data: IData = {};
    beforeAll(async (done) => {
      try {
        const response = await axios.get("/products/1");
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
      expect(typeof data).toBe("object");
    });
  });
});
