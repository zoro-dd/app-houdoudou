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
    $('.job>a').click(function() {
        $(this).find('b').toggleClass('bg-pos');
        $('.select').toggle();
    })
    $('.select li').click(function() {
        $('.job a span').html($(this).html());
        $('.job').find('b').removeClass('bg-pos');
        $('.select').css('display', 'none');
    })

}
