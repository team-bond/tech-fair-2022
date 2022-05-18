$(function () {
    $("#modal").load("/modals/dashboard-modal.html");
    $("#footer").load("/footer.html");
})


$("#againButton").click(function () {
    console.log("clicked")
    let session = JSON.parse(localStorage.getItem('session'));
    let source = session.sourceType.toLowerCase();

    // $.ajax({
    //     type: "POST",
    //     url: "https://fair-bond.herokuapp.com/api/flow/session",
    //     data: JSON.stringify({name: name, source: source.toUpperCase()}),
    //     contentType: "application/json",
    //     encode: true,
    // }).done(function (data) {
    //     $("#ftpModal").modal('show');
    //     console.log(data);
    // }).fail(function (jqXHR, textStatus, errorThrown) {
    //     console.log(jqXHR.responseJSON.error)
    // })
});

$(window).on('load', function () {
    let session = localStorage.getItem('session');
    if (session === null) {
        $("#dashboardErrorModal").modal('show');
    }
});
