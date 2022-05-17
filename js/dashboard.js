$(function () {
    $("#modal").load("/modals/modal.html");
    $("#footer").load("/footer.html");
})

$("#textSubmitButton").click(function () {
    console.log("text")

    let session = JSON.parse(localStorage.getItem('session'));
    let source = session.sourceType.toLowerCase();

    if (source == "ftp"){
        modalSource = 'FTP Server'
    }

    console.log( jQuery('#tabs').find('li.active').attr('id'))

    $("#modal").modal('show');

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

$("#assetSubmitButton").click(function () {
    console.log("asset")

    let session = JSON.parse(localStorage.getItem('session'));
    let source = session.sourceType.toLowerCase();

    if (source == "ftp"){
        modalSource = 'FTP Server'
    }


    // $("#modal").modal('show');

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
   let session = JSON.stringify(localStorage.getItem('session'));
   // alert(session)

});