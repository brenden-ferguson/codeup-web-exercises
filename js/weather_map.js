(function () {
    let latLong = [32.735687, -97.108063];


    mapboxgl.accessToken = token;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        zoom: 5, // starting zoom
    });

    const marker = new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat([latLong[1],latLong[0]])
        .addTo(map);

    function onDragEnd() {
        const lngLat = marker.getLngLat();
            latLong.splice(0,2,lngLat.lat, lngLat.lng);
            console.log(latLong)
            map.setZoom(5);
            displayInfo();
    }

    marker.on('dragend', onDragEnd);


    function searchCity() {
        let userSearch = $('#city-search').val();
            geocode(userSearch, token).then(function (result) {
                latLong.splice(0,2,result[1], result[0]);
                map.setZoom(5);
                displayInfo();
            });
    }

    $('#searchButton').on('click', searchCity);

    function displayInfo() {
        $.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latLong[0]}&lon=${latLong[1]}&units=imperial&appid=${OWM_TOKEN}`).done(function (data) {
            map.flyTo({
                center: [latLong[1], latLong[0]],
                essential: true
            })
            marker.setLngLat([latLong[1], latLong[0]]);
            let daysArr = [];
            for (let i = 0; i < 39; i += 8) {
                daysArr.push({
                    day: new Date(data.list[i].dt * 1000),
                    tempLow: data.list[i].main.temp_min,
                    tempHigh: data.list[i].main.temp_max,
                    windSpeed: data.list[i].wind.speed,
                    weather: data.list[i].weather[0].main
                })
            }

            console.log(latLong);

            let weatherHTML = '';

            function renderDays(daysArr) {
                for (let i = 0; i < daysArr.length; i++) {
                    weatherHTML += showDays(daysArr[i]);
                }
                return weatherHTML;
            }

            function showDays(obj) {
                let month;
                let day;
                let tempLow = obj.tempLow
                let tempHigh = obj.tempHigh
                let wind = obj.windSpeed
                let weather;

                switch (obj.day.getMonth()) {
                    case 0:
                        month = 'January';
                        break;
                    case 1:
                        month = 'February';
                        break;
                    case 2:
                        month = 'March';
                        break;
                    case 3:
                        month = 'April';
                        break;
                    case 4:
                        month = 'May';
                        break;
                    case 5:
                        month = 'June';
                        break;
                    case 6:
                        month = 'July';
                        break;
                    case 7:
                        month = 'August';
                        break;
                    case 8:
                        month = 'September';
                        break;
                    case 9:
                        month = 'October';
                        break;
                    case 10:
                        month = 'November';
                        break;
                    case 11:
                        month = 'December';
                        break;
                    default:
                        month = 'Smarch';
                        break;
                }
                console.log(month);

                switch (obj.day.getDay()) {
                    case 0:
                        day = 'Sunday';
                        break;
                    case 1:
                        day = 'Monday';
                        break;
                    case 2:
                        day = 'Tuesday';
                        break;
                    case 3:
                        day = 'Wednesday';
                        break;
                    case 4:
                        day = 'Thursday';
                        break;
                    case 5:
                        day = 'Friday';
                        break;
                    case 6:
                        day = 'Saturday';
                        break;
                    default:
                        day = 'Stan\'s Day';
                        break;
                }
                switch (obj.weather) {
                    case weather = 'Clouds':
                        weather = 'Cloudy'
                        break;
                    case weather = 'Clear':
                        weather = 'Clear Skies'
                        break;
                    case weather = 'Rain':
                        weather = 'Rainy'
                        break;
                    default:
                        weather = 'invalid'
                        break;
                }

                let weatherHTML = '<div class="card col-2">'
                weatherHTML += '<div class="card-header">' + day + ', ' + month + ' ' + obj.day.getDate() + '</div>'
                weatherHTML += '<ul class="list-group list-group-flush">' + '<li class="list-group-item">' + 'Low and High: ' + tempLow + ' / ' + tempHigh +
                    '<li class="list-group-item">' + 'Wind: ' + wind + 'mph' + '</li>' + '<li class="list-group-item">' + 'Weather: ' + weather + '</li>' + '</ul>'
                weatherHTML += '</div>'
                return weatherHTML;
            }

            $("#weather-info").html(renderDays(daysArr));

        })
    }

    displayInfo();
})();
