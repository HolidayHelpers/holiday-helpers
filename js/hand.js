'use strict';
console.log ('Hello from the hand js file');


//we need our lend a hand images here, with an event listener to 
// respond to a click of the Image.
//This is similar to what we did in the Odd Duck Project

// We need a count tally on the <section class="navCartContainer">
// divs hands and Acts.
//(This is similar to the count down button on Eva's Odd Duck, but instead, it is counting up)

// define variable

let handClicks = 0;

let handImage1 = document.getElementsByTagName('.handImage1 img');
let handImage2 = document.getElementsByTagName('.handImage2 img');
let handImage3 = document.getElementsByTagName('.handImage3 img');
let handImage4 = document.getElementsByTagName('.handImage4 img');
let handImage5 = document.getElementsByTagName('.handImage5 img');
let handImage6 = document.getElementsByTagName('.handImage6 img');
let handImage7 = document.getElementsByTagName('.handImage7 img');
let handImage8 = document.getElementsByTagName('.handImage8 img');
let handImage9 = document.getElementsByTagName('.handImage9 img');


// document getElementsByTagName
// create array
let allHandsArray = [];
pic1.src = allHandsArray[pic1].src;
pic2.src = allHandsArray[pic2].src;
pic3.src = allHandsArray[pic3].src;
pic4.src = allHandsArray[pic4].src;
pic5.src = allHandsArray[pic5].src;
pic6.src = allHandsArray[pic6].src;
pic7.src = allHandsArray[pic7].src;
pic8.src = allHandsArray[pic8].src;
pic9.src = allHandsArray[pic9].src;

// function for handling click events
function handleProductClick(event) {
    console.log('click event happening' , event);
    if(event.target === productContainer){
      alert('please click on a product');
    }
// what is available when hovering on image?
// idea to toggle image on/off
// var list = document.querySelectorAll("li");
// for(var i = 0; i < list.length; i++) {
//    list[i].addEventListener("click", function(e){
//     e.currentTarget.classList.toggle("done");
//    })
//  }
// determine if button functionality will work?

// function to render results - chart
// local storage to save clicks and add number to cart, persist between pages