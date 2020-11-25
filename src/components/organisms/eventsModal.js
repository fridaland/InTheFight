import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Modal from 'react-modal';

import Button from '../atoms/button';
import Title from '../atoms/title';
import DateField from '../atoms/dateField';
import Location from '../atoms/location';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 30px;
  color: '#2C358F';
  margin: 40px 0px 0px 20px;
`;

const Input = styled.input`
  height: 27px;
  width: 200px;
  margin-left: 20px;
  font-size: large;
`;

const Label = styled.label`
  margin: 10px 0 10px 0;
`;

const DateLocation = styled.div`
  display: grid;
  margin-left: 112px;
  grid-template-columns: auto auto auto;
`;

const EventInfoContainer = styled.div`
  text-align: center;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
`;

const ModalDescription = styled.div`
  margin: 20px 22px 0 22px;
`;

const VirtualText = styled.p`
  margin: 10px;
  font-style: bold;
`;

const EventsModal = ({ isOpen, onRequestClose, title, description, date, location, virtual }) => {
  const styles = {
    content: {
      height: '600px',
      width: '700px',
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
          <>
            <span aria-label="computer-emoji" role="img">
              👩🏻‍💻
            </span>
            <VirtualText>virtual event</VirtualText>
            <span aria-label="computer-emoji" role="img">
              👨🏽‍💻
            </span>
          </>
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
          First Name
          <Input type="text" name="name" onChange="" />
        </Label>
        <Label>
          Last Name
          <Input type="text" name="name" onChange="" />
        </Label>
        <Label>
          Email
          <Input type="text" name="email" onChange="" />
        </Label>
        <Label>
          Zip Code
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
