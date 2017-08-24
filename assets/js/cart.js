window.onload = function() {
    //cart
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

    console.log(1111);
    //toJSON
    var content = '';
    $.get('../../3.json', function(msg) {
        console.log(msg);
        msg.forEach(function(value, key) {
            content += `
             <li class="product-show scale-parent">
                    <a href="#"><img src="${value.img}" class="scale-img"></a>
                    <div>
                        <h4><a href="#">${value.title}</a></h4>
                        <span>${value.price}</span>
                        <a href="#" class="addcar">加入购物车</a>
                    </div>
                </li>
            `;
        })
        $('.shop ul').html(content);
    })

    //fly
    var offset = $("#end").offset();
    $(".addcar").click(function(event) {
        var addcar = $(this);
        var img = addcar.parents().find('img').attr('src');
        console.log(img);
        var flyer = $('<img class="u-flyer" src="' + img + '">');
        console.log(flyer[0]);
        console.log(flyer);
        console.log(event.pageX);
        flyer.fly({
            start: {
                left: event.pageX, //开始位置（必填）#fly元素会被设置成position: fixed
                top: event.pageY //开始位置（必填）
            },
            end: {
                left: offset.left + 10, //结束位置（必填）
                top: offset.top + 10, //结束位置（必填）
                width: 0, //结束时宽度
                height: 0 //结束时高度
            }
            /*onEnd: function() { //结束回调
                $("#msg").show().animate({
                    width: '250px'
                }, 200).fadeOut(1000); //提示信息
                addcar.css("cursor", "default").removeClass('orange').unbind('click');
                this.destory(); //移除dom
            }*/
        });
    });
}
