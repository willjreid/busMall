'use strict';

var clicks = 0;

function Image (imgName, imgFilePath, alt, imgId) {
  this.imgName = imgName;
  this.imgFilePath = imgFilePath;
  this.alt = alt;
  this.imgId = imgId;
  this.imgDisplayed = 0;
  this.imgClicked = 0;
}

var bag = new Image ('bag.jpg', 'images/bag.jpg', 'R2D2 rollerboard', 1);
var banana = new Image ('banana.jpg', 'images/banana.jpg', 'banana slicer', 2);
var bathroom = new Image ('bathroom.jpg', 'images/bathroom.jpg', 'TP stand', 3);
var boots = new Image ('boots.jpg', 'images/boots.jpg', 'open-toe boots', 4);
var breakfast = new Image ('breakfast', 'images/breakfast.jpg', 'all-in-one breakfast maker', 5);
var bubblegum = new Image ('bubblegum.jpg', 'images/bubblegum.jpg', 'meatball bubblegum', 6);
var chair = new Image ('chair.jpg', 'images/chair.jpg', 'round chair', 7);
var cthulhu = new Image ('cthulhu.jpg', 'images/cthulhu.jpg', 'green cthulhu', 8);
var dogDuck = new Image ('dog-duck.jpg', 'images/dog-duck.jpg', 'duckbill for a dog', 9);
var dragon = new Image ('dragon.jpg', 'images/dragon.jpg', 'tasty dragon meat', 10);
var pen = new Image ('pen.jpg', 'images/pen.jpg', 'pen toppers for eating', 11);
var petSweep = new Image ('pet-sweep.jpg', 'images/pet-sweep.jpg', 'turn your pet into a mop', 12);
var scissors = new Image ('scissors.jpg', 'images/scissors.jpg', 'scissors for pizza', 13);
var sweep = new Image ('sweep.png', 'images/sweep.png', 'turn your baby into a mop', 14);
var shark = new Image ('shark.jpg', 'images/shark.jpg', 'shark sleeping bag', 15);
var tauntaun = new Image ('tauntaun.jpg', 'images/tauntaun.jpg', 'tauntaun sleeping bag', 16);
var unicorn = new Image ('unicorn.jpg', 'images/unicorn.jpg', 'tasty unicorn meat', 17);
var usb = new Image ('usb.gif', 'images/usb.gif', 'wiggling USB tail', 18);
var waterCan = new Image ('water-can.jpg', 'images/water-can.jpg', 'backwards watering can', 19);
var wineGlass = new Image ('wine-glass.jpg', 'images/wine-glass.jpg', 'diagonal wine glass', 20);

var allImages = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, tauntaun, unicorn, usb, waterCan, wineGlass];
var availForDisplay = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, tauntaun, unicorn, usb, waterCan, wineGlass];
var lastDisplayed = [];

function callRandomImage() {
  var position = Math.floor(Math.random() * availForDisplay.length);
  return position;
}
var image1 = 0;
var image2 = 1;
var image3 = 2;

function imageTracker() {
  console.log(availForDisplay);
  console.log(lastDisplayed);
  image1 = callRandomImage();
  console.log(image1);
  availForDisplay.splice(image1, 1);
  lastDisplayed.push(image1);
  console.log(availForDisplay);
  console.log(lastDisplayed);
  image2 = callRandomImage();
  availForDisplay.splice(image2, 1);
  lastDisplayed.push(image2);
  image3 = callRandomImage();
  availForDisplay.splice(image3, 1);
  lastDisplayed.push(image3);
}

var submit1 = document.getElementById('submit1');
imageTracker();
submit1.setAttribute('src', availForDisplay[image1].imgFilePath);
submit2.setAttribute('src', availForDisplay[image2].imgFilePath);
submit3.setAttribute('src', availForDisplay[image3].imgFilePath);

var submit2 = document.getElementById('submit2');
imageTracker();
submit1.setAttribute('src', availForDisplay[image1].imgFilePath);
submit2.setAttribute('src', availForDisplay[image2].imgFilePath);
submit3.setAttribute('src', availForDisplay[image3].imgFilePath);

var submit3 = document.getElementById('submit3');
imageTracker();
submit1.setAttribute('src', availForDisplay[image1].imgFilePath);
submit2.setAttribute('src', availForDisplay[image2].imgFilePath);
submit3.setAttribute('src', availForDisplay[image3].imgFilePath);s

function displayNewImages (event) {
  event.preventDefault();
  var form = event.target;

  //associate click with Image constructor that received the click
  //clear out things in lastDisplayed array
  //display three new images
  //add new images to page
}
