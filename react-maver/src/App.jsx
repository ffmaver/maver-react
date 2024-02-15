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
import Carousel from "./components/Carousel";
import ItemDetailContainer from "./components/ItemDetailConteiner";
import ItemListContainer from "./components/ItemListContainer";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Carousel/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer />}/>
          <Route path="/productos" element={<ItemListContainer/>} />
          <Route path="/productos/:categoria" element={<ItemListContainer/>} />
        </Routes>
        <hr />
        <PreFooter />
        <Footer />
      </BrowserRouter>
    </>
  )
}


export default App
