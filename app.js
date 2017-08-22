'use strict';

var clicks = 0;

function Image (imgName, imgFilePath, alt, imgId) {
  this.imgName = imgName;
  this.imgFilePath = imgFilePath;
  this.alt = alt;
  this.imgId = imgId;
  this.imgDisplayed = 0;
  this.imgClicked = 0;
  availForDisplay.push(this); // added by Mark to push into empty productList as items are created
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

//var availForDisplay = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass];
var availForDisplay = [];
var lastDisplayed = [];

//Mark's solution
function renderThree () {
  var imgOne = document.getElementById('one');
  imgOne.innerHTML = '';
  var firstImage = imgOne.children[0]; /// dont create every time, just reassign the child image src
  var randomOne = Math.floor(Math.random() * availForDisplay.length);
  while (lastDisplayed.includes(randomOne)) {
    randomOne = Math.floor(Math.random() * availForDisplay.length);
  };
  firstImg.src = availForDisplay[randomOne].path;
  imgOne.appendChild(firstImg);
  firstImg.id = productList[randomOne].id;

  var imgTwo = document.getElementById('two');
  imgTwo.innterHTML = '';
  var secondImg = document.createElement('img'); // may not need to create an image every time.
  var randomTwo = Math.floor(Math.random() * productList.length);
  while (randomOne === randomTwo || lastThree.includes(randomTwo)) {
    randomTwo = Math.floor(Math.random() * productList.length);
  }
  secondImg.src = productList[randomTwo].path;
  imgTwo.appendChild(secondImg);
  secondImg.id = productList[randomTwo].id;

  var imgThree = document.getElementById('three');
  imgThree.innerHTML = '';
  var thirdImg = document.createelement('img');
  var randomThree = Math.floor(Math.random() * productList.length);
  while (randomThree === randomTwo || randomThree === randomOne || lastThree.includes(randomThree)) {
    randomThree = Math.floor(Math.random() * productList.length);
  }
  thirdImg.src = productList[randomThree].path;
  imgThree.appendChild(thirdImg);
  thirdImg.id = productList[randomThree].path;
  lastThree = [];
  lastThree.push(randomOne, randomTwo, randomThree);
  productList[randomOne].displayed += 1;
  productList[randomTwo].displayed += 1;
  productList[randomThree].displayed += 1;
};
renderThree();

var oneClick = document.getElementById('one');
oneClick.addEventListener('click', vote);

var twoClick = document.getElementById('two');
...

var voteCounter = 0;

function vote(event) {
  event.preventDefault();
  for (var i = 0; i < productList.length; i++) {
    if (productList[i].id === event.target.id && voteCounter < maxClicks) {
      productList[i].votes++;
      voteCounter++;
      renderThree();
    } else if (voteCounter === maxClicks) {
      oneClick.removeEventListener('click', vote, true);
      twoClick.removeEventListener('click', vote, true);
      threeClick.removeEventListener('click', vote, true);
      var result = document.getElemetById('result');
      var theList = document.createElement('ul');
      result.appendChild(theList);
      for (var z = 0; z < productList.length; z++) {
        var list = document.createElement('li');
        list.innerText = productList[z].votes / productList[z].displayed + ' votes for the ' + productList[z].name + '.';
        theList.appendChild(list);
      }
      break;
    }
  }
};
//end Mark's solution

function callRandomImage() {
  var position = Math.floor(Math.random() * availForDisplay.length); //need to update so availForDisplay array's contents persist after function imageTracker runs
  return position;
}

var image1 = 0;
var image2 = 1;
var image3 = 2;

function imageTracker() {
  image1 = callRandomImage();
  lastDisplayed = [];
  lastDisplayed.push(availForDisplay[image1]);
  availForDisplay.splice((image1 + 0), 1);

  image2 = callRandomImage();
  lastDisplayed.push(availForDisplay[image2]);
  availForDisplay.splice((image2 + 0), 1);

  image3 = callRandomImage();
  lastDisplayed.push(availForDisplay[image3]);
  availForDisplay.splice((image3 + 0), 1);

  return availForDisplay;
};

var submit1 = document.getElementById('submit1');

imageTracker();
submit1.setAttribute('src', lastDisplayed[0].imgFilePath);
submit1.setAttribute('alt', lastDisplayed[0].alt);

submit2.setAttribute('src', lastDisplayed[1].imgFilePath);
submit2.setAttribute('alt', lastDisplayed[1].alt);

submit3.setAttribute('src', lastDisplayed[2].imgFilePath);
submit3.setAttribute('alt', lastDisplayed[2].alt);

function displayNewImages (event) {
  event.preventDefault();
  var form = event.target;
}
  //associate click with Image constructor that received the click
