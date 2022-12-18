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
let giftClicks = Number(localStorage.getItem('giftCount')||0) ;
let handClicks = Number(localStorage.getItem('handCount')||0) ;



for(let i=0; i < cartItems.length; i++){

  console.log('cartItems', cartItems[i]);

  let cartItemImgSrc = cartItems[i];i++;
  let cartItemTitle = cartItems[i];
  let htmlDiv = document.createElement('div');
  // itemCount[i]=1;
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
<a href="#" class="qty qty-minus"id="minus-${i}" onclick="subtractItemFromCart(event)">-</a>
  <input type="numeric" id="value-${i}"value="1" />
<a href="#" class="qty qty-plus"id="plus-${i}" onclick="plusItemFromCart(event)">+</a>
</div>`;

  htmlDiv.innerHTML = htmlCartItem;
  cartSection.appendChild(htmlDiv);
  // Cart Total
  cartTotal.textContent= `${totalCount}`;
}
// add and subtract quantity
// eslint-disable-next-line no-unused-vars
function subtractItemFromCart(event){
  event.preventDefault();
  let numberFromString=event.target.id;
  // remove the first six letters and the dash symbol from id and turn into a number to use as an index, using the slice function to remove characters
  const cartItemIndex=numberFromString.slice(6);
  let cartQtyValue= document.getElementById(`value-${cartItemIndex}`).value;
  if (cartQtyValue>0){
    document.getElementById(`value-${cartItemIndex}`).value--;
  }
  totalCount--;
  cartTotal.textContent=totalCount;
}
// eslint-disable-next-line no-unused-vars
function plusItemFromCart(event){
  event.preventDefault();
  let numberFromString=event.target.id;
  const cartItemIndex=numberFromString.slice(5);
  document.getElementById(`value-${cartItemIndex}`).value++;
  totalCount++;
  cartTotal.textContent=totalCount;
}






// Chart update, calculate new percentages
function updateChart(){
  let giftClicks = Number(localStorage.getItem('giftsToBePledged')||0) +10;
  let handClicks = Number(localStorage.getItem('handsToBePledged')||0) +5;

  let giftPercentage = Math.floor(giftClicks/20*100);
  if (giftPercentage >= 100){
    giftPercentage=100;
  }
  
  let handPercentage = Math.floor(handClicks/20*100);
  if (handPercentage >= 100){
    handPercentage=100;
  }

  let locationGiftPercentage = document.getElementById('giftPercentage');
  locationGiftPercentage.innerHTML=`${giftPercentage}%`;
  let locationGiftPercentageStyle = document.getElementById('giftPercentageStyle');
  locationGiftPercentageStyle.style= `height:${giftPercentage}%`;

  let locationHandPercentage = document.getElementById('handPercentage');
  locationHandPercentage.innerHTML=`${handPercentage}%`;
  let locationHandPercentageStyle = document.getElementById('handPercentageStyle');
  locationHandPercentageStyle.style= `height:${handPercentage}%`;

}

updateChart();

function myFunction() {
// this is getting data from the user form
  let formName = document.getElementById('userName').value;
  let formEmail = document.getElementById('userEmail').value;
  console.log(formName, formEmail);

  // localStorage.setItem('formName', formName);
  // localStorage.setItem('formEmail', formEmail);
  // this is the thank you wording
  let thanks = document.getElementById('thanksWording');

  if (totalCount===1){
    thanks.innerHTML= `<h3>Thank You</h3>
<h2>${formName},</h2> 
<h3>your</h3>
<h2>${totalCount}</h2>
<h3>pledge helps spread holiday cheer in our community!</h3>`;}
  else{
    thanks.innerHTML= `<h3>Thank You</h3>
<h2>${formName},</h2> 
<h3>your</h3>
<h2>${totalCount}</h2>
<h3>pledges help spread holiday cheer in our community!</h3>`;}


  handleClear();
}


function handleClear(){

  //clear out the previous cart
  localStorage.removeItem('handsPledged');
  localStorage.removeItem('giftsPledged');

  //clear out hand and gift count totals
  localStorage.setItem('handCount', 0);
  localStorage.setItem('giftCount', 0);

  localStorage.setItem('giftsToBePledged', giftClicks);
  localStorage.setItem('handsToBePledged', handClicks);

  updateChart();
}
