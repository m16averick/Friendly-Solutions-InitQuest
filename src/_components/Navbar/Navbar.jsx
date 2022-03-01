import { useContext, useEffect, useState } from "react";
import MainContext from "../../_helpers/contexts/mainContext";
import contrast from "./highcontrast.svg";
import logo from "./Herb.png";
import "./Navbar.css";
import AnimateHeight from "react-animate-height";

const Navbar = () => {
  const { theme, setTheme } = useContext(MainContext);
  const { sizeTheme, setSizeTheme } = useContext(MainContext);
  const [height, setHeight] = useState(40);

  const controlNavbar = () => {
    if (window.scrollY > 80) setHeight(40);
    else setHeight(80);
  };

  const changeTheme = () => {
    if (setTheme) {
      if (theme === "theme-contrast") {
        setTheme("default");
        localStorage.setItem("theme", "default");
      } else {
        setTheme("theme-contrast");
        localStorage.setItem("theme", "theme-contrast");
      }
    }
  };

  const step = 10;

  const zoomIn = () => {
    if (setSizeTheme && sizeTheme && sizeTheme < 150) {
      let newSizeTheme = sizeTheme + step;
      setSizeTheme(newSizeTheme);
      localStorage.setItem("sizeTheme", newSizeTheme);
    }
  };

  const zoomOut = () => {
    if (setSizeTheme && sizeTheme && sizeTheme > 80) {
      let newSizeTheme = sizeTheme - step;
      setSizeTheme(newSizeTheme);
      localStorage.setItem("sizeTheme", newSizeTheme);
    }
  };

  const resetZoom = () => {
    if (setSizeTheme) {
      setSizeTheme(100);
      localStorage.setItem("sizeTheme", 100);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("theme")) setTheme(localStorage.getItem("theme"));
    if (localStorage.getItem("sizeTheme"))
      setSizeTheme(parseInt(localStorage.getItem("sizeTheme")));
    setHeight(80);
    window.addEventListener("scroll", controlNavbar);
  }, []);

  return (
    <nav className="navbar navBar">
      <div className="col-1 d-flex justify-content-center">
        <AnimateHeight
          id="siteLogo"
          className="siteLogo"
          duration={200}
          height={height}
          style={{ backgroundImage: `url(${logo})` }}
        >
          <></>
        </AnimateHeight>
      </div>
      <div id="navHeader" className="navHeader">
        <div className="initial">e</div>-Kreator deklaracji
      </div>
      <div className="float-right wcag">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.open("https://bip.um.wroc.pl/deklaracja-dostepnosci");
          }}
        >
          <button className="wcag btn">Deklaracja dostępności</button>
        </a>
        <img
          src={contrast}
          alt="Kontrast"
          className="imgButton"
          onClick={changeTheme}
        />
        <span className="fontToLower" onClick={zoomOut}>
          A-
        </span>
        <span className="fontToNormal" onClick={resetZoom}>
          A
        </span>
        <span className="fontToUpper" onClick={zoomIn}>
          A+
        </span>
      </div>
    </nav>
  );
};

export { Navbar };
