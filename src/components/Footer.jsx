import React from "react";

const Footer = () => {
  return (
    <nav className="navbar navbar-dark bg-black">
      <div className="container-fluid">
        <p className="navbar-brand h1">
          {" "}
          Erik Verna - &copy; {new Date().getFullYear()}
          {""}
        </p>
      </div>
    </nav>
  );
};

export default Footer;
