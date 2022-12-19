'use strict';
console.log ('Hello from the need a hand js file');



//need to add gift selected to our gift page
//need to add gift description to gift item description
//need to add items to local storage to move over to gift page
//need to move name and email over to third section

//stretch goals: make a unique form for each gift category

//this function performs actions when the submit gift request button is pushed

//this is the array that we are sending to the gift page
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

    //if then statements for if we get the rest of this working
  if(checkRadio==="toys") {
    newGiftItem .push('toys', document.getElementById('toyDescription').value);
  }



  //putting items into local storage to add to the gift page as a new gift
  localStorage.setItem('newGift',JSON.stringify(newGiftItem));


}
