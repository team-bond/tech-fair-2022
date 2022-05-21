$(function () {
    $("#modal").load("modals/dashboard-modal.html");
    $("#footer").load("footer.html");
})

const alert = (message, type) => {
    console.log("working")
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')
    $("#alertPlaceholder").html(wrapper)
}

const buttonLoading = (context, isLoading) => {
    console.log("step 1")
    if (isLoading) {
        console.log("step 2")
        $("button").prop("disabled", true);
        context.html(
            `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" id="123"></span> Loading...`
        );
    } else {
        console.log("step 3")
        $("button").prop("disabled", false);
        context.html(
            `<span</span> fd...`
        );
    }
}

$("#textSubmitButton").click(function () {
    // Disable button and activate loader
    buttonLoading($(this), true);

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
        $("button").prop("disabled", false);
        $("#dashboardModal").modal('show');
    }).fail(function (jqXHR) {
        console.log(jqXHR.responseJSON.errorCode)
        alert(jqXHR.responseJSON.errorText, 'danger')
        buttonLoading($(this), false);
    })
})

$("#assetSubmitButtons").click(function () {
    // Disable button and activate loader
    $("button").prop("disabled", true);
    $(this).html(
        `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...`
    );
    let session = JSON.parse(localStorage.getItem('session'));
    let sessionToken = session.traceId;

    var file = document.getElementById('formFileLg').files[0];

    $.ajax({
        type: "POST",
        url: "https://fair-bond.herokuapp.com/api/flow/content/" + sessionToken + "/asset",
        data: file,
        processData: false
    }).done(function (data) {
        $("button").prop("disabled", false);
        $("#ftpModal").modal('show');
    }).fail(function (jqXHR, textStatus, errorThrown) {
        console.log(jqXHR.responseJSON.errorCode)
        alert(jqXHR.responseJSON.errorText, 'danger')
    })
});

$(window).on('load', function () {
    let session = localStorage.getItem('session');
    if (session === null) {
        $("#dashboardErrorModal").modal('show');
    }
});