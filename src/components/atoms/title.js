import React from "react"
import PropTypes from "prop-types"

const Title = ({className, text}) => (
  <h1 className={className} data-testid="hero-title">{text}</h1>
)

Title.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
}

export default Title
