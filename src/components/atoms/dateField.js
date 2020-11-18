import React from 'react';
import PropTypes from 'prop-types';

const DateField = ({ date }) => {
  
  const options = { 
    weekday: 'long',
     year: 'numeric',
     month: 'long',
     day: 'numeric',
  };
  const formatted_date = new Date(date).toLocaleDateString('en-US', options)

  return (
    <p data-testid="date-field">
      {formatted_date}
    </p>
  )
};

DateField.propTypes = {
  date: PropTypes.string.isRequired,
};

export default DateField;
