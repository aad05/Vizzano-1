import React from "react";
import { Wrapper } from "./style";
import logo from "../../assets/icons/navbarLogo.png";

const Navbar = () => {
  return (
    <Wrapper>
      <Wrapper.Container>
        <Wrapper.Logo loading="lazy" src={logo} />
        <Wrapper.Avatar>A</Wrapper.Avatar>
      </Wrapper.Container>
    </Wrapper>
  );
};

export default Navbar;
