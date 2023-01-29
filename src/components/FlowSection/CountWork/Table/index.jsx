import React from "react";
import { OrderedListOutlined } from "@ant-design/icons";
import { TableWrapper } from "../../../Generic/Styles";

const Table = () => {
  const data = [
    {
      fake: 0,
      fullName: "Asadbek Abduovoitov",
      isCome: false,
      price: 0,
      things: 0,
      _id: 0,
    },
    {
      fake: 0,
      fullName: "Muhammad Hamrayev",
      isCome: true,
      price: 0,
      things: 0,
      _id: 1,
    },
    {
      fake: 0,
      fullName: "Jamshidbek Hayitbayev",
      isCome: true,
      price: 0,
      things: 0,
      _id: 2,
    },
    {
      fake: 0,
      fullName: "Husan Bo'tayev",
      isCome: false,
      price: 0,
      things: 0,
      _id: 3,
    },
  ];

  return (
    <TableWrapper>
      <TableWrapper.Table>
        <TableWrapper.Thead>
          <TableWrapper.Tr>
            <TableWrapper.Th>
              <OrderedListOutlined />
            </TableWrapper.Th>
            <TableWrapper.Th>Full Name</TableWrapper.Th>
            <TableWrapper.Th danger>Fake</TableWrapper.Th>
            <TableWrapper.Th isEnd={true}>Total</TableWrapper.Th>
          </TableWrapper.Tr>
        </TableWrapper.Thead>
        <TableWrapper.Tbody>
          {data?.map((value, index) => (
            <TableWrapper.Tr key={value._id}>
              <TableWrapper.Td danger={!value.isCome}>
                {index + 1}
              </TableWrapper.Td>
              <TableWrapper.Td danger={!value.isCome}>
                {value.fullName}
              </TableWrapper.Td>
              <TableWrapper.Td danger>{value.fake}</TableWrapper.Td>
              <TableWrapper.Td danger={!value.isCome}>
                {value.price}
              </TableWrapper.Td>
            </TableWrapper.Tr>
          ))}
        </TableWrapper.Tbody>
      </TableWrapper.Table>
    </TableWrapper>
  );
};

export default Table;
