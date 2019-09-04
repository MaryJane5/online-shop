//tabs
$('.tab').click(function (event) {
    $(".chosen").removeClass("chosen");
    $(this).addClass('chosen');
    //get index of tab
    var index = $('.tab').index($(this));
    //go to the page[index]
    $(".shown").removeClass("shown");
    $('.page').eq(index).addClass('shown');
});