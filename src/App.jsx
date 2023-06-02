import React from "react";
import Navbar from "./Components/header-top";
import NavbarMain from "./Components/header-main";
import Home from "./Components/Home";
import Search from "./Components/Search";
import Support from "./Components/Support";
import Info from "./Components/Info";
import Lounge from "./Components/Lounge";
import Travelers from "./Components/Travelers";
import Subscribe from "./Components/Subscribe";
import Footer from "./Components/Footer";


const App = () => {
  return (
    <div> 
      <Navbar />
      <NavbarMain />
      <Home />
      {/* <Search />
      <Support />
      <Info />
      <Lounge />
      <Travelers />
      <Subscribe />
      <Footer /> */}
    </div>
  )
}

export default App;