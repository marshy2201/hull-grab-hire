$(function() {


    //navigation
    function menuIconNav() {
        //toggle nav
        $('nav').animate({ width: 'toggle' }, 150);

        //toggle menu icon
        $(this).toggleClass('menu-toggle');

        //hide scroll
        $('body').css("overflow", function (_, val) {
            return val == "hidden" ? "scroll" : "hidden";
        });
    } 

    //Arrows change radio input checked
    function arrowsMoveInputChecked() {
        if ($(this).is('#arrow-right')) {
            $(this).siblings('div').find('input:checked').next().next().prop('checked', true);
        }

        if ($(this).is('#arrow-left')) {
            $(this).siblings('div').find('input:checked').prev().prev().prop('checked', true);
        }
    }

    //change label colors on click
    function labelChecked() {
        $('label').removeClass('input-checked');
        $(this).addClass('input-checked');
    }

    //change label colors when radio inputs checked
    function arrowsMoveLabelChecked() {
        const $labelChecked = $('label[for="' + $('input:checked').attr('id') + '"]');
        $('label').removeClass('input-checked');
        $labelChecked.addClass('input-checked');
    }

    //events
    $('#menu-icon').click(menuIconNav);
    $('.arrows').click(arrowsMoveInputChecked).click(arrowsMoveLabelChecked);
    $('label').click(labelChecked);

});



