let windowWidth = window.innerWidth
$(function () {
    $(window).on('load', function () {
        console.log('ww', windowWidth)
        if (windowWidth < 1371) {
            $('.content .nav').removeClass('active')
        }
        if (windowWidth < 451) {
            $('#switcher-label').prop('checked', false);
        }

    })
    $(window).on('resize', function () {
        windowWidth = window.innerWidth;
        windowWidth >= 1371 ? $('.content .nav').addClass('active') : $('.content .nav').removeClass('active');
    })
    $('body').on('click', '.content .nav', function (e) {
        if (windowWidth < 1370) $(this).toggleClass('active');
    })
    $('body').on('click', '.header__burger', function(e){
        $('.nav').toggleClass('active')
    })
});