$(document).ready(function () {

    $('.reg').click(function () {
                    $('.log').addClass("perever");
                    $('.log').removeClass("neperever");
                    $('.registr').addClass("neperever");
                    $('.registr').removeClass("perever");
    });

    $('.logBtn').click(function () {
            $('.popup-form').removeClass("hide");
            console.log("hide removed");
            $('.popup-form').addClass("show");
            console.log("show added");

    });
    $('.closing').click(function () {
            $('.popup-form').removeClass("show");
            console.log("show removed");
            $('.popup-form').addClass("hide");
            console.log("hide added");

    });


});
