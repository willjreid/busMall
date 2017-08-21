'use strict';

var clicks = 0;

function Image (imgName, imgFilePath, imgId) {
  this.imgName = imgName;
  this.imgFilePath = imgFilePath;
  this.imgId = imgId;
  this.imgDisplayed = 0;
  this.imgClicked = 0;
}

var bag = new Image ('bag.jpg', 'images/bag.jpg', 1);
var banana = new Image ('banana.jpg', 'images/banana.jpg', 2);
var bathroom = new Image ('bathroom.jpg', 'images/bathroom.jpg', 3);
var boots = new Image ('boots.jpg', 'images/boots.jpg', 4);
var breakfast = new Image ('breakfast', 'images/breakfast.jpg', 5);
var bubblegum = new Image ('bubblegum.jpg', 'images/bubblegum.jpg', 6);
var chair = new Image ('chair.jpg', 'images/chair.jpg', 7);
var cthulhu = new Image ('cthulhu.jpg', 'images/cthulhu.jpg', 8);
var dogDuck = new Image ('dog-duck.jpg', 'images/dog-duck.jpg', 9);
var dragon = new Image ('dragon.jpg', 'images/dragon.jpg', 10);
var pen = new Image ('pen.jpg', 'images/pen.jpg', 11);
var petSweep = new Image ('pet-sweep.jpg', 'images/pet-sweep.jpg', 12);
var scissors = new Image ('scissors.jpg', 'images/scissors.jpg', 13);
var shark = new Image ('shark.jpg', 'images/shark.jpg', 14);
var tauntaun = new Image ('tauntaun.jpg', 'images/tauntaun.jpg', 15);
var unicorn = new Image ('unicorn.jpg', 'images/unicorn.jpg', 16);
var usb = new Image ('usb.gif', 'images/usb.gif', 17);
var waterCan = new Image ('water-can.jpg', 'images/water-can.jpg', 18);
var wineGlass = new Image ('wine-glass.jpg', 'images/wine-glass.jpg', 19);

var allImages = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, tauntaun, unicorn, usb, waterCan, wineGlass];
var availForDisplay = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, tauntaun, unicorn, usb, waterCan, wineGlass];
var lastDisplayed = [];

var submit1 = document.getElementById('submit1');
submit1.setAttribute('src', availForDisplay[3].imgFilePath);

function displayNewImages (event) {
  event.preventDefault();
  var form = event.target;

  //associate click with Image constructor that received the click
  //clear out things in lastDisplayed array
  //display three new images
  //add new images to page
}
