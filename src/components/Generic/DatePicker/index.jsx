import React, { useState } from "react";
import { Wrapper } from "./style";
import { DatePicker } from "antd";
import { Title } from "../Styles";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";

const DataPicker = ({ prefixTime, dateChange }) => {
  const currentDate = new Date(+prefixTime);
  const [showDate, setShowDate] = useState(true);

  const dateFormatter = (prefixTime) => {
    return new Date(prefixTime).toLocaleDateString(`ru-RU`, {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
  };

  const dayPlus = () => {
    dateChange(
      new Date(currentDate.setDate(currentDate.getDate() + 1)).getTime()
    );
  };
  const dayMinus = () => {
    dateChange(
      new Date(currentDate.setDate(currentDate.getDate() - 1)).getTime()
    );
  };
  const pickerChangeHandler = (date) => {
    dateChange(new Date(date.$d).getTime());
  };

  return (
    <Wrapper>
      <Wrapper.Title>
        <CaretLeftOutlined onClick={dayMinus} />
      </Wrapper.Title>
      <Title onClick={() => setShowDate(false)}>
        {showDate ? (
          dateFormatter(currentDate.getTime())
        ) : (
          <DatePicker
            open={!showDate}
            onSelect={pickerChangeHandler}
            onOpenChange={() => setShowDate(true)}
            disabledDate={(e) => {
              console.log(e.$d);
              const antDate = new Date(e.$d);
            }}
          />
        )}
      </Title>
      <Wrapper.Title>
        <CaretRightOutlined onClick={dayPlus} />
      </Wrapper.Title>
    </Wrapper>
  );
};

export default DataPicker;
