'use strict';

var totalClicks = 0;
var maxClicks = 25;

function Item (name, filePath, id) {
  this.name = name;
  this.filePath = filePath;
  this.id = id;
  this.timesShown = 0;
  this.timesClicked = 0;
  allItems.push(this);
}
var allItems = [];

var names = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var paths = ['images/bag.jpg', 'images/banana.jpg', 'images/bathroom.jpg', 'images/boots.jpg', 'images/breakfast.jpg', 'images/bubblegum.jpg', 'images/chair.jpg', 'images/cthulhu.jpg', 'images/dog-duck.jpg', 'images/dragon.jpg', 'images/pen.jpg', 'images/pet-sweep.jpg', 'images/scissors.jpg', 'images/shark.jpg', 'images/sweep.png', 'images/tauntaun.jpg', 'images/unicorn.jpg', 'images/usb.gif', 'images/water-can.jpg', 'images/wine-glass.jpg'];
var ids = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];

function createItems () {
  for (var i = 0 ; i < names.length; i++) {
    new Item(names[i], paths[i], ids[i]);
  }
}
createItems();

var thisRound = [];
var lastRound = [];

//make a function that randomly selects three images out of the images we've already created.
function makeThreeImages() {
  for (var i = 1; i < 4; i++) {
    var indexNum = Math.floor(Math.random() * allItems.length);

    if (lastRound.includes(indexNum) || thisRound.includes(indexNum)) {
      i--;
    } else {
      thisRound.push(indexNum);
      allItems[indexNum].timesShown++;
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

//add an event listener to every img tag
for (var i = 0; i < document.getElementsByClassName('clickable').length; i++) {
  var image = document.getElementById('image-' + (i + 1));
  image.addEventListener('click', onClick);
}

var itemClicks = [];

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
      li.innerText = allItems[j].name + ' was clicked ' + allItems[j].timesClicked + ' times out of ' + allItems[j].timesShown + ' times displayed, a ' + (allItems[j].timesClicked / allItems[j].timesShown) * 100 + '% click rate.';
      list.appendChild(li);
    }
  }
}
// var itemClicks = [];
// for (var j = 0; j < allItems.length; j++) {
//   itemClicks.push(allItems[j].timesClicked);
// };

// function drawChart() {
//
// }
// var chartConfig = {
//   type: 'bar',
//   data: {
//     labels:  // x-axis labels for every entry in your data set. It should match up with the number of things you're plotting (if it's a bar chart)
//     datasets: [{ // <-- notice that this can be an array of multiple data sets.
//       // each data set is its own object literal.
//       label: '# of Votes', // <-- the label of this one data set
//       data: [12, 19, 3, 5, 2, 3], // <-- where your data actually goes. just the numbers
//       backgroundColor: [ // <-- this can be either one single color or a color for each item in your bar chart.
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(255, 99, 132, 0.2)',
//       ],
//       borderColor: [
//         'rgba(255,99,132,1)',
//         'rgba(255,99,132,1)',
//         'rgba(255,99,132,1)',
//         'rgba(255,99,132,1)',
//         'rgba(255,99,132,1)',
//         'rgba(255,99,132,1)',
//         'rgba(255,99,132,1)',
//         'rgba(255,99,132,1)',
//         'rgba(255,99,132,1)',
//         'rgba(255,99,132,1)',
//         'rgba(255,99,132,1)',
//         'rgba(255,99,132,1)',
//         'rgba(255,99,132,1)',
//         'rgba(255,99,132,1)',
//         'rgba(255,99,132,1)',
//         'rgba(255,99,132,1)',
//         'rgba(255,99,132,1)',
//         'rgba(255,99,132,1)',
//         'rgba(255,99,132,1)',
//         'rgba(255,99,132,1)',
//       ],
//       borderWidth: 5 // border width in pixels
//     }]
//   },
//   options: {
//     // maintainAspectRatio: false,
//     // animation: {
//     //   duration: 1000
//     // },
//     title: {
//       display: true,
//       text: 'An important chart'
//     },
//     scales: {
//       yAxes: [{
//         ticks: {
//           beginAtZero:true
//         }
//       }]
//     }
//   }
// };
//
// var myChart = new Chart(ctx, chartConfig);
// //
//
//
//
//
