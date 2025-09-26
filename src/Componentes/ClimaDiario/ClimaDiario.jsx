import CardDiaria from "../Cards/CardDiaria";
const ClimaDiario = () => {
    return(
        <section className=" md:col-start-1 md:row-start-3 md:col-span-2 md:row-span-1  rounded-md flex flex-col text-white pt-9 ">
            <div>
                <h2>Daily forecast</h2>
            </div>
            <div className="w-[100%] h-full flex justify-between">

            <CardDiaria />
            <CardDiaria />
            <CardDiaria />
            <CardDiaria />
            <CardDiaria />
            <CardDiaria />
            <CardDiaria />
            </div>
        </section>
    )
}

export default ClimaDiario;