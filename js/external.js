"use strict";

//greeting to the website in the console

console.log('Hello from External JavaScript.');

//pop-up when first loading the site

    alert('Welcome to my Website!');

//asks for a favorite color and responds stating that it is also my favorite

var favoriteColor = prompt('What is you favorite color?');
    alert(favoriteColor.trim() + ' is my favorite color too!');

//completing steps for JavaScript with HTML exercise

//movie rental exercise
var littleMermaid = prompt('How many days would you like to rent The Little Mermaid?');
var brotherBear = prompt('How many days would you like to rent Brother Bear?');
var hercules = prompt('How many days would you like to rent Hercules?');

    alert('Because the rental price of each movie is $3.00 per day, you total will be $' +
        ((littleMermaid * 3) + (brotherBear * 3) + (hercules * 3)) + '.00.');

//Job pay exercise

var googlePay = prompt('How much did Google Pay you hourly?');
var googleTime = prompt('How many hours did you work at Google?');
var facePay = prompt('How much did Facebook pay you hourly?');
var faceTime = prompt('How many hours did you work at Facebook?');
var amaPay = prompt('How much did Amazon pay you hourly?');
var amaTime = prompt('How many hours did you work at Amazon?');

//Maths out how much money they made and alerts them

    alert('In total you should have made $' + ((googlePay * googleTime) + (facePay * faceTime) +
        (amaPay * amaTime)) + '.00!');

//Student Enrollment exercise

var classFull = confirm('Is the class already full?');
var studentSchedule = confirm('Does this conflict with any other classes?');

//If-Statement determining whether you can be enrolled or not

    if(classFull === false && studentSchedule === false){
        alert('You are now enrolled!');
    } else {
        alert('You could not be enrolled at this time.');
}

//Product Offer exercise

var premium = confirm('Are you a premium member?');
var expired = confirm('Has the product offer expired?');
var twoOrMore = confirm('Are you buying at least 2 items?');

//if-else statement determining if product applies

if(premium === true && expired === false){
        alert('You have received the product offer!');
    } else if(expired === false && twoOrMore === true){
        alert('You have received the product offer!');
    } else if(expired === true){
        if(expired === true){
            alert('This offer has expired.')
        }
    } else {
        alert('We\'re sorry, this offer does not apply to you.');
}
