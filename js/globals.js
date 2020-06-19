const modalTitle = $('#modal-title');
const modalLeft = $('#modal-allies-left');
const modalAllies = $("#modal-allies");
const modalIcon = $('#modal-icon');
const modalLine = $('#modal-line');
const modalImage = $('#modal-image');
const dataTableExternal = $('#data-external');
const dataTableInternal = $('#data-internal');
const showAction = $('#show-icon-actions');
const hiddenAction = $('#hidden-icon-actions');
const hiddenFilter = $('#hidden-filter');
const selectProviders = $('.select-providers');
const people = $('#people');
const sureties = $('#sureties');
const header = $("header");
const car = $('#car');
const patrimonial = $('#patrimonial');
const navToggler = $('.navbar-toggler');
const mobileOverwall = $('.mobile-overwall');
const btnLink = $(".btn-link");
const btnLeer = $("#btn-leer");
const moreText = $("#more-text");
const parrafo = $("#parrafo");
const myModal = $('#MyModal');
const oficinas = $("#Oficinas");
const footerOffice = $('.oficinas');
const myModal2 = $('#MyModal2');
const caracas = $("#caracas");
const ordaz = $("#ordaz");
const linkCaracas = $('.link-caracas');
const linkOrdaz = $('.link-ordaz');
const tabsOne = $('#tabsOne');
const tabsTwo = $('#tabsTwo');
const tabs1 = $('#Tabs1');
const tabs2 = $('#Tabs2');
const searchGlossary = $('#search-glossary');

let external;

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
    const width = $(window).width();

    switch (ally) {
        case 'clinics':
            external = true;
            modalLeft.addClass('col-lg-4');
            modalTitle.text('Clínicas');
            modalLine.addClass('clinics');
            modalImage.addClass('clinics');
            modalIcon.attr('src', 'images/icon-clinica-primary.png');
            hiddenFilter.show();
            dataTableExternal.show();
            if (width < 992) hiddenAction.show();
            else showAction.show();
            fillData(clinics, external);
            break;
        case 'primaryCare':
            external = true;
            modalLeft.addClass('col-lg-4');
            modalTitle.text('Asistencia primaria');
            modalLine.addClass('primary');
            modalImage.addClass('primary');
            modalIcon.attr('src', 'images/icon-movil-primary.png');
            selectProviders.show();
            hiddenFilter.show();
            dataTableExternal.show();
            if (width < 992) hiddenAction.show();
            else showAction.show();
            fillData(primaryCare, external);
            break;
        case 'medicalEquipments':
            external = true;
            modalLeft.addClass('col-lg-4');
            modalTitle.text('Proveedor materiales y equipos');
            modalLine.addClass('equipment');
            modalImage.addClass('equipment');
            modalIcon.attr('src', 'images/icon-imagen-primary.png');
            hiddenFilter.addClass('equipment').show();
            dataTableExternal.show();
            if (width < 992) hiddenAction.show();
            else showAction.show();
            fillData(medicalEquipments, external);
            break;
        case 'dentists':
            external = false;
            modalTitle.text('Odontólogos');
            modalImage.addClass('dentists');
            modalIcon.attr('src', 'images/icon-odontologo-primary.png');
            dataTableInternal.show();
            showAction.show();
            fillData(dentists, external);
            break;
        case 'ophthalmologists':
            external = false;
            modalTitle.text('Oftalmologos');
            modalImage.addClass('ophthalmologists');
            modalIcon.attr('src', 'images/icon-ojo-primary.png');
            dataTableInternal.show();
            showAction.show();
            fillData(ophthalmologists, external);
            break;
        case 'dermatologists':
            external = false;
            modalTitle.text('Dermatólogos');
            modalImage.addClass('dermatologists');
            modalIcon.attr('src', 'images/icon-dermatologo-primary.png');
            dataTableInternal.show();
            showAction.show();
            fillData(dermatologists, external);
            break;
        case 'psychologicalAssistant':
            external = false;
            modalTitle.text('Auxiliar Psicológico');
            modalImage.addClass('psychologicalAssistant');
            modalIcon.attr('src', 'images/icon-psicologo-primary.png');
            dataTableInternal.show();
            showAction.show();
            fillData(psychologicalAssistant, external);
            break;
        case 'funeralServices':
            external = false;
            modalTitle.text('Servicios funerarios');
            modalImage.addClass('funeralServices');
            modalIcon.attr('src', 'images/icon-u-primary.png');
            dataTableInternal.show();
            showAction.show();
            fillData(funeralServices, external);
            break;
    }

    if (ally !== null) modalAllies.modal({backdrop: 'static', keyboard: false, focus: true});
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
        language: {url: `/js/es.json`}
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
            doc.text(modalTitle.text() + ' - Seguros Caroní', data.settings.margin.left + 15, 22)
            const str = 'Página ' + doc.internal.getNumberOfPages()
            doc.setFontSize(10)
            const pageSize = doc.internal.pageSize
            const pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight()
            doc.text(str, data.settings.margin.left, pageHeight - 10)
        },
        margin: {top: 30},
        html: external ? '#external-table' : '#internal-table'
    });

    doc.save(`${filename}.pdf`);
}