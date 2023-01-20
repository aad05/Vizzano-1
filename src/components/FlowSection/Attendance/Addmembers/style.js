import { Input } from 'antd';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
`;
Wrapper.InputWrapper = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 10px;
`;

Wrapper.Form = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  grid-gap: 30px;
`;
Wrapper.Input = styled(Input)`
  flex: 4;
`;
Wrapper.InputText = styled.div`
  flex: 1;
  text-align: right;
`;
