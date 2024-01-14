import NavBar from "./NavBar";
import Logo from "./Logo";
import Buscador from "./Buscador";
import Usuario from "./Usuario";
import Compras from "./Compras";

const Header = () => {
    return (
        <div className="container-fluid my-4">
            <div className="row ">
                <div className="col-md-1 m-auto">
                    <Logo tamano={120} />
                </div>
                <div className="col-md-6 d-flex justify-content-end">
                    <NavBar type={"nav"} />
                </div>
                <div className="col-md-auto justify-content-end">
                    <Buscador />
                </div>
                <div className="col-md-auto d-flex justify-content-end">
                    <div className="d-flex">
                        <Usuario />
                        <Compras />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Header;