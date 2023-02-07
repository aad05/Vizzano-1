import React, { useEffect, useState } from "react";
import { Wrapper } from "./style";
import { Title } from "../../Generic/Styles";
import DatePicker from "../../Generic/DatePicker";
import { useNavigate, useParams } from "react-router-dom";
import Table from "./Table";
import axios from "axios";
import { Button } from "antd";
import TableLoading from "../../Generic/TableLoading";

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
      if (res.data.data[0]) setData(res.data.data[0]);
      else setData(res.data.data);
    });
  }, [prefixTimeState]);
  const updateUser = (recValue) => {
    setData({
      ...data,
      data: data.data.map((value) =>
        value._id === recValue._id ? recValue : value
      ),
    });
  };
  const deleteUser = (recValue) => {
    setData({
      ...data,
      data: data.data.filter((value) => value._id !== recValue._id),
    });
  };

  return (
    <Wrapper>
      <Title>Attendance</Title>
      <DatePicker prefixTime={prefixTimeState} dateChange={dateChangeHandler} />
      <Button type="primary">+ Add worker</Button>
      {loading ? (
        <TableLoading count={15} />
      ) : (
        <Table data={data} updateUser={updateUser} deleteUser={deleteUser} />
      )}

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
