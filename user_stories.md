#User Stories for BusMall Project

As a prospective customer
I want to review items I might want to purchase on a BusMall branded site with a Google font
So I can provide feedback on items that are attractive to me.

As a prospective customer
I want to be able to review three products at a time and click on the item I would most like to purchase, then see a new set of images
So I can compare items in a relevant sample size.

As a BusMall supplier
I want focus group members to see a random sample of products for 25 iterations
So I can draw conclusions about which products they prefer

As a BusMall supplier
I want to see data on the number of times an image has been displayed and the number of times it has been clicked
So I can gauge the relative attractiveness of features.

As a BusMall supplier
I want to ensure that the same item does not appear on two pages in a row by tracking an attribute called lastDisplayed
So the user can see fresh images for every click.


Tasks:
1) build HTML page to show three images at ~25% width of page (DONE)
2) add event listener to each image (DONE)
2a) use a constructor function to build an image for page display, including the image link, image name, file path, number of times displayed, number of times clicked.
3) organize array to display a random sample from the list (DONE)
4) adjust get function so that images reload when an image is clicked (DONE)
5) add statcounter.com link (DONE)
5a) read statcounter.com stats to ensure the cycle stops at 25 clicks
6) clear event listeners with a target.removeEventListner feature when 25 clicks has been reached
7) build a list showing the items clicked on and the count of clicks.
8) build array called Last 3 and clear it out every time an image is clicked.
