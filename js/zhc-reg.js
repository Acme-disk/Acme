/**
 * Created by Administrator on 2017/5/21.
 */
$(document).ready(function () {
    $('header img').on('touchend',function () {
        window.history.back();
    })
    $('.zhc-reg input').on('touchend',function () {

        $('.zhc-zhe').css('display','block')
    })
})