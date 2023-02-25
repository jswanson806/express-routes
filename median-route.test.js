const request = require('supertest');
const app = require('./app');

describe('testing express routes', () => {

    test('/median route test', async () => {
        await request(app)
        .get("/median")
        .expect("Content-Type", /json/)
        .query({ nums: '1,3,5,7' })
        .expect(201)
        .then((res) => {
            expect(res.body).toEqual([
                {
                    "response": {
                        "operation": "median",
                        "value": "4"
                    }
                }
            ])
        })
    })

    test('/median not a number test', async () => {
        await request(app)
        .get("/median")
        .expect("Content-Type", /json/)
        .query({ nums: '1,3,5,foo' })
        .expect(404)
        .then((res) => {
            expect(res.body).toEqual({ "msg": "foo is not a number" })
        })
    })

    test('/median no query test', async () => {
        await request(app)
        .get("/median")
        .expect("Content-Type", /json/)
        .expect(404)
        .then((res) => {
            expect(res.body).toEqual({ "msg": "nums are required" })
        })
    })

})