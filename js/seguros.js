$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $("header").addClass("header2");
        } else {
            $("header").removeClass("header2");
        }
    });

    $('.navbar-toggler').on('click', function(){
		openNav();
	});

	$('.mobile-overwall').on('click', function(){
		closeNav();
	});

	$(".btn-link").click(function(){

	 $("#accordionExample").toggleClass("main");


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

    $('#btn-more').click(function () {
        $('.history-banner').addClass('display-more-history', 1200);
        $(this).hide();
        $('.text-body-hidden-1').show();
        $('.text-body-hidden-2').show();
        $('.text-body-hidden-3').show();
    });
});

function openNav() {

	var height = $(window).height();
	$(".navbar-collapse").css({'display': 'inline'});
	$(".navbar-collapse").css({'width': '190px'});
	$('.navbar-collapse').height(height);
	$('.mobile-overwall').css({'visibility' : 'visible'});

}

function closeNav() {
	$(".navbar-collapse").css({'width': '0px', 'transition': '0.5s'});
	$('.navbar-collapse').height(0);
	$(".mobile-overwall").css({'visibility': 'hidden'});
}