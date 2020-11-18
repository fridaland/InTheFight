import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PurpleButton = styled.button`
  background: #2C358F;
  border: none;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  color: #FFFFFF;
  height: 50px;
  width: 200px;
`;

const WhiteButton = styled.input`
  background: #faf5eb;
  color: #2c358f;
  padding: 15px 40px 15px 40px;
  font-weight: bold;
  margin-top: 20px;
  width: 310px;
`;

const Button = ({ color, text }) => {
  if (color === 'purple') {
    return (
      <PurpleButton>
        {text}
      </PurpleButton>
    );
  }
  return <WhiteButton value={text} type="submit" />;
};

Button.defaultProps = {
  color: '',
};

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default Button;
