
import { useState } from "react";
const Buscador = ({onSearch}) =>{

    const [city,setCity] = useState("");
    const buscar = () =>{
        if(!city) return;
        onSearch(city);
    };



    return(
        <section className="flex flex-col gap-[2rem] text-white justify-center items-center">
            <div>
                <h1>How's the sky looking today?</h1>
            </div>

            <div className="flex ">
                <input 
                type="text"
                placeholder="Search for a city, e.g., New York"
                className="w-[20rem] border-2 border-gray-700 px-4 py-2 rounded-md "
                value={city}
                onChange={(e) => setCity(e.target.value)}
                />

                <button>
                    <p>Search</p>
                </button>
            </div>

        </section>
    )
}

export default Buscador;