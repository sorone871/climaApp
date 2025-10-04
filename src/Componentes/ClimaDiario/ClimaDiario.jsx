import CardDiaria from "../Cards/CardDiaria";
import ClimaIconos from "../ClimaIconos/ClimaIconos"; // mapa de weathercode a iconos

const ClimaDiario = ({ daily }) => {
  if (!daily || !daily.time) {
    return (
      <p className="text-white">Cargando datos del clima...</p>
    );
  }

  return (
    <section className="md:col-start-1 md:row-start-3 md:col-span-2 md:row-span-1 rounded-md flex flex-col text-white pt-9">
      <div>
        <h2>Daily forecast</h2>
      </div>
      <div className="w-[100%] h-full flex justify-between">
        {daily.time.slice(0, 7).map((dateString, index) => {
          const date = new Date(dateString);
          const weekday = date.toLocaleDateString("en-US", {
            weekday: "short",
          });

          const max = Math.round(daily.temperature_2m_max[index]);
          const min = Math.round(daily.temperature_2m_min[index]);
          const weatherCode = daily.weathercode[index];
          const icon = ClimaIconos[weatherCode]; // Mapea weathercode a tu ícono local

          return (
            <CardDiaria
              key={index}
              day={weekday}
              icon={icon}
              max={max}
              min={min}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ClimaDiario;