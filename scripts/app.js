const cityForm = document.querySelector('.change-location');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('.time');
const icon = document.querySelector('.icon img');
const forecast = new Forecast();

const updateUI = data => {

    // destructure properties
    const { cityDets, weather } = data;

    // update details template

    details.innerHTML = `
    <h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
    <span>${weather.Temperature.Metric.Value}</span>
    <span>&deg;C</span>
    </div>
    `;
    console.log(data);

    // update the night/day & icon images

    time.src = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';
    icon.src = `img/icons/${weather.WeatherIcon}.svg`;

    // remove the d-none class if present
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }

};

cityForm.addEventListener('submit', e=>{
    // prevent default action
    e.preventDefault();

    // get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    // update the ui with new city
    forecast.updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));

    // set local storage
    localStorage.setItem('city', city);
})

if(localStorage.city){
    forecast.updateCity(localStorage.city)
        .then(data => updateUI(data))
        .catch(err => console.log(err))
}
