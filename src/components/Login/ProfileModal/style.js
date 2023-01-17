import { Input } from "antd";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
`;
Wrapper.Avatar = styled.div`
  width: 80px;
  height: 80px;
  background: rgb(245, 106, 0);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-transform: capitalize;
`;
Wrapper.Form = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
`;
Wrapper.InputWrapper = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 20px;
`;
Wrapper.Input = styled(Input)``;
Wrapper.InputPassword = styled(Input.Password)``;
Wrapper.InputText = styled.div``;
