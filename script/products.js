// 1st card
document.getElementById('1st-card').addEventListener('click', function(){
    addProductLog('K. Accessories');
    var firstCardPrice = getCardPrice('1st-product-price');
    var cartPreviousPrice = getCartPreviousTotalPrice('total-price');
    var cartNewPrice = firstCardPrice + cartPreviousPrice;
    totalPrice('total-price', cartNewPrice);
    
  
   
})

// 2nd card
document.getElementById('2nd-card').addEventListener('click', function(){
    addProductLog('K. Accessories');
    var secondCardPrice = getCardPrice('2nd-product-price');
    var cartPreviousPrice = getCartPreviousTotalPrice('total-price');
    var cartNewPrice = secondCardPrice + cartPreviousPrice;
    totalPrice('total-price', cartNewPrice);
})
// 3rd card
document.getElementById('3rd-card').addEventListener('click', function(){
    addProductLog('Home Cooker');
    var firstCardPrice = getCardPrice('3rd-product-price');
    var cartPreviousPrice = getCartPreviousTotalPrice('total-price');
    var cartNewPrice = firstCardPrice + cartPreviousPrice;
    totalPrice('total-price', cartNewPrice);
})
// 1st card
document.getElementById('4th-card').addEventListener('click', function(){
    addProductLog('Sports Back Cap');
    var firstCardPrice = getCardPrice('4th-product-price');
    var cartPreviousPrice = getCartPreviousTotalPrice('total-price');
    var cartNewPrice = firstCardPrice + cartPreviousPrice;
    totalPrice('total-price', cartNewPrice);
})
// 1st card
document.getElementById('5th-card').addEventListener('click', function(){
    addProductLog('Full Jersey Set');
    var firstCardPrice = getCardPrice('5th-product-price');
    var cartPreviousPrice = getCartPreviousTotalPrice('total-price');
    var cartNewPrice = firstCardPrice + cartPreviousPrice;
    totalPrice('total-price', cartNewPrice);
})
// 1st card
document.getElementById('6th-card').addEventListener('click', function(){
    addProductLog('Sports cates');
    var firstCardPrice = getCardPrice('6th-product-price');
    var cartPreviousPrice = getCartPreviousTotalPrice('total-price');
    var cartNewPrice = firstCardPrice + cartPreviousPrice;
    totalPrice('total-price', cartNewPrice);
})