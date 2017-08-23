'use strict';

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
var names = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum'];
var paths = ['images/bag.jpg', 'images/banana.jpg', 'images/bathroom.jpg', 'images/boots.jpg', 'images/breakfast.jpg', 'images/bubblegum.jpg'];
var ids = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg'];

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
    }
  }
  //assign lastRound to thisRound so current set of numbers is reserved
  lastRound = thisRound;
  thisRound = [];
}
makeThreeImages();

//add an event listener to eveyr img tag
for (var i = 0; i < document.getElementByClassName('clickable').length; i++) {
  var image = document.getElementById('image-' + (i + 1));
  image.addEventListener('click', onClick);
}
