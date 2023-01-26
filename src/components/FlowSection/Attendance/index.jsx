import React, { useEffect, useState } from "react";
import { Wrapper } from "./style";
import { Title } from "../../Generic/Styles";
import DatePicker from "../../Generic/DatePicker";
import { useNavigate, useParams } from "react-router-dom";
import Table from "./Table";
import axios from "axios";
import { Button } from "antd";

const Attendance = () => {
  const navigate = useNavigate();
  const { prefixTime, idFlow } = useParams();
  const [prefixTimeState, setPrefixTimeState] = useState(
    new Date(+prefixTime).getTime()
  );
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

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
        flowType: idFlow,
        createDate: prefixTimeState,
      },
    }).then((res) => {
      setLoading(false);
      setData(res.data.data[0]);
    });
  }, []);

  return (
    <Wrapper>
      <Title>Attendance</Title>
      <DatePicker prefixTime={prefixTimeState} dateChange={dateChangeHandler} />
      <Button type="primary">+ Add worker</Button>
      {loading ? "Loading..." : <Table data={data} />}
      <Button
        style={{ margin: "50px 0" }}
        onClick={() =>
          navigate(`/flow/${idFlow}/count-work/${prefixTimeState}`)
        }
      >
        Go to Count Work
      </Button>
    </Wrapper>
  );
};

export default Attendance;
