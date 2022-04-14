import { Routes, Route } from 'react-router-dom';
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import { STAFFS } from "../shared/staffs";


function Main() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
      <Home />
      <Footer />
    </>
  )
}

export default Main