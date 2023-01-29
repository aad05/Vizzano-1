import React from "react";
import { TableWrapper } from "../Styles";
import { OrderedListOutlined } from "@ant-design/icons";
import { Button, Checkbox, Skeleton } from "antd";

const TableLoading = ({ count }) => {
  return (
    <TableWrapper>
      <TableWrapper.Table>
        <TableWrapper.Thead>
          <TableWrapper.Tr>
            <TableWrapper.Th>
              <OrderedListOutlined />
            </TableWrapper.Th>
            <TableWrapper.Th>
              <Checkbox disabled />
            </TableWrapper.Th>
            <TableWrapper.Th>Full Name</TableWrapper.Th>
            <TableWrapper.Th isEnd={true}>Actions</TableWrapper.Th>
          </TableWrapper.Tr>
        </TableWrapper.Thead>
        <TableWrapper.Tbody>
          {Array.from({ length: count }).map((value, index) => (
            <TableWrapper.Tr key={index}>
              <TableWrapper.Td>{index + 1}</TableWrapper.Td>
              <TableWrapper.Td>
                <Checkbox disabled />
              </TableWrapper.Td>
              <TableWrapper.Td>
                <Skeleton.Input active={true} size={"large"} />
              </TableWrapper.Td>
              <TableWrapper.Td>
                <Button danger disabled>
                  Delete
                </Button>
              </TableWrapper.Td>
            </TableWrapper.Tr>
          ))}
        </TableWrapper.Tbody>
      </TableWrapper.Table>
    </TableWrapper>
  );
};

export default TableLoading;
