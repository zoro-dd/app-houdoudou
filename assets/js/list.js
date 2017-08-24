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

    function ajax() {
        $.get('../../1.json', function(msg) {
            var content = '';
            msg.forEach(function(value, key) {
                content += `<li>
                    <div>
                        <a href="#" class="img-a"><img src="${value.img}"></a>
                        <h5>
                            <a href="#">${value.title}</a>
                        </h5>
                        <p>
                            <span><i class="iconfont icon-tupian"></i>&nbsp;7</span>
                            <span><i class="iconfont icon-aixin"></i>&nbsp;7</span>
                        </p>
                    </div>
                </li>
            `
            })
            document.querySelector('main ul').innerHTML += content;
        })
    }
    ajax();
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop(),
            wHeight = document.documentElement.clientHeight,
            dHeight = document.documentElement.scrollHeight;
        console.log(scrollTop + wHeight == dHeight);
        console.log(dHeight);
        if (scrollTop + wHeight == dHeight) {
            ajax();
        }
    })
}
