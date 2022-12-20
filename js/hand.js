'use strict';
console.log ('Hello from the hand js file');



let newHandSet= JSON.parse(localStorage.getItem('newHand'))||[];
let giftClicks = localStorage.getItem('giftCount')||0;
let handClicks = localStorage.getItem('handCount')||0;
let handCartItems = [];
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

for (let index = 0; index < newHandSet.length; index+=2) {
  if(newHandSet[index]==='groceryShopping'){
    new HandItems('../img/hand/grocery-cart.jpeg', 'Grocery Shopping', newHandSet[index+1]);
    console.log('test1');
  }

  else if(newHandSet[index]==='readABook'){
    new HandItems('../img/hand/guy-reading.jpg', 'Read a Book', newHandSet[index+1]);
    console.log('test2');
  }

  else if(newHandSet[index]==='hairCut'){
    new HandItems('../img/hand/haircut.jpg', 'Hair Cut', newHandSet[index+1]);
    console.log('test3');
    console.log(newHandSet[index]==='hairCut');
  }

  else if(newHandSet[index]==='mowALawn'){
    new HandItems('../img/hand/lawn-mower.jpg', 'Mow a Lawn', newHandSet[index+1]);
  }
  else if(newHandSet[index]==='shovelAWalk'){
    new HandItems('../img/hand/snow-shovel.jpg', 'Shovel a Walk', newHandSet[index+1]);
  }
  else if(newHandSet[index]==='takeAWalk'){
    new HandItems('../img/hand/take-a-walk.png', 'Take a Walk', newHandSet[index+1]);
  }
  else if(newHandSet[index]==='shareACup'){
    new HandItems('../img/hand/two-cups.jpg', 'Share a Cup', newHandSet[index+1]);
  }
  else if(newHandSet[index]==='petADog'){
    new HandItems('../img/hand/pet-a-dog.jpg', 'Pet a Dog', newHandSet[index+1]);
  }
  else if(newHandSet[index]==='playAGame'){
    new HandItems('../img/hand/play-a-game.jfif', 'Play a Game', newHandSet[index+1]);
  }

}

//we need our hand images and descriptions here,
new HandItems('../img/hand/grocery-cart.jpeg', 'Grocery Shopping', 'Everyone needs to get groceries, but for some people the task is harder than for others. This is a moderate activity, a list will be provided. Allow around an hour for this task.' );
new HandItems('../img/hand/guy-reading.jpg', 'Read a Book', 'Reading helps us to transcend our day to day life. Join someone in an adventure by reading to them aloud. This is a low activity, allow thirty minutes or more for this activity.');
new HandItems('../img/hand/haircut.jpg', 'Hair Cut', 'A trip to the barber or salon is a great way to boost someone\'s confidence. This is a low activity, allow at least an hour or more for this activity.');
new HandItems('../img/hand/lawn-mower.jpg', 'Mow a Lawn', 'There is pride to having a nice yard. Help someone to keep their lawn looking spiffy. This is an active activity, you may need to provide equipment. Depending on the yard, allow an hour or more for this task.');
new HandItems('../img/hand/snow-shovel.jpg', 'Shovel a Walk', 'In snowy weather it\'s hard for some to get out to make sure their sidewalk is safe and walkable. This is an active activity, you may need to provide equipment. Depending on the sidewalk and driveway, allow an hour or more for this task.');
new HandItems('../img/hand/take-a-walk.png', 'Take a Walk', 'It\'s good to get out and take a walk, it\'s even better to share a stroll with a friend. Sign up to take a walk with someone who would like to get out of the house and explore the neighborhood or local park. This activity could take thirty minutes or more.');
new HandItems('../img/hand/two-cups.jpg', 'Share a Cup', 'It\'s alway nice to get a cup of tea or coffee with a friend. Offer your time to share a warm drink and companionship with someone. This is a low activity, allow thirty minutes or more. ');
new HandItems('../img/hand/pet-a-dog.jpg', 'Pet a Dog', 'Do you have a nice, calm dog that may want some additional pets or treats? It\'s been proven that petting an animal has calming effects on humans. If you\'re willing to share your canine companion, there is guaranteed to be someone wanting their soft attention.');
new HandItems('../img/hand/play-a-game.jfif', 'Play a Game', 'Who doesn\'t like a little friendly competition? Whether it\'s scrabble, chess, or hearts, a game always brings a little lively challenge to someone\'s day. This is a low activity, allow an hour or more.');




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
  this.removeEventListener('click', handleHandClick);
}

