import React from "react";
import { Wrapper } from "./style";
import Card from "../Generic/Card";
import flow1 from "../../assets/images/flow1.svg";
import flow2 from "../../assets/images/flow2.svg";
import flow3 from "../../assets/images/flow3.svg";
import flow4 from "../../assets/images/flow4.svg";
import flow5 from "../../assets/images/flow5.svg";
import store from "../../assets/images/store.png";
import report from "../../assets/images/report.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const navigateHandler = (idFlow) => {
    navigate(`/flow/${idFlow}`);
  };

  return (
    <Wrapper>
      <Wrapper.Title>Flows</Wrapper.Title>
      <Wrapper.CardContainer>
        <Card
          onClick={() => navigateHandler(1)}
          title={"Flow № 1"}
          img={flow1}
        />
        <Card
          onClick={() => navigateHandler(2)}
          title={"FLow № 2"}
          img={flow2}
        />
      </Wrapper.CardContainer>
      <Wrapper.CardContainer>
        <Card
          onClick={() => navigateHandler(3)}
          title={"Flow № 3"}
          img={flow3}
        />
        <Card
          onClick={() => navigateHandler(4)}
          title={"Flow № 4"}
          img={flow4}
        />
      </Wrapper.CardContainer>
      <Wrapper.CardContainer>
        <Card
          onClick={() => navigateHandler(5)}
          title={"Flow № 5"}
          img={flow5}
        />
      </Wrapper.CardContainer>

      <Wrapper.Title>Store and Reports</Wrapper.Title>
      <Wrapper.CardContainer>
        <Card title={"Store"} img={store} />
        <Card title={"Reports"} img={report} />
      </Wrapper.CardContainer>
    </Wrapper>
  );
};

export default Home;
