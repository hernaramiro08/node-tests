const request = require("supertest");
const expect = require("expect");

var app = require("./server").app;

describe ("Server", () => {
    describe("GET /", () => {
        it("should return hello world response", (done) => {
            request(app)
                .get("/")
                .expect(200)
                .expect("Hello world!")
                .end(done);
        });
    });

    describe("GET /error", () => {
        it("should return error response", (done) => {
            request(app)
                .get("/error")
                .expect(404)
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: "Page not found"
                    });
                })
                .end(done);
        });
    });

    describe("GET /users", () => {
        it("should return my user object", (done) => {
            request(app)
                .get("/users")
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: "Jessica",
                        age: 30
                    });
                })
                .end(done);
        });
    });
});
