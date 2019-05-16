$(document).ready(function(){

  var $tableBody = $('main table tbody');
  var template = document.getElementById('itemcard');
  var content = template.content.querySelector('tr');


  for (var id in cart) {
    var clone = content.cloneNode(true);
    var $item = $(clone);
    $("td", $item).eq(0).find('span').text(id);
    $("td", $item).eq(2).find('h5').text(cart[id]['nm']);
    $("td", $item).eq(3).find('span').text(cart[id]['prc']);
    $("td", $item).eq(4).text(cart[id]['qntt']);
    $("img", $item).attr('src', "../img/items/" + id + ".jpg");

    $tableBody.append($item);
    console.log($item);
  }

  $("td button").click(function(){
    var $tr = $(this).parent().parent();
    var id = $('td', $tr).eq(0).find('span').text();
    console.log(id);
    delete cart[id];
    save();
    $tr.remove();
  });

});
