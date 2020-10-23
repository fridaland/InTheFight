import React from "react"
import styled from "styled-components"
import FooterText from "../molecules/footerText";

import IconsPanel from "../molecules/iconsPanel";

const FooterStyle = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  min-height: 140px;
  background-color: #FAF5EB;
  color: #2C358F;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Copyright = styled.h4`
  margin: 0;
  margin-top: auto;
  @media(max-width: 360px){
    margin: 10px 0 0;
    text-align: center;
    width: 100%;
  }
`

const SocalMedia = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap-reverse;
`

const Footer = () => (
  <FooterStyle>
  <FooterText/>
  <SocalMedia>
    <Copyright> &#169;2020</Copyright>
    <IconsPanel/>
  </SocalMedia>
  </FooterStyle>
)
export default Footer
