import React from 'react';
import { useParams } from 'react-router-dom';
import { Wrapper } from './style';
import Card from '../../components/Generic/Card';
import shtuk from '../../assets/images/shtuk.jpg';
import attendance from '../../assets/images/attendance.jpg';
import otk from '../../assets/images/OTK.svg';
function Flow() {
  const { idFlow } = useParams();
  return (
    <Wrapper>
      <Wrapper.Title>Patok № {idFlow}</Wrapper.Title>
      <Wrapper.CardContainer>
        <Card title={'attendance'} img={attendance} />
        <Card title={'pieces work'} img={shtuk} />
      </Wrapper.CardContainer>
      <Wrapper.CardContainer>
        <Card title={'OTK'} img={otk} />
      </Wrapper.CardContainer>
    </Wrapper>
  );
}

export default Flow;
