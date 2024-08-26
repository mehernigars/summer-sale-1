function addProductLog(productName){
    var logArea = document.getElementById('log-area');
    var count = logArea.childElementCount + 1;
    var p = document.createElement('p');
    p.innerText = count + '. ' + productName;
    logArea.appendChild(p);
}

function getCardPrice(priceId){
    var priceArea = document.getElementById(priceId);
    var priceStr = priceArea.innerText;
    var price = parseFloat(priceStr);
    return price;
}

function getCartPreviousTotalPrice(cartPriceId){
    var cartPriceArea = document.getElementById(cartPriceId);
    var cartPriceStr = cartPriceArea.innerText;
    var cartPrice = parseFloat(cartPriceStr); 
    return cartPrice;
}

function totalPrice(cartPriceId, cartTotalPrice){
    var cartPriceArea = document.getElementById(cartPriceId);
    cartPriceArea.innerText = cartTotalPrice;
    // ekanei amr cart er totalPrice area te updated total price ta add hoye jay tai amr ai area er inner price k call korlei ami updatedTotalPrice peye jBo jehetu getCartPreviousTotalPrice() function e cart er totalPrice tar man return kore tai ami ai function ke call lor;ei updated totalPrice peye jabo
    var purchaseBtn = document.getElementById('purchase-btn')
    var couponBtn = document.getElementById('coupon-btn')
    if(cartPriceArea.innerText > 0){
    purchaseBtn.removeAttribute('disabled');
    if(cartPriceArea.innerText >= 200){
    couponBtn.removeAttribute('disabled');
    }
    
} 
 return cartTotalPrice;
}



 





