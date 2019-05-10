$(document).ready(function() {
   var maxHeight = -1;

   $('.features').each(function() {
      maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
   });

   $('.features').each(function() {
      $(this).height(maxHeight);
   });
});

// CLEAN

$(document).ready(function() {
   // Get an array of all element heights
   var elementHeights = $('.features').map(function() {
      return $(this).height();
   }).get();

   // Math.max takes a variable number of arguments
   // `apply` is equivalent to passing each height as an argument
   var maxHeight = Math.max.apply(null, elementHeights);

   // Set each height to the max height
   $('.features').height(maxHeight);
});

// VANILLA

var elements = document.getElementsByClassName('features');

var elementHeights = Array.prototype.map.call(elements, function(el) {
   return el.clientHeight;
});

var maxHeight = Math.max.apply(null, elementHeights);

Array.prototype.forEach.call(elements, function(el) {
   el.style.height = maxHeight + "px";
});

// ES6

var elements = document.getElementsByClassName('features');

var elementHeights = Array.prototype.map.call(elements, (el) => {
   return el.clientHeight;
});

var maxHeight = Math.max(...elementHeights)

Array.prototype.forEach.call(elements, (el) => el.style.height = `${maxHeight}px`);