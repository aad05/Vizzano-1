import React, { useState } from "react";
import logo from "../../assets/icons/icon.jpg";
import ShapeSvg from "../Generic/ShapeSVG";
import { Wrapper } from "./style";
import { notification } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Login = () => {
  const [userInfo, setUserInfo] = useState({ fullName: "", password: "" });
  const [loading, setLoading] = useState(false);

  const customNotification = ({ type, message, description, placement }) => {
    notification[type]({
      message,
      description,
      placement,
    });
  };

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const onAuth = () => {
    if (!userInfo.fullName || !userInfo.password) {
      customNotification({
        type: "error",
        message: "Please fill all fields!",
        placement: "topRight",
      });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      customNotification({
        type: "success",
        message: "You've successfully loged in!",
        placement: "topRight",
      });
    }, 3000);
  };

  return (
    <Wrapper>
      <Wrapper.Container>
        <Wrapper.Left>
          <ShapeSvg
            firstColor={"#376dd2"}
            secondColor={"#39acea"}
            top="0"
            right="0"
          />
          <Wrapper.LoginGIf />
          <ShapeSvg
            firstColor={"#376dd2"}
            secondColor={"#39acea"}
            bottom="0"
            left="0"
          />
        </Wrapper.Left>
        <Wrapper.Right>
          <Wrapper.RightContainer>
            <Wrapper.Icon src={logo} />
            <Wrapper.Title>Hello again!</Wrapper.Title>
            <Wrapper.Desc>
              Every day we try to sew with the best for you 😊. Vizzano has been
              with you for over 10 years. 😎 🙃
            </Wrapper.Desc>
            <Wrapper.Input
              onChange={handleChange}
              name="fullName"
              placeholder="Name"
            />
            <Wrapper.PasswordInput
              onChange={handleChange}
              name="password"
              placeholder="Password"
            />
            <Wrapper.Button onClick={onAuth}>
              {loading ? <LoadingOutlined /> : "Login"}
            </Wrapper.Button>
          </Wrapper.RightContainer>
        </Wrapper.Right>
      </Wrapper.Container>
    </Wrapper>
  );
};

export default Login;
