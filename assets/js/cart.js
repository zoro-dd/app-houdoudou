window.onload = function() {
    var bool = true;
    $('.car').click(function() {
        if (bool) {
            $('.cart').animate({
                'right': 0
            }, 1000);
            bool = false;
        } else {
            $('.cart').animate({
                'right': '-680px'
            }, 1000);
            bool = true;
        }

    })
}
