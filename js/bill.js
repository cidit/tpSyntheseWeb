$(document).ready(function(){

  var $tableBody = $('main div div table tbody').first();
  var template = document.getElementById('itemcard');
  var content = template.content.querySelector('tr');
  // PriceBeforeTaxes tps tvq PriceAfterTaxes
  var pbt = 0, tps = 0, tvq = 0, pat = 0;

  for (var id in cart) {
    var clone = content.cloneNode(true);
    var $item = $(clone);
    var totalprice = cart[id]['qntt'] * cart[id]['prc'];
    pbt += totalprice;
    $("td", $item).eq(0).find('span').text(id);
    $("td", $item).eq(1).find('h5').text(cart[id]['nm']);
    $("td", $item).eq(2).find('span').text(cart[id]['prc']);
    $("td", $item).eq(3).text(cart[id]['qntt']);
    $("td", $item).eq(4).find('h5').text(totalprice);
    $tableBody.append($item);
    console.log($item);
  }

  pbt = Number(pbt).toFixed(2);
  tps = Number(pbt * 5 / 100).toFixed(2);
  tvq = Number(pbt * 9.975 / 100).toFixed(2);
  pat = Number(Number(pbt) + Number(tps) + Number(tvq)).toFixed(2);

  $('#pbt').text(pbt);
  $('#tps').text(tps);
  $('#tvq').text(tvq);
  $('#pat').text(pat);

  $('#date').text(getMoment());
  $('#nbitems').text(Object.keys(cart).length);

  cart = {};
  save();
});

function getMoment(){
  var d = new Date();
  var jdls = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
  var mdla = ["janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre"];

  var day = jdls[d.getDay()];
  var date = d.getDate();
  var month = mdla[d.getMonth()];
  var year = d.getFullYear();
  var hours = d.getHours();
  var minutes = d.getMinutes();

  return day + ' ' + date + ' ' + month + ' ' + year + ' ' + hours + 'h' + minutes;
}
