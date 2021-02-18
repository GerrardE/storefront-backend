import axios from "axios";
import server from "../dist/server";
import { correctUser } from "./mockdata/user";

interface IData {
  status?: number,
  token?: string,
  body?: any, // allow for broad values for testing
};

describe("USER TESTS >> :", function () {
  let app: { close: () => void; };

  axios.defaults.baseURL = `http://localhost:${process.env.PORT}/api/v1`

  beforeAll(() => {
    app = server;
  });

  describe("Tests for setup /users/setup user route-", () => {
    let data: IData = {};

    beforeAll(async (done) => {
      try {
        const response = await axios.post("/users/setup", correctUser);
        data.status = response.data.status;
        data.body = response.data.payload;
        data.token = response.data.payload.token;
      } catch (error) {
        console.log(error.response.data);
      }
      axios.defaults.headers.common["Authorization"] = data.token;
      done();
    });

    it("should have a status of 201", () => {
      expect(data.status).toBe(201);
    });
    it("typeof body should be an object", () => {
      expect(typeof data.body).toBe("object");
    });
  });
  describe("Tests for /users/ create user route-", () => {
    let data: IData = {};
    beforeAll(async (done) => {
      try {
        const response = await axios.post("/users", correctUser);
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
  describe("Tests for /users get users route-", () => {
    let data: IData = {};

    beforeAll(async (done) => {
      try {
        const response = await axios.get("/users");
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
  describe("Tests for /users/:userid get user route-", () => {
    let data: IData = {};
    beforeAll(async (done) => {
      try {
        const response = await axios.get("/users/1");
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
});
