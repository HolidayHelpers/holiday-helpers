'use strict';
console.log ('Hello from the gift js file');


//  with an event listener to
// respond to a click of the giftImage.



let giftClicks = localStorage.getItem('giftCount');
let handClicks = localStorage.getItem('handCount');
// create array
let allGiftArray= [];
let giftSection = document.getElementById ('giftPhotos');
// We need a count tally on the <section class="navCartContainer"> divs Gifts and Acts.
let handCountDiv = document.getElementById ('handCount');
let giftCountDiv = document.getElementById ('giftCount');
handCountDiv.innerText=`Hands ${handClicks}`;
giftCountDiv.innerText=`Gifts ${giftClicks}`;



function GiftItems(imageSrc, giftDescription, click){
  this.giftImageSrc=imageSrc;
  this.giftDescription=giftDescription;
  if(click){
    this.click=click;
  } else{
    this.click=0;
  }
  allGiftArray.push(this);
}

//we need our gift images and descriptions here,
// new GiftItems('../img/aboutUs/snowmanApron.png', 'This is a description of this gift. What it is. Who it is for. Their age, etc');
new GiftItems('../img/Gifts/books.jpg', 'Children\'s Books', 'Share the gift of a timeless story and encourage the love of literature.');
new GiftItems('../img/Gifts/boots.jpg', 'Snow Boots', 'Gift snow boots for the family to keep feet warm and dry this winter. Childrens and adults sizes needed.');
new GiftItems('../img/Gifts/clothing.jpg', 'Clothing', 'Families have listed clothing as one of their most needed items.');
new GiftItems('../img/Gifts/coatsAccessories.jpg', 'Coats and Cold Weather Accessories', 'Winters in the midwest can be brutally cold and coats, hats, gloves, and scarves are needed to protect from the elements.');
new GiftItems('../img/Gifts/gas.jpg', 'Fuel Card', 'Gas prices hit record highs in 2022 and many people are struggling to afford fuel.');
new GiftItems('../img/Gifts/groceries.jpg', 'Groceries', 'Inflation and supply chain disruptions have caused many people in our community to become food insecure.');
new GiftItems('../img/Gifts/household.jpg', 'Household Essentials', 'Things like household cleaner, paper towels, and laundry detergent are always in demand.');
new GiftItems('../img/Gifts/petSupplies.jpg', 'Pet Supplies', 'Furry friends are also in need this holiday season. Help with pet food, treats, and toys.');
new GiftItems('../img/Gifts/toys.jpg', 'Toys', 'Give a child a new toy to make the holidays special! Toys are needed for all ages.');

// need  more images and descriptions



function renderGifts(){
  for (let i=0; i < allGiftArray.length; i++){

    let htmlDiv = document.createElement('div');

    let htmlImage = document.createElement('img');
    htmlImage.src=allGiftArray[i].giftImageSrc;
    htmlDiv.appendChild(htmlImage);

    let htmlGiftDescription=document.createElement('p');
    htmlGiftDescription.textContent=allGiftArray[i].giftDescription;
    htmlDiv.appendChild(htmlGiftDescription);

    let htmlButton = document.createElement('button');
    htmlButton.innerText='Click to Choose';
    htmlButton.dataset.giftIndex=`${i}`;
    console.log(htmlButton.dataset.giftIndex);
    //  We need  an event listener to respond to a click of the giftImage.
    htmlButton.addEventListener('click', handleGiftClick);
    htmlDiv.appendChild(htmlButton);
    giftSection.appendChild(htmlDiv);
  }
}

renderGifts();

// function for handling click events
function handleGiftClick(event) {
  console.log('click event happening' , event);
  giftClicks++;
  giftCountDiv.innerText=`Gifts ${giftClicks}`;
  console.log(event.target.dataset.giftIndex);
  let giftIndex=event.target.dataset.giftIndex;
  console.log(allGiftArray[giftIndex].giftImageSrc);
  //   localStorage:
  localStorage.setItem('giftCount', giftClicks);
  localStorage.setItem('giftsPledged' , JSON.stringify(allGiftArray[giftIndex].giftImageSrc));

}

