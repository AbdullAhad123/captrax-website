// select 
$(".selectBox").on('click', function () {
    $(this).closest('.selectBoxWrapper').find('.selectBox').removeClass('selected');
    $(this).addClass('selected')
})
// select multiple 
$(".selectBoxMultiple").on('click', function () {
    const isSelected = $(this).hasClass('selected');
    if (isSelected) {
        $(this).removeClass('selected');
    } else {
        $(this).addClass('selected');
    }

})

$(".continueNextStep").on('click', function (e) {
    e.preventDefault();
    const currentContainer = $(this).closest('.pricingWrapperSteps');
    currentContainer.removeClass('active')
    currentContainer.next('.pricingWrapperSteps').addClass('active')
})

$(".backPrevStep").on('click', function (e) {
    e.preventDefault();
    const currentContainer = $(this).closest('.pricingWrapperSteps');
    currentContainer.removeClass('active')
    currentContainer.prev('.pricingWrapperSteps').addClass('active')
})

// jQuery
$(document).ready(function () {
    $('#userPhone').on('input', function () {
        let input = $(this).val();
        input = input.replace(/\D/g, ''); // Remove non-numeric characters
        if (input.length > 3) {
            input = '(' + input.substring(0, 3) + ') ' + input.substring(3);
        }
        if (input.length > 9) {
            input = input.substring(0, 9) + ' ' + input.substring(9, 13);
        }
        $(this).val(input);
    });
});

// email regex for validate use
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
