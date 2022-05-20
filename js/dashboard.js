$(function () {
    $("#modal").load("/modals/dashboard-modal.html");
    $("#footer").load("/footer.html");
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
    let source = session.sourceType.toLowerCase();

    var f = $('#fileUpload').prop('files')[0];
    var reader = new FileReader();
    reader.readAsDataURL(f);

    console.log(f)
    console.log(reader)
    console.log(reader.result)

    var bytesToSend = [253, 0, 128, 1]
    var bytesArray = new Uint8Array(bytesToSend);

    $.ajax({
        type: "POST",
        url: "https://fair-bond.herokuapp.com/api/flow/content/" + sessionToken + "/asset",
        data: bytesArray,
        contentType: "application/octet-stream",
        encode: true,
        processData: false,
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
