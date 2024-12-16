$(".continueNextStep").on('click', function (e) {
    e.preventDefault();
    const currentContainer = $(this).closest(".formSteps");
    const newContainer = currentContainer.next('.formSteps')
    if (newContainer.length >= 1) {
        $(this).text('').html('<span class="mdi mdi-loading btn_loader fs_7"></span>')
        $(".backPrevStep").addClass('disabled');
        setTimeout(() => {
            $(this).html('').text('Continue')
            currentContainer.removeClass('active')
            newContainer.addClass('active')
            $(".backPrevStep").removeClass('disabled');
        }, 1200);
    }
});

$(".backPrevStep").on('click', function (e) {
    e.preventDefault();
    if (!$(this).hasClass('disabled')) {
        const currentContainer = $(this).closest(".formSteps");
        const prevContainer = currentContainer.prev('.formSteps')
        if (prevContainer.length >= 1) {
            currentContainer.removeClass('active')
            currentContainer.prev('.formSteps').addClass('active')
        }
    }
});

$(".passwordField").on('input', function () {
    const isTrue = $(this).val().length > 0;
    const toggle = $(this).siblings('.togglePassBtn');
    if (isTrue) {
        toggle.removeClass('hidden');
    } else {
        toggle.addClass('hidden');
    }
});

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))