'use strict';

var maxClicks = 6;

function Image (imgName, imgFilePath, alt, imgId) {
  this.imgName = imgName;
  this.imgFilePath = imgFilePath;
  this.alt = alt;
  this.imgId = imgId;
  this.imgDisplayed = 0;
  this.imgClicked = 0;
}
var voteCounter = 0;

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

var availForDisplay = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass];
//var availForDisplay = [bag, banana, bathroom, boots, breakfast, bubblegum];
var lastDisplayed = [];

function renderThree () {
  var imgOne = document.getElementById('submit1');
  var randomOne = Math.floor(Math.random() * availForDisplay.length);
  while (lastDisplayed.includes(randomOne)) {
    randomOne = Math.floor(Math.random() * availForDisplay.length);
  };
  imgOne.src = availForDisplay[randomOne].imgFilePath;
  imgOne.alt = availForDisplay[randomOne].alt;

  var imgTwo = document.getElementById('submit2');
  var randomTwo = Math.floor(Math.random() * availForDisplay.length);
  while (randomOne === randomTwo || lastDisplayed.includes(randomTwo)) {
    randomTwo = Math.floor(Math.random() * availForDisplay.length);
  };
  imgTwo.src = availForDisplay[randomTwo].imgFilePath;
  imgTwo.alt = availForDisplay[randomTwo].alt;

  var imgThree = document.getElementById('submit3');
  var randomThree = Math.floor(Math.random() * availForDisplay.length);
  while (randomThree === randomTwo || randomThree === randomOne || lastDisplayed.includes(randomThree)) {
    randomThree = Math.floor(Math.random() * availForDisplay.length);
  };
  imgThree.src = availForDisplay[randomThree].imgFilePath;
  imgThree.alt = availForDisplay[randomThree].alt;
  lastDisplayed = [];
  lastDisplayed.push(availForDisplay[randomOne], availForDisplay[randomTwo], availForDisplay[randomThree]);

  availForDisplay[randomOne].imgDisplayed++;
  console.log(availForDisplay[randomOne]);
  availForDisplay[randomTwo].imgDisplayed++;
  console.log(availForDisplay[randomTwo]);
  availForDisplay[randomThree].imgDisplayed++;
  console.log(availForDisplay[randomThree]);
  voteCounter++;

};
renderThree();

var aClick = document.getElementById('theForm');
aClick.addEventListener('click', vote);

function vote(event) {
  console.log(voteCounter);
  console.log(availForDisplay);
  event.preventDefault();
  for (var i = 0; i < availForDisplay.length; i++) {
    if (availForDisplay[i].alt === event.target.alt && voteCounter < maxClicks) {
      availForDisplay[i].imgClicked++;
      renderThree();
    } else if (voteCounter === maxClicks) {
      aClick.removeEventListener('click', vote);
      var theResult = document.getElementById('result');

      var theList = document.createElement('ul');
      for (var z = 0; z < availForDisplay.length; z++) {
        var list = document.createElement('li');
        list.innerText = availForDisplay[z].imgClicked / availForDisplay[z].imgDisplayed + ' votes for the ' + availForDisplay[z].name + '.';
        theList.appendChild(list);
        theResult.appendChild(theList); //review appending
      }
      break;
    }
  }
};
