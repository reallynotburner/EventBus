function EventBus() {
    var clients = {};
    return {
        attach: function(obj) {
            Object.prototype.assign(clients, obj);
        },
        detach: function(obj) {
            var client;
            for (client in clients) {
                if (clients.hasOwnProperty(client)) {
                    if (obj === clients[client]) {
                        delete clients[obj];
                    }
                }
            }
        },
        emit: function(eventName) {
            var client;
            var curClient;
            for (client in clients) { // loop through all clients
                curClient = clients[client];
                if (curClient && typeof curClient[eventName] === 'function') {
                    curClient[eventName]();// todo add all additional args passed, not just name
                    clients[client](); 
                }
            }
        },
        detachAll: function() {
            clients = {};
        },
    }
}

var bus = EventBus;

module.exports = EventBus;