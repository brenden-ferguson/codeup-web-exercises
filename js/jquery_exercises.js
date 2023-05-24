"use strict";
$(function () {

    $('li').css('font-size', '20px');

    $('h1, p, li').css('background-color', 'yellow');

    let contents = $('h1').html();
    alert(contents);

    let konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a', 'Enter']
    let userCode = [];
    let i = userCode.length;
    $(document).on('keyup', function(e){
        userCode.push(e.key);
        checkCode();
    })
        function checkCode(){
            if(userCode.at(i) !== konami.at(i)){
                userCode.splice(0, userCode.length);
                i = userCode.length - 1
            } else if((userCode.length === konami.length) && (userCode.at(10) === konami.at(10))){
                alert('Plus 30 Lives!');
                $('.k-code').text('33')
            }
            i++;
        }
});