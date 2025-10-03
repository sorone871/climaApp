import CardPrincipal from "../Cards/CardPrincipal";
import ClimaIconos from "../ClimaIconos/ClimaIconos";


   


const ClimaActual = ({ weather, location }) => {
    const { city, country } = location
  if (!weather || !weather.current_weather) {
    return (
      <section className="w-full h-full md:col-span-2 md:row-span-2 rounded-md pb-[5rem]">
        <div className="w-full h-[80%] bg-[url(../public/images/bg-today-large.svg)] bg-cover bg-no-repeat bg-center mb-3 items-center flex justify-between py-[2rem] px-[4rem] rounded-[23px] text-white">
          <div className="flex flex-col">
            <h2>{city || "Ingresa una ciudad"}</h2>
            <p>{"Fecha no disponible"}</p>
          </div>
          <div className="flex">
            <div className="w-[120px] h-[120px]">
              <img src="./images/icon-sunny.webp" alt="Imagen" className="w-full h-full" />
            </div>
            <div className="flex justify-center items-center">
              <strong className="text-[4rem]">°C</strong>
            </div>
          </div>
        </div>

        <div className="w-full h-[20vh] flex justify-between text-white rounded-[23px]">
          <CardPrincipal title="Feels Like" value="--" unit="°" />
          <CardPrincipal title="Humidity" value="--" unit="%" />
          <CardPrincipal title="Wind" value="--" unit="km/h" />
          <CardPrincipal title="Precipitation" value="--" unit="mm" />
        </div>
      </section>
    );
  }

  const current = weather.current_weather;
  const temp = Math.round(current.temperature);
  const wind = Math.round(current.windspeed);
  const date = new Date(current.time).toLocaleDateString("es-MX", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

   const currentTime = weather.current_weather.time // ejemplo: "2025-10-02T14:00"
    const index = weather.hourly.time.indexOf(currentTime) // buscamos índice de la hora actual

    const feelsLike = index !== -1 ? Math.round(weather.hourly.apparent_temperature[index]) : '--'
    const humidity = index !== -1 ? Math.round(weather.hourly.relative_humidity_2m[index]) : '--'
    const precipitation = index !== -1 ? weather.hourly.precipitation[index] : '--'
  const iconPath  = ClimaIconos[current.weathercode]

  return (
    <section className="w-full h-full md:col-span-2 md:row-span-2 rounded-md pb-[5rem]">
      {/* Ciudad y fecha */}
      <div className="w-full h-[80%] bg-[url(../public/images/bg-today-large.svg)] bg-cover bg-no-repeat bg-center mb-3 items-center flex justify-between py-[2rem] px-[4rem] rounded-[23px] text-white">
        <div className="flex flex-col">
          <h2 className="text-[3rem]"><strong>{city}, {country}</strong></h2>
          <p>{date}</p>
        </div>

        <div className="flex">
          <div className="w-[128px] h-[128px]  flex items-center justify-center">
            
                <img src={iconPath} alt="Clima" className="w-full h-full object-contain" />
            {/* Aquí puedes mapear `weathercode` a íconos personalizados si quieres */}
          </div>
          <div className="flex justify-center items-center">
            <strong className="text-[4rem]">{temp}°C</strong>
          </div>
        </div>
      </div>

      {/* CARDS */}
      <div className="w-full h-[20vh] flex justify-between text-white rounded-[23px]">
        <CardPrincipal title="Feels Like" value={feelsLike} unit="°" />
        <CardPrincipal title="Humidity" value={humidity} unit="%" />
        <CardPrincipal title="Wind" value={wind} unit="km/h" />
        <CardPrincipal title="Precipitation" value={precipitation} unit="mm" />
      </div>
    </section>
  );
};

export default ClimaActual;
