import React, { useState } from 'react';
import PropTypes from 'prop-types';
import addToMailchimp from 'gatsby-plugin-mailchimp';

import styled from 'styled-components';

const Container = styled.div`
  height: 460px;
  background: #2c358f;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-left: 150px;
  padding-right: 150px;
`;

const Title = styled.h2`
  font-family: 'Gelo';
  font-size: 32px;
  text-align: center;
  color: #faf5eb;
`;

const Label = styled.label`
  font-family: 'Gelo';
  font-size: 25px;
  text-align: center;
  color: #faf5eb;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 15px;
  margin-left: 5px;
  margin-top: 10px;
`;

const Button = styled.input`
  background: #faf5eb;
  color: #2c358f;
  padding: 15px 40px 15px 40px;
  font-weight: bold;
  margin-top: 20px;
`;

const FirstFooterSection = ({ title }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [postSubmitMessage, setPostSubmitMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const listFields = { fullName: name };

    event.target.reset();
    addToMailchimp(email, { listFields })
      .then((data) => {
      // The message returned when a user is already subscribed includes
      // html and an action. Currently there is only desire to display
      // that a user is already subscribed
        if (data.msg.includes('already subscribed')) {
          let msg = data.msg.replace(/<(.|\n)*?>/g, '');
          msg = msg.replace('Click here to update your profile', '');
          setPostSubmitMessage(msg);
        } else {
          setPostSubmitMessage(data.msg);
        }
        setName('');
        setEmail('');
      });
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <Container>
      <Title>
        {title}
      </Title>
      <Form onSubmit={handleSubmit}>
        <Label>
          Name:
          <Input type="text" name="name" onChange={handleNameChange} />
        </Label>
        <Label>
          Email:
          <Input type="text" name="email" onChange={handleEmailChange} />
        </Label>
        <Button type="submit" value="Submit" />
      </Form>
      {postSubmitMessage ? <Label>{postSubmitMessage}</Label> : null}
    </Container>
  );
};

FirstFooterSection.propTypes = {
  title: PropTypes.string.isRequired,
};

export default FirstFooterSection;
