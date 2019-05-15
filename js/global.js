var cart = {};

$(window).on('load', function(){

  var serializedCart = localStorage.getItem('cart');
  if (serializedCart != undefined){
    cart = JSON.parse(serializedCart);
  }

});

$(window).on('unload', function(){

  var serializedCart = JSON.stringify(cart);
  localStorage.set('cart', serializedCart);

});
