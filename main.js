$(document).ready(function() {


var toggle = $('.dropdown-toggle')
var dropdown = $('.dropdown-menu')

toggle.mouseenter(function() {
  dropdown.show();
})

toggle.mouseleave(function() {
  dropdown.hide();
})

});
