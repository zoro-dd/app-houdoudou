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


    //瀑布流
    var bool = true;
    var condition = true;
    var wf = new Waterfall('.waterfall', 45);
    wf.init();
    ajax();

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
            bool = true;
        })
    }
    $('.changeForm').click(function() {
        if (condition) {
            $('.unorder').addClass('hide');
            $('.order').removeClass('hide');
            condition = false;
        } else {
            $('.unorder').removeClass('hide');
            $('.order').addClass('hide');
            condition = true;
        }
    })
    window.onscroll = function() {
        var totalHeight = document.documentElement.scrollHeight,
            windowHeight = document.documentElement.clientHeight,
            scrollHeight = document.body.scrollTop || document.documentElement.scrollTop;
        if (totalHeight - windowHeight - scrollHeight < 300) {
            if (bool) {
                bool = false;
                // 避免ajax一下子被触发多次
                if (condition) {
                    $.get('../../2.json', function(msg) {
                        wf.append(msg);
                        // 追加结束了,将bool值改回true
                        bool = true;
                        console.log(bool && condition, '2.json');
                    })
                } else {
                    ajax();
                    console.log(bool && condition, '1.json');
                }
            }
        }
    }

    function Waterfall(selector, split) {
        this.waterfall = document.querySelector(selector);
        this.heights = [];
        this.append = function(data) {
            // 初始化数据的索引
            var num = 0;
            var that = this;
            run();

            function run() {
                // 每个子项的内容
                var str = ` <li>
                    <img src="${data[num].img}">
                    <div>
                        <h5>${data[num].title}</h5>
                    </div>
                </li>`;
                // 解析字符串为普通DOM
                var obj = that.parseToDOM(str);
                // 将内容追击到页面才可以获取li的各项数据
                that.waterfall.appendChild(obj);
                // 根据obj获取内部的图片数据
                var img = obj.querySelector('img');
                // 图片加载完成，再获取数据
                img.onload = function() {
                    // 获取最小高度
                    var min = Math.min.apply(null, that.heights);
                    // 获取最小高度列的索引
                    var index = that.heights.indexOf(min);
                    // 根据索引给当前的obj进行定位
                    obj.style.top = min + 'px';
                    obj.style.left = (obj.offsetWidth + split) * index + 'px';
                    // 将定位图片推入到指定的列之后，高度重新计算
                    that.heights[index] += obj.offsetHeight + split;
                    // 添加下一张图片
                    num++;
                    if (num <= data.length - 1) {
                        run();
                    }
                }
            }
        };
        // 解析HTML字符串为对象
        this.parseToDOM = function(str) {
            var div = document.createElement("div");
            if (typeof str == "string")
                div.innerHTML = str;
            return div.children[0];
        };
        // 初始化直接展示的li的位置，并给heights赋值
        this.init = function() {
            this.heights = [];
            // 获取所有的li对象
            var li = this.waterfall.children;
            // 获取li的宽度（列间隙为10）
            var width = li[0].offsetWidth + split;
            // 每行的列数（舍去取整）
            var num = Math.floor(this.waterfall.offsetWidth / width);
            for (var i = 0; i < li.length; i++) {
                // 前5个图片初始化高度
                if (i < num) {
                    li[i].style.top = 0;
                    li[i].style.left = width * i + 'px';
                    this.heights.push(li[i].offsetHeight + split);
                } else {
                    // 后面的就是高度累加
                    // 从第6张开始，找到最小的那个高度，将第6张定位到最小高度的那列
                    var min = Math.min.apply(null, this.heights);
                    // 获取最小高度列的索引
                    var index = this.heights.indexOf(min);
                    // console.log(index);
                    li[i].style.top = min + 'px';
                    li[i].style.left = width * index + 'px';
                    // 将图片推入到指定的列之后，高度重新计算
                    this.heights[index] += li[i].offsetHeight + split;
                }
            }
        }
    }
}
