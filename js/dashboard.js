$(function () {
    $("#modal").load("/tech-fair-2022/modals/dashboard-modal.html");
    $("#footer").load("/tech-fair-2022/footer.html");
})

$("#textSubmitButton").click(function () {
    let session = JSON.parse(localStorage.getItem('session'));
    let sessionToken = session.traceId;
    let insertedTex = $('#textArea').val()

    $.ajax({
        type: "POST",
        url: "https://fair-bond.herokuapp.com/api/flow/content/" + sessionToken + "/text",
        data: JSON.stringify({text: insertedTex}),
        contentType: "application/json",
        encode: true,
    }).done(function (data) {
        $("#dashboardModal").modal('show');
    }).fail(function (jqXHR, textStatus, errorThrown) {
        console.log(jqXHR.responseJSON.error)
    })
})

$("#assetSubmitButtons").click(function () {
    let session = JSON.parse(localStorage.getItem('session'));
    let sessionToken = session.traceId;

    var file = document.getElementById('formFileLg').files[0];

    $.ajax({
        type: "POST",
        url: "https://fair-bond.herokuapp.com/api/flow/content/" + sessionToken + "/asset",
        data: file,
        processData: false
    }).done(function (data) {
        $("#ftpModal").modal('show');
        console.log(data);
    }).fail(function (jqXHR, textStatus, errorThrown) {
        console.log(jqXHR.responseJSON.error)
    })
});

$(window).on('load', function () {
    let session = localStorage.getItem('session');
    if (session === null) {
        $("#dashboardErrorModal").modal('show');
    }
});
