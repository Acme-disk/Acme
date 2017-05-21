/**
 * Created by Administrator on 2017/5/21.
 */
$(document).ready(function () {
    $('footer div').on('touchend',function () {
        $(this).addClass('active').siblings().removeClass('active').children()
    })
})