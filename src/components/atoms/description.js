import React from "react"
import PropTypes from "prop-types"

const Description = ({text}) => (
  <p>{text}</p>
)

Description.propTypes = {
  text: PropTypes.string,
}

export default Description
