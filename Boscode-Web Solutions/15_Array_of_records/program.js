$(document).ready(function () {
  $('#runButton').click(program);
});

var program = function () {

  var productArray = [];

  productArray[0] = {};

  productArray[0].id = 1;
  productArray[0].name = 'Oven cleaner kit';
  productArray[0].description = 'The ultimate solution for ovens, trays and racks';
  productArray[0].quantity = 10;
  productArray[0].price = 5.99;


  productArray[1] = {};

  productArray[1].id = 2;
  productArray[1].name = 'Dishwasher tablets';
  productArray[1].description = 'With built-in rinse aid action';
  productArray[1].quantity = 20;
  productArray[1].price = 8.99;

  productArray[2] = {
    id: 3,
    name: "Dishwasher",
    description: "A massive aid to relive the need of manual dishes",
    quantity: 3,
    price: 129.99
  }



  for (var i = 0; i < 3; i = i + 1) {
    console.log('name = ' + productArray[i].name + ' price = ' + productArray[i].price + "description = " + productArray[i].description);
  }

};
