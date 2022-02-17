import { HeaderComponent, Nav, NavMobile } from "./styleHeader ";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

import { useState } from "react";

export const Header = ({ scroll }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <HeaderComponent scroll={scroll}>
      <div className="container ">
        <a className="logo animate__animated animate__fadeIn" href="#Home">
          PORTFÓLIO
        </a>

        <Nav
          id="nav"
          showMenu={showMenu}
          className="animate__animated animate__fadeIn"
        >
          <ul>
            <li className="nav-item">
              <a aria-current="Page" href="#Home" onClick={toggleMenu}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#Sobre" onClick={toggleMenu}>
                Sobre
              </a>
            </li>
            <li className="nav-item">
              <a href="#Projetos" onClick={toggleMenu}>
                Portfólio
              </a>
            </li>
            <li className="nav-item">
              <a href="#Contato" onClick={toggleMenu}>
                Contato
              </a>
            </li>
          </ul>
        </Nav>

        <button onClick={() => toggleMenu()}>
          {showMenu ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </button>
      </div>
    </HeaderComponent>
  );
};
