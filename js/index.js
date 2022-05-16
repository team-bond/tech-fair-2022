$(function () {
    $("#login-ftp-modal").load("/modals/login-ftp-modal.html");
    $("#login-api-modal").load("/modals/login-api-modal.html");
    $("#footer").load("/footer.html");
})

$("#signUpForm").submit(function (event) {
    // Stop form from submitting normally
    event.preventDefault();

// TODO: change source
//     $.ajax({
//         type: "POST",
//         url: "https://fair-bond.herokuapp.com/api/flow/session",
//         data: JSON.stringify({name: $(this).find("input[name='userName']").val(), source: "API"}),
//         contentType: "application/json",
//         encode: true,
//     }).done(function (data) {
//         console.log(data);
//     });
});


$(document).ready(function(){
    $("#ftpButton").click(function(){
        $("#ftpModal").modal('show');
    });

    $("#apiButton").click(function(){
        $("#apiModal").modal('show');
    });
});