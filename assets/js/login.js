window.onload = function() {
    $('.tab a').click(function() {
        var index = $(this).index();
        $('.form form').removeClass('show');
        $('.form form').eq(index).addClass('show');
    })
}
