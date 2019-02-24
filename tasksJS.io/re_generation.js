function functionWithException() {
  try {
    throw new Error("test exception");
  }
  catch (e) {
    //implementation of any partial processing
    //and send error to the calling code
    throw e;
  }
}
try {
  functionWithException();
}
catch (e) {
  console.log(e);
}
