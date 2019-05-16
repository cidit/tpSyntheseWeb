var cart = {};

$(window).on('load', function(){

  var serializedCart = localStorage.getItem('cart');
  if (serializedCart != undefined){
    cart = JSON.parse(serializedCart);
    console.log("client cart:" + serializedCart);
  }
  else{
    console.log("your cart is empty");
  }

});

function save(){
  for (var key in cart) {
    if (cart[key]['qntt'] <= 0) {
      delete cart[key];
    }
  }
  var serializedCart = JSON.stringify(cart);
  localStorage.setItem('cart', serializedCart);
}
