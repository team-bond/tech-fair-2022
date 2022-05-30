$(function () {
    $("#login-ftp-modal").load("modals/login-ftp-modal.html");
    $("#footer").load("footer.html");
    $("#loader").hide();
})

const alert = (message, type) => {
    console.log("working")
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')
    $("#alertPlaceholder").html(wrapper)
}

$("button").click(function () {
    event.preventDefault();
    // Disable button and activate loader
    $("#sourceButtons").prop("disabled", true);
    $("#loader").show();

    let source = $(this).val();
    let name =  $('#userName').val() + "!";
    let modalSource = 'API...';
    $("#ftpImages").hide();
    $("#apiImages").show();

    if (source == "ftp") {
        modalSource = 'FTP server...'
        $("#ftpImages").show();
        $("#apiImages").hide();
    }

    $("#modalUsername").html(name);
    $("#modalSource").html(modalSource);

    $.ajax({
        type: "POST",
        url: "https://fair-bond.herokuapp.com/api/flow/session",
        data: JSON.stringify({name:name, source: source.toUpperCase()}),
        contentType: "application/json",
        encode: true,
    }).done(function (data) {
        $("#ftpModal").modal('show');
        console.log(data);
        // set the item in localStorage
        localStorage.setItem('session', JSON.stringify(data));
    }).fail(function (jqXHR, textStatus, errorThrown) {
        console.log(jqXHR.responseJSON.errorCode)
        alert(jqXHR.responseJSON.errorText, 'danger')
        $("#loader").hide();
        $("#sourceButtons").attr("disabled", false);
    })
});


$(document).ready(function () {

});