import Footer from "./components/Footer"
import Header from "./components/Header"
import Inicio from "./components/Inicio";
import NewIn from "./components/NewIn";
import PreFooter from "./components/PreFooter"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Remeras from "./components/Remeras";
import Buzos from "./components/Buzos";
import Outlet from "./components/Outlet";
import "./main.css";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Inicio/>}/> 
          <Route path="/newin" element={<NewIn/>}/> 
          <Route path="/remeras" element={<Remeras/>}/> 
          <Route path="/buzos" element={<Buzos/>}/> 
          <Route path="/outlet" element={<Outlet/>}/> 
        </Routes>
        <hr />
        <PreFooter />
        <Footer />
      </BrowserRouter>
    </>
  )
}


export default App
