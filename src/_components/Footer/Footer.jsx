import CookieConsent from "react-cookie-consent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faRss,
  faUndo,
  faQuestionCircle,
  faChartBar,
  faCalendarPlus,
} from "@fortawesome/free-solid-svg-icons";
import './Footer.css';

const Footer = () => {
  return (
    <>
      <CookieConsent
        location="bottom"
        buttonText="Akceptuję"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        Ta strona używa ciasteczek, by zwiększyć satysfakcję z dostarczanej
        usługi.{" "}
        <span style={{ fontSize: "10px" }}>Akceptuj, by kontynuować.</span>
      </CookieConsent>
      <footer className="footerPrimary">
        <footer className="footer">
          <div id="info">
            <div className="container">
              <div className="row">
                <div className="col-12 col-xl-4">
                  <h3 className="widgettitle">
                    Informacja Urzędu:{" "}
                    <a href="tel:+48717777777">tel. +48 71 777 77 77</a>
                  </h3>
                  <div className="textwidget">
                    <p>
                      Główni redaktorzy Biuletynu
                      <br />
                      Monika Florczak
                      <br />
                      Marta Kolibska
                      <br />
                      e-mail:{" "}
                      <a href="mailto:bip@um.wroc.pl" role="link">
                        bip@um.wroc.pl
                      </a>
                      <br />
                      <br />
                      <a href="https://bip.um.wroc.pl/contents/content/18/12">
                        Zespół redakcyjny BIP{" "}
                      </a>{" "}
                    </p>
                  </div>
                </div>
                <div className="col-12 col-xl-4">
                  <h3 className="widgettitle">Adres redakcji Biuletynu</h3>{" "}
                  <div className="textwidget">
                    <p>
                      Urząd Miejski Wrocławia <br />
                      pl. Nowy Targ 1-8,
                      <br />
                      50-141 Wrocław
                      <br />
                      pokój 041
                      <br /> <br />
                      <a href="http://cui.wroclaw.pl/">
                        Obsługa informatyczna UMW: <b>CUI</b>
                      </a>
                      <br />
                      <a href="https://bip.um.wroc.pl/kontakt/formularz">
                        Formularz kontaktowy
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-12 col-xl-4">
                  <ul id="menu-stopka" className="menu">
                    <li>
                      <a
                        target=""
                        rel="noopener noreferrer"
                        href="https://bip.um.wroc.pl/daneosobowe"
                        role="link"
                      >
                        <FontAwesomeIcon icon={faUserCircle} className="icon" />
                        Ochrona danych osobowych
                      </a>
                    </li>
                    <li>
                      <a
                        target=""
                        rel="noopener noreferrer"
                        href="https://bip.um.wroc.pl/rss"
                        role="link"
                      >
                        <FontAwesomeIcon icon={faRss} className="icon" />
                        RSS
                      </a>
                    </li>
                    <li>
                      <a
                        target=""
                        rel="noopener noreferrer"
                        href="https://bip.um.wroc.pl/contents/content/7/1"
                        role="link"
                      >
                        <FontAwesomeIcon icon={faUndo} className="icon" />
                        Ponowne wykorzystanie
                      </a>
                    </li>
                    <li>
                      <a
                        target=""
                        rel="noopener noreferrer"
                        href="https://bip.um.wroc.pl/contents/content/7/2"
                        role="link"
                      >
                        <FontAwesomeIcon
                          icon={faQuestionCircle}
                          className="icon"
                        />
                        Udostępnianie informacji publicznej
                      </a>
                    </li>
                    <li>
                      <a
                        target=""
                        rel="noopener noreferrer"
                        href="https://bip.um.wroc.pl/statystyki"
                        role="link"
                      >
                        <FontAwesomeIcon icon={faChartBar} className="icon" />
                        Statystyki oglądalności BIP
                      </a>
                    </li>
                    <li>
                      <a
                        target=""
                        rel="noopener noreferrer"
                        href="https://bip.um.wroc.pl/ostatnio-opublikowane/10"
                        role="link"
                      >
                        <FontAwesomeIcon
                          icon={faCalendarPlus}
                          className="icon"
                        />
                        Ostatnio opublikowane
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div id="socket">
            <div className="container d-flex justify-content-between">
              <span className="float-right">
                © Copyright - Urząd Miejski Wrocławia
              </span>
              <span className="float-right mr-3">
                Realizacja -{" "}
                <a href="http://www.profeko.pl/" id="author">
                  Profeko
                </a>
              </span>
            </div>
          </div>
        </footer>
      </footer>
    </>
  );
};

export { Footer };
