"use strict";

$(function () {


// $('dd').addClass('invisible', 'noShow');

// $('.invisible').css('visibility', 'hidden')

// $('#dt-1').on('click', function (){
//     $('.noShow-1').toggleClass('invisible')
// })
//
// $('#dt-2').on('click', function (){
//     $('.noShow-2').toggleClass('invisible')
// })
// $('#dt-3').on('click', function (){
//     $('.noShow-3').toggleClass('invisible')
// })
// $('#dt-4').on('click', function (){
//     $('.noShow-4').toggleClass('invisible')
// })
// $('#dt-5').on('click', function (){
//     $('.noShow-5').toggleClass('invisible')
// })
// $('#dt-6').on('click', function (){
//     $('.noShow-6').toggleClass('invisible')
// })
// $('#dt-7').on('click', function (){
//     $('.noShow-7').toggleClass('invisible')
// })
// $('#dt-8').on('click', function (){
//     $('.noShow-8').toggleClass('invisible')
// })
// $('#dt-9').on('click', function (){
//     $('.noShow-9').toggleClass('invisible')
// })
// $('#dt-10').on('click', function (){
//     $('.noShow-10').toggleClass('invisible')
// })


    $('dd').css('display', 'none');


    $('#dt-1').on('click', function () {
        console.log('Event Fire')
        $('.noShow-1').toggleClass('invisible').toggle();
    });

    $('#dt-2').on('click', function () {
        console.log('Event Fire')
        $('.noShow-2').toggleClass('invisible').toggle();
    });

    $('#dt-3').on('click', function () {
        console.log('Event Fire')
        $('.noShow-3').toggleClass('invisible').toggle();
    });

    $('#dt-4').on('click', function () {
        console.log('Event Fire')
        $('.noShow-4').toggleClass('invisible').toggle();
    });

    $('#dt-5').on('click', function () {
        console.log('Event Fire')
        $('.noShow-5').toggleClass('invisible').toggle();
    });

    $('#dt-6').on('click', function () {
        console.log('Event Fire')
        $('.noShow-6').toggleClass('invisible').toggle();
    });

    $('#dt-7').on('click', function () {
        console.log('Event Fire')
        $('.noShow-7').toggleClass('invisible').toggle();
    });

    $('#dt-8').on('click', function () {
        $('.noShow-8').toggleClass('invisible').toggle();
    });

    $('#dt-9').on('click', function () {
        $('.noShow-9').toggleClass('invisible').toggle();
    });

    $('#dt-10').on('click', function () {
        $('.noShow-10').toggleClass('invisible').toggle();
    });

    $('.li-highlight').on('click', function () {
        $("ul").each(function () {
            $(this).find('li').last().toggleClass("highlight");
        })
    });

    $('.header-1').on('click', function () {
        $('#acadia').toggleClass('bold');
    });

    $('.header-2').on('click', function () {
        $('#yosemite').toggleClass('bold');
    });

    $('.header-3').on('click', function () {
        $('#yellowstone').toggleClass('bold');
    });

    $('li').on('click', function(){
        ('ul').each(function (){
            $(this).find('li').first()('highlight-blue');
        })
    })

});