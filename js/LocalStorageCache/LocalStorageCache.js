/*
  Responsible for providing a way to interact with the Local Storage Cache (LSC).
 */
// dependency jStorage as jQuery.jStorage
// dependency C as C
// dependency Signal as Signal
// dependency LocalStorageCache/config as LocalStorageCacheConfig

function LocalStorageCache(prefix) { 
  this._id = prefix;
  this._globalCacheId = 'LocalStorageCache.config.cacheId';

  var signal = Signal.reading(C.LocalStorageCache.reading); signal.on();
  var currentCacheId = jQuery.jStorage.get(this._globalCacheId);
  var cacheId = LocalStorageCacheConfig.cacheId;
  signal.off();
  if(currentCacheId != cacheId) return this._reset(cacheId);
};

LocalStorageCache.prototype._reset = function(cacheId) {
  var signal = Signal.writing(C.LocalStorageCache.writing); signal.on();
  jQuery.jStorage.flush();
  jQuery.jStorage.set(this._globalCacheId, cacheId);
  signal.off(), window.location.reload();
}

LocalStorageCache.prototype._getCacheId = function() {
  return jQuery.jStorage.get(this._globalCacheId);
}

LocalStorageCache.prototype.set = function(key, value) {
  if(this.get() === null) jQuery.jStorage.set(this._id, {});
  var storage = this.get();
  storage[key] = value;
  return jQuery.jStorage.set(this._id, storage);
}

LocalStorageCache.prototype.get = function(key) {
  if(jQuery.jStorage.get(this._id) === null) return null;
  if(typeof key !== "string") return jQuery.jStorage.get(this._id);
  return jQuery.jStorage.get(this._id)[key];
}

LocalStorageCache.prototype.flush = function() {
  return jQuery.jStorage.deleteKey(this._id);
}

LocalStorageCache.prototype.setTTL = function(key, value, ttl) {
  if(typeof ttl !== "number") throw new Error('LocalStorageCache: ttl must be a number');
  jQuery.jStorage.set([this._id, key].dotJoin(), value);
  return jQuery.jStorage.setTTL([this._id, key].dotJoin(), ttl);
}

LocalStorageCache.prototype.getTTL = function(key) {
  return jQuery.jStorage.get([this._id, key].dotJoin());
}

LocalStorageCache.prototype.deleteTTL = function(key) {
   return jQuery.jStorage.deleteKey([this._id, key].dotJoin());
}