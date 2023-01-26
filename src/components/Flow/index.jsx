import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../Generic/Card";
import { Wrapper } from "./style";
import otk from "../../assets/images/OTK.svg";
import attandance from "../../assets/images/attandance.jpg";
import countWork from "../../assets/images/countWork.jpg";

const Flow = () => {
  const { idFlow } = useParams();
  const navigate = useNavigate();
  const date = new Date();

  return (
    <Wrapper>
      <Wrapper.Title>Flow № {idFlow}</Wrapper.Title>
      <Wrapper.CardContainer>
        <Card
          onClick={() =>
            navigate(`/flow/${idFlow}/attedance/${date.getTime()}`)
          }
          isHome={true}
          title="Attendances"
          img={attandance}
        />
        <Card
          isHome={true}
          onClick={() =>
            navigate(`/flow/${idFlow}/count-work/${date.getTime()}`)
          }
          title="Count Work"
          img={otk}
        />
      </Wrapper.CardContainer>
      <Wrapper.CardContainer>
        <Card
          isHome={true}
          onClick={() => navigate(`/flow/${idFlow}/otk/${date.getTime()}`)}
          title="OTK"
          img={countWork}
        />
      </Wrapper.CardContainer>
    </Wrapper>
  );
};

export default Flow;
