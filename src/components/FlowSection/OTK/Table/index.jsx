import React from "react";
import { OrderedListOutlined } from "@ant-design/icons";
import { TableWrapper } from "../../../Generic/Styles";
import { Button } from "antd";
import { useState } from "react";
import TextInput from "./TextInput";
import { setSelectedData } from "../../../../redux/otkSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";

const Table = ({ data, createDate, customStateUpdateHandler }) => {
  const { idFlow } = useParams();
  const dispatch = useDispatch();
  const { selectedData } = useSelector((state) => state.otk);
  const [doubleClickType, setDoubleClickType] = useState("");
  const [showUpdateInput, setShowUpdateInput] = useState(false);

  const dobleClickHandler = ({ value, type }) => {
    setShowUpdateInput(true);
    setDoubleClickType(type);
    dispatch(setSelectedData(value));
  };
  const cancelHandler = () => {
    setShowUpdateInput(false);
    setDoubleClickType("");
    dispatch(setSelectedData({}));
  };

  const saveHandler = () => {
    customStateUpdateHandler(selectedData);
    cancelHandler();
    axios({
      url: `${process.env.REACT_APP_BASE_URL}/otk/update`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: {
        createDate,
        flowType: idFlow,
        shoudUpdateData: {
          ...selectedData,
        },
        _id: data._id,
      },
    }).then((res) => {
      console.log(res);
    });
  };

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
          {data?.data?.map((value, index) => (
            <TableWrapper.Tr key={value._id}>
              <TableWrapper.Td>{index + 1}</TableWrapper.Td>
              <TableWrapper.Td
                onDoubleClick={() =>
                  dobleClickHandler({ value, type: "productName" })
                }
              >
                {showUpdateInput ? (
                  <TextInput
                    cancelHandler={cancelHandler}
                    saveHandler={saveHandler}
                  />
                ) : (
                  value.productName
                )}
              </TableWrapper.Td>
              <TableWrapper.Td
                success
                onDoubleClick={() =>
                  dobleClickHandler({ value, type: "things" })
                }
              >
                {value.things}
              </TableWrapper.Td>
              <TableWrapper.Td
                danger
                onDoubleClick={() => dobleClickHandler({ value, type: "fake" })}
              >
                {value.fake}
              </TableWrapper.Td>
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
