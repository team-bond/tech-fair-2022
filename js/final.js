$(function () {
    let prefix = "/tech-fair-2022";
    if (location.hostname === "localhost" || location.hostname === "127.0.0.1"){
        prefix = "";
    }
    $("#footer").load(prefix + "/footer.html");
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
