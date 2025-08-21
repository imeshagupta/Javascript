function multiIntersection(...arrays) {
  return arrays.reduce((a, b) => a.filter((x) => b.includes(x)));
}
