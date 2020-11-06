import React from 'react';
import PropTypes from 'prop-types';

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

const Text = styled.p`
  font-family: 'Gelo';
  font-size: 18px;
  text-align: center;
  color: #faf5eb;
`;

const Button = styled.button`
  background: #faf5eb;
  color: #2c358f;
  padding: 15px 40px 15px 40px;
  font-weight: bold;
`;

const FirstFooterSection = ({ title, text, buttonText, buttonAction }) => (
  <Container>
    <Title>{title}</Title>
    <Text>{text}</Text>
    <Button onClick={buttonAction}>{buttonText}</Button>
  </Container>
);

FirstFooterSection.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonAction: PropTypes.func.isRequired,
};

export default FirstFooterSection;
