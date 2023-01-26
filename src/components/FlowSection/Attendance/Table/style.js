import styled from "styled-components";

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
`;
TableWrapper.Th = styled.th`
  padding: 10px;
  ${({ isEnd }) => !isEnd && `border-right: 1px solid rgb(240, 240, 240)`}
`;
