'use strict';
console.log ('Hello from the gift js file');


//we need our gift giftImages here, with an event listener to
// respond to a click of the giftImage.
//(This is similar to what we did in the Odd Duck Project)

// We need a count tally on the <section class="navCartContainer">
// divs Gifts and Acts.
//(This is similar to the count down button on Eva's Odd Duck, but instead, it is counting up)

// define variable

let giftClicks = 0;

let giftImage1 = document.getElementsByTagName('.giftImage1 img');
let giftImage2 = document.getElementsByTagName('.giftImage2 img');
let giftImage3 = document.getElementsByTagName('.giftImage3 img');
let giftImage4 = document.getElementsByTagName('.giftImage4 img');
let giftImage5 = document.getElementsByTagName('.giftImage5 img');
let giftImage6 = document.getElementsByTagName('.giftImage6 img');
let giftImage7 = document.getElementsByTagName('.giftImage7 img');
let giftImage8 = document.getElementsByTagName('.giftImage8 img');
let giftImage9 = document.getElementsByTagName('.giftImage9 img');


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
// function to render results - chart
// local storage to save clicks and add number to cart, persist between pages
