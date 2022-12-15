'use strict';
console.log ('Hello from the hand js file');


//  with an event listener to
// respond to a click of the handImage.



let handClicks = localStorage.getItem('handCount');
// create array
let allHandArray= [];
let handSection = document.getElementById ('handPhotos');
// We need a count tally on the <section class="navCartContainer"> divs Hands and Acts.
let handCountDiv = document.getElementById ('handCount');

function HandItems(imageSrc, handDescription, click){
  this.handImageSrc=imageSrc;
  this.handDescription=handDescription;
  if(click){
    this.click=click;
  } else{
    this.click=0;
  }
  allHandArray.push(this);
}

//we need our hand images and descriptions here,
new HandItems('../img/aboutUs/snowmanApron.png', 'This is a description of this hand. What it is. Who it is for. Their age, etc');


// need  more images and descriptions



function renderHands(){
  for (let i=0; i < allHandArray.length; i++){

    let htmlDiv = document.createElement('div');

    let htmlImage = document.createElement('img');
    htmlImage.src=allHandArray[i].handImageSrc;
    htmlDiv.appendChild(htmlImage);

    let htmlHandDescription=document.createElement('p');
    htmlHandDescription.textContent=allHandArray[i].handDescription;
    htmlDiv.appendChild(htmlHandDescription);

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
  localStorage.setItem('handCount', handClicks);
  localStorage.setItem('handsPledged' , JSON.stringify(allHandArray[handIndex].handImageSrc));

}

