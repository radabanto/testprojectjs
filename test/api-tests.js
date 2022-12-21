const request = require('supertest')('https://reqres.in');
const { assert, expect } = require('chai');


describe('Library API', function() {
    it('GET /api/users', () => {
        let pageval = 2
        return request
            .get('/api/users')
            .query({ page : pageval }) // send payload data
            .set('Accept', 'application/json')
            .expect(200)
            .expect((res) => {
                assert.strictEqual(res.body.data.length, res.body.per_page, 'Page Size per page not up to spec')
                assert.strictEqual(res.body.page, pageval, 'Expected page val not equal to response page val')
            });
    });
    it('POST /api/users', () => {
        let name = 'JESTER'
        let job = 'TESTER'
        return request
            .post('/api/users')
            .send({ "name" : name , "job" : job})
            .set('Accept', 'application/json')
            .expect(201)
            .expect((res) => {
                assert.strictEqual(res.body.name, name, 'Name saved incorrect')
                assert.strictEqual(res.body.job, job, 'Job saved incorrect')
            })
    });
});