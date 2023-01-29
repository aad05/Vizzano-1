import React, { useState } from "react";
import { Wrapper } from "./style";
import { Title } from "../../Generic/Styles";
import DatePicker from "../../Generic/DatePicker";
import { useNavigate, useParams } from "react-router-dom";
import Table from "./Table";
import { Button } from "antd";

const CountWork = () => {
  const navigate = useNavigate();
  const { prefixTime, idFlow } = useParams();
  const [prefixTimeState, setPrefixTimeState] = useState(
    new Date(+prefixTime).getTime()
  );
  const dateChangeHandler = (prefixTime) => {
    setPrefixTimeState(+prefixTime);
  };

  return (
    <Wrapper>
      <Title>Count Work</Title>
      <DatePicker prefixTime={prefixTimeState} dateChange={dateChangeHandler} />
      <Table />
      <Button
        style={{ margin: "50px 0" }}
        onClick={() =>
          navigate(`/flow/${idFlow}/attendance/${prefixTimeState}`)
        }
      >
        Go to Attendance
      </Button>
    </Wrapper>
  );
};

export default CountWork;
