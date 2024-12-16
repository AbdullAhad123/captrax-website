$(".nav_dropdown_link").on('click', function () {
    const menu = $(this).siblings('.nav_dropdown_menu');
    
    $(this).parent().toggleClass('active'); 
    
    if ($(this).parent().hasClass("active")) {
        menu.addClass('show');
        menu.stop(true, true).slideDown(400);
    } else {
        menu.removeClass('show');
        menu.stop(true, true).slideUp(400);
    }
    
    $(".nav_dropdown").not($(this).parent()).removeClass('active').find('.nav_dropdown_menu').removeClass('show').stop(true, true).slideUp(400);
});

$(".dropdownState").click(function () {
    const $dropdownElement = $(this).siblings(".collapse");

    $(".collapse").not($dropdownElement).removeClass("show");
    $(".dropdownState").not(this).removeClass("active");

    if ($dropdownElement.hasClass("show")) {
        $dropdownElement.removeClass("show");
        $(this).removeClass("active");
    } else {
        $dropdownElement.addClass("show");
        $(this).addClass("active");
    }
});

// Handle collapse hide event to remove active class
$(".collapse").on("hidden.bs.collapse", function () {
    $(this).siblings(".dropdownState").removeClass("active");
});

// Handle collapse show event to add active class
$(".collapse").on("shown.bs.collapse", function () {
    $(this).siblings(".dropdownState").addClass("active");
});
