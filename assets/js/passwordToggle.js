$('.togglePassBtn').on('click', function () {
    var passwordField = $(this).closest('.passwordInputBox').find('.passwordField');
    var passwordInputType = passwordField.attr('type');

    if (passwordInputType === 'password') {
        passwordField.attr('type', 'text');
        $(this).find('span.mdi').removeClass('mdi-eye-outline').addClass('mdi-eye-off-outline');
    } else {
        passwordField.attr('type', 'password');
        $(this).find('span.mdi').removeClass('mdi-eye-off-outline').addClass('mdi-eye-outline');
    }
});