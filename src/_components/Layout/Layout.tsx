import React, { useState, useEffect } from "react";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import MainContext from "../../_helpers/contexts/mainContext";
import baner from "../../_assets/baner.png";
import { ProgressDots } from "../ProgressDots/ProgressDots";

interface LayoutInterface {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutInterface> = ({ children }) => {
  const [theme, setTheme] = useState<string>("default");
  const [sizeTheme, setSizeTheme] = useState<number>(100);
  const [step, setStep] = useState<string>("");
  const [ifManagerGlobal, setManagerGlobal] = useState<boolean>(false);
  const [saveCurrentStep, setSaveCurrentStep] = useState<any>();

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);
  useEffect(() => {
    //@ts-ignore
    document.body.style.zoom = sizeTheme + "%";
  }, [sizeTheme]);

  return (
    <MainContext.Provider
      value={{
        theme,
        setTheme,
        sizeTheme,
        setSizeTheme,
        step,
        setStep,
        ifManagerGlobal,
        setManagerGlobal,
      }}
    >
      <Navbar />
      <div className="main">
        <div className="col-12">
          <div
            className="mainHeader"
            style={{ backgroundImage: `url(${baner})` }}
          ></div>
        </div>
        <div className="container-fluid">
          <div className="row layout">
            <div id="anchor"></div>
            <div className="col-12 col-xl-8 left">{children}</div>
            <div className="col-12 col-xl-4 attachments">
              <ProgressDots />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </MainContext.Provider>
  );
};

export { Layout };
