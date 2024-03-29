import Footer from "./components/Footer"
import Header from "./components/Header"
import PreFooter from "./components/PreFooter"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./main.css";
import Carousel from "./components/Carousel";
import ItemDetailContainer from "./components/ItemDetailConteiner";
import ItemListContainer from "./components/ItemListContainer";
import { CartProvider } from "./context/CartContext";
import Carrito from "./components/Carrito";
import Contacto from "./components/Contacto";
import Checkout from "./components/Checkout";


const App = () => {


  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Carousel />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/productos/:categoria" element={<ItemListContainer />} />
            <Route path="/contacto" element={<Contacto />}/>
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/checkout" element={<Checkout />}/>

          </Routes>
          <hr />
          <PreFooter />
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
  )
}


export default App
