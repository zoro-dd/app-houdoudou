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


    /*购物车 start*/
    $('.reduce').click(function() {
        var num = $(this).siblings('input').val();
        num--;
        if (num < 1) {
            return false;
        }
        $(this).siblings('input').val(num);
        sum($(this), num);
    })

    $('.add').click(function() {
        var num = $(this).siblings('input').val();
        num++;
        $(this).siblings('input').val(num);
        sum($(this), num);
    })

    $('.number').change(function() {
        var num = $(this).val();
        sum($(this), num);
    })

    $('.del').click(function() {
        $(this).parents('li').remove();
        total1();
    })

    $('.all').click(function() {
        $('.every').prop('checked', $(this).prop('checked'));
        total1();
    })

    $('.every').click(function() {
        total1();
        var res = $('.every:checked').length == $('.every').length;
        $('.all').prop('checked', res);
    })

    function sum(obj, num) {
        var price = obj.parent().siblings('.price').children('span').text();
        var sum1 = (num * price).toFixed(2);
        console.log(sum1);
        obj.parent().siblings('.total').children('span').text(sum1);
        total1();
    }

    function total1() {
        var total = {
            price: 0.00,
            num: 0
        };
        $('.table-body li').each(function() {
            if ($(this).find('.every').prop('checked')) {
                var price = Number($(this).find('.price span').text());
                var num = Number($(this).find('.number').val())
                total.price += price * num;
                total.num += num;
            }
        })
        $('.num-total').text(total.num);
        $('.price-total').text(total.price.toFixed(2));
    }
    total1();
    /*购物车 end*/
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
}
