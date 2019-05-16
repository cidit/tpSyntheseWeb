$(document).ready(function(){

  var tableBody = $('main table tbody');
  var template = $('#itemcard');
  var t2 = $('tr', template);
  console.log(t2.get(0));

  for (var id in cart) {
    var item = $.extend({}, template);
    $(item).attr('id', id);
    $("td", template).eq(0).text(id);
    $("img", template).attr('src', "../img/items/" + id + ".jpg");
    $("td", template).eq(2).text(cart[id]['nm']);
    $("td", template).eq(3).text(cart[id]['prc']);
    $("td", template).eq(4).text(cart[id]['qntt']);
    $("button", template).on('click', remove(id));
    console.log(id);
    $(tableBody).append($(template));
  }

  function remove(id){
    $('#' + id).remove();
    delete cart[id];
    console.log(id);
  }


});
