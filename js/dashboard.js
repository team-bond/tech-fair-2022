$(function () {
    $("#modal").load("/modals/dashboard-modal.html");
    $("#footer").load("/footer.html");
})

$("#textSubmitButton").click(function () {
    let session = JSON.parse(localStorage.getItem('session'));
    let source = session.sourceType.toLowerCase();
    let sessionToken = session.traceId;
    let insertedTex =  $('#textArea').val()

    console.log(source);
    console.log(insertedTex);

    $("#dashboardModal").modal('show');

    $.ajax({
        type: "POST",
        url: "https://fair-bond.herokuapp.com/api/flow/content/" + sessionToken + "text",
        data: JSON.stringify({text: insertedTex}),
        contentType: "application/json",
        encode: true,
    }).done(function (data) {
        $("#ftpModal").modal('show');
        console.log(data);
        // set the item in localStorage
        localStorage.setItem('session', JSON.stringify(data));
    });
})

$("#assetSubmitButtons").click(function () {
    console.log("assets")

    let session = JSON.parse(localStorage.getItem('session'));
    let source = session.sourceType.toLowerCase();

    console.log(source);

    $("#dashboardModal").modal('show');


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


