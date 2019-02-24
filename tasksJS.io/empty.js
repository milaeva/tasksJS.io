function throwWhenwNullOrEmpty(array) {
  if (array == null){
    throw "array is null";
  }
  if (array.length === 0) {
    throw new RangeError();
  }
}
try {
  throwWhenwNullOrEmpty(null);
}
catch (e) {
  console.log("Error: " + e);
}
