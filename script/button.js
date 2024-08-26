// coupon btn
document.getElementById('coupon-btn').addEventListener('click', function(){
    var totalPriceAmount = getCartPreviousTotalPrice('total-price');
    var couponField = document.getElementById('coupon-field');
    var coupon = couponField.value;
    var discountField = document.getElementById('discount-field');
    var discountAmount = totalPriceAmount * .2;
    // discountAmount.toFixed(2);
    var discountedPrice = document.getElementById('discounted-price');
    if(coupon === 'SELL200'){
        discountField.innerText = discountAmount.toFixed(2);
        discountedPrice.innerText = totalPriceAmount - discountField.innerText;
    }  
  else{
    alert('Invalid Coupon Code'); 
    couponField.value = '';
}
    
})

// modal btn
document.getElementById('modal-btn').addEventListener('click', function(){
    window.location.href = 'index.html'
})