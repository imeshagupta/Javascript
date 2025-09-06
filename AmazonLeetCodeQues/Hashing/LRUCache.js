var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.cache = new Map();
};

LRUCache.prototype.get = function (key) {
  if (!this.cache.has(key)) return -1;

  let value = this.cache.get(key);
  this.cache.delete(key);
  this.cache.set(key, value);

  return value;
};

LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    this.cache.delete(key);
  }
  this.cache.set(key, value);

  if (this.cache.size > this.capacity) {
    let firstKey = this.cache.keys().next().value;
    this.cache.delete(firstKey);
  }
};
