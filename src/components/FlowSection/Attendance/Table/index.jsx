import React from "react";
import { TableWrapper } from "./style";
import { OrderedListOutlined } from "@ant-design/icons";
import { Button, Checkbox } from "antd";

const Table = ({ data }) => {
  return (
    <TableWrapper>
      <TableWrapper.Table>
        <TableWrapper.Thead>
          <TableWrapper.Tr>
            <TableWrapper.Th>
              <OrderedListOutlined />
            </TableWrapper.Th>
            <TableWrapper.Th>
              <Checkbox checked={data.isAllCome} />
            </TableWrapper.Th>
            <TableWrapper.Th>Full Name</TableWrapper.Th>
            <TableWrapper.Th isEnd={true}>Actions</TableWrapper.Th>
          </TableWrapper.Tr>
        </TableWrapper.Thead>
        <TableWrapper.Tbody>
          {data?.data?.map((value, index) => (
            <TableWrapper.Tr key={value._id}>
              <TableWrapper.Td>{index + 1}</TableWrapper.Td>
              <TableWrapper.Td>
                <Checkbox checked={value.isCome} />
              </TableWrapper.Td>
              <TableWrapper.Td>{value.fullName}</TableWrapper.Td>
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
