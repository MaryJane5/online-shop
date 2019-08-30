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