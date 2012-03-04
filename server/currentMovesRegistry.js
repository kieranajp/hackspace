function CurrentMovesRegistry() {
  this.registry = {};
}

CurrentMovesRegistry.prototype.store = function(socket, data) {
  this.registry[socket.id] = data;
};

CurrentMovesRegistry.prototype.retrieve = function(socket) {
  return this.registry[socket.id];
};