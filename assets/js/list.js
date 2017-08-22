window.onload = function() {
    //固定头部
    $(window).scroll(function() {
        var tops = $(window).scrollTop();
        if (tops > 360) {
            $('.fixed-bar').fadeIn(800);
        } else {
            $('.fixed-bar').fadeOut(600);
        }
    })

    //搜索导航
    $('.menu').click(function() {
            $('.menu div').fadeToggle(800);
            $('.menu i').toggleClass('opacity');
        })
        // return top
    $('.top').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
    })
}
