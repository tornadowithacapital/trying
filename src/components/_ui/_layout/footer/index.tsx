import React from "react";
import Container from "../container";

const Footer = () => {
  return (
    <footer>
      <Container className="flex py-16 items-center justify-between">
        <div className="text-3xl font-extrabold italic"></div>
        <div className="flex gap-4 text-xs font-extralight"></div>
      </Container>
    </footer>
  );
};

export default Footer;
