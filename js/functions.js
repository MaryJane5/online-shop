$(document).ready(function() {

    

});

// list-product-start
$(function () {
   var selectList = $(".select-list");

   selectList.on("click", function(event) {
      event.preventDefault();
      $(".icon-th-list").toggleClass("active-select");
      $(".icon-grid").removeClass("active-select");
      $(".products-grid").toggleClass("product-list");
});

});
// list-product-end

// grid-product-start
$(function () {
var selectGrid = $(".select-grid");

selectGrid.on("click", function(event) {
   event.preventDefault();
   $(".icon-grid").toggleClass("active-select");
   $(".icon-th-list").removeClass("active-select");
   $(".products-grid").removeClass("product-list");
});

});
// grid-product-end

// drop-munu-start
window.onload=function(){
var menuElem = document.getElementById('dropdown-menu'),
    titleElem = menuElem.querySelector('.title');
    document.onclick = function(event) {
    var target = elem = event.target;
    while (target != this) {
          if (target == menuElem) {
          if(elem.tagName == 'A') titleElem.innerHTML = elem.textContent;
          menuElem.classList.toggle('open')
              return;
          }
          target = target.parentNode;
      }
    menuElem.classList.remove('open');
}
}
// drop-munu-end

// filter-start

$(".filter-new").click(function () {
   $(".col").hide();
   $(".new-product").show();
 });

 $(".filter-old").click(function () {
   $(".col").hide();
   $(".old-product").show();
 });

 $(".filter-best").click(function () {
   $(".col").hide();
   $(".best-product").show();
 });

 $(".filter-all").click(function () {
   $(".col").show();
 });

// filter-end
