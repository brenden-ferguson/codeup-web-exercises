"use strict";
$(function () {
    $('p').on('dblclick', size => {
            $('p').css('font-size', '20px');
        }
    )
    $('h1, p, li').css('background-color', 'yellow');

    $('h1').on('click', blue => {
            $('h1').css('background-color', 'blue');
        }
    )

    $('li').on('mouseenter', highlight => {
        $('li').css('background-color', 'red');
    }).on('mouseleave', nohighlight => {
        $('li').css('background-color', 'yellow');
    });

});
