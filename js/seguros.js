$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $("header").addClass("header2");
        } else {
            $("header").removeClass("header2");
        }
    });

    $('.card').click(function () {
        if ($(this).find('.collapse').hasClass('show')) {
            $(this).find('.card-header').removeClass('collapse-title-show');
            $(this).find('i').removeClass('fa fa-minus-circle active').addClass('fa fa-plus-circle');
            $(this).find('span').addClass('collapse-title');
            $(this).find('button').css('color', 'black');
        } else {
            $(this).find('.card-header').addClass('collapse-title-show');
            $(this).find('i').removeClass('fa fa-plus-circle').addClass('fa fa-minus-circle active');
            $(this).find('span').removeClass('collapse-title');
            $(this).find('button').css('color', 'white');
        }
    });
});
