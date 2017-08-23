'use strict';

var totalClicks = 0;
var maxClicks = 5;
//make a constructor function for all items we are selling
function Item (name, filePath, id) {
  this.name = name;
  this.filePath = filePath;
  this.id = id;
  this.timesShown = 0;
  this.timesClicked = 0;
  allItems.push(this);
}
var allItems = []; // array to hold all of our Item instances

//need a new item for every image in the imgs directory
var names = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var paths = ['images/bag.jpg', 'images/banana.jpg', 'images/bathroom.jpg', 'images/boots.jpg', 'images/breakfast.jpg', 'images/bubblegum.jpg', 'images/chair.jpg', 'images/cthulhu.jpg', 'images/dog-duck.jpg', 'images/dragon.jpg', 'images/pen.jpg', 'images/pet-sweep.jpg', 'images/scissors.jpg', 'images/shark.jpg', 'images/sweep.png', 'images/tauntaun.jpg', 'images/unicorn.jpg', 'images/usb.gif', 'images/water-can.jpg', 'images/wine-glass.jpg'];
var ids = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];

function createItems () {
  for (var i = 0 ; i < names.length; i++) {
    //for each iteration, create a new Item object, using the names, paths and ids array
    new Item(names[i], paths[i], ids[i]);
  }
}
createItems();

//initialize two empty arrays
var thisRound = [];
var lastRound = [];

//make a function that randomly selects three images out of the images we've already created.
function makeThreeImages() {
  //write a for loop, where each iteration will select a distinct image
  //distint: images haven't been used in current set or in last set
  for (var i = 1; i < 4; i++) {
    var indexNum = Math.floor(Math.random() * allItems.length);
    //check if I've already used this number or not
    if (lastRound.includes(indexNum) || thisRound.includes(indexNum)) {
      i--; // allows the for loop to step back one iteration
    } else {
      thisRound.push(indexNum);
      allItems[indexNum].timesShown++; // increase number of times shown for the Item instanc we've selected
      var linkedImage = document.getElementById('image-' + i);
      linkedImage.setAttribute('src', allItems[indexNum].filePath);
      linkedImage.setAttribute('itemIdx', indexNum);
    }
  }
  //assign lastRound to thisRound so current set of numbers is reserved
  lastRound = thisRound;
  thisRound = [];
}
makeThreeImages();

//add an event listener to eveyr img tag
for (var i = 0; i < document.getElementsByClassName('clickable').length; i++) {
  var image = document.getElementById('image-' + (i + 1));
  image.addEventListener('click', onClick);
}

function onClick(event) {
  var itemIdx = parseInt(event.target.getAttribute('itemIdx'));
  var itemIWant = allItems[itemIdx];
  itemIWant.timesClicked++;
  makeThreeImages();
  totalClicks++;
  if (totalClicks === maxClicks) {
    for (var i = 0; i < document.getElementsByClassName('clickable').length; i++) {
      var image = document.getElementById('image-' + (i + 1));
      image.removeEventListener('click', onClick);
    };

    var list = document.getElementById('list');
    for (var j = 0; j < allItems.length; j++) {
      var li = document.createElement('li');
      //li.innerText = 'woo' + j;
      console.log(allItems.length);
      li.innerText = allItems[j].name + ' was clicked ' + allItems[j].timesClicked + ' times';
      list.appendChild(li);
    }
  }
}
//
//
//
//
//
//
//
//
