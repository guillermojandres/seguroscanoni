$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $("header").addClass("header2");
        } else {
            $("header").removeClass("header2");
        }
    });

    $('#btn-more').click(function () {
        $('.history-banner').addClass('display-more-history', 1200);
        $(this).hide();
        $('.text-body-hidden-1').show();
        $('.text-body-hidden-2').show();
        $('.text-body-hidden-3').show();
    });
});
