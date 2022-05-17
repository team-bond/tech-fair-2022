$(function () {
    $("#login-ftp-modal").load("/modals/login-ftp-modal.html");
    $("#login-api-modal").load("/modals/login-api-modal.html");
    $("#footer").load("/footer.html");
})

$("button").click(function () {
    event.preventDefault();

    let source = $(this).val();
    let name =  $('#userName').val()

    if (source == "ftp"){

    }else{

    }

    $("#modalUsername").html(name);

    $("#ftpModal").modal('show');

    // set the item in localStorage
    localStorage.setItem('session', "text");

    $.ajax({
        type: "POST",
        url: "https://fair-bond.herokuapp.com/api/flow/session",
        data: JSON.stringify({name:name, source: source}),
        contentType: "application/json",
        encode: true,
    }).done(function (data) {
        console.log(data);
    });
});


$(document).ready(function () {

});