import React from "react"
import PropTypes from "prop-types"

const Description = ({text}) => (
  <p class= "homepageparagraph" data-testid="description">{text}</p>
)

Description.propTypes = {
  text: PropTypes.string,
}

export default Description
