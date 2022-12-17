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

// parsing local storage from hand and gift page.(if there is nothing in local storage, make an empty array...this gets rid of null)
let cartHandItems = JSON.parse(localStorage.getItem('handsPledged'))||[];
let cartGiftItems = JSON.parse(localStorage.getItem('giftsPledged'))||[];
let cartItems=[];
let itemCount=[];
let totalCount =0;

// combine hand and gift items into a single array
for(let i =0; i < cartHandItems.length; i++)
{
  cartItems.push(cartHandItems[i]);
}
for(let i =0; i < cartGiftItems.length; i++)
{
  cartItems.push(cartGiftItems[i]);
}

let cartSection = document.getElementById ('cartStart');
let cartTotal = document.getElementById ('cartTotal');
let giftClicks = localStorage.getItem('giftCount')||3;
let handClicks = localStorage.getItem('handCount')||5;


// cartItems.push(JSON.parse)


// console.log("cartItems ", cartGiftItems);

for(let i=0; i < cartItems.length; i++){

  console.log('cartItems', cartItems[i]);

  let cartItemImgSrc = cartItems[i];i++;
  let cartItemTitle = cartItems[i];
  let htmlDiv = document.createElement('div');
  itemCount[i]=1;
  totalCount++;
// exact html put into a template literal, may need to change to a button to make work,
// and add event listeners. (buttons replace hrefs)
  let htmlCartItem = `<div id= "cartStart" class="layout-inline row">
<span id = "imageContainer" class = "col col-pro layout-inline">
<img src=${cartItemImgSrc} />
</span>
<span id="title">
<p>${cartItemTitle}</p>
</span>                 
<span id="addRemoveQty" class="col col-qty layout-inline">
<a href="#" class="qty qty-minus">-</a>
  <input type="numeric" value="${itemCount[i]}" />
<a href="#" class="qty qty-plus">+</a>
</div>`;


  htmlDiv.innerHTML = htmlCartItem;
  cartSection.appendChild(htmlDiv);
  // Cart Total
  cartTotal.textContent= `${totalCount}`;
}
// Chart update, calculate new percentages
let giftPercentage = Math.floor(giftClicks/10*100);
let handPercentage = Math.floor(handClicks/10*100);

let locationGiftPercentage = document.getElementById('giftPercentage');
locationGiftPercentage.innerHTML=`${giftPercentage}%`;
let locationGiftPercentageStytle = document.getElementById('giftPercentageStyle');
locationGiftPercentageStytle.style= `height:${giftPercentage}%`;

let locationHandPercentage = document.getElementById('handPercentage');
locationHandPercentage.innerHTML=`${handPercentage}%`;
let locationHandPercentageStytle = document.getElementById('handPercentageStyle');
locationHandPercentageStytle.style= `height:${handPercentage}%`;

function handleClear(){
  console.log("handleForm ");
  //clear out the previous cart
  localStorage.setItem('handCount', 0);
  localStorage.removeItem('handsPledged');
  localStorage.setItem('giftCount', 0);
  localStorage.removeItem('giftsPledged');
  location.reload();
}


