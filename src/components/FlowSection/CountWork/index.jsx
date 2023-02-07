import React, { useState } from "react";
import { Wrapper } from "./style";
import { Title } from "../../Generic/Styles";
import DatePicker from "../../Generic/DatePicker";
import { useNavigate, useParams } from "react-router-dom";
import Table from "./Table";
import { Button } from "antd";
import { useEffect } from "react";
import axios from "axios";
import TableLoading from "../../Generic/TableLoading";

const CountWork = () => {
  const navigate = useNavigate();
  const { prefixTime, idFlow } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [prefixTimeState, setPrefixTimeState] = useState(
    new Date(+prefixTime).getTime()
  );
  const dateChangeHandler = (prefixTime) => {
    setPrefixTimeState(+prefixTime);
  };
  useEffect(() => {
    setLoading(true);
    axios({
      url: `${process.env.REACT_APP_BASE_URL}/merchants`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: {
        createDate: +prefixTime,
        flowType: idFlow,
      },
    }).then((res) => {
      setLoading(false);
      if (res.data.data[0]) setData(res.data.data[0]);
      else setData(res.data.data);
    });
  }, [prefixTime]);

  return (
    <Wrapper>
      <Title>Count Work</Title>
      <DatePicker prefixTime={prefixTimeState} dateChange={dateChangeHandler} />
      {loading ? <TableLoading count={15} /> : <Table data={data} />}
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
