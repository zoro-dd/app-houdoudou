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

    //toJSON
    /*var content = '';
    $.get('../../3.json', function(msg) {
        console.log(msg);
        msg.forEach(function(value, key) {
            content += `
             <li class="product-show scale-parent">
                    <a href="javascript:;"><img src="${value.img}" class="scale-img"></a>
                    <div class="range">
                        <h4><a href="javascript:;">${value.title}</a></h4>
                        <span>${value.price}</span>
                        <a href="javascript:;" class="addcar" onclick="addCart(${key})">加入购物车</a>
                    </div>
                </li>
            `;
        })

        $('.shop ul').append(content);
    })*/

    //fly
    // $('.addcar').click(function() {
    //console.log(111);
    // })
    //$('.shop').on('click', 'a', function() {
    //console.log(2222);
    //})

    var content = '';
    data.forEach(function(value, key) {
        content += `
             <li class="product-show scale-parent">
                    <a href="javascript:;"><img src="${value.img}" class="scale-img"></a>
                    <div class="range">
                        <h4><a href="javascript:;">${value.title}</a></h4>
                        <span>${value.price}</span>
                        <a href="javascript:;" class="addcar" onclick="addCart(${key})">加入购物车</a>
                    </div>
                    <p style="display:none">${value.id}</p>
                </li>
            `;
    })
    $('.shop ul').append(content);

}
var data = [{
    "id": 2,
    "img": "assets/images/pbl1/chahua1.jpg",
    "price": "99",
    "title": "精美插画 B"
}, {
    "id": 3,
    "img": "assets/images/pbl1/pbl3.jpg",
    "price": "152",
    "title": "精美插画 C"
}, {
    "id": 4,
    "img": "assets/images/pbl1/chahua4.jpg",
    "price": "52",
    "title": "精美插画 D"
}, {
    "id": 5,
    "img": "assets/images/pbl1/pbl5.png",
    "price": "74",
    "title": "精美插画 E"
}, {
    "id": 6,
    "img": "assets/images/pbl1/pbl6.jpg",
    "price": "86",
    "title": "精美插画 F"
}, {
    "id": 7,
    "img": "assets/images/pbl1/pbl7.jpg",
    "price": "72",
    "title": "精美插画 G"
}, {
    "id": 8,
    "img": "assets/images/pbl1/chahua3.jpg",
    "price": "55",
    "title": "精美插画 H"
}, {
    "id": 9,
    "img": "assets/images/pbl1/pbl9.jpg",
    "price": "89",
    "title": "精美插画 I"
}];

function addCart(index) {
    // 1.获取到要添加的数据
    var result = data[index];
    // 2.获取localStorage的数据：目的是对比result是否在res中
    var res = getData('shop');
    // 3.判断要添加的商品是否在本地存储中
    var bool = isExist(result, res);
    // 4.根据结果添加数据
    if (bool === false) {
        // 数据不存在本地存储中，直接推入本地存储中
        result.num = 1;
        res.push(result);
    } else {
        // 数据存在于本地存储中，数量+1
        res[bool].num++;
    }
    setData('shop', res);
}
