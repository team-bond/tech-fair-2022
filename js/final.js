$(function () {
    // Text URL: http://localhost:3000/final.html?type=text
    // Asset URL: http://localhost:3000/final.html?type=asset

    let searchParams = new URLSearchParams(window.location.search)
    let type = searchParams.get('type')
    let session = localStorage.getItem('session');
    let hasUploaded = localStorage.getItem('hasUploaded');

    if (session === null) {
        redirect("/error-no-session.html");
    } else if (hasUploaded === null) {
        window.alert("You have not uploaded anything yet. Please scan the QR code for uploading content in Team Bond's booth! 😊");
        redirect("/generic-error.html");
    }

    if (type === 'asset' && JSON.parse(session).contentType === 'TEXT') {
        window.alert("You have scanned the wrong QR code. Please go to Team DNA stand and scan the QR code there! 😊");
        redirect("/generic-error.html");
    } else if (type === 'text' && JSON.parse(session).contentType === 'ASSET') {
        window.alert("You have scanned the wrong QR code. Please go to Team Mirage stand and scan the QR code there! 😊");
        redirect("/generic-error.html");
    } else {
        $("#header").load("header.html");
        $("#footer").load("footer.html");
        $("#modal").load("modals/final-modal.html");
        $("body").show();
    }
})

const redirect = (newUrl) => {
    let str =  window.location.href;
    let lastIndex = str.lastIndexOf("/");
    let path = str.substring(0, lastIndex);
    let new_path = path + newUrl;
    window.location.assign(new_path);
}

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
    if (isLoading) {
        $("button").prop("disabled", true);
        context.html(
            `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" id="123"></span> Loading...`
        );
    } else {
        $("button").prop("disabled", true);
        context.html(
            `Journey completed!`
        );
    }
}

$("button").click(function () {
    // Disable button and activate loader
    let buttonContext = $(this);
    buttonLoading(buttonContext, true);

    let session = JSON.parse(localStorage.getItem('session'));
    let sessionToken = session.traceId;
    let contentType = session.contentType.toLowerCase();

    $.ajax({
        type: "POST",
        url: "https://fair-bond.herokuapp.com/api/flow/content/" + sessionToken + "/" + contentType + "/complete",
        contentType: "application/json",
    }).done(function (data) {
        buttonLoading(buttonContext, false);
        localStorage.removeItem('session');
        localStorage.removeItem('hasUploaded');
    }).fail(function (jqXHR, textStatus, errorThrown) {
        console.log(jqXHR.responseJSON.errorCode)
        alert(jqXHR.responseJSON.errorText, 'danger')
    })
});

