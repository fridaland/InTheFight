import React from "react"
import PropTypes from "prop-types"

const DateField = ({date}) => (
  <p>{date}</p>
)

DateField.propTypes = {
  text: PropTypes.string,
}

export default DateField
