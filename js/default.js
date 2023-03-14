$(function () {
    $('.btn-burger').on('click', function () {
        $(this).toggleClass('active');
        $("nav").toggleClass('active');
        $("#NavSearch").toggleClass('active');
        $(".banner-text").toggleClass('active');
    });

});


