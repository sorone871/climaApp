
const CardPrincipal = ({title, value, unit}) =>{
     
    return(
        <div className="bg-[#25253F] w-[24%] h-[100%] rounded-[10px] flex flex-col justify-center items-center">
            <h3 className="text-sm text-gray-300">{title}</h3>
            <p>
                {value}{unit}
            </p>
           
        </div>
    )
}

export default CardPrincipal;