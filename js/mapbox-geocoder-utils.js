"use strict";

/***
 * geocode is a method to search for coordinates based on a physical address and return
 * @param {string} search is the address to search for the geocoded coordinates
 * @param {string} token is your API token for MapBox
 * @returns {Promise} a promise containing the latitude and longitude as a two element array
 *
 * EXAMPLE:
 *
 *  geocode("San Antonio", API_TOKEN_HERE).then(function(results) {
 *      // do something with results
 *  })
 *
 */
function geocode(search, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
        .then(function (res) {
            return res.json();
            // to get all the data from the request, comment out the following three lines...
        }).then(function (data) {
            return data.features[0].center;
        });
}


/***
 * reverseGeocode is a method to search for a physical address based on inputted coordinates
 * @param {object} coordinates is an object with properties "lat" and "lng" for latitude and longitude
 * @param {string} token is your API token for MapBox
 * @returns {Promise} a promise containing the string of the closest matching location to the coordinates provided
 *
 * EXAMPLE:
 *
 *  reverseGeocode({lat: 32.77, lng: -96.79}, API_TOKEN_HERE).then(function(results) {
 *      // do something with results
 *  })
 *
 */
function reverseGeocode(coordinates, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + coordinates.lng + "," + coordinates.lat + '.json' + "?" + 'access_token=' + token)
        .then(function (res) {
            return res.json();
        })
        // to get all the data from the request, comment out the following three lines...
        .then(function (data) {
            return data.features[0].place_name;
        });
}

function placeMarkerAndPopup(info, token, map) {
    geocode(info.address, token).then(function (coordinates) {
        var popup = new mapboxgl.Popup()
            .setHTML(info.popupHTML);
        var marker = new mapboxgl.Marker()
            .setLngLat(coordinates)
            .addTo(map)
            .setPopup(popup);
        marker.on('mouseenter', function () {
            popup.addTo(map);
        })
    });
}

let favoriteRestaurants = [
    {
        name: "Hugo\'s Cellar",
        address: "202 Fremont Street Experience, Las Vegas, NV 89101",
        popupHTML: "<p>Hugo's Cellar</p>"
    }, {
        name: "Red Lobster",
        address: "4233 South Cooper Street, Parks at Arlington Mall Near, Arlington, TX 76015",
        popupHTML: "<p>Red Lobster</p>"
    }, {
        name: "Lazy Dog",
        address: "241 E Interstate 20, Arlington, TX 76018",
        popupHTML: "<p>Lazy Dog</p>"
    }
]

let zoomAmount = 10;

let zoomPlus = document.querySelector('#zoomUp');
zoomPlus.addEventListener('click', function () {
    if (zoomAmount < 25) {
        zoomAmount += 5;
        map.setZoom(zoomAmount);
    }
    console.log(zoomAmount)
});

let zoomMinus = document.querySelector('#zoomDown');

zoomMinus.addEventListener('click', function () {
    if (zoomAmount > 0) {
        zoomAmount -= 5;
        map.setZoom(zoomAmount);
    }
    console.log(zoomAmount);
})