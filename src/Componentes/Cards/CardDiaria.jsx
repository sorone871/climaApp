const CardDiaria = ({ day, icon, max, min }) =>{
    return(
        <div className="bg-[#25253F] w-[13%] h-[100%] rounded-[10px] flex flex-col justify-center items-center">
            <div>

            <h3>{day}</h3>
            </div>
            {/* Icono */}
            <div>
                <img
                    src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                    alt="Icono del clima"
                    className="w-[50px] h-[50px] mb-2"
                />
            </div>
            <div>
                <p>temperatura maxima</p>
                <p>temperatura minima</p>
            </div>
           
        </div>
    )
}

export default CardDiaria;