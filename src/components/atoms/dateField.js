import React from 'react';
import PropTypes from 'prop-types';

const DateField = ({ date }) => <p data-testid="date-field">{date}</p>;

DateField.propTypes = {
  date: PropTypes.string.isRequired,
};

export default DateField;
