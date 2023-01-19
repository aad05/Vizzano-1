import React from "react";
import { Wrapper } from "./style";

const Card = ({ title, img, onClick, isHome }) => {
  return (
    <Wrapper isHome={isHome} onClick={onClick}>
      <Wrapper.Title>{title}</Wrapper.Title>
      <Wrapper.Img isHome={isHome} src={img} />
    </Wrapper>
  );
};

export default Card;
