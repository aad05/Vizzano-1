import React, { useState } from "react";
import { Wrapper } from "./style";
import { Title } from "../../Generic/Styles";
import DatePicker from "../../Generic/DatePicker";
import { useParams } from "react-router-dom";

const Attendance = () => {
  const { prefixTime } = useParams();
  const [prefixTimeState, setPrefixTimeState] = useState(
    new Date(+prefixTime).getTime()
  );
  const dateChangeHandler = (prefixTime) => {
    setPrefixTimeState(+prefixTime);
  };

  return (
    <Wrapper>
      <Title>Attendance</Title>
      <DatePicker prefixTime={prefixTimeState} dateChange={dateChangeHandler} />
    </Wrapper>
  );
};

export default Attendance;
