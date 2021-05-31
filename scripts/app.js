const cityForm = document.querySelector('.change-location');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('.time');
const icon = document.querySelector('.icon img');

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

    // let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';
    // time.setAttribute('src', timeSrc);
    time.src = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';

    // const iconSrc =`img/icons/${weather.WeatherIcon}.svg`;
    // icon.setAttribute('src', iconSrc);

    icon.src = `img/icons/${weather.WeatherIcon}.svg`;

    // remove the d-none class if present
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }

};

const updateCity = async (city) => {

    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);
    
    return {cityDets, weather};

};

cityForm.addEventListener('submit', e=>{
    // prevent default action
    e.preventDefault();

    // get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    // update the ui with new city
    updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));

    // set local storage
    localStorage.setItem('city', city);
})

if(localStorage.city){
    updateCity(localStorage.city)
        .then(data => updateUI(data))
        .catch(err => console.log(err))
}