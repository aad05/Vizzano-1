import React from 'react';
import { Button, Modal } from 'antd';
import { useState } from 'react';
import { Wrapper } from './style';
function Addmembers() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        +Add members
      </Button>
      <Modal
        title="Add members"
        centered
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={'Add'}
        footer={
          <Button
            style={{ display: 'flex', top: '5px' }}
            key="Add"
            type="primary"
            onClick={handleOk}
          >
            Add
          </Button>
        }
      >
        <Wrapper>
          <Wrapper.Form>
            <Wrapper.InputWrapper>
              <Wrapper.InputText>Name :</Wrapper.InputText>
              <Wrapper.Input />
            </Wrapper.InputWrapper>
            <Wrapper.InputWrapper>
              <Wrapper.InputText>LastName :</Wrapper.InputText>
              <Wrapper.Input />
            </Wrapper.InputWrapper>
          </Wrapper.Form>
        </Wrapper>
      </Modal>
    </div>
  );
}

export default Addmembers;
