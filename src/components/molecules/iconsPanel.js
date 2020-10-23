import React from 'react'
import styled from "styled-components";

import ClickableIcon from "../atoms/ClickableIcon"

import Mail from "../../images/logos/Mail.png"
import Medium from "../../images/logos/medium.png"
import Twitter from "../../images/logos/twitter.png"
import Facebook from "../../images/logos/facebook.png"
import Instagram from "../../images/logos/instagram.png"

const Icons = styled.div`
    display: flex;
    width: 640px;
    justify-content: center;
    align-items: flex-end;
    a{
      margin: 0 15px;  
    }
`

function IconsPanel() {
    return (
        <Icons>
            <ClickableIcon img={Instagram}  alt="Instagram" href="https://www.instagram.com/inthefightnbk/"/>
            <ClickableIcon img={Twitter}    alt='Twitter'   href="https://twitter.com/inthefightnbk" />
            <ClickableIcon img={Medium}     alt='Medium'    href="https://medium.com/@inthefightnbk" />
            <ClickableIcon img={Facebook}   alt='Facebook'  href="https://www.facebook.com/groups/inthefightnbk" />
            <ClickableIcon img={Mail}       alt='Mail'      href="mailto:"/>
        </Icons>
    )
}

export default IconsPanel
