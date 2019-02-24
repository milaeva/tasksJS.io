function throwWhenwNullOrEmpty(array) {
  if ( array == null) {
    throw "array is null";
  }
  if (array.length === 0) {
    thrw new RangeError();
  }
}
try {
  throwWhenwNullOrEmpty([]);
}
catch (e) {
  if (e.name === "RangeError") {
    console.log("array is empty");
  } else {
    console.log("array is not specified");
  }
}
