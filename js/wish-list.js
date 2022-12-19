'use strict';
console.log ('Hello from the need a hand js file');



//need to add gift selected to our gift page
//need to add gift description to gift item description
//need to add items to local storage to move over to gift page
//need to move name and email over to third section

//stretch goals: make a unique form for each gift category

//this function performs actions when the submit gift request button is pushed

//this is the array that is being sent to the gift page
let newGiftItem = [];
// let document.getElementById("toys").checked;


function addNewGift(){
  //this is getting date from the user form
  let giftNeededName = document.getElementById('giftUserName').value;
  let giftNeededEmail = document.getElementById('giftUserEmail').value;


  let giftSubmitted = document.getElementById('requestWording');

  giftSubmitted.innerHTML=`<h3>Your request has been submitted, <span>${giftNeededName}</span></h3>
<h3>We will send a confirmation e-mail to <span>${giftNeededEmail}</span> shortly.</h3>
    <h3>Our team will be in contact with you when your request is ready to be fulfilled.</h3>`;

  let checkRadio = document.querySelector(
    'input[name="giftCategory"]:checked').value;

  //if else if statements for when I get the rest of this working
  if(checkRadio==='toys') {
    newGiftItem .push('toys', document.getElementById('description').value);
  } else if (checkRadio==='snowBoots') {
    newGiftItem .push('snowBoots', document.getElementById('description').value);
  }else if (checkRadio==='clothing') {
    newGiftItem .push('clothing', document.getElementById('description').value);
  }else if (checkRadio==='coats') {
    newGiftItem .push('coats', document.getElementById('description').value);
  }else if (checkRadio==='fuelCard') {
    newGiftItem .push('fuelCard', document.getElementById('description').value);
  }else if (checkRadio==='childrenBooks') {
    newGiftItem .push('childrenBooks', document.getElementById('description').value);
  }else if (checkRadio==='groceries') {
    newGiftItem .push('groceries', document.getElementById('description').value);
  }else if (checkRadio==='householdEssentials') {
    newGiftItem .push('householdEssentials', document.getElementById('description').value);
  }else if (checkRadio==='petSupplies') {
    newGiftItem .push('petSupplies', document.getElementById('description').value);
  }

  //putting items into local storage to add to the gift page as a new gift
  localStorage.setItem('newGift',JSON.stringify(newGiftItem));


}


// ******************************Hand JS*****************************

//this is the array that is being sent to the hand page
let newHandItem = [];

function addNewHand(){
  let handNeededName = document.getElementById('handUserName').value;
  let handNeededEmail = document.getElementById('handUserEmail').value;


  let handSubmitted = document.getElementById('requestWording');

  handSubmitted.innerHTML=`<h3>Your request has been submitted, <span>${handNeededName}</span></h3>
    <h3>We will send a confirmation e-mail to <span>${handNeededEmail}</span> shortly.</h3>
        <h3>Our team will be in contact with you when your request is ready to be fulfilled.</h3>`;

  let checkHandRadio = document.querySelector(
    'input[name="needAHandCategory"]:checked').value;

  if(checkHandRadio==='groceryShopping') {
    newHandItem .push('groceryShopping', document.getElementById('handDescription').value);
  } else if (checkHandRadio==='readABook') {
    newHandItem .push('readABook', document.getElementById('handDescription').value);
  }else if (checkHandRadio==='hairCut') {
    newHandItem .push('hairCut', document.getElementById('handDescription').value);
  }else if (checkHandRadio==='mowALawn') {
    newHandItem .push('mowALawn', document.getElementById('handDescription').value);
  }else if (checkHandRadio==='shovelAWalk') {
    newHandItem .push('shovelAWalk', document.getElementById('handDescription').value);
  }else if (checkHandRadio==='takeAWalk') {
    newHandItem .push('takeAWalk', document.getElementById('handDescription').value);
  }else if (checkHandRadio==='shareACup') {
    newHandItem .push('shareACup', document.getElementById('handDescription').value);
  }else if (checkHandRadio==='petADog') {
    newHandItem .push('petADog', document.getElementById('handDescription').value);
  }else if (checkHandRadio==='playAGame') {
    newHandItem .push('playAGame', document.getElementById('handDescription').value);
  }


  //putting items into local storage to add to the hand page as a new hand option
  localStorage.setItem('newHand',JSON.stringify(newHandItem));

}
