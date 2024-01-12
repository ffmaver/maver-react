import FooterContacto from "./FooterContacto";
import FooterRedes from "./FooterRedes";
import Logo from "./Logo";
import NavBar from "./NavBar";

const PreFooter = () => {
  return (
    <div className="container-fluid my-5">
      <div className="row">
        <div className="col py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-2">
                <Logo tamano={100} /> 
              </div>
              <div className="col">
                    <NavBar type={"nav flex-column"}/>
              </div>
              <div className="col">
                <FooterContacto/>
              </div>
              <div className="col">
                <FooterRedes/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PreFooter;