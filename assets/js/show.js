window.onload = function() {
    // menu1
    $('.menu1>ul li').mouseover(function() {
        var index = $(this).index();
        $(this).addClass('bgcolor').siblings().removeClass('bgcolor');
        $('.menu1>div ul').eq(index).stop(true, true).fadeIn(800).siblings().hide();
    })
    $('.header>ul>li').hover(function() {
        $(this).find('.menu').stop(true, true).fadeToggle();
    })

    // tab
    $('.show-tab li').click(function() {
        var index = $(this).index();
        $('.choice').hide();
        $('.show-tab li a').removeClass('show-active');
        $('.choice').eq(index).fadeIn(300);
        $(this).children('a').addClass('show-active');
    })

    // return top
    $('.top').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
    })

    //modal
    $('.modal').click(function() {
        $('.modalCover').fadeIn(300);
        $('.modalContent').fadeIn(300);
    })
    $('.close').click(function() {
        $('.modalCover').fadeOut(300);
        $('.modalContent').fadeOut(300);
    })
    $('.modalCover').click(function() {
        $('.modalCover').fadeOut(300);
        $('.modalContent').fadeOut(300);
    })

    //slide
    //var left = ($(window).width() - $('.slide img').width()) / 2;
    //$('.slide').css('left', left);
    /*var srcArr = ['show1.jpg', 'show2.jpg', 'show3.jpg', 'show4.jpg', 'show5.jpg', 'show6.jpg', 'show7.jpg', 'show8.jpg', 'show.jpg'];
    var imgIndex = 0;
    var timerImg = 0;

    function run() {
        timerImg = setInterval(function() {
            $('.slide img').attr('src', 'assets/images/' + srcArr[imgIndex]);
            imgIndex++;
            if (imgIndex > srcArr.length - 1) {
                imgIndex = 0;
            }
        }, 1000)
    }
    run();
    $('.slide').mouseover(function() {
        clearInterval(timerImg);
    }).mouseout(function() {
        run();
    })*/
}
