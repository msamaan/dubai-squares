$(function () {
    $('[data-toggle="tooltip"]').tooltip()
    $("#profileImage").click(function (e) {
        $("#imageUpload").click();
    });
})