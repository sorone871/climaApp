import DropIcon from "../Icons/Drop";
const ClimaHora = () =>{
    
    return(
        <aside className="md:block md:col-start-3 md:row-start-1 md:col-span-1 md:row-span-3 bg-[#25253F] rounded-md p-10 h-[104%] text-white">
            <div className="flex justify-between">
                <h2>Hourly forecast</h2>
                <button className="bg-sky-950 text-white flex">
                
                <p>Units</p>
                <DropIcon />
            </button>
            </div>
        </aside>
    )
}
export default ClimaHora;
