import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BlueTitle = styled.h1`
  font-weight: bold;
  font-size: 48px;
  color: #2C358F;
  margin: 0 20px 0 60px;
`;

const Title = ({ color, text }) => {
  if (color === 'blue') {
    return (
      <BlueTitle data-testid="hero-title">
        {text}
      </BlueTitle>
    );
  }
  return (
    <h1 data-testid="hero-title">
      {text}
    </h1>
  );
};

Title.defaultProps = {
  color: '',
};

Title.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default Title;
