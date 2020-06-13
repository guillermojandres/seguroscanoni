$(document).ready(function () {
    $('#sureties').click(function () { location.href = 'fianzas.html'; });

    $('.table-allies').DataTable({
        "paging": false,
        "info": false,
        "language": {
            "search": "_INPUT_",
            "searchPlaceholder": "Buscar...",
            "sProcessing": "Procesando...",
            "sLengthMenu": "Mostrar _MENU_ registros",
            "sZeroRecords": "No se encontraron resultados",
            "sEmptyTable": "Ningún dato disponible en esta tabla",
            "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sInfoPostFix": "",
            "sSearch": "Buscar:",
            "sUrl": "",
            "sInfoThousands": ",",
            "sLoadingRecords": "Cargando...",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            },
            "oAria": {
                "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
            }
        }
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $("header").addClass("header2");
        } else {
            $("header").removeClass("header2");
        }
    });

    $('.navbar-toggler').on('click', function () {
        openNav();
    });

    $('.mobile-overwall').on('click', function () {
        closeNav();
    });

    $(".btn-link").click(function () {
        $("#accordionExample").toggleClass("main");
    });

    $("#btn-leer").click(function () {
        $("#more-text").addClass('esvisible');
        $("#more-text").removeClass('es0culto');
        $('#btn-leer').css('display', 'none');
        $("#parrafo").css('display', 'block');
    });

    $('#MyModal').click(function () {
        $("#Oficinas").modal({backdrop: true, keyboard: false});
    });

    $('#MyModal2').click(function () {
        const office = $('#select-office option').filter(':selected').text();
        if (office == 'Puerto Ordaz') $("#ordaz").modal({backdrop: true, keyboard: false})
        else if (office == 'Puerto La Cruz') $("#cruz").modal({backdrop: true, keyboard: false})
        $('#Oficinas').modal('hide');
    });

    $('.card').on('show.bs.collapse', function () {
        $(this).addClass('active');
    });

    $('.card').on('hide.bs.collapse', function () {
        $(this).removeClass('active');
    });

    $('#tabsOne').click(function(){
        $('#Tabs1').show();
        $('#Tabs2').hide();
    });
    $('#tabsTwo').click(function(){
       $('#Tabs1').hide();
       $('#Tabs2').show();
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
        return jQuery(n).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
    };

    $('#search-glossary').on('change keyup paste click', function () {
        searchTerm = $(this).val();
        $('#accordionSeguros > .card').each(function () {
            cardContainerId = '#' + $(this).attr('id');
            $(cardContainerId + ':not(:containsCaseInsensitive(' + searchTerm + '))').hide();
            $(cardContainerId + ':containsCaseInsensitive(' + searchTerm + ')').show();
        });
    });
});

function openNav() {
    var height = $(window).height();
    $(".navbar-collapse").css({'display': 'inline'});
    $(".navbar-collapse").css({'width': '190px'});
    $('.navbar-collapse').height(height);
    $('.mobile-overwall').css({'visibility': 'visible'});
    $('.search-glossary').css({'z-index': '-1'});
}

function closeNav() {
    $(".navbar-collapse").css({'width': '0px', 'transition': '0.5s'});
    $('.navbar-collapse').height(0);
    $(".mobile-overwall").css({'visibility': 'hidden'});
    $('.search-glossary').css({'z-index': '1'});
}