$(document).ready(function(){

  var row = $('main div.row').last();
  var catalog = $('.card', row);

  for (var i = 0; i < catalog.length; i++) {
    console.log(catalog.eq(i));
  }

  $(catalog).each(function(index, item){
    var name = $('.card-header h3', item);
    var id = $('.card-header span', item);
    var price = $('.card-header h4', item);
    var image = $('.card-body img', item);
    var description = $('.card-body p', item);
    var input = $('.card-footer input', item);
    $('.card-footer button', item).on('click', function(){
      cart[$(id).text()] = {nm:$(name).text(), prc:$(price).text(), qnt:$(input).val()};

      localStorage.setItem('cart', JSON.stringify(cart));
      console.log(JSON.stringify(cart));
    });
  });

});
