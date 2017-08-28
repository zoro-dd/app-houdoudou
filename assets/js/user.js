window.onload = function() {
    //change face
    $('.changeFace').click(function() {
        $('.setFace').slideToggle(700);
    })

    //laydate
    $('#born').focus(function() {
        var laydate = document.querySelector('.layui-laydate');
        laydate.style.top = 679 + 'px';
    })


    //select
    $('.sec-0 .job>a').click(function() {
        $(this).find('b').toggleClass('bg-pos');
        $('.sec-0 .select').toggle();
    })
    $('.sec-0 .select li').click(function() {
        $('.sec-0 .job a span').html($(this).html());
        $('.sec-0 .job').find('b').removeClass('bg-pos');
        $('.sec-0 .select').css('display', 'none');
    })

    //change face
    $('.setFace img').click(function() {
        if (confirm('确认更新头像？')) {
            $('.face img').attr('src', $(this).attr('src'));
        }
    })

    //二级联动
    var citys = [
        ['北京市', '朝阳区', '东城区', '西城区', '海淀区', '丰台区', '崇文区', '宣武区'],
        ['上海市', '黄浦区', '徐汇区', '长宁区', '静安区', '普陀区', '虹口区', '杨浦区'],
        ['天津市', '和平区', '河东区', '河西区', '南开区', '河北区', '红桥区', '滨海新区'],
        ['重庆市', '渝中区', '万州区', '涪陵区', '江北区', '南岸区', '北碚区', '江津区'],
        ['黑龙江', '哈尔滨', '齐齐哈尔', '牡丹江', '佳木斯', '大庆', '绥化', '鹤岗'],
        ['辽宁', '沈阳', '大连', '鞍山', '抚顺', '本溪', '丹东', '锦州'],
        ['吉林', '长春', '吉林', '四平', '辽源', '通化', '白山', '松原'],
        ['河北', '石家庄', '邯郸', '邢台', '保定', '张家口', '承德', '廊坊'],
        ['内蒙古', '呼和浩特', '包头', '乌海', '赤峰', '呼伦贝尔盟', '阿拉善盟', '哲里木盟']
    ]
    $('.city').click(function() {
        if ($('.sec-1 .select1').css('display') == 'none') {
            $('.sec-1 .selectCity').toggle();
            $(this).find('b').toggleClass('bg-pos');
        }
    })
    $('.sec-1 .select ul li').click(function() {
        $('.country span').html('- 请选择 -');
        $('.hideSelect1 option').html('- 请选择 -');
        if ($(this).html() !== '- 请选择 -') {
            var index = $(this).attr('data-index');
            $('.hideSelect option:not(.no)').eq(index).prop('selected', true);
            $('.city span').html($(this).html());
            $('.city').find('b').removeClass('bg-pos');
            $('.selectCity').css('display', 'none');
            var data = citys[index];
            var content = '';
            data.forEach(function(value, key) {
                content += `<li data-index="key">${value}</li>`;
            })
            $('.select1 ul').html(content);
        } else {
            $('.hideSelect .no').prop('selected', true);
            $('.city span').html($(this).html());
            $('.city').find('b').removeClass('bg-pos');
            $('.selectCity').css('display', 'none');
            $('.select1 ul').html('<li> - 请选择 -</li>');
        }

    })
    $('.country').click(function() {
        if ($('.sec-1 .selectCity').css('display') == 'none') {
            $('.sec-1 .select1').toggle();
            $(this).find('b').toggleClass('bg-pos');
        }
    })
    $('.select1 ul').on('click', 'li', function() {
        $('.country span').html($(this).html());
        $('.country').find('b').removeClass('bg-pos');
        $('.sec-1 .select1').css('display', 'none');
        $('.hideSelect1 option').html($(this).html());
        $('.hideSelect1 option').prop('selected', true);
        console.log($('.hideSelect1 option'));
    })

    //tab
    $('.tab').click(function() {
        var index = $(this).attr('data-index');
        $('.tab a').removeClass('color-fff');
        $(this).find('a').addClass('color-fff');
        $('.sec').hide();
        $('.sec').eq(index).show();
    })

}
