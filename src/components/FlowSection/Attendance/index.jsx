import React, { useState } from "react";
import { Wrapper } from "./style";
import { Title } from "../../Generic/Styles";
import DatePicker from "../../Generic/DatePicker";
import { useParams } from "react-router-dom";
import { Button } from "antd";

const Attendance = () => {
  const { prefixTime } = useParams();
  const [prefixTimeState, setPrefixTimeState] = useState(
    new Date(+prefixTime).getTime()
  );
  const dateChangeHandler = (prefixTime) => {
    setPrefixTimeState(+prefixTime);
  };

  //

  return (
    <Wrapper>
      <Button type="primary">+ Add members</Button>
      <Title>Attendance</Title>
      <DatePicker prefixTime={prefixTimeState} dateChange={dateChangeHandler} />
    </Wrapper>
  );
};

export default Attendance;
