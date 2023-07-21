// import clear from '../assets/img/clear-day.svg';
// import cloudy from '../assets/img/cloudy.svg';

// import { useState } from 'react';

// import bgImage from 'https://cdn.pixabay.com/photo/2016/01/02/01/51/clouds-1117584_1280.jpg';

const MainTemperatureCard = (props: any) => {
    // const weatherStatus = props.weather.weather[0].main;
    const weatherStatus = props.weather.weather[0].description;
    // const [img, setImg] = useState('');

    // switch (weatherStatus) {
    //     case 'Clear':
    //         setImg(clear);
    //         break;
    //     case 'Clouds':
    //         setImg(cloudy);
    //         break;
    //     default:
    //         setImg('');
    // }
    return (
        <div className="main card">
            {/* {img ? <img src={img} alt={weatherStatus + ' image'} /> : null} */}
            {/* <img src={img} alt={weatherStatus + ' image'} /> */}
            <img
                src={`https://openweathermap.org/img/wn/${props.weather.weather[0].icon}@2x.png`}
                alt={weatherStatus}
            />

            <h2>{props.weather.name}</h2>
            {/* Staronizhestebliyevskaya */}

            <div className="temperature">
                {Math.round(props.weather.main.temp)}
                <sup>°C</sup>
            </div>

            <div className="weather-status">
                {weatherStatus.charAt(0).toUpperCase() + weatherStatus.slice(1)}
            </div>

            <ul>
                <li>
                    H: {Math.round(props.weather.main.temp_max)}
                    <sup>°C</sup>
                </li>
                <li>
                    L: {Math.round(props.weather.main.temp_min)}
                    <sup>°C</sup>
                </li>
            </ul>
        </div>
    );
};

export default MainTemperatureCard;
