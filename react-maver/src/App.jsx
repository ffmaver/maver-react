import Carousel from "./components/Carousel"
import Footer from "./components/Footer"
import Header from "./components/Header"
import ItemListContainer from "./components/ItemListContainer";
import PreFooter from "./components/PreFooter"
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />

        {/* <Routes>
        <Route path="/" element={}/>
        <Route path="/" element={}/>
      </Routes> */}
        <Carousel />
        <ItemListContainer />

        <hr />
        <PreFooter />
        <Footer />
      </BrowserRouter>
    </>
  )
}


export default App
