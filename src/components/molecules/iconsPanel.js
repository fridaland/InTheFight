import React from 'react'
import styled from "styled-components";

import ClickableIcon from "../atoms/ClickableIcon"

import Mail from "../../images/logos/mail.png"
import Medium from "../../images/logos/medium.png"
import Twitter from "../../images/logos/twitter.png"
import Facebook from "../../images/logos/facebook.png"
import Instagram from "../../images/logos/instagram.png"

const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  align-self: flex-end;
  a{
  margin: 0 15px;
  }
  @media(max-width: 360px){
    width: 100%;
    align-self: center;
  }
`

function IconsPanel() {
  return (
    <Icons>
      <ClickableIcon img={Instagram}  alt="Instagram" href="https://www.instagram.com/inthefightnbk/"/>
      <ClickableIcon img={Twitter}  alt='Twitter'   href="https://twitter.com/inthefightnbk" />
      <ClickableIcon img={Medium}   alt='Medium'  href="https://medium.com/@inthefightnbk" />
      <ClickableIcon img={Facebook}   alt='Facebook'  href="https://www.facebook.com/groups/inthefightnbk" />
      <ClickableIcon img={Mail}     alt='Mail'    href="mailto:info@inthefight.org" blank={false}/>
    </Icons>
  )
}

export default IconsPanel
