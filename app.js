'use strict'

Product.names = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
//The main global array that stores the instances of Product.
Product.products = [];
//An array to store the number of pics viewed
Product.viewed = [];
//collects 25 clicks
Product.clicked = 0; 

// global var for the DOM pointing to a div container
Product.container = document.getElementById('container');
//global var for the DOM pointing to a <ul> 
var productList = [document.getElementById('left'), document.getElementById('center'), document.getElementById('right')];

//a constructor function to make the product objects
function Product(name, filePath) {
  this.name = name;
  this.filePath = filePath;
  this.clicks = 0;
  this.views = 0;
  Product.products.push(this);
  // console.log('New product instance ' + name + ' created.');
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
new Product('tauntan', 'img/tauntaun.jpg');
new Product('unicorm', 'img/unicorn.jpg');
new Product('usb', 'img/usb.gif');
new Product('water-can', 'img/water-can.jpg');
new Product('wine-glass', 'img/wine-glass.jpg');

//a function to call index numbers from 

function randomProduct() {
  return Math.floor(Math.random() * Product.products.length);
  // old random function
  // var randomProduct = Math.floor(Math.random() * products.length);
  // return randomProduct;
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
    productList[i].src = Product.products[placeHolder].filePath;
    productList[i].alt = Product.products[placeHolder].name;
    productList[i].title = Product.products[placeHolder].name; 
    Product.products[placeHolder].views += 1;
  }  
}

//click event handler from tuesday's class, 
  function handleClick(event) {
    console.log(event.target.alt, 'was clicked');
    if (event.target === Product.container) {
      return alert('Click on a picture!');
    }
  if (Product.clicked > 24) {
    Product.container.removeEventListener('click', handleClick);
    Product.container.style.display = 'none';
    showList();
  }
  Product.clicked += 1;
  for (var i = 0; i < Product.products.length; i++) {
    if (event.target.alt === Product.products[i].name){
      Product.products[i].clicks +=1;
      console.log(event.target.alt + ' has ' + Product.products[i].clicks + ' clicks ' + Product.products[i].views + ' views');
    }
  }
  displayPics();
  }
  function showList() {
    for (var i = 0; i < Product.products.length; i++) {
      var liEl = document.createElement('li');
      var conversion = (Product.products[i].clicks / Product.products[i].clicks * 100).toFixed(1);
      liEl.textContent = Product.products[i].name + ' has ' + Product.products[i].clicks + ' clicks in ' + Product.products[i].views + ' views for a click-through conversion rate of '  + conversion + '%;'
      
      if (conversion > 49) {
        liEl.style.color = 'white';
        liEl.style.backgroundColor = 'green';
      }

      if (conversion < 30) {
        liEl.style.color = 'white';
        liEl.style.backgroundColor = 'red';
      }

      productlist.appendChild(liEl);
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