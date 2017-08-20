window.onload = function() {
    $('.tab a').click(function() {
        var value = $(this).html(),
            index = $(this).index();
        $('.tabName').html(value);
        $('.form form').removeClass('show');
        $('.form form').eq(index).addClass('show');
    })
}
