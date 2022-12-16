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
new GiftItems('../img/Gifts/books.jpg', '3 year old girl, bedtime reading books');
new GiftItems('../img/Gifts/boots.jpg', 'boy\'s winter boots, size 9');
new GiftItems('../img/Gifts/clothing.jpg');
new GiftItems('../img/Gifts/coatsAccessories.jpg', 'girl\'s winter coat, size 8');
new GiftItems('../img/Gifts/gas.jpg', '$50 gas card');
new GiftItems('../img/Gifts/groceries.jpg', '$50 grocery gift card');
new GiftItems('../img/Gifts/household.jpg');
new GiftItems('../img/Gifts/petSupplies.jpg',);
new GiftItems('../img/Gifts/toys.jpg', '9 year old boy, Toy Truck');

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

