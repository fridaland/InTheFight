import React, { useState } from "react"
import PropTypes from "prop-types"
import Navigation from "../molecules/navigation"
import { Header } from "../../styles/header-styles"
import blueRingImage from "../../images/logos/ring-blue.png"

const NavBar = ({ isHome }) => {
  const [hamburgerState, setHamburgerState] = useState(false)

  return (
    <Header isSubpage={!isHome} mobileMenu={hamburgerState}>
      <a className="site-identity" href="/">
        <h1>In the fight</h1>
        <img src={blueRingImage} alt="blue ring" />
      </a>
      <div className="nav-wrapper">
        <Navigation />
      </div>

      <button
        id="hamburger-menu"
        onClick={() => setHamburgerState(prevState => !prevState)}
      >
        <div></div>
        <div></div>
      </button>
    </Header>
  )
}

NavBar.propTypes = {
  siteTitle: PropTypes.string,
  isHome: PropTypes.Bool,
}

NavBar.defaultProps = {
  siteTitle: ``,
  isHome: false,
}

export default NavBar
