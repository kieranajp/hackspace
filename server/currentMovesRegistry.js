function CurrentMovesRegistry() {
  this.registry = {};
}

CurrentMovesRegistry.prototype.store = function(sid, data) {
  this.registry[sid] = data;
};

CurrentMovesRegistry.prototype.retrieve = function(sid, cb) {
  cb(this.registry[sid]);
};

CurrentMovesRegistry.prototype.retrieveAll = function(cb) {
  cb(this.registry);
};

exports.CurrentMovesRegistry = CurrentMovesRegistry;