/*eslint-env node, mocha */
var WebSocketTransport = require('lime-transport-websocket');
var HttpTransport = require('lime-transport-http');
var WebSocketHttpTransport = require('../WebSocketHttpTransport');

require('chai').should();

describe('WebSocketHttpTransport tests', function() {

    it('should use WebSocketTransport if web sockets are available', function() {
        global.WebSocket = function() {};
        (new WebSocketHttpTransport() instanceof WebSocketTransport).should.be.true;
    });

    it('should use HttpTransport if web sockets aren\'t available', function() {
        global.WebSocket = undefined;
        var transport = new WebSocketHttpTransport({ localNode: 'test@test.com' });
        (transport instanceof HttpTransport).should.be.true;
        transport._localNode.should.be.equal('test@test.com');
    });
});
