const request = require('supertest');
const app = require('../app');

describe('Test the root path', () => {
    test('It should response the GET method', (done) => {
        request(app).get('/home').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
    test('It should response the GET method for diet', (done) => {
        request(app).get('/diet').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });

    test('It should response the GET method for image gallery', (done) => {
        request(app).get('/imageList').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });

    test('It should response the GET method for anatomy', (done) => {
        request(app).get('/anatomy').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });

    test('It should response the GET method for behavior', (done) => {
        request(app).get('/behavior').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });

    test('It should response the GET method for habitat', (done) => {
        request(app).get('/habitat').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });

});