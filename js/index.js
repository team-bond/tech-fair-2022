$(function () {
    $("#login-ftp-modal").load("/modals/login-ftp-modal.html");
    $("#footer").load("/footer.html");
})

$("button").click(function () {
    event.preventDefault();

    let source = $(this).val();
    let name =  $('#userName').val()
    let modalSource = 'API';

    if (source == "ftp"){
        modalSource = 'FTP Server'
    }

    $("#modalUsername").html(name);
    $("#modalSource").html(modalSource);

    // $.ajax({
    //     type: "POST",
    //     url: "https://fair-bond.herokuapp.com/api/flow/session",
    //     data: JSON.stringify({name:name, source: source.toUpperCase()}),
    //     contentType: "application/json",
    //     encode: true,
    // }).done(function (data) {
    //     $("#ftpModal").modal('show');
    //     console.log(data);
    //     // set the item in localStorage
    //     localStorage.setItem('session', JSON.stringify(data));
    // });
});


$(document).ready(function () {

});