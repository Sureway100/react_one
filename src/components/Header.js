import React from "react";
// import imageLogo from '../images/react-logo.png';

export default function Header() {
  return (
    <header className="head">
      <nav className="nav">
        {/* <img scr={imageLogo} alt="react logo" /> */}
        <img
          src={require("../images/logo-og.png")}
          alt="react logo"
          className="img"
        />
        <ul className="nav-items">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Login</li>
        </ul>
      </nav>
    </header>
  );
}
