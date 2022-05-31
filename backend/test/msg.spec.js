const request = require("supertest");
const should = require("should");

const app = require("../app");

describe("GET /user 는", () => {
    describe("성공시", () => {
        it("200을 반환한다.", (done) => {
            request(app).get("/user").expect(200).end(done);
        });
    });
});

describe("Post /msg/push 는", () => {
    describe("성공시 ", () => {
        let body;
        before((done) => {
            request(app)
                .post("/msg/push")
                .send({
                    deviceToken: "testToken1",
                    userId: "tjrwls455",
                })
                .expect(200)
                .end((err, res) => {
                    body = res.body;
                });
            done();
        });
        it("Response Dto 를 Object로 반환한다.", (done) => {
            body.should.have.property("data").instanceOf(Object);
            done();
        });
        it("요청 된 userId와 push 성공유무를 반환한다.", (done) => {
            body.should.have.property("data").have.property("pushFlag").instanceOf(Boolean);
            done();
        });
    });

    describe("실패시 ", () => {
        it("deviceToken 누락시 400을 응답한다.", (done) => {
            request(app).post("/msg/push").send({ deviceToken: "" }).expect(400).end(done);
        });

        // it("push 실패시 500을 응답한다.", (done) => {
        //     request(app).post("/msg/push").send({ deviceToken: "testT2222oken1", userId: "tjrwls455" }).expect(500).end(done);
        // });
    });
});
