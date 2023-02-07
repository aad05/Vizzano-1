import React, { useEffect, useState } from "react";
import { Wrapper } from "./style";
import { Title } from "../../Generic/Styles";
import DatePicker from "../../Generic/DatePicker";
import { useParams } from "react-router-dom";
import Table from "./Table";
import { Button } from "antd";
import axios from "axios";
import TableLoading from "../../Generic/TableLoading";

const OTK = () => {
  const { prefixTime, idFlow } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [prefixTimeState, setPrefixTimeState] = useState(
    new Date(+prefixTime).getTime()
  );
  const dateChangeHandler = (prefixTime) => {
    setPrefixTimeState(+prefixTime);
  };

  useEffect(() => {
    setLoading(true);
    axios({
      url: `${process.env.REACT_APP_BASE_URL}/otks`,
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

  const customStateUpdateHandler = (shoudUpdateData) => {
    setData({
      ...data,
      data: data.data.map((value) =>
        value._id === shoudUpdateData._id ? shoudUpdateData : value
      ),
    });
  };

  return (
    <Wrapper>
      <Title>OTK</Title>
      <DatePicker prefixTime={prefixTimeState} dateChange={dateChangeHandler} />
      {loading ? (
        <TableLoading count={10} />
      ) : (
        <Table
          customStateUpdateHandler={customStateUpdateHandler}
          createDate={prefixTimeState}
          data={data}
        />
      )}
      <Button style={{ margin: "50px 0" }} type="primary">
        + Add product
      </Button>
    </Wrapper>
  );
};

export default OTK;
