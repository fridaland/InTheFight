import React from "react"
import PropTypes from "prop-types"

const Description = ({text}) => (
  <p data-testid="description">{text}</p>
)

Description.propTypes = {
  text: PropTypes.string,
}

export default Description
