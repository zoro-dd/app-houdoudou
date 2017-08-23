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


    //slide
    //var left = ($(window).width() - $('.slide img').width()) / 2;
    //$('.slide').css('left', left);
    var srcArr = ['show1.jpg', 'show2.jpg', 'show3.jpg', 'show4.jpg', 'show5.jpg', 'show6.jpg', 'show7.jpg', 'show8.jpg', 'show.jpg'];
    var color = ['rgb(78, 71, 73)', 'rgb(223, 214, 201)', 'rgb(217, 206, 193)', 'rgb(178, 165, 149)', 'rgb(209, 195, 175)', 'rgb(122, 147, 153)', 'rgb(54,80,57)', 'rgb(53,62,64)', 'rgb(79,114,67)'];

    var imgIndex = 0;
    var timerImg = 0;
    $('.screenImg').click(function() {
        imgIndex = $(this).attr('data-index');
        $('.modalCover').css({
            'display': 'block',
            'background-color': color[imgIndex]
        });
        $('.slide').css('display', 'block');
        $('.slide img').attr('src', 'assets/images/' + srcArr[imgIndex]);
        run();
    })

    function run() {
        timerImg = setInterval(function() {
            imgIndex++;
            $('.slide').fadeToggle(2000);
            if (imgIndex > srcArr.length - 1) {
                imgIndex = 0;
            }
            $('.slide img').attr('src', 'assets/images/' + srcArr[imgIndex]);
            $('.modalCover').css('background-color', color[imgIndex]);
        }, 2000)
    }
    /* var bool = true;
     $('.btn-stop').click(function() {
         if (bool) {
             clearInterval(timerImg);
             bool = false;
             $('.btn-stop').css('background-position', '-75px -25px');
         } else {
             run();
             bool = true;
             $('.btn-stop').css('background-position', '-100px 0');
         }
     })*/
    $('.btn-close').click(function() {
        $('.modalCover').fadeOut(300);
        $('.slide').fadeOut(300);
        clearInterval(timerImg);
    });
    $('.btn-next').click(function() {
        imgIndex++;
        if (imgIndex > srcArr.length - 1) {
            imgIndex = 0;
        }
        $('.slide img').attr('src', 'assets/images/' + srcArr[imgIndex]);
        $('.modalCover').css('background-color', color[imgIndex]);
    })
    $('.btn-pre').click(function() {
        imgIndex--;
        if (imgIndex < 0) {
            imgIndex = srcArr.length - 1;
        }
        $('.slide img').attr('src', 'assets/images/' + srcArr[imgIndex]);
        $('.modalCover').css('background-color', color[imgIndex]);
    })
    $('.slide').mouseover(function() {
        clearInterval(timerImg);
        $('.btn-stop').css('background-position', '-75px -25px');
    }).mouseout(function() {
        run();
        $('.btn-stop').css('background-position', '-100px 0');
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
        $('.slide').hide();
        clearInterval(timerImg);
        console.log(111);

    })
}
