import React from "react"
import PropTypes from "prop-types"

const Title = ({text}) => (
  <h1 data-testid="hero-title">{text}</h1>
)

Title.propTypes = {
  text: PropTypes.string,
}

export default Title
