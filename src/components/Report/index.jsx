import React from "react";
import { Wrapper } from "./style";
import { Title } from "../Generic/Styles";
import DatePicker from "../Generic/DatePicker";
import { useState } from "react";

const Report = () => {
  const [date, setDate] = useState(new Date().getTime());

  const dateChangeHandler = (prefixTime) => {
    setDate(prefixTime);
  };

  return (
    <Wrapper>
      <Title>Reports</Title>
      <DatePicker prefixTime={date} dateChange={dateChangeHandler} />
    </Wrapper>
  );
};

export default Report;
