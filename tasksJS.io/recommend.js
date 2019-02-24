function simpleException() {}
function ReccomendExc(name, message) {
  this.name = name;
  this.message = message;
}
throw new simpleException();
throw new ReccomendExc("exeption");hen
