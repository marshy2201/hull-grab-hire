$(function() {

    //toggle nav
    $('#menu-icon').on('click', function () {
        $('nav').animate({ width: 'toggle' }, 150);
        $('#menu-icon').toggleClass('show');

        //hide scroll
        $('body').css("overflow", function(_,val) {
            return val == "hidden" ? "scroll" : "hidden";
        });
    });
     
    //Arrows change radio input checked
    $('.arrows').on('click', function () {
        if ($(this).is('#arrow-right')) {
            $(this).prev().find('input:checked').next().next().prop('checked', true);
        }

        if ($(this).is('#arrow-left')) {
            $(this).prev().prev().find('input:checked').prev().prev().prop('checked', true);
        }
    });

    //change label colors on click
    $('label').click('click', function () {
        $('label').removeClass('input-checked');
        $(this).addClass('input-checked');
    });

    //change label colors when radio inputs checked
    $('.arrows').on('click', function () {
        if ($('#slide-button-1').is(':checked')) {
            $('label').removeClass('input-checked');
            $('#sb1').addClass('input-checked');
        } else if ($('#slide-button-2').is(':checked')) {
            $('label').removeClass('input-checked');
            $('#sb2').addClass('input-checked');
        } else if ($('#slide-button-3').is(':checked')) {
            $('label').removeClass('input-checked');
            $('#sb3').addClass('input-checked');
        } else if ($('#slide-button-4').is(':checked')) {
            $('label').removeClass('input-checked');
            $('#sb4').addClass('input-checked');
        } else if ($('#slide-button-5').is(':checked')) {
            $('label').removeClass('input-checked');
            $('#sb5').addClass('input-checked');
        }
    });


});



