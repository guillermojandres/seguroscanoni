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
	 
	 $("#btn-leer").click(function(){
		
		$("#more-text").addClass('esvisible');
		$("#more-text").removeClass('es0culto');
		$('#btn-leer').css('display','none');
		$("#parrafo").css('display','block');
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