import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="mb-5">
      <Container>
        <Link to={"/"} className="text-3xl font-bold text-blue-700">Voucher App</Link>
        <p className="text-stone-500">TSUKUYOMI SOFTWARE</p>
      </Container>
    </header>
  );
};

export default Header;
