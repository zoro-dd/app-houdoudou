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

}
