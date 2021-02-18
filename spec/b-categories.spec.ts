import axios from "axios";
import { correctCategory, updateCategory, extraCategory } from "./mockdata/category";

interface IData {
  status?: number,
  token?: string,
  body?: any, // allow for broad values for testing
};

describe("CATEGORY TESTS >> :", function () {
  describe("Tests for /categories/ CREATE category route-", () => {
    let data: IData = {};
    beforeAll(async (done) => {
      try {
        const response = await axios.post("/categories", correctCategory);

        // make a category available for future use
        await axios.post("/categories", extraCategory);

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
  describe("Tests for /categories GET categories route-", () => {
    let data: IData = {};

    beforeAll(async (done) => {
      try {
        const response = await axios.get("/categories");
        data.status = response.data.status;
        data.body = response.data.payload;
      } catch (error) {
        console.log(error.response.data);
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
  describe("Tests for /categories/1 PUT route-", () => {
    let data: IData = {};
    beforeAll(async (done) => {
      try {
        const response = await axios.put("/categories/1", updateCategory);
        data.status = response.data.status;
        data.body = response.data.payload;
      } catch (error) {
        console.log(error.response.data);
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
  describe("Tests for /categories/1 DELETE route-", () => {
    let data: IData = {};
    beforeAll(async (done) => {
      try {
        const response = await axios.delete("/categories/1");
        data.status = response.data.status;
        data.body = response.data.payload;
      } catch (error) {
        console.log(error.response.data);
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
