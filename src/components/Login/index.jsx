import React, { useState } from "react";
import logo from "../../assets/icons/icon.jpg";
import ShapeSvg from "../Generic/ShapeSVG";
import { Wrapper } from "./style";
import { notification } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSignIn } from "react-auth-kit";

const Login = () => {
  const signIn = useSignIn();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({ fullName: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [playWarningAnimation, setPlayWarningAnimation] = useState(false);

  const customNotification = ({ type, message, description, placement }) => {
    notification[type]({
      message,
      description,
      placement,
    });
  };

  const handleWarningAnimation = () => {
    setPlayWarningAnimation(true);
    setTimeout(() => {
      setPlayWarningAnimation(false);
    }, 1000);
  };

  const handleChange = (e) =>
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.type === "click") onAuth();
  };

  const onAuth = () => {
    if (!userInfo.fullName || !userInfo.password) {
      handleWarningAnimation();
      customNotification({
        type: "error",
        message: "Please fill all fields!",
        placement: "topRight",
      });
      return;
    }
    setLoading(true);
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_BASE_URL}/user/login`,
      data: userInfo,
    })
      .then((res) => {
        const { token, user } = res.data.data;
        localStorage.setItem("token", token);
        signIn({
          token,
          expiresIn: 3600,
          tokenType: "Bearer",
          authState: { fullName: user.fullName },
        });
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        handleWarningAnimation();
        if (error.request.status >= 500)
          return customNotification({
            type: "error",
            message: "ERROR",
            description: "Serer is not working!",
            placement: "topRight",
          });

        customNotification({
          type: "error",
          message: "ERROR",
          description: error.response.data.extraMessage,
          placement: "topRight",
        });
        setLoading(false);
      });
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
              onKeyDown={handleKeyDown}
            />
            <Wrapper.Button
              warningAnimation={playWarningAnimation}
              onClick={handleKeyDown}
            >
              {loading ? <LoadingOutlined /> : "Login"}
            </Wrapper.Button>
          </Wrapper.RightContainer>
        </Wrapper.Right>
      </Wrapper.Container>
    </Wrapper>
  );
};

export default Login;
