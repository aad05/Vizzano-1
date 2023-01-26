import React, { useState } from "react";
import { Wrapper } from "./style";
import { DatePicker } from "antd";
import { Title } from "../Styles";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";

const DataPicker = ({ prefixTime, dateChange }) => {
  const selectedDate = new Date(+prefixTime);
  const settingDate = new Date();
  const dateNow = new Date(
    `${settingDate.getFullYear()}/${
      settingDate.getMonth() + 1
    }/${settingDate.getDate()}`
  );
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
      new Date(selectedDate.setDate(selectedDate.getDate() + 1)).getTime()
    );
  };

  const dayMinus = () => {
    dateChange(
      new Date(selectedDate.setDate(selectedDate.getDate() - 1)).getTime()
    );
  };
  const pickerChangeHandler = (date) => {
    dateChange(new Date(date.$d).getTime());
  };

  return (
    <Wrapper>
      {+process.env.REACT_APP_START_DATE < selectedDate.getTime() ? (
        <Wrapper.Title>
          <CaretLeftOutlined onClick={dayMinus} />
        </Wrapper.Title>
      ) : (
        ""
      )}
      <Title onClick={() => setShowDate(false)}>
        {showDate ? (
          dateFormatter(selectedDate.getTime())
        ) : (
          <DatePicker
            open={!showDate}
            onSelect={pickerChangeHandler}
            onOpenChange={() => setShowDate(true)}
            disabledDate={(e) => {
              const antDate = new Date(e.$d);
              const customAntdDate = new Date(
                `${antDate.getFullYear()}/${
                  antDate.getMonth() + 1
                }/${antDate.getDate()}`
              );
              if (
                customAntdDate.getTime() >=
                  +process.env.REACT_APP_ANT_DISABLED_START_DATE &&
                customAntdDate.getTime() <= dateNow.getTime()
              ) {
                return false;
              }
              return true;
            }}
          />
        )}
      </Title>
      {dateNow.getTime() > selectedDate.getTime() ? (
        <Wrapper.Title>
          <CaretRightOutlined onClick={dayPlus} />
        </Wrapper.Title>
      ) : (
        ""
      )}
    </Wrapper>
  );
};

export default DataPicker;
