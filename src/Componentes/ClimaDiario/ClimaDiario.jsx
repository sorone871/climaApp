import CardDiaria from "../Cards/CardDiaria";
const ClimaDiario = ({daily}) => {
   
    return(
        <section className=" md:col-start-1 md:row-start-3 md:col-span-2 md:row-span-1  rounded-md flex flex-col text-white pt-9 ">
            <div>
                <h2>Daily forecast</h2>
            </div>
            <div className="w-[100%] h-full flex justify-between">

           {Array.isArray(daily) ? (
            daily.slice(0, 7).map((day, index) => {
                const date = new Date(day.dt * 1000);
                const weekday = date.toLocaleDateString("en-US", { weekday: "short" });
                
                return (
                <CardDiaria
                    key={index}
                    day={weekday}
                    icon={day.weather[0].icon}
                    max={Math.round(day.temp.max)}
                    min={Math.round(day.temp.min)}
                />
                );
            })
            ) : (
            <p className="text-white">Cargando datos del clima...</p>
            )}
            </div>
        </section>
    )
}

export default ClimaDiario;