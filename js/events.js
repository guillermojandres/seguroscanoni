$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) { header.addClass("header2"); }
        else { header.removeClass("header2"); }
    });

    people.click(function () { location.href = 'personas.html'; });

    sureties.click(function () { location.href = 'fianzas.html'; });

    car.click(function () { location.href = 'automovil.html'; });

    patrimonial.click(function () { location.href = 'patrimoniales.html'; });

    navToggler.on('click', function () { openNav(); });

    mobileOverwall.on('click', function () { closeNav(); });

    btnLink.click(function () { $("#accordionExample").toggleClass("main"); });

    btnLeer.click(function () {
        moreText.addClass('esvisible').removeClass('es0culto');
        btnLeer.css('display', 'none');
        parrafo.css('display', 'block');
    });

    myModal.click(function () { oficinas.modal({backdrop: true, keyboard: true}); });

    footerOffice.click(function () { oficinas.modal({backdrop: true, keyboard: true}); });

    myModal2.click(function () {
        const office = $('#select-office option').filter(':selected').text();
        oficinas.modal('hide');
        if (office == 'Caracas') caracas.modal({backdrop: true, keyboard: true, focus: true})
        else if (office == 'Puerto Ordaz') ordaz.modal({backdrop: true, keyboard: true, focus: true})
    });

    linkCaracas.click(function() { caracas.modal({backdrop: true, keyboard: true, focus: true}) });

    linkOrdaz.click(function () { ordaz.modal({backdrop: true, keyboard: true, focus: true}) });

    $('.card').on('show.bs.collapse', function () {
        $(this).addClass('active');
    })
        .on('hide.bs.collapse', function () {
            $(this).removeClass('active');
        });

    tabsOne.click(function () {
        tabs1.show();
        tabs2.hide();
    });

    tabsTwo.click(function () {
        tabs1.hide();
        tabs2.show();
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    let searchTerm, cardContainerId;
    $.expr[':'].containsCaseInsensitive = function (n, i, m) {
        return $(n).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
    };

    searchGlossary.on('change keyup paste click', function () {
        searchTerm = $(this).val();
        $('#accordionSeguros > .card').each(function () {
            cardContainerId = '#' + $(this).attr('id');
            $(cardContainerId + ':not(:containsCaseInsensitive(' + searchTerm + '))').hide();
            $(cardContainerId + ':containsCaseInsensitive(' + searchTerm + ')').show();
        });
    });

    modalAllies.on('hidden.bs.modal', function () {
        modalLeft.removeClass('col-lg-4');
        modalLine.removeClass('primary equipment clinics');
        modalImage.removeClass('clinics primary equipment dentists ophthalmologists dermatologists psychologicalAssistant funeralServices');
        hiddenFilter.hide().removeClass('equipment');
        selectProviders.hide();
        dataTableExternal.hide();
        dataTableInternal.hide();
        showAction.hide();
        hiddenAction.hide();
    })
});