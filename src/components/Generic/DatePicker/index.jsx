import { useState } from "react";
import { useParams } from "react-router-dom";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
import { DatePicker } from "antd";
import { Wrapper, iconStyle } from "./style";
import { DateFormatChanger } from "../../../utils/dateFormaterr";

const DatePickerComponent = () => {
  const [showPicker, setShowPicker] = useState(false);
  const { prefixTime } = useParams();
  const formatedDate = DateFormatChanger(prefixTime);
  return (
    <Wrapper>
      <CaretLeftOutlined style={iconStyle} />
      {showPicker ? (
        <DatePicker
          open
          onChange={() => {
            setShowPicker(false);
          }}
        />
      ) : (
        <Wrapper.Title onClick={() => setShowPicker(true)}>
          {`${formatedDate.day}/${formatedDate.month}/${formatedDate.year}`}
        </Wrapper.Title>
      )}
      <CaretRightOutlined style={iconStyle} />
    </Wrapper>
  );
};

export default DatePickerComponent;
