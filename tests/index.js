const { _default: ginit, promise: ginitprom } = require("../index");
const assert = require("assert");

describe("ginit", () => {
  describe("async cb", () => {
    it("should return an error if the path does not the actual path", (done) => {
      ginit("; touch rma", (err) => {
        assert.strictEqual(err.message, "Path does not exist");
        done();
      });
    });
    it("should return an error if the path does not exist", (done) => {
      ginit("dist/", (err) => {
        assert.strictEqual(err.message, "Path does not exist");
        done();
      });
    });
  });

  describe("async promise", () => {
    it("should return an error if the path does not the actual path", () => {
      return ginitprom("; touch rma")
        .then(() => {
          assert.fail("Expected an error to be thrown");
        })
        .catch((err) => {
          assert.strictEqual(err.message, "Path does not exist");
        });
    });
    it("should return an error if the path does not exist", () => {
      return ginitprom("dist/")
        .then(() => {
          assert.fail("Expected an error to be thrown");
        })
        .catch((err) => {
          assert.strictEqual(err.message, "Path does not exist");
        });
    });
  });
});
