// import { fechWeather } from './api/fetchWeather';
import './sass/main.scss';
import Searchbar from './components/Searchbar';
import MainTemperatureCard from './components/MainTemperatureCard';

function App() {
    return (
        <>
            {/* <h1>Clouder</h1> */}
            <Searchbar />
            <MainTemperatureCard />
        </>
    );
}

export default App;
