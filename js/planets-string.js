(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split('|');

    /**
     * TODOne:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

     console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
let planetsJoin = planetsArray.join(' <br> ');
console.log(planetsJoin);


//BONUS

    let planetsUL = '<ul><li>' + planetsArray.join('</li><li>') + '</li></ul>'
    //let planetsUL = `<ul><li>${planetsArray.join('</li><li>')}</li></ul>`
console.log(planetsUL);

})();