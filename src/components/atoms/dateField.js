import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import calendar from '../../images/icons/calendar.png';

const DateContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const CalendarIcon = styled.img`
  height: 25px;
  width: 25px;
  margin: 7px 10px 0 0;
  `;

const DateField = ({ date }) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const formattedDate = new Date(date).toLocaleDateString('en-US', options);

  return (
    <DateContainer>
      <CalendarIcon src={calendar} alt="Calendar" />
      <p data-testid="date-field">
        {formattedDate}
      </p>
    </DateContainer>
  );
};

DateField.propTypes = {
  date: PropTypes.string.isRequired,
};

export default DateField;
