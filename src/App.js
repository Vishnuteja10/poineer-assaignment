import logo from "./logo.svg";
import Style from "./App.module.css";
import SideNavBar from "./components/SideNavbar/SideNavBar";
import Home from "./components/Home/Home";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

function App() {
  const [displayMenu, setDisplayMenu] = useState(true);
  const sideNav = {
    position: "absolute",
    "z-index": "99",
  };
  const isMobile = useMediaQuery({
    query: "(max-width: 600px)",
  });
  return (
    <div className={Style.main}>
      <div style={isMobile ? sideNav : {}}>
        <SideNavBar setDisplayMenu={setDisplayMenu} displayMenu={displayMenu} />
      </div>
      <div>
        <Home setDisplayMenu={setDisplayMenu} displayMenu={displayMenu} />
      </div>
    </div>
  );
}

export default App;
