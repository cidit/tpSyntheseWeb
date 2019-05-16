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
  var dirtyCart = cart;
  var cleanCart = {};
  for (var key in dirtyCart) {
    if (dirtyCart[key]['qntt'] > 0) {
      cleanCart[key] = dirtyCart[key];
    }
  }
  var serializedCart = JSON.stringify(cleanCart);
  localStorage.setItem('cart', serializedCart);
}
