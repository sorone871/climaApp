import CardPrincipal from "../Cards/CardPrincipal";
const ClimaActual = ({weather, city}) =>{

   if (!weather) {
    return (
        <section className="w-full h-full  md:col-span-2 md:row-span-2  rounded-md pb-[5rem] ">
        <div className="w-[100%] h-[80%] bg-[url(../public/images/bg-today-large.svg)] bg-cover bg-no-repeat bg-center mb-3
            flex justify-center items-center gap-[70%] py-[2rem]            
            rounded-[23px]
             text-white">
                <div className="flex flex-col">
                    <h2>Ciudad</h2>
                    <p>Fecha</p>
                </div>
                <div>
                    <div>
                        <img src="" alt="Imagen" />
                    </div>
                    <strong >°C</strong>
                   
                </div>

            </div>
                {/* CARDS */}
                <div className="w-[100%] h-[20vh]  flex justify-between flex-1 text-white  rounded-[23px]">
                    
                    <CardPrincipal />
                    <CardPrincipal />
                    <CardPrincipal />
                    <CardPrincipal />
                </div>
        </section>
    );
    } // Evita error si aún no hay datos

    // Ejemplo para formatear la fecha
    const date = new Date(weather.current.dt * 1000).toLocaleDateString("es-MX", {
        weekday: "long",
        day: "numeric",
        month: "long",
    });
    


    
    return(
        <section className="w-full h-full  md:col-span-2 md:row-span-2  rounded-md pb-[5rem] ">
            
             {/* Ciudad y fecha */}
            <div className="w-[100%] h-[80%] bg-[url(../public/images/bg-today-large.svg)] bg-cover bg-no-repeat bg-center mb-3
            flex justify-center items-center gap-[70%] py-[2rem]            
            rounded-[23px]
             text-white">
                <div className="flex flex-col">
                    <h2>{city}</h2>
                    <p>{date}</p>
                </div>
                <div>
                    <div>
                        <img src={`https://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`} alt={weather.current.weather[0].description} />
                    </div>
                    <strong className="text-4xl">{Math.round(weather.current.temp)}°C</strong>
                   
                </div>
            </div>
            {/* CARDS */}
            <div className="w-[100%] h-[20vh]  flex justify-between flex-1 text-white  rounded-[23px]">
                
                <CardPrincipal />
                <CardPrincipal />
                <CardPrincipal />
                <CardPrincipal />
            </div>

        </section>
    )
}

export default ClimaActual;