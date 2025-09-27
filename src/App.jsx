import { useState } from 'react'
import Header from './Componentes/Header/Header'
import Buscador from './Componentes/Buscador/Buscador'
import ClimaActual from './Componentes/ClimaActual/ClimaActual'
import ClimaDiario from './Componentes/ClimaDiario/ClimaDiario'
//import { API_KEY } from "./config";

import './App.css'

function App() {
  
  
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  

  const fetchWeather = async (cityName) => {
    try {
      // 1. Buscar lat/lon de la ciudad
      const geoRes = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`
      );
      const geoData = await geoRes.json();

      if (geoData.length === 0) {
        alert("Ciudad no encontrada");
        return;
      }

      const { lat, lon, name } = geoData[0];

      // 2. Traer clima con esas coordenadas
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=es`
      );
      const data = await res.json();

      // 3. Guardar en el estado
      setWeather(data);
      setCity(name);
    } catch (err) {
      console.error("Error fetching weather:", err);
    }
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
