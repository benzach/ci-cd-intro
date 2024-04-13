const request = require('supertest');
const app = require('../src/app').default;
//import app from './app';
// describe('POST /', () => {
//     it('responds with hello', async () => {
//         const response = await request(app)
//             .get('/')
//             .send()
//             .expect('Content-Type', /json/)
//             .expect(200);
//         expect(response.body.message).toEqual('hello');
//         console.log(response.body);
//     });
//     afterAll(() => {
//         console.log("stop all");
//         app.close();
//     });
// });
describe('POST /add', () => {
    it('responds with hello', async () => {
        const response = await request(app)
            .get('/')
            .send()
            .expect('Content-Type', /json/)
            .expect(200);
        expect(response.body.message).toEqual('hello');
        console.log(response.body);
    });
    it('responseds with sum of two numbers', async () => {
        const num1 = 5;
        const num2 = 10;
        const response = await request(app)
            .post('/add')
            .send({ num1, num2 })
            .expect('Content-Type', /json/)
            .expect(200);
        expect(response.body.result).toEqual(num1 + num2);

    });
    it('responds with 400 if parameters are missing', async () => {
        const response = await request(app)
            .post('/add')
            .send({ num1: 'abc', num2: 'xyz' })
            .expect('Content-Type', /json/)
            .expect(400);
        expect(response.body.error).toEqual('Invalid Parameters');


    });
    afterAll((done) => {
        console.log("stop all");
        done();
        // app.close(() => {
        //     done();
        // });
    });
});

