import React from "react";
import { OrderedListOutlined } from "@ant-design/icons";
import { TableWrapper } from "../../../Generic/Styles";
import { Button } from "antd";

const Table = () => {
  const data = [
    {
      fake: 0,
      productName: "Krutka",
      things: 0,
      _id: 0,
    },
    {
      fake: 100,
      productName: "Palto",
      things: 5000,
      _id: 1,
    },
    {
      fake: 0,
      productName: "Shim",
      things: 50,
      _id: 2,
    },
    {
      fake: 5,
      productName: "Kepka",
      things: 100,
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
            <TableWrapper.Th>Products</TableWrapper.Th>
            <TableWrapper.Th success>Things</TableWrapper.Th>
            <TableWrapper.Th danger>Fake</TableWrapper.Th>
            <TableWrapper.Th isEnd={true}>Actions</TableWrapper.Th>
          </TableWrapper.Tr>
        </TableWrapper.Thead>
        <TableWrapper.Tbody>
          {data?.map((value, index) => (
            <TableWrapper.Tr key={value._id}>
              <TableWrapper.Td>{index + 1}</TableWrapper.Td>
              <TableWrapper.Td>{value.productName}</TableWrapper.Td>
              <TableWrapper.Td success>{value.things}</TableWrapper.Td>
              <TableWrapper.Td danger>{value.fake}</TableWrapper.Td>
              <TableWrapper.Td>
                <Button danger>Delete</Button>
              </TableWrapper.Td>
            </TableWrapper.Tr>
          ))}
        </TableWrapper.Tbody>
      </TableWrapper.Table>
    </TableWrapper>
  );
};

export default Table;
