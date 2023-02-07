import React from "react";
import { OrderedListOutlined } from "@ant-design/icons";
import { Button, Checkbox, notification } from "antd";
import { TableWrapper } from "../../../Generic/Styles";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Table = ({ data, updateUser, deleteUser }) => {
  const { prefixTime, idFlow } = useParams();
  const [customIsAllCome, setCustomIsAllCome] = useState(data.isAllCome);
  const [arrivalChangeOccured, setArrivalChangeOccured] = useState(false);
  const toggleUserCome = ({ e, value }) => {
    setArrivalChangeOccured(!arrivalChangeOccured);
    updateUser({ ...value, isCome: e.target.checked });
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_BASE_URL}/merchants/update`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: {
        _id: data._id,
        createDate: +prefixTime,
        flowType: idFlow,
        shoudUpdateData: {
          ...value,
          isCome: !value.isCome,
        },
      },
    }).catch((res) => {
      notification.error({
        message: "Oops something went wrong!",
        description: "Your updates might not be saved!",
      });
    });
  };
  const deleteHandler = (value) => {
    deleteUser(value);
    axios({
      url: `${process.env.REACT_APP_BASE_URL}/merchants/delete_user`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: {
        createDate: +prefixTime,
        flowType: idFlow,
        idUsers: [value._id],
      },
    });
  };
  useEffect(() => {
    setCustomIsAllCome(data?.data?.every(({ isCome }) => isCome));
  }, [arrivalChangeOccured]);

  return (
    <TableWrapper>
      <TableWrapper.Table>
        <TableWrapper.Thead>
          <TableWrapper.Tr>
            <TableWrapper.Th>
              <OrderedListOutlined />
            </TableWrapper.Th>
            <TableWrapper.Th>
              <Checkbox checked={customIsAllCome} />
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
                <Checkbox
                  onChange={(e) => toggleUserCome({ e, value })}
                  checked={value.isCome}
                />
              </TableWrapper.Td>
              <TableWrapper.Td>{value.fullName}</TableWrapper.Td>
              <TableWrapper.Td>
                <Button danger onClick={() => deleteHandler(value)}>
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

export default Table;
