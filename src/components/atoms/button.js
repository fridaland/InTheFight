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

const PurpleInput = styled.input`
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

const Button = ({ color, text, type, onClick }) => {
  if (color === 'purple' && type === 'button') {
    return (
      <PurpleButton>{text}</PurpleButton>
    );
  } if (color === 'purple') {
    return (
      <PurpleInput onClick={onClick} value={text} type="submit" />
    );
  }
  return <WhiteButton onClick={onClick} value={text} type="submit" />;
};

Button.defaultProps = {
  color: '',
  type: '',
  onClick: () => {},
};

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
