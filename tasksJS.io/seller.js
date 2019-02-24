function Seller(){
  var cars = [];
  this.sell = function (){
    if (cars.length === 0) {
      throw "no cars for sale";
    }
    //some implementation...
  }
}
var seller = new Seller();
seller.sell();
