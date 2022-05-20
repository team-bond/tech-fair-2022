$(function () {
    $("#login-ftp-modal").load("../modals/login-ftp-modal.html");
    $("#footer").load("/footer.html");
})

$("button").click(function () {
    event.preventDefault();
    // Disable button and activate loader
    $("button").prop("disabled", true);
    $(this).html(
        `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...`
    );

    let source = $(this).val();
    let name =  $('#userName').val()
    let modalSource = 'API';
    $("#ftpImages").hide();
    $("#apiImages").show();

    if (source == "ftp"){
        modalSource = 'FTP Server'
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
    });
});


$(document).ready(function () {

});