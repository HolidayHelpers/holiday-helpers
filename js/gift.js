'use strict';
console.log ('Hello from the gift js file');


//  with an event listener to
// respond to a click of the giftImage.



let giftClicks = localStorage.getItem('giftCount');
// create array
let allGiftArray= [];
let giftSection = document.getElementById ('giftPhotos');
// We need a count tally on the <section class="navCartContainer"> divs Gifts and Acts.
let giftCountDiv = document.getElementById ('giftCount');

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
new GiftItems('../img/aboutUs/snowmanApron.png', 'This is a description of this gift. What it is. Who it is for. Their age, etc');
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

