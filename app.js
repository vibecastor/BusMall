'use strict'

Product.names = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
//The main global array that stores the instances of Product.
var products = [];
//An array to store the number of pics viewed
Product.viewed = [];
//collects 25 clicks
Product.clicks = 0; 

// global var for the DOM pointing to a div container
Product.container = document.getElementById('container');
//global var for teh DOM pointing to a <ul> 
var productList = [document.getElementById('left'), document.getElementById('center'), document.getElementById('right')];

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
new Product('dragon', 'img/dragon.jpg');
new Product('pen', 'img/pen.jpg');
new Product('pet-sweep', 'img/pet-sweep.jpg');
new Product('scissors', 'img/scissors.jpg');
new Product('shark', 'img/shark.jpg');
new Product('sweep', 'img/sweep.png');
new Product('tauntan', 'img/tauntan.jpg');
new Product('unicorm', 'img/unicorn.jpg');
new Product('usb', 'img/usb.gif');
new Product('water-can', 'img/water-can.jpg');
new Product('wine-glass', 'img/wine-glass.jpg');

//a function to call index numbers from 


function randomProduct() {
  var randomProduct = Math.floor(Math.random() * products.length);
  return randomProduct;
  // console.log(products[randomProduct]); 
} 

  function displayPics() {
    while (Product.viewed.length < 6) {
      var randomNum = randomProduct();
      while (!Product.viewed.includes(randomNum)) {
        Product.viewed.push(randomNum);
      }
    }
 for (var i = 0; i < 3; i++) {
  var placeHolder = Product.viewed.shift();    
  productList[i].src = products[placeHolder].filePath;
  productList[i].alt = products[placeHolder].name;
  productList[i].title = products[placeHolder].name; 
  products[placeHolder].views += 1;
 }
}
displayPics();

//click event handler from tuesday's class, 
  function handleClick(event) {
    if (event.target === Product.container) {
      return alert('Click on a picture!');
    }
  //  console.log(clicks);
  if (Product.clicks > 24) {
    Product.container.removeEventListener('click', handleClick);
    Product.container.style.dicplay = 'none';
    // showList();
  }
  Product.clicks += 1;
  for (var i = 0; i < products.length; i++) {
    if (event.target.alt === products[i].name){
      products[i].clicks +=1;
      console.log(event.target.alt + ' has ' + products[i].clicks + ' clicks ' + products[i].views + ' views');
    }
  }

  }    
displayPics();
Product.container.addEventListener('click', handleClick);
// images: [];
// total clicks:  manage no more than 25 clicks



// functions();
// random();
// display images();
// test for duplicates();
// show results();
// click handler();

// console.log(products[randomProduct].name, 'is being displayed');