$(function () {
    $('[data-toggle="tooltip"]').tooltip()
    $("#profileImage").click(function (e) {
        $("#imageUpload").click();
    });

    $(".plan-items li > div").on('click', function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).find("input").prop("checked", false);
        }
        else {
            $(this).addClass('active');
            $(this).find("input").prop("checked", true);
        }
    })

})

function sConsole(event) {
    event.preventDefault();
    var arts = document.getElementById("arts");
    var children = document.getElementById("children");
    var food = document.getElementById("food");
    var market = document.getElementById("market");
    var sports = document.getElementById("sports");
    console.log("arts checked", arts.checked);
    console.log("children checked", children.checked);
    console.log("food checked", food.checked);
    console.log("market checked", market.checked);
    console.log("sports checked", sports.checked);
}