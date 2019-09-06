$(document).ready(function() {

  $(".btn-show-profile-info").click(function() {
      $(".user-interface__popup").toggleClass("show");
  });

});


jQuery(function() {
  initMobileNav();
});

// mobile menu init
function initMobileNav() {
  jQuery('body').mobileNav({
      menuActiveClass: 'nav-active',
      menuOpener: '.nav-opener'
  });
}


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

$(".filter-new").click(function (event) {
  event.preventDefault();
  $(".col-product-filter").hide();
  $(".new-product").show();
});

$(".filter-old").click(function (event) {
  event.preventDefault();
  $(".col-product-filter").hide();
  $(".old-product").show();
});

$(".filter-best").click(function (event) {
  event.preventDefault();
  $(".col-product-filter").hide();
  $(".best-product").show();
});

$(".filter-all").click(function (event) {
  event.preventDefault();
  $(".col-product-filter").show();
});

// filter-end

