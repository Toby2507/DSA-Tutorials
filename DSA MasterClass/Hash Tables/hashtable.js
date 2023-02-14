// Hashes are one way i.e. Because nails is hashed to 2 doesn't mean 2 will be hashed to nails
// They are deterministic i.e. Hashing a value would always return the same hash value
// Collisions happen when more than 1 object have the same hash value and can be handled by separate chaining or linear probing
// Separate chaining involves saving both values in a 2d array in the same address in memory
// Linear probing involves saving the first in the right address and the next value in the next available address in memory

class HashTable {
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }

  #hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    return hash;
  }

  set(key, val) {
    const idx = this.#hash(key);
    !this.dataMap[idx] && (this.dataMap[idx] = []);
    this.dataMap[idx].push([key, val]);
    return this;
  }

  get(key) {
    const idx = this.#hash(key);
    if (!this.dataMap[idx]) return null;
    return (this.dataMap[idx].filter(val => val[0] === key))[0][1]
  }

  entries() {
    const keys = [];
    for (let vals of this.dataMap) {
      if (vals) vals.forEach(val => keys.push(val));
    }
    return keys;
  }

  keys() {
    return this.entries().map(entry => entry[0])
  }

  values() {
    return this.entries().map(entry => entry[1])
  }
}

const hashMap = new HashTable();
console.log(hashMap.set("bolts", 1400));
console.log(hashMap.set("washers", 50));
console.log(hashMap.set("lumber", 70));
console.log(hashMap.get("bolts"));
console.log(hashMap.entries());
console.log(hashMap.keys());
console.log(hashMap.values());