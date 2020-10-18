import React from "react"
import PropTypes from "prop-types"
import Navigation from "../molecules/navigation"

const NavBar = () => (
  <header>
    <Navigation />
  </header>
)

NavBar.propTypes = {
  siteTitle: PropTypes.string,
}

NavBar.defaultProps = {
  siteTitle: ``,
}

export default NavBar
