import styled from "styled-components";

export const Title = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 34px;
  line-height: 77px;
  color: rgb(0, 0, 0);
  margin: 40px;
  text-align: center;
`;

export const TableWrapper = styled.div`
  margin: 30px 0;
`;

TableWrapper.Table = styled.table`
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
`;
TableWrapper.Thead = styled.thead``;
TableWrapper.Tbody = styled.tbody``;
TableWrapper.Tr = styled.tr`
  border-bottom: 1px solid rgb(240, 240, 240);
`;
TableWrapper.Td = styled.td`
  padding: 10px;
  border-right: 1px solid rgb(240, 240, 240);
  ${({ danger }) =>
    danger && `background-color: rgb(255,241,232); color: #DA5A39`};
  ${({ success }) => success && `background-color: #F6FFEC; color: #399E0E`};
`;
TableWrapper.Th = styled.th`
  padding: 10px;
  ${({ isEnd }) => !isEnd && `border-right: 1px solid rgb(240, 240, 240)`};
  ${({ danger }) =>
    danger && `background-color: rgb(255,241,232); color: #DA5A39`};
  ${({ success }) => success && `background-color: #F6FFEC; color: #399E0E`};
`;
