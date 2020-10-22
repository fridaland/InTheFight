import React from "react"
import PropTypes from "prop-types"

const Title = ({text}) => (
  <div class="headline" data-testid="hero-title">{text}</div>  
)

Title.propTypes = {
  text: PropTypes.string,
}

export default Title
