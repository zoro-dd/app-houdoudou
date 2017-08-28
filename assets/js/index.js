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

    //slide
    var index1 = 0,
        len1 = $('.slide-wrap>ul li').length,
        timer1 = 0;

    function run() {
        timer1 = setInterval(function() {
            lun(function() {
                index1 = ++index1 > len1 - 1 ? 0 : index1;
            })
        }, 3000);
    }
    run();
    $('.slide-wrap').mouseover(function() {
        clearInterval(timer1);
    }).mouseout(function() {
        run();
    });
    $('.slide-wrap ol li').mouseover(function() {
        var that = $(this);
        lun(function() {
            index1 = that.index();
        });
    });

    $('.left').click(function() {
        lun(function() {
            index1 = --index1 < 0 ? len1 - 1 : index1;
        })
    })

    $('.right').click(function() {
        lun(function() {
            index1 = ++index1 > len1 - 1 ? 0 : index1;
        })
    })

    function lun(cb) {
        $('.slide-wrap>ul li').stop(true, true);
        $('.slide-wrap>ul li').eq(index1).fadeOut(80);
        $('.slide-wrap ol li').eq(index1).removeClass('active');
        cb();
        $('.slide-wrap>ul li').eq(index1).fadeIn(80);
        $('.slide-wrap ol li').eq(index1).addClass('active');
    }
    // slidedown
    $('.slidedown').hover(function() {
        $(this).find('h3').stop(true, true).slideToggle(500);
    });
    // return top
    $('.top').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
    })


    //get getDate
    var dateArr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

    function getDate() {
        var d = new Date(),
            month = d.getMonth() + 1,
            date = d.getDate(),
            day = d.getDay();
        $('.day-news .month').html(month);
        $('.day-news .day').html(date);
        $('.day-news .week').html(dateArr[day]);
    }
    getDate();
    setInterval(function() {
        getDate();
    }, 1000)

    //loading
    loadImg();
    $(window).scroll(function() {
        loadImg();
    })

    function loadImg() {
        // 1.获取滚动的距离
        var sTop = $(window).scrollTop();
        // 2.窗口的高度
        var wHeight = $(window).height();
        // 3.图片距页面顶部的距离
        $('img:not(.change)').each(function() {
            if ($(this).offset().top < sTop + wHeight) {
                $(this).attr('src', $(this).attr('_src'));
                //$(this).hide().fadeIn(5000);
                // 已经改变src地址的图片做个标记
                $(this).addClass('change');
            }
        })
    }
    // change video

    $('.video ul li').click(function() {
        var newSrc = $(this).attr('addSrc');
        console.log(newSrc);
        $('video').attr('src', newSrc);
    })
}
