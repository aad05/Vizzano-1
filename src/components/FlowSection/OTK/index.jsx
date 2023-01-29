import React, { useState } from "react";
import { Wrapper } from "./style";
import { Title } from "../../Generic/Styles";
import DatePicker from "../../Generic/DatePicker";
import { useParams } from "react-router-dom";
import Table from "./Table";
import { Button } from "antd";

const OTK = () => {
  const { prefixTime } = useParams();
  const [prefixTimeState, setPrefixTimeState] = useState(
    new Date(+prefixTime).getTime()
  );
  const dateChangeHandler = (prefixTime) => {
    setPrefixTimeState(+prefixTime);
  };

  return (
    <Wrapper>
      <Title>OTK</Title>
      <DatePicker prefixTime={prefixTimeState} dateChange={dateChangeHandler} />
      <Table />
      <Button style={{ margin: "50px 0" }} type="primary">
        + Add product
      </Button>
    </Wrapper>
  );
};

export default OTK;
