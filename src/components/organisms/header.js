import React from "react"
import PropTypes from "prop-types"
import Navigation from "../molecules/navigation"

const Header = () => (
  <header>
    <Navigation />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
