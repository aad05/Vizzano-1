import styled from "styled-components";
import { Title } from "../Styles";

export const Wrapper = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
`;

Wrapper.Title = styled(Title)`
  margin: 40px 0;
`;
