import React from 'react';
import PropTypes from 'prop-types';

const Description = ({ className, text }) => (
  <p className={className} data-testid="description">
    {text}
  </p>
);

Description.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
};

Description.defaultProps = {
  className: '',
};

export default Description;
