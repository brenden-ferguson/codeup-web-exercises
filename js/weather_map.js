(function (){
    let latLong = [32.735687, -97.108063];
    $.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latLong[0]}&lon=${latLong[1]}&units=imperial&appid=${OWM_TOKEN}`).done(function(data) {
    console.log(data);
    let todayDate = new Date(data.list[0].dt * 1000);
    let daysArr = [];
    let month;
    let day;


    for(let i = 0; i < 39; i++){
        // let dtText = data.list[i].dt_txt.at(9)
        // console.log(data.list[i].dt_txt.at(9))
        if(i === 0){
            daysArr.push(new Date(data.list[i].dt * 1000))
        }
        if(i > 0){
            if((data.list[i].dt_txt.at(9)) !== (data.list[i - 1].dt_txt.at(9))){
                daysArr.push(new Date(data.list[i].dt * 1000))
            }
        }
    }
    // console.log(daysArr)


// console.log(data.list[0].dtText.at(9))
daysArr.forEach(function (day){
    switch (day.getMonth()) {
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

})

//     switch (todayDate.getDay()) {
//     case 0:
//     day = 'Sunday';
//     break;
//     case 1:
//     day = 'Monday';
//     break;
//     case 2:
//     day = 'Tuesday';
//     break;
//     case 3:
//     day = 'Wednesday';
//     break;
//     case 4:
//     day = 'Thursday';
//     break;
//     case 5:
//     day = 'Friday';
//     break;
//     case 6:
//     day = 'Saturday';
//     break;
//     default:
//     day = 'Stan\'s Day';
//     break;
// }
//
//     let weatherHTML = `<section><h1>${day}, ${month} ${todayDate.getDate()}</h1><p>${data.list[0].main.temp_max} / ${data.list[0].main.temp_min}</p></section>`;
//
//     $("#weather-info").html(weatherHTML);
})
})();
