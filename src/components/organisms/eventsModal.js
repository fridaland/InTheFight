import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Modal from 'react-modal';

import Button from '../atoms/button';
import Title from '../atoms/title';
import DateField from '../atoms/dateField';
import Location from '../atoms/location';

const Form = styled.form`
  color: '#2C358F';
  display: flex;
  flex-direction: column;
  font-size: 30px;
  margin: 40px 0px 0px 95px;

  & div {
    width: 180px;
  }
`;

const Input = styled.input`
  font-size: large;
  height: 27px;
  margin-left: 20px;
  width: 400px;
`;

const Label = styled.label`
  display: flex;
  margin: 10px 0 10px 0;
`;

const DateLocation = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  margin-left: 112px;
`;

const EventInfoContainer = styled.div`
  text-align: center;
`;

const ButtonContainer = styled.div`
  margin-top: inherit;

  & input {
    margin-left: 110px;
    width: 500px !important;
  }
`;

const ModalDescription = styled.div`
  margin: 20px 50px 0 50px;
`;

const VirtualText = styled.p`
  font-weight: bold;
  margin: 10px;
`;

const VirtualContainer = styled.div`
  display: flex;
  justify-content: center;

  & span {
    &:first-child {
      padding-top: 2px;
    }

    &:last-child {
      padding-top: 4px;
    }
  }
`

const EventsModal = ({ isOpen, onRequestClose, title, description, date, location, virtual }) => {
  const styles = {
    content: {
      height: '700px',
      width: '900px',
      margin: 'auto auto',
      background: '#FAF5EB',
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={styles}
    >
      <EventInfoContainer>
        <Title text={title} color="blue" />
        {virtual ? (
          <VirtualContainer>
            <span aria-label="computer-emoji" role="img">
              👩🏻‍💻
            </span>
            <VirtualText>virtual event</VirtualText>
            <span aria-label="computer-emoji" role="img">
              👨🏽‍💻
            </span>
          </VirtualContainer>
        ) : null}
        <DateLocation>
          <DateField date={date} />
          <Location location={location} virtual={virtual} />
        </DateLocation>
        <ModalDescription>
          {description}
        </ModalDescription>
      </EventInfoContainer>

      <Form>
        <Label>
          <div>First Name</div>
          <Input type="text" name="name" onChange="" />
        </Label>
        <Label>
          <div>Last Name</div>
          <Input type="text" name="name" onChange="" />
        </Label>
        <Label>
          <div>Email</div>
          <Input type="text" name="email" onChange="" />
        </Label>
        <Label>
          <div>Zip Code</div>
          <Input type="text" name="email" onChange="" />
        </Label>
        <ButtonContainer>
          <Button text="Sign up now" color="purple" />
        </ButtonContainer>
      </Form>
    </Modal>
  );
};

EventsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  virtual: PropTypes.bool.isRequired,
};

export default EventsModal;
