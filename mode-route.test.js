const request = require('supertest');
const app = require('./app');

describe('testing express routes', () => {

    test('/mode route test', async () => {
        await request(app)
        .get("/mode")
        .expect("Content-Type", /json/)
        .query({ nums: '1,2,2,7' })
        .expect(201)
        .then((res) => {
            expect(res.body).toEqual([
                {
                    "response": {
                        "operation": "mode",
                        "value": "2"
                    }
                }
            ])
        })

    })

    test('/mode not a number test', async () => {
        await request(app)
        .get("/mode")
        .expect("Content-Type", /json/)
        .query({ nums: '1,2,2,foo' })
        .expect(404)
        .then((res) => {
            expect(res.body).toEqual({ "msg": "foo is not a number" })
        })

    })

    test('/mode no query test', async () => {
        await request(app)
        .get("/mode")
        .expect("Content-Type", /json/)
        .expect(404)
        .then((res) => {
            expect(res.body).toEqual({ "msg": "nums are required" })
        })
    })

})