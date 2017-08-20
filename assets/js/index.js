window.onload = function() {
    // menu1
    var dirli = document.querySelectorAll('.menu1>ul li'),
        showul = document.querySelectorAll('.menu1>div ul'),
        len = dirli.length,
        index = 0;
    for (var i = 0; i < len; i++) {
        dirli[i].index = i;
        dirli[i].onmouseover = function() {
            showul[index].className = 'none';
            dirli[index].className = '';
            index = this.index;
            showul[index].className = 'block';
            dirli[index].className = 'bgcolor';
        }
    }

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
        //$('.slidedown').find('h3').stop(true, true);
        $(this).find('h3').slideToggle(500);
    });
    // return top
    $('.top').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
    })
}
