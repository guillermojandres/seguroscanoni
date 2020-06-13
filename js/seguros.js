const modalTitle = $('#modal-title');
const modalLeft = $('#modal-allies-left');
const modalAllies = $("#modal-allies");
const modalIcon = $('#modal-icon');
const modalLine = $('#modal-line');
const modalImage = $('#modal-image');
const dataTableExternal = $('#data-external');
const dataTableInternal = $('#data-internal');
const hiddenFilter = $('#hidden-filter');
const selectProviders = $('#select-providers');
let external;

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
        modalLeft.addClass('col-10').removeClass('col-md-4');
        modalLine.removeClass('primary equipment');
        modalImage.removeClass('clinics primary equipment dentists ophthalmologists dermatologists psychologicalAssistant funeralServices');
        hiddenFilter.hide().removeClass('equipment');
        selectProviders.hide();
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
            external = true;
            modalLeft.addClass('col-md-4').removeClass('col-10');
            modalTitle.text('Clínicas');
            modalImage.addClass('clinics');
            modalIcon.attr('src', 'images/icon-clinica-primary.png');
            hiddenFilter.show();
            dataTableExternal.show();
            fillData(clinics, external);
            break;
        case 'primaryCare':
            external = true;
            modalLeft.addClass('col-md-4').removeClass('col-10');
            modalTitle.text('Atención primaria');
            modalLine.addClass('primary');
            modalImage.addClass('primary');
            modalIcon.attr('src', 'images/icon-movil-primary.png');
            selectProviders.show();
            hiddenFilter.show();
            dataTableExternal.show();
            fillData(primaryCare, external);
            break;
        case 'medicalEquipments':
            external = true;
            modalLeft.addClass('col-md-4').removeClass('col-10');
            modalTitle.text('Proveedor materiales y equipos');
            modalLine.addClass('equipment');
            modalImage.addClass('equipment');
            modalIcon.attr('src', 'images/icon-imagen-primary.png');
            hiddenFilter.addClass('equipment').show();
            dataTableExternal.show();
            fillData(medicalEquipments, external);
            break;
        case 'dentists':
            external = false;
            modalTitle.text('Odontólogos');
            modalImage.addClass('dentists');
            modalIcon.attr('src', 'images/icon-odontologo-primary.png');
            dataTableInternal.show();
            fillData(dentists, external);
            break;
        case 'ophthalmologists':
            external = false;
            modalTitle.text('Oftalmologos');
            modalImage.addClass('ophthalmologists');
            modalIcon.attr('src', 'images/icon-ojo-primary.png');
            dataTableInternal.show();
            fillData(ophthalmologists, external);
            break;
        case 'dermatologists':
            external = false;
            modalTitle.text('Dermatólogos');
            modalImage.addClass('dermatologists');
            modalIcon.attr('src', 'images/icon-dermatologo-primary.png');
            dataTableInternal.show();
            fillData(dermatologists, external);
            break;
        case 'psychologicalAssistant':
            external = false;
            modalTitle.text('Auxiliar Psicológico');
            modalImage.addClass('psychologicalAssistant');
            modalIcon.attr('src', 'images/icon-psicologo-primary.png');
            dataTableInternal.show();
            fillData(psychologicalAssistant, external);
            break;
        case 'funeralServices':
            external = false;
            modalTitle.text('Servicios funerarios');
            modalImage.addClass('funeralServices');
            modalIcon.attr('src', 'images/icon-u-primary.png');
            dataTableInternal.show();
            fillData(funeralServices, external);
            break;
    }

    if (ally !== null) modalAllies.modal({backdrop: 'static', keyboard: false});
}

function fillData(data, external) {
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

function generatePdf() {
    let filename = modalTitle.text().toLowerCase().replace(/ /g, '-');
    const doc = new jsPDF();

    doc.autoTable({
        didDrawPage: function (data) {
            doc.setFontSize(20)
            doc.setTextColor(40)
            doc.setFontStyle('normal')
            doc.addImage(imageReport, 'PNG', data.settings.margin.left, 15, 10, 10)
            doc.text(modalTitle.text(), data.settings.margin.left + 15, 22)
            const str = 'Página ' + doc.internal.getNumberOfPages() + ' - Seguros Caroní'
            doc.setFontSize(10)
            const pageSize = doc.internal.pageSize
            const pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight()
            doc.text(str, data.settings.margin.left, pageHeight - 10)
        },
        margin: { top: 30 },
        html: external ? '#external-table' : '#internal-table'
    });

    doc.save(`${filename}.pdf`);
}