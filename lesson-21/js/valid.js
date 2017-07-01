$(document).ready(function () {
    $('#submit-form').click(function () {
            if ($('#userName').val() !== '') {
                $('#main-form-ajax').submit();
            } else {
                $('#userName').css("border", "2px solid red");
            }
        }


    )
});
