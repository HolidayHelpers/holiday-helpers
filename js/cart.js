'use strict';

console.log ('Hello from the cart js file');

// There are three things happening in this file:
// 1.) We are receiving the data from the gift and hand files and 
//     compiling them into a shopping cart . (This was done in lab 14)
// 2.)We are creating a Chart.js to show the percentage(or number) of gifts/hands
//     promised, versus still available. (Ie, number of people reached, etc.)
// 3.) We are taking user input. 
//         Name
//         Email Address       

let cartGiftCount=localStorage.getItem('giftCount');
let cartHandCount=localStorage.getItem('handCount');

let cartGiftItems=localStorage.getItem('giftsPledged');

console.log("cartItems ", cartGiftItems);
let cartItems = JSON.parse(localStorage.getItem('giftsPledged'))||[];
for(let i in cartItems.length)
{
  console.log("cartItems", cartItems[i]);
}
let cartSection = document.getElementById ('cartStart');

let cartItemImgSrc = "../img/aboutUs/snowmanApron.png";
let cartItemTitle = "Happy Tittle Critter";
let htmlDiv = document.createElement('div');

let htmlCartItem = `<div class="col col-pro layout-inline">
<img src="${cartItemImgSrc}" alt="snowman" />
<p>${cartItemTitle}</p>
</div>                  
<div class="col col-qty layout-inline">
<a href="#" class="qty qty-minus">-</a>
  <input type="numeric" value="3" />
<a href="#" class="qty qty-plus">+</a>
</div>`;
htmlDiv.innerHTML = htmlCartItem;
//cartSection.appendChild(htmlDiv);
