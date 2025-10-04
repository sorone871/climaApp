import { useState } from 'react'
import Header from './Componentes/Header/Header'
import Buscador from './Componentes/Buscador/Buscador'
import ClimaActual from './Componentes/ClimaActual/ClimaActual'
import ClimaDiario from './Componentes/ClimaDiario/ClimaDiario'
import ClimaHora from './Componentes/ClimaHora/ClimaHora'
import './App.css'

function App() {
  const [weather, setWeather] = useState(null)
  const [location, setLocation] = useState({ city: '', country: '' })

  const fetchWeather = async (cityName) => {
    try {
      // 1. Obtener lat/lon con Nominatim (OpenStreetMap)
      const geoRes = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${cityName}`
      )
      const geoData = await geoRes.json()
      if (!geoData || geoData.length === 0) {
        alert('Ciudad no encontrada')
        return
      }

      const lat = geoData[0].lat
      const lon = geoData[0].lon
      const displayName = geoData[0].display_name

      // Extraer ciudad y país con mejor parsing
      const parts = displayName.split(',').map(s => s.trim())
      const cityNameParsed = parts[0]
      const countryNameParsed = parts[parts.length - 1]
      setLocation({ city: cityNameParsed, country: countryNameParsed })

      // 2. Obtener clima de Open-Meteo
      const meteoRes = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}` +
          `&current_weather=true` +
          `&hourly=apparent_temperature,relative_humidity_2m,precipitation` +
          `&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weathercode` +
          `&timezone=auto`
      )
      const data = await meteoRes.json()

      console.log("Datos recibidos de Open-Meteo:", data)

      setWeather(data)
    } catch (err) {
      console.error('Error fetching weather:', err)
    }
  }

  return (
    <main className="w-auto h-[100vh]">
      <Header />
      <Buscador onSearch={fetchWeather} />

      <div className="grid grid-cols-3 md:grid-cols-3 grid-rows-3 md:grid-rows-3 gap-2 md:gap-4 m-4 h-[72%]">
        <ClimaActual weather={weather} location={location} />
        <ClimaDiario daily={weather?.daily} />
        <ClimaHora />
      </div>
    </main>
  )
}

export default App
