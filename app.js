'use strict'
//a global array that stores the instances of Product
var products = [];
// global var for the DOM pointing to a div container
var productSelector = document.getElementById('container');
//global var for teh DOM pointing to a <ul> 
var productList = document.getElementById('voter');

//a constructor function to make the product objects
function Product(name, filePath) {
  this.name = name;
  this.filePath = filePath;
  this.clicks = 0;
  this.views = 0;
  products.push(this);
  console.log('New product instance ' + name + ' created.');
}

//instances of the object Product
new Product('bag', 'img/bag.jpg');
new Product('banana', 'img/banana.jpg');
new Product('bathroom', 'img/bathroom.jpg');
new Product('boots', 'img/boots.jpg');
new Product('breakfast', 'img/breakfast.jpg');
new Product('bubblegum', 'img/bubblegum.jpg');
new Product('chair', 'img/chair.jpg');
new Product('cthulhu', 'img/cthulhu.jpg');
new Product('dog-duck', 'img/dog-duck.jpg');
new Product('dragon', 'img/dragon');
new Product('pen', 'img/pen.jpg');
new Product('pet-sweep', 'img/pet-sweep');
new Product('scissors', 'img/scissors.jpg');
new Product('shark', 'img/shark.jpg');
new Product('sweep', 'img/sweep.png');
new Product('tauntan', 'img/tauntan.jpg');
new Product('unicorm', 'img/unicorn.jpg');
new Product('usb', 'img/usb.gif');
new Product('water-can', 'img/water-can');
new Product('wine-glass', 'img/wine-glass.jpg');

//a function to called randomProduct
//need to pull three random numbers
//solve this like the what state have I lived in question from week one

var array = [];

function randomNumber() {
  while ()

}


function randomProduct() {
  var randomProduct = Math.floor(Math.random() * products.length);
  console.log(products[randomProduct]); //change the function of the function to output one random number then you can call that function to get three unique numbers....

productSelector.src = products[randomProduct].filepath;
productSelector.alt = products[randomProduct].name;
productSelector.title = products[randomProduct].name;

console.log(products[randomProduct].name, 'is being displayed');
};

randomProduct();





// images: [];
// total clicks:  manage no more than 25 clicks



// functions();
// random();
// display images();
// test for duplicates();
// show results();
// click handler();