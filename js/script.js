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

    //change label colors on click
    $('label').click('click', function () {
        $('label').removeClass('input-checked');
        $(this).addClass('input-checked');
    });
     

    //document.querySelector('label').style.backgroundColor = '#211F60';
    //$('label').css({ 'background-color': '#211F60' });

});



