import { useState } from 'react'
import Header from './Componentes/Header/Header'
import Buscador from './Componentes/Buscador/Buscador'
import ClimaActual from './Componentes/ClimaActual/ClimaActual'
import ClimaDiario from './Componentes/ClimaDiario/ClimaDiario'
import './App.css'

function App() {
  
  
  const [weather, setWeather] = useState(null);
  const API_KEY = import.meta.env.VITE_OPENWEATHER_KEY;

  const fetchWeather = async (city) => {
    // 1. Geocoding: obtener coordenadas
    const geoRes = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
    );
    const geoData = await geoRes.json();
    if (!geoData[0]) return alert("Ciudad no encontrada");

    const { lat, lon } = geoData[0];

    // 2. Clima con One Call API
    const weatherRes = await fetch(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
    );
    const weatherData = await weatherRes.json();

    setWeather(weatherData);
  };



  
  return (
    <>
    <main className='w-auto h-[100vh]'>
      <Header />
      <Buscador onSearch={fetchWeather} />
      <div class="grid grid-cols-3 md:grid-cols-3 grid-rows-3 md:grid-rows-3 gap-2 md:gap-4 m-4 h-[75%]">

        <ClimaActual />
        <ClimaDiario />
        <div class="hidden md:block md:col-start-3 md:row-start-1 md:col-span-1 md:row-span-3 bg-gray-300 rounded-md p-10">2</div>


    </div>
      
    </main>
    

    </>
  )
}

export default App
