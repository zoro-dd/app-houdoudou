window.onload = function() {
    // tab
    $('.show-tab li').click(function() {
        var index = $(this).index();
        $('.choice').hide();
        $('.show-tab li a').removeClass('show-active');
        $('.choice').eq(index).fadeIn(300);
        $(this).children('a').addClass('show-active');
    })
}
