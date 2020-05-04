const request = require('supertest');
const expect = require('chai').expect;
const app = require('../../src/index');

describe('health', () => {
    it('test if app is healthy', async () => {
        const res = await request(app).get('/');
        expect(res.text).to.equal('{"healthy": "true"}');
    });
});