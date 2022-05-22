$(function () {
    $("#footer").load("footer.html");
    $("#modal").load("modals/dashboard-modal.html");
})



$(window).on('load', function () {
    let session = localStorage.getItem('session');
    if (session === null) {
        $("#dashboardErrorModal").modal('show');
    }
});
