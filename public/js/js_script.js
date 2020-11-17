function MenuItem(name, price, kCal, lactose, gluten, imgURL) {
  this.name = name;
  this.price = price + ' kr';
  this.kCal = kCal + ' kCal';
  this.lactose = lactose;
  this.gluten = gluten;
  this.imgURL = imgURL;
}
//-----------------------------------------------
function valueArray() {
  var name = document.getElementById('fullname').value
  var email = document.getElementById('email').value
  var betalning = document.getElementById('PaymentMethod').value
  var kon = document.querySelector('input[name="gender"]:checked').value

  var arr = [name, email, betalning, kon];

  return arr;

}
//-----------------------------------------
function orderArray() {

  var checkboxes = document.getElementsByName('cb');
  var burgarval2 = [];

  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      burgarval2.push(checkboxes[i].value);
    }
  }

  var matarr = burgarval2;

  return matarr;
}
