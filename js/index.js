$(document).ready(function(){

  var row = $('main div.row').last();
  var catalog = $('.card', row);

  $(catalog).each(function(index){
    var item = $(catalog).eq(index);
    var name = $('.card-header h3', item);
    var id = $('.card-header span', item);
    var price = $('.card-header h4', item);
    var input = $('.card-footer input', item);
    $('.card-footer button', item).on('click', function(){
      cart[$(id).text()] = {nm:$(name).text(), prc:$(price).text(), qntt:$(input).val()};
      save();
    });
  });

});
