import styled from "styled-components";

export const Wrapper = styled.div``;

Wrapper.NavbarWrapper = styled.div`
  width: 100%;
  height: 70px;
  background-color: #fff;
`;

Wrapper.Container = styled.div`
  width: 80%;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
Wrapper.Logo = styled.img`
  width: 102px;
  cursor: pointer;
`;
Wrapper.Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  background-color: #f56901;
  color: #fff;
  border-radius: 50%;
  cursor: pointer;
`;
Wrapper.MenuItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
Wrapper.MenuItemText = styled.div`
  margin-left: 8px;
  color: ${({ danger }) => (danger ? "red" : "#000")};
`;
