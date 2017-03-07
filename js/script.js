$(() => {

    //toggle nav
    $('#menu-icon').on('click', () => {
        $('nav').animate({ width: 'toggle' }, 150);
        $('#menu-icon').toggleClass('show');

        //hide scroll
        $('body').css("overflow", function(_,val) {
            return val == "hidden" ? "scroll" : "hidden";
        });
    });


});