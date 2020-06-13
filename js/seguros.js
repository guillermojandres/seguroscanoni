const modalTitle = $('#modal-title');
const modalAllies = $("#modal-allies");
const modalIcon = $('#modal-icon');
const dataTableExternal = $('#data-external');
const dataTableInternal = $('#data-internal');

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $("header").addClass("header2");
        } else {
            $("header").removeClass("header2");
        }
    });

    $('#people').click(function () { location.href = 'personas.html'; });

    $('#sureties').click(function () { location.href = 'fianzas.html'; });

    $('#car').click(function () { location.href = 'automovil.html'; });

    $('#patrimonial').click(function () { location.href = 'patrimoniales.html'; });

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

    modalAllies.on('hidden.bs.modal', function () {
        dataTableExternal.hide();
        dataTableInternal.hide();
    })
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

function openModal(ally = null) {
    switch (ally) {
        case 'clinics':
            modalTitle.text('Clínicas');
            modalIcon.attr('src', 'images/icon-clinica-primary.png');
            dataTableExternal.show();
            fillData(clinics);
            break;
        case 'primaryCare':
            modalTitle.text('Atención primaria');
            modalIcon.attr('src', 'images/icon-movil-primary.png');
            dataTableExternal.show();
            fillData(primaryCare);
            break;
        case 'medicalEquipments':
            modalTitle.text('Proveedor de material y equipos médicos');
            modalIcon.attr('src', 'images/icon-imagen-primary.png');
            dataTableExternal.show();
            fillData(medicalEquipments);
            break;
        case 'dentists':
            modalTitle.text('Odontólogos');
            modalIcon.attr('src', 'images/icon-odontologo-primary.png');
            dataTableInternal.show();
            fillData(dentists, false);
            break;
        case 'ophthalmologists':
            modalTitle.text('Oftalmologos');
            modalIcon.attr('src', 'images/icon-ojo-primary.png');
            dataTableInternal.show();
            fillData(ophthalmologists, false);
            break;
        case 'dermatologists':
            modalTitle.text('Dermatólogos');
            modalIcon.attr('src', 'images/icon-dermatologo-primary.png');
            dataTableInternal.show();
            fillData(dermatologists, false);
            break;
        case 'psychologicalAssistant':
            modalTitle.text('Auxiliar Psicológico');
            modalIcon.attr('src', 'images/icon-psicologo-primary.png');
            dataTableInternal.show();
            fillData(psychologicalAssistant, false);
            break;
        case 'funeralServices':
            modalTitle.text('Servicios funerarios');
            modalIcon.attr('src', 'images/icon-u-primary.png');
            dataTableInternal.show();
            fillData(funeralServices, false);
            break;
    }

    if (ally !== null) modalAllies.modal({backdrop: 'static', keyboard: false});
}

function fillData(data, external = true) {
    let table = external ? $('#data-external table') : $('#data-internal table');
    let bodyTable = external ? $('#data-external table tbody') : $('#data-internal table tbody')
    let content = null;
    table.dataTable().fnDestroy();
    bodyTable.empty();
    data.forEach(element => {
        if (external) {
            content += `
            <tr>
            <td>${element.state}</td>
            <td>${element.city}</td>
            <td>${element.municipality}</td>
            <td>${element.name}</td>
            <td>${element.direction}</td>
            <td>${element.phones}</td>
            </tr>
            `;
        } else {
            content += `
            <tr>
            <td>${element.name}</td>
            <td>${element.rif}</td>
            <td>${element.direction}</td>
            <td>${element.phones}</td>
            <td>${element.website}</td>
            </tr>
            `;
        }
    });
    bodyTable.html(content);
    table.DataTable({
        responsive: true,
        searching: false,
        paging: false,
        info: false,
        language: { url: `/js/es.json` }
    });
}