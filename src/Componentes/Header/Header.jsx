import EngraneIcon from "../Icons/Engrane";
import DropIcon from "../Icons/Drop";
const Header = () =>{
    return (
        <header className="pt-8 flex justify-between">
            <div>
                <img src="images/logo.svg" alt="Logo" />
            </div>

            <button className="bg-sky-950 text-white flex">
                <EngraneIcon />
                <p>Units</p>
                <DropIcon />
            </button>
        </header>
    )
}
export default Header;