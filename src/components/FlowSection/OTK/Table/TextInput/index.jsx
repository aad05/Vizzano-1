import { Button, Input } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedData } from "../../../../../redux/otkSlice";
import { Wrapper } from "./style";

const TextInput = ({ cancelHandler, saveHandler }) => {
  const { selectedData } = useSelector((state) => state.otk);
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    dispatch(
      setSelectedData({
        ...selectedData,
        productName: e.target.value,
      })
    );
  };

  return (
    <Wrapper>
      <Input value={selectedData.productName} onChange={changeHandler} />
      <Wrapper.ButtonWrapper>
        <Button type="primary" onClick={saveHandler}>
          Save
        </Button>
        <Button danger onClick={cancelHandler}>
          Cancel
        </Button>
      </Wrapper.ButtonWrapper>
    </Wrapper>
  );
};

export default TextInput;
