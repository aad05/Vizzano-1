import styled from "styled-components";

export const Wrapper = styled.div`
  cursor: pointer;
  background: rgb(255, 255, 255);
  width: fit-content;
  height: fit-content;
  border-radius: 17px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: rgb(0 0 0 / 25%) 6px 6px 7px;
  padding: ${({ isHome }) => (isHome ? "10px 90px" : "10px 50px")};
  margin-bottom: 20px;
  gap: 10px;
`;
Wrapper.Title = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  color: rgb(0, 0, 0);
`;
Wrapper.Img = styled.img`
  width: ${({ isHome }) => (isHome ? "199px" : "133px")};
  height: ${({ isHome }) => (isHome ? "199px" : "133px")};
`;
