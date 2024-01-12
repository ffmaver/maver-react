import NavBar from "./NavBar";
import Logo from "./Logo";
import Buscador from "./Buscador";

const Header = () => {
    return (
        <div className="container-fluid my-4 ms-5">
            <div className="row">
                <div className="col-md-1">
                    <Logo tamano={120}/>
                </div>
                <div className="col-md-1 justify-content-end">
                    <Buscador/>
                </div>
                <div className="col-md-9 d-flex justify-content-end">
                    <NavBar type={"nav"}/>
                </div>
            </div>
        </div>
    )
}

export default Header;