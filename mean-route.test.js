const request = require('supertest');
const app = require('./app');

describe('testing express routes', () => {

    test('/mean route test', async () => {
        await request(app)
        .get("/mean")
        .expect("Content-Type", /json/)
        .query({ nums: '1,3,5,7' })
        .expect(201)
        .then((res) => {
            expect(res.body).toEqual([
                {
                    "response": {
                        "operation": "mean",
                        "value": "4"
                    }
                }
            ])
        })
    })

    test('/mean not a number test', async () => {
        await request(app)
        .get("/mean")
        .expect("Content-Type", /json/)
        .query({ nums: '1,3,5,foo' })
        .expect(404)
        .then((res) => {
            expect(res.body).toEqual({ "msg": "foo is not a number" })
        })

    })

    test('/mean no query test', async () => {
        await request(app)
        .get("/mean")
        .expect("Content-Type", /json/)
        .expect(404)
        .then((res) => {
            expect(res.body).toEqual({ "msg": "nums are required" })
        })
    })

})