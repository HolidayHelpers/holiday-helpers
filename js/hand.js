'use strict';
console.log ('Hello from the hand js file');


//  with an event listener to
// respond to a click of the handImage.


let giftClicks = localStorage.getItem('giftCount')||0;
let handClicks = localStorage.getItem('handCount')||0;
let handCartItems = []; //localStorage.getItem('handsPledged');
// create array
let allHandArray= [];
let handSection = document.getElementById ('handPhotos');
// We need a count tally on the <section class="navCartContainer"> divs Hands and Acts.
let handCountDiv = document.getElementById ('handCount');
let giftCountDiv = document.getElementById ('giftCount');
handCountDiv.innerText=`Hands ${handClicks}`;
giftCountDiv.innerText=`Gifts ${giftClicks}`;

function HandItems(imageSrc, handTitle, handHoverDescription, click){
  this.handImageSrc=imageSrc;
  this.handTitle=handTitle;
  this.handHoverDescription=handHoverDescription;
  if(click){
    this.click=click;
  } else{
    this.click=0;
  }
  allHandArray.push(this);
}

//we need our hand images and descriptions here,
new HandItems('../img/hand/grocery-cart.jpeg', 'Grocery Shopping', 'Everyone needs to get groceries, but for some people the task is harder than for others. This is a moderate activity, a list will be provided. Allow around an hour for this task.' );
new HandItems('../img/hand/guy-reading.jpg', '');
new HandItems('../img/hand/haircut.jpg', '');
new HandItems('../img/hand/lawn-mower.jpg', '');
new HandItems('../img/hand/pet-a-dog.jpg', '');
new HandItems('../img/hand/play-a-game.jfif', '');
new HandItems('../img/hand/snow-shovel.jpg', '');
new HandItems('../img/hand/take-a-walk.png', '');
new HandItems('../img/hand/two-cups.jpg', '');

// need  more images and descriptions



function renderHands(){
  for (let i=0; i < allHandArray.length; i++){

    let htmlDiv = document.createElement('div');

    let htmlImage = document.createElement('img');
    htmlImage.className='show';
    htmlImage.src=allHandArray[i].handImageSrc;
    htmlDiv.appendChild(htmlImage);

//hover data
    let htmlHoverDiv = document.createElement('div');
    htmlHoverDiv.className='tooltip';
    htmlHoverDiv.textContent=allHandArray[i].handHoverDescription;
    htmlDiv.appendChild(htmlHoverDiv);


    let htmlHandTitle=document.createElement('p');
    htmlHandTitle.textContent=allHandArray[i].handTitle;
    htmlDiv.appendChild(htmlHandTitle);

    let htmlButton = document.createElement('button');
    htmlButton.innerText='Click to Choose';
    htmlButton.dataset.handIndex=`${i}`;
    console.log(htmlButton.dataset.handIndex);
    //  We need  an event listener to respond to a click of the handImage.
    htmlButton.addEventListener('click', handleHandClick);
    htmlDiv.appendChild(htmlButton);

    handSection.appendChild(htmlDiv);
  }
}

renderHands();

// function for handling click events
function handleHandClick(event) {
  console.log('click event happening' , event);
  handClicks++;
  handCountDiv.innerText=`Hands ${handClicks}`;
  console.log(event.target.dataset.handIndex);
  let handIndex=event.target.dataset.handIndex;
  console.log(allHandArray[handIndex].handImageSrc);
  //   localStorage:
  handCartItems.push(allHandArray[handIndex].handImageSrc, allHandArray[handIndex].handTitle);
  localStorage.setItem('handCount', handClicks);
  localStorage.setItem('handsPledged' , JSON.stringify(handCartItems));

}

