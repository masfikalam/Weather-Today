// elements
const result = document.querySelector('.result-area');
const search = document.getElementById('search');
const city = document.getElementById('name');
const icon = document.getElementById('icon');
const type = document.getElementById('type');
const temperature = document.getElementById('temp');
const humidity = document.getElementById('hum');
const pressure = document.getElementById('pres');


// click search
search.addEventListener('click', (event) => {
    event.preventDefault();

    const apiKey = 'c6f70638649b16325e95e3bd13a22713';
    const input = document.getElementById('city');

    // fetching data
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => displayData(data))
        // .catch(error => {
        //     confirm(`Sorry, couldn't connect`);
        //     input.value = ""
        // });

    // displaying data
    function displayData(data) {
        if (data.name == undefined) {
            confirm(`Sorry, couldn't connect`)
        } else {
            city.innerText = data.name;
            type.innerText = data.weather[0].main;
            temperature.innerText = data.main.temp;
            humidity.innerText = data.main.humidity;
            pressure.innerText = data.main.pressure;
            icon.setAttribute('src', `img/${data.weather[0].icon}.png`);
        }
    }

    input.value = "";
});