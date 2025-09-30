import CardPrincipal from "../Cards/CardPrincipal";
const ClimaActual = ({weather, city}) =>{

    const icon = weather?.weather?.[0]?.icon ?? "";
    const description = weather?.weather?.[0]?.description ?? "";
    const temp = weather?.main?.temp ?? "--";

    const feels_like = weather?.main?.feels_like ?? "--";
    const humidity = weather?.main?.humidity ?? "--";
    const wind = weather?.wind?.speed ?? "--";
   if (!weather?.main?.temp) {
    return (
        <section className="w-full h-full  md:col-span-2 md:row-span-2  rounded-md pb-[5rem] ">

        <div className="w-[100%] h-[80%] bg-[url(../public/images/bg-today-large.svg)] bg-cover bg-no-repeat bg-center mb-3
             items-center flex justify-between  py-[2rem] px-[4rem]            
            rounded-[23px]
             text-white">
                <div className="flex flex-col">
                    
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
    const date = new Date(weather.dt * 1000).toLocaleDateString("es-MX", {
    weekday: "long",
    day: "numeric",
    month: "long",
    });
    


    
    return(
        <section className="w-full h-full  md:col-span-2 md:row-span-2  rounded-md pb-[5rem] ">
            
             {/* Ciudad y fecha */}
            <div className="w-[100%] h-[80%] bg-[url(../public/images/bg-today-large.svg)] bg-cover bg-no-repeat bg-center mb-3
             items-center flex justify-between py-[2rem] px-[4rem]            
            rounded-[23px]
             text-white">
                <div className="flex flex-col">
                    <h2>{city || "Ciudad"}</h2>
                    <p>{date}</p>
                </div>

                <div>
                    <div>
                        {icon ? (
                        <img
                        className="w-[80px] h-[80px]"
                        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                        alt={description}
                        />
                    ) : (
                        <div className="w-[80px] h-[80px] bg-gray-600 rounded-full" />
                    )}

                    </div>
                    <strong className="text-4xl">{Math.round(weather.main.temp)}°C</strong>

                   
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