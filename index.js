import 'bootstrap/dist/css/bootstrap.css'
const url = "http://restcountries.eu/rest/v1/alpha?codes=";
const svg2 = document.getElementById('svg2');
const content = document.getElementById('content');
var countryLast;




function fetchCountry(countryCode) {
    //There are multiple country codes that are quite similar. Therefore they get set as the same: ru
    if (countryCode === "ru-main" || countryCode === "ru-kgd"){
        countryCode = "ru";
    }
    fetch(url + countryCode)
    .then(res => res.json())
    .then(data => {
        //Need too loop the data because it is in an array
        var all = "";
        for(let o of data){
        all += "<p>" + "Country: " + o.name + "</p>";
        all += "<p>" + "Population: " + o.population + "</p>";
        all += "<p>" + "Area: " + o.area + "</p>";
        all += "<p>" + "Borders: " + o.borders + "</p>";
      
        content.innerHTML = all;
        }
    });
}


var countryCode = svg2.onclick = function (e) {
    if (countryLast != null) {
        fillCountryStyle(countryLast);
    }
    fetchCountry(e.target.id);
    fillCountry(e.target.style);
    countryLast = e.target.style;
};

function fillCountry(countryStyle) {
    countryStyle.fill = "#ff0000";
}

function fillCountryStyle(countryStyle) {
    countryStyle.fill = "#c0c0c0";
}