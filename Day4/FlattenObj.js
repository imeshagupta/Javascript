function flattenObj(obj, parent = "", res = {}) {
  for (let key in obj) {
    let newKey = parent ? parent + "." + key : key;
    if (typeof obj[key] === "object" && obj[key] !== null) {
      flattenObj(obj[key], newKey, res);
    } else {
      res[newKey] = obj[key];
    }
  }
  return res;
}
