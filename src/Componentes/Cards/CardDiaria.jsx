const CardDiaria = ({ day, icon, max, min }) =>{
    return(
        <div className="bg-[#25253F] w-[13%] h-[100%] rounded-[10px] flex flex-col justify-center items-center">
            <div>

            <h3>{day}</h3>
            </div>
            {/* Icono */}
            <div className="w-[80px] h-[70px]  flex items-center justify-center">
            
                <img src={icon} alt="Clima" className="w-full h-full object-contain" />
            {/* Aquí puedes mapear `weathercode` a íconos personalizados si quieres */}
          </div>
            <div className="flex justify-between gap-[2rem]">
                <p>{max}°</p>
                <p>{min}°</p>
            </div>
           
        </div>
    )
}

export default CardDiaria;