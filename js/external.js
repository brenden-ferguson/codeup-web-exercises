//greeting to the website in the console

console.log('Hello from External JavaScript.');

//pop-up when first loading the site

alert('Welcome to my Website!');

//asks for a favorite color and responds stating that it is also my favorite

var favoriteColor = prompt('What is you favorite color?');
    alert(favoriteColor.trim() + ' is my favorite color too!');

//completing steps for JavaScript with HTML exercise

var littleMermaid = prompt('How many days would you like to rent The Little Mermaid?');
var brotherBear = prompt('How many days would you like to rent Brother Bear?');
var hercules = prompt('How many days would you like to rent Hercules?');

    alert('Because the rental price of each movie is $3.00 per day, you total will be $' +
        ((littleMermaid * 3) + (brotherBear * 3) + (hercules * 3)) + '.00.');