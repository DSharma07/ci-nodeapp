const expect = require('chai').expect;
const config = require('config');
const server = require('../src/index');

describe('server', () => {
    it('test server is running', () => {
        expect(server.port).to.equal(config.get('port'));
    })
});